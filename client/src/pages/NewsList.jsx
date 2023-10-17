import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";
import SkeletonNewsItem from "../components/_skeletons/NewsItem";
import { useLocation, useParams } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const NewsList = () => {
  const [NEWS, setNEWS] = useState([]);
  const [loading, setLoading] = useState(false);

  const { category } = useParams();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  useEffect(() => {
    setLoading(true);
    console.log(`${BACKEND_URL}/news/${category}`)

    axios
      .get(
        `${BACKEND_URL}/news/${category}?page=${currentPage}&limit=${limit}`
      )
      .then((res) => res.data)
      .then((data) => {
        setNEWS(data.news);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        alert("Some Error Occured");
        setLoading(true);
      });
  }, [currentPage, limit, location.pathname]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="px-4 py-6">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto max-w-5xl px-4 py-6">
        {loading && (
          <>
            <SkeletonNewsItem />
            <SkeletonNewsItem />
            <SkeletonNewsItem />
          </>
        )}
        {!loading &&
          NEWS.map(({ imgLink, title, category, date, id }) => (
            <NewsItem key={id} {...{ imgLink, title, category, date, id }} />
          ))}
      </div>
      <div className="flex justify-center font-bold text-lg space-x-4">
        {currentPage > 1 && (
          <button
            disabled={currentPage === 1}
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            className="px-2 py-1 shadow-md border-b-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            disabled={currentPage == totalPages}
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            className="px-2 py-1 shadow-md border-b-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsList;
