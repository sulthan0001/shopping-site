import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import Pagination from "./Pagination";
import BlogCard from "./BlogCard";
import postsData from "./Data/Posts.json";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(postsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsPerPage = 6;

  useEffect(() => {
    let results = postsData;

    if (selectedCategory !== "All") {
      results = results.filter(
        (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      results = results.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(results);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="md:col-span-2 space-y-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Blog Posts</h2>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-1 w-1/3 focus:ring focus:ring-gray-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {displayedPosts.length > 0 ? (
            displayedPosts.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <p className="text-gray-500 italic">No posts found.</p>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          totalPosts={filteredPosts.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Sidebar */}
      <Sidebar
        onCategorySelect={(cat) => setSelectedCategory(cat)}
        selectedCategory={selectedCategory}
      />
    </section>
  );
};

export default BlogPage;
