import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <div className="text-sm text-gray-500 mb-1">
        {post.author} — {post.date}
      </div>
      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm">{post.excerpt}</p>
      {post.category && (
        <span className="text-xs text-gray-400 uppercase">{post.category}</span>
      )}
    </div>
  );
};

export default BlogCard;
