import React, { useEffect, useState } from "react";
import formatDate from "../utilities/formatDate";
import { IconCalendarTime, IconCategory } from "@tabler/icons-react";
import SkeletonNewsPage from "../components/_skeletons/NewsPage";
import { useParams } from "react-router-dom";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function NewsPage() {
  const { category, id } = useParams();
  const [DATA, setDATA] = useState({
    title: "",
    imgLink: "",
    date: "",
    content: "",
    link: "",
    id,
    category,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log(`${BACKEND_URL}/news/${category}/${id}`)
    axios
      .get(`${BACKEND_URL}/news/${category}/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setDATA(data.news);
        setLoading(false);
      })
      .catch((err) => {
        alert("Some Error Occured");
        setLoading(true);
      });
  }, [id]);
  return (
    <>
      {loading ? (
        <SkeletonNewsPage />
      ) : (
        <>
          <div className="container max-w-3xl mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              {DATA.title}
            </h2>
            <img
              className="w-full block mb-4"
              src={DATA.imgLink}
              alt={DATA.title}
            />
            <div className="flex justify-between mb-8">
              <div className="text-sm flex capitalize text-blue-400 font-bold gap-2 items-center">
                <IconCategory />
                <p className="leading-none font-semibold text-sm">
                  {DATA.category}
                </p>
              </div>
              <div className="text-sm flex text-blue-400 font-bold gap-2 items-center">
                <IconCalendarTime />
                <p className="leading-none font-semibold text-sm">
                  {formatDate(DATA.date)}
                </p>
              </div>
            </div>

            <p className="line-clamp-6">{DATA.content}</p>
            <a
              target="_blank"
              href={DATA.link}
              className="border-2 font-bold px-3 py-2 w-full block text-center bg-blue-400 text-white rounded-md mt-4"
            >
              Read Full Article
            </a>
          </div>
        </>
      )}
    </>
  );
}
