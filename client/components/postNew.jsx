import React, { useState } from "react";
import axios from "axios";

const PostNew = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/test", {
        headline: title,
        text: content,
        user: "admin",
      });
      setSuccess(response.data.message);
      setError(null);
    } catch (error) {
      console.error("Error response:", error.response); // Log the error response
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Headline"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default PostNew;

/*
import React, { useState } from "react";
import axios from "axios";

const PostNew = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/test", {
        headline: title,
        text: content,
      });
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Headline"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostNew;
*/
