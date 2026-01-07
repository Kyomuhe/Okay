import PostCard from "./PostCard";
// import profile from '../../assets/profile.png'
// import image from '../../assets/login.png'
import { useState, useEffect } from "react";
import { makeAuthenticatedRequest, showToast } from "../../Utils/util";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const displayPosts = async() => {
      try {
        setLoading(true);
        const response = await makeAuthenticatedRequest("displayAllPosts", "Posts", {});
        
        if (response.returnCode !== 0) {
          showToast(response.returnMessage);
          return;
        }
        
        const retrievedPosts = (response?.returnObject || []).reverse();
        console.log('retrievedPosts', retrievedPosts);
        setPosts(retrievedPosts);
      } catch (error) {
        showToast(error.message, 'error');
      } finally {
        setLoading(false);
      }
    }

    displayPosts();
  }, []); // Empty dependency array - runs once on mount

  if (loading) {
    return (
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <p>Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;