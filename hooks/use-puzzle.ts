"use client";

import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { PuzzleKey } from "@/components/draggable";
import { DroppableArea } from "@/components/droppable";

type PuzzleState = Record<PuzzleKey, DroppableArea>;

const initialData: PuzzleState = {
  creators: "inventory",
  decentralized: "inventory",
  community: "inventory",
  visualize: "inventory",
  red: "inventory",
  blue: "inventory",
};

const localStorageKey = "puzzle-state";

function getPuzzleState(): PuzzleState {
  const item = localStorage.getItem(localStorageKey);
  return item ? JSON.parse(item) : initialData;
}

export function usePuzzleState() {
  const { data: puzzle, refetch } = useQuery({ queryKey: ["get-puzzle-state"], queryFn: getPuzzleState, initialData });

  const setPuzzleState = useCallback(
    (key: PuzzleKey, area: DroppableArea) => {
      localStorage.setItem(localStorageKey, JSON.stringify({ ...puzzle, [key]: area }));
      refetch();
    },
    [puzzle]
  );

  return { puzzle, setPuzzleState };
}
