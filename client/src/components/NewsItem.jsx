import { IconCalendarTime } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import formatDate from "../utilities/formatDate";

export default function NewsItem({ id, imgLink, title, category, date }) {
  const navigate = useNavigate()
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${category}/${id}`);
        }}
        className="bg-white hover:shadow-md hover:shadow-gray-400 overflow-hidden border-b-4 hover:border-blue-600 cursor-pointer border-blue-400 w-full"
      >
        <img
          loading="lazy"
          src={imgLink}
          alt={title}
          className="w-full object-cover h-32 sm:h-48 md:h-64"
        />
        <div className="p-4 md:p-6">
          <p className="text-blue-500 capitalize font-bold text-base mb-1 leading-none">
            {category}
          </p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            {title}
          </h3>
          <div className="text-sm flex gap-2 items-center">
            <IconCalendarTime />
            <p className="leading-none font-semibold text-sm">
              {formatDate(date)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
