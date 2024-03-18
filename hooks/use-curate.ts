import { useMutation, useQuery } from "@tanstack/react-query";
import { ArtworkKey } from "@/components/draggable";
import { queryClient } from "@/components/providers";

type Props = { address?: `0x${string}`; artworkKey: ArtworkKey };

export function useCurate({ address, artworkKey }: Props) {
  const { data: count, refetch: refetchCount } = useQuery({
    queryKey: ["get-curation", artworkKey],
    queryFn: async () => {
      return ((await (await fetch(`/api/curation/${artworkKey}`)).json()) as { count: number }).count;
    },
  });
  const { data: curated, refetch: refetchCurated } = useQuery({
    queryKey: ["get-curation-me", artworkKey, address],
    queryFn: async () => {
      return ((await (await fetch(`/api/curation/${artworkKey}/me?address=${address}`)).json()) as { curated: boolean }).curated;
    },
  });
  const { mutateAsync: curate } = useMutation({
    mutationKey: ["curate", artworkKey, address],
    mutationFn: async () => {
      const { status } = await fetch(`/api/curation/${artworkKey}?address=${address}`, { method: "PUT" });
      if (status !== 200) throw new Error("Failed to curate");
    },
    onMutate: () => {
      const previousCount = queryClient.getQueryData<number>(["get-curation", artworkKey]);
      queryClient.setQueryData(["get-curation", artworkKey], previousCount ? previousCount + 1 : 1);
      queryClient.setQueryData(["get-curation-me", artworkKey, address], true);
    },
    onSettled: () => {
      refetchCurated();
    },
  });
  const { mutateAsync: uncurate } = useMutation({
    mutationKey: ["uncurate", artworkKey, address],
    mutationFn: async () => {
      const { status } = await fetch(`/api/curation/${artworkKey}?address=${address}`, { method: "DELETE" });
      if (status !== 200) throw new Error("Failed to uncurate");
    },
    onMutate: () => {
      const prevCount = queryClient.getQueryData<number>(["get-curation", artworkKey]);
      queryClient.setQueryData(["get-curation", artworkKey], prevCount ? prevCount - 1 : 0);
      queryClient.setQueryData(["get-curation-me", artworkKey, address], false);
    },
    onSettled: () => {
      refetchCurated();
    },
  });
  return { count, curated, curate, uncurate };
}
