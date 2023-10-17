import React from "react";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NewsList from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/:category" element={<NewsList />} />
          <Route path="/:category/:id" element={<NewsPage />} />
        </Route>
      </Routes>
    </>
  );
}
