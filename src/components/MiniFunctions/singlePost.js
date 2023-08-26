import { useState } from "react";
import { posts } from "../constant/data";
import { Link, useParams } from "react-router-dom";
import "./singlePost.css";
import { BiArrowBack } from "react-icons/bi";

const SinglePost = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-container">
      <h2 className="post-title">React JS</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png"
        className="photo-react"
        alt="react-pic"
      />
      <p className="post-content">
        React (also known as{" "}
        <span className="def-col">React.js or ReactJS</span>) is a free and
        open-source
        <span className="def-col"> front-end JavaScript library</span> for
        building user interfaces based on components. It is maintained by{" "}
        <span className="def-col">Meta</span> (formerly Facebook) and a
        community of individual developers and companies. React can be used to
        develop single-page, mobile, or server-rendered applications with
        frameworks like Next.js. Because React is only concerned with the user
        interface and rendering components to the DOM, React applications often
        rely on libraries for routing and other client-side functionality.
      </p>
      <div className="like">
        <p className="b-para">
          <span className="like-button">Likes : {likes}</span>
        </p>
        <button className="btn-para" onClick={handleLike}>
          Like
        </button>
        <br />
        <div className="gb">
          <Link className="gb" to="/minifunctions">
            <BiArrowBack className="iccon" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SinglePost;
