"use client";

import { css } from "@/styled-system/css";
import { ConnectKitButton } from "connectkit";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import React, { useId, useState } from "react";
import { DndContext, UniqueIdentifier } from "@dnd-kit/core";
import { Draggable } from "@/components/draggable";
import { Droppable } from "@/components/droppable";
import { Monitor } from "@/components/monitor";
import Image from "next/image";

// before connect
// minted wallet list
// after connect
// filled - mint, minting, minted

// modal, tooltip,

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const dndCtxId = useId();

  const [isDragging, setIsDragging] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const item = (
    <Draggable id="1">
      <Image
        src="/moduler-believer.png"
        alt="sticker-moduler-believer.png"
        width="100"
        height="100"
        className={css({
          transition: ".2s cubic-bezier(0.175,0.885,0.32,1.1)",
          _hover: { transform: "scale(1.075)", cursor: "pointer" },
        })}
      />
    </Draggable>
  );

  const droppableId = "droppable";

  console.log(parent);

  return (
    <>
      <ConnectKitButton />

      <DndContext
        id={dndCtxId}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={({ over }) => {
          setParent(over ? over.id : null);
          setIsDragging(false);
        }}
        onDragCancel={() => setIsDragging(false)}
      >
        {parent === null ? item : null}
        <Droppable id={droppableId} dragging={isDragging}>
          <div className={css({ width: "200px", height: "200px", border: "1px solid" })}>{parent === droppableId ? item : null}</div>
        </Droppable>
        <Monitor />
      </DndContext>
    </>
  );
}

export default App;
