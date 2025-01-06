import { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Ancient trees whispered secrets through rustling leaves.",
      fileSize: ".9mb",
      close: true,
      id: 1,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Fleeting whispers danced across the twilight sky.",
      fileSize: ".4mb",
      close: false,
      id: 1,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Echoing waves carried dreams across endless horizons.",
      fileSize: ".76mb",
      close: true,
      id: 1,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  // useState()

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={item.id} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
