import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { blogPosts } from "../constants";

// Import highlight.js CSS
import "highlight.js/styles/github-dark.css";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-secondary mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/#blog")}
            className="bg-tertiary hover:bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-primary pt-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/#blog")}
          className="bg-tertiary hover:bg-black-200 text-white px-4 py-2 rounded-lg flex items-center gap-2 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </motion.button>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.25 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 text-secondary text-sm mb-4">
            <span className="bg-primary/80 px-3 py-1 rounded-full text-white">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User size={14} />
              {post.author}
            </span>
          </div>

          <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-secondary text-lg leading-relaxed border-l-4 border-primary pl-6 italic">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="prose prose-invert prose-lg max-w-none mb-12"
        >
          <div className="markdown-content text-secondary leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-white font-bold text-2xl mt-8 mb-4 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-white font-bold text-xl mt-6 mb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-white font-semibold text-lg mt-5 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-secondary mb-4 leading-relaxed text-base">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-white/90 italic">{children}</em>
                ),
                code: ({ className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  ) : (
                    <code
                      className="bg-black-200 text-primary px-2 py-1 rounded text-sm"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-black-200 p-4 rounded-lg overflow-x-auto my-6 border border-white/10">
                    {children}
                  </pre>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-secondary space-y-2 my-4 ml-4">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-secondary space-y-2 my-4 ml-4">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-secondary">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-white/90 bg-tertiary/30 p-4 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.4, duration: 1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-black-200 hover:bg-primary px-3 py-1 rounded-full text-sm text-white flex items-center gap-1 transition-colors cursor-default"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.6, duration: 1 }}
          className="border-t border-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => navigate("/#blog")}
              className="bg-tertiary hover:bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to All Blogs
            </button>

            <div className="text-center">
              <p className="text-secondary text-sm">
                Written by <span className="text-white">{post.author}</span>
              </p>
              <p className="text-secondary text-xs mt-1">
                Published on {post.date}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
