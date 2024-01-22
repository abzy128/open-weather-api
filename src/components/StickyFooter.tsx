"use client";
import * as React from "react";

export default function StickyFooter() {
  return (
    <div
      style={{ position: "absolute", bottom: 0, width: "100%" }}
      className="bg-gray-100"
    >
      <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6 text-center">
        Abzal Orazbek IT-2204
      </div>
    </div>
  );
}
