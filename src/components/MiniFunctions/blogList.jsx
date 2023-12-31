import { Link } from "react-router-dom";
import React from "react";
import { posts } from "../constant/data";
import { motion } from "framer-motion";

const BlogList = () => {
  return (
    <>
      <motion.div
        initial={{ y: 0, x: -75 }}
        whileInView={{ y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="blog-list"
      >
        <h2 className="m-h2">Blogs</h2>
        <ul className="bl-ul">
          {posts.map((oneObj) => {
            return (
              <>
                <div>
                  <p className="ex-tx">
                    This is a small Blog Component which will redirect the user
                    to a blog on a different page by clicking the link below.
                  </p>
                  <br />
                  <li className="blog-item">
                    <Link className="bl-a" to={`/posts/${oneObj.id}`}>
                      {oneObj.title}
                    </Link>
                  </li>
                  <br />
                </div>
              </>
            );
          })}
        </ul>
      </motion.div>
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>
    </>
  );
};

export default BlogList;
