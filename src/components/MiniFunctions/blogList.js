import { Link } from "react-router-dom";
import React from "react";
import { posts } from "../constant/data";

const BlogList = () => {
  return (
    <div className="blog-list">
      <h2 className="m-h2">Blogs</h2>
      <ul className="bl-ul">
        {posts.map((oneObj) => {
          return (
            <>
              <div>
                <p className="ex-tx">
                  This is a small Blog Component which will redirect the user to
                  a blog on a different page by clicking the link below.
                </p>
                <br />
                <li className="blog-item">
                  <Link
                    style={{
                      color: "#f2af29",
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}
                    to={`/posts/${oneObj.id}`}
                  >
                    {oneObj.title}
                  </Link>
                </li>
                <br />
              </div>
            </>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

export default BlogList;
