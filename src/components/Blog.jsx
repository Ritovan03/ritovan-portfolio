import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { blogPosts } from "../constants";

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
  const navigate = useNavigate();

  const handleReadMore = (post) => {
    navigate(`/blog/${post.slug}`);
  };

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
    </div>
  );
};

export default SectionWrapper(Blog, "blog");
