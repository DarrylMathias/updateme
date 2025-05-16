import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function TextHover(name) {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text={name} />
    </div>
  );
}
