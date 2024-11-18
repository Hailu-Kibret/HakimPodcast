import React from "react";
import HeroPage from "./Blogs/Hero";
import BlogList from "./Blogs/BlogsList";
import RecentBlogs from "./Blogs/recentBlogs";
import FooterPage from "../components/Footer/Footer";

const BlogsPage = () => {
  return (
    <>
      <div>
        <HeroPage />
        <section className="container mx-auto px-6 py-10">
          <BlogList />

          <aside className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
            <RecentBlogs />
          </aside>
        </section>
      </div>

      <FooterPage />
    </>
  );
};

export default BlogsPage;
