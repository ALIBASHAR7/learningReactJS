import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Post = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-2 bg-green-300 m-2 min-h-screen rounded-xl">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-2 gap-4">
        {data.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default Post;
