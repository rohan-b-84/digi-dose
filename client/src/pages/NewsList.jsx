import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";
import SkeletonNewsItem from "../components/_skeletons/NewsItem";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const NewsList = () => {
  const [NEWS, setNEWS] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 9,
  });

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 9;

  const { category } = useParams();
  const location = useLocation();

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${BACKEND_URL}/news/${category}?page=${currentPage}&limit=${limit}`)
      .then((res) => res.data)
      .then((data) => {
        setNEWS(data.news);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        alert("Some Error Occured");
        setLoading(true);
      });
  }, [currentPage, location.pathname]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams(
        (prev) => {
          prev.set("page", newPage);
          return prev;
        },
        { replace: true }
      );
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
