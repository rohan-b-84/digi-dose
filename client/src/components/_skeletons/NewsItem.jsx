import { IconCalendarTime, IconPhoto } from "@tabler/icons-react";
import React from "react";

export default function SkeletonNewsItem() {
  return (
    <div className="animate-pulse">
      <div className="w-full object-cover h-32 sm:h-48 md:h-64 text-gray-400 grid place-items-center bg-gray-300">
        <IconPhoto size={50} />
      </div>
      <div className="p-4 md:p-6">
        <div className="mb-1 h-4 w-32 bg-gray-300"></div>
        <div className="mb-2 h-8 bg-gray-300"></div>
        <div className="mb-2 h-8 bg-gray-300"></div>
        <div className="text-sm text-gray-300 flex gap-2 items-center">
          <IconCalendarTime />
          <p className="h-4 w-32 bg-gray-300"></p>
        </div>
      </div>
    </div>
  );
}
