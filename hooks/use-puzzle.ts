"use client";

import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { PuzzleKey } from "@/components/draggable";
import { DroppableArea } from "@/components/droppable";

type PuzzleState = Record<PuzzleKey, DroppableArea>;

const initialData: PuzzleState = {
  blue: "inventory",
  community: "inventory",
  cred: "inventory",
  express: "inventory",
  identity: "inventory",
  red: "inventory",
  theboard: "inventory",
};

const localStorageKey = "puzzle-state-v2";

function getPuzzleState(): PuzzleState {
  const item = localStorage.getItem(localStorageKey);
  return item ? JSON.parse(item) : initialData;
}

export function usePuzzleState() {
  const { data: puzzle, refetch } = useQuery({ queryKey: ["get-" + localStorageKey], queryFn: getPuzzleState, initialData });

  const setPuzzleState = useCallback(
    (key: PuzzleKey, area: DroppableArea) => {
      localStorage.setItem(localStorageKey, JSON.stringify({ ...puzzle, [key]: area }));
      refetch();
    },
    [puzzle]
  );

  return { puzzle, setPuzzleState };
}
