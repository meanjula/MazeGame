import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubLink = () => {
  const githubHandler = () => {
    window.open("https://github.com/meanjula");
  };
  return (
    <div className="link-wrapper">
      <center>
        <p>
          &copy;2021 by Anjula timsina{" "}
          <button onClick={githubHandler} className="click">
            <FaGithub color="purple" className="svgIcon" />
          </button>
        </p>
      </center>
    </div>
  );
};

export default GithubLink;
