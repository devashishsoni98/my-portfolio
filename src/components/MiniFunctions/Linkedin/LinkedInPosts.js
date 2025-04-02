import React, { useState, useEffect } from 'react';

const LinkedInPosts = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your OAuth access token

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:person:YOUR_PROFILE_ID", // Replace YOUR_PROFILE_ID with your LinkedIn profile ID
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data.elements); // Store posts in state
      } catch (error) {
        console.error('Error fetching LinkedIn posts:', error);
      }
    };

    fetchPosts();
  }, [accessToken]);

  return (
    <section>
      <h2>Recent Work</h2>
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              <p>{post.text}</p>
              {/* Add additional fields if needed */}
            </div>
          ))
        ) : (
          <p>No recent posts available</p>
        )}
      </div>
    </section>
  );
};

export default LinkedInPosts;
