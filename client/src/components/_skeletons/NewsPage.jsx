import { IconCalendarTime, IconCategory, IconPhoto } from "@tabler/icons-react";
import React from "react";

export default function SkeletonNewsPage() {
  return (
    <div className="animate-pulse">
      <div className="container max-w-3xl mx-auto px-4 py-6">
        <div className="h-10 bg-gray-300 mb-1"></div>
        <div className="h-10 w-4/5 mx-auto bg-gray-300 mb-4"></div>

        <div className="aspect-video bg-gray-300 text-gray-400 justify-center items-center flex mb-4">
          <IconPhoto size={50} />
        </div>
        <div className="flex justify-between mb-8">
          <div className="text-sm flex text-gray-300 font-bold gap-2 items-center">
            <IconCategory />
            <div className="h-5 bg-gray-300 w-32 text-sm"></div>
          </div>
          <div className="text-sm flex text-gray-300 font-bold gap-2 items-center">
            <IconCalendarTime />
            <div className="h-5 bg-gray-300 w-32 text-sm"></div>
          </div>
        </div>
        <div className="h-5 bg-gray-300 mb-1 text-sm"></div>
        <div className="h-5 bg-gray-300 mb-1 text-sm"></div>
        <div className="h-5 bg-gray-300 mb-1 text-sm"></div>
        <div className="h-5 bg-gray-300 mb-1 text-sm"></div>
        <div className="h-5 bg-gray-300 mb-1 text-sm"></div>
        <div className="h-5 bg-gray-300 mb-1 w-4/5 text-sm"></div>

      </div>
    </div>
  );
}
