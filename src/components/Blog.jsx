import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, X, Tag } from "lucide-react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { blogPosts } from "../constants";

const BlogModal = ({ post, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="relative w-full max-w-2xl max-h-[80vh] bg-tertiary rounded-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-tertiary p-4 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
          >
            <X size={24} />
          </button>

          <h2 className="text-white font-bold text-xl pr-8 line-clamp-2">{post.title}</h2>
          <div className="flex items-center gap-4 text-secondary text-sm flex-wrap mt-2">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </div>

        <div className="overflow-y-auto p-4" style={{ maxHeight: "calc(80vh - 100px)" }}>
          <div className="aspect-video mb-4 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-secondary text-base leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <p className="text-secondary text-base leading-relaxed">
              {post.content}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/80 px-2 py-1 rounded-full text-xs text-white flex items-center gap-1"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-white text-sm">Written by {post.author}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BlogCard = ({ post, index, onReadMore }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="w-full sm:w-[320px]"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-tertiary p-4 rounded-2xl w-full h-[460px] flex flex-col"
      >
        <div className="relative w-full h-[180px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 bg-primary/80 px-2 py-1 rounded-full">
            <p className="text-white text-xs">{post.category}</p>
          </div>
        </div>

        <div className="flex flex-col flex-grow justify-between mt-3">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-secondary text-sm mb-3 line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-xs">{post.readTime}</span>
              </div>
              <span className="text-secondary text-xs">{post.date}</span>
            </div>

            <button
              onClick={() => onReadMore(post)}
              className="w-full bg-black-200 hover:bg-primary text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
            >
              <span>Read More</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="w-full relative">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Thoughts and Insights</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            post={post}
            index={index}
            onReadMore={handleReadMore}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <BlogModal
            post={selectedPost}
            isOpen={!!selectedPost}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Blog, "blog");