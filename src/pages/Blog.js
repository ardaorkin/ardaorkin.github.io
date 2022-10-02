import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(() => console.log(posts));
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ardaorkin"
      );
      const result = await response.json();
      setPosts(result.items);
    } catch (error) {
      throw error;
    }
  };

  const decodeHTMLEntities = (text) => {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  const searchCategory = (category) => {
    window.open("http://google.com/search?q=" + category);
  };

  return (
    <div id="blog" className="page blog">
      {Object.values(posts).map((post) => {
        return (
          <div className="post">
            <h3>
              <a href={post.link} target="_blank">
                {decodeHTMLEntities(post.title)}
              </a>
            </h3>
            {post?.categories.map((category) => (
              <Badge
                className="category"
                onClick={() => searchCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
