import React, { useState, useEffect } from 'react';
import client from '../../contentful/website';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'page', 'fields.slug': 'multicredito', })
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Página : {posts[0]?.fields?.title}</h1>
      
    </div>
  );
}

export default Blog;