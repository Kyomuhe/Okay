import PostCard from "./PostCard";
import profile from '../../assets/profile.png'
import image from '../../assets/login.png'
const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "Mike Chen",
      profileImage: profile,
      timestamp: "5 hours ago",
      body: "Excited to announce that I've just launched my new web development portfolio! It's been months of hard work, but I'm so proud of how it turned out. Check it out and let me know what you think! 🚀",
      image: null,
      likes: 89,
      comments: 12
    },

    {
      id: 2,
      username: "Sarah Johnson",
      profileImage: profile,
      timestamp: "2 hours ago",
      body: "Just finished an amazing hike in the mountains! The view from the top was absolutely breathtaking. Nature really has a way of putting things in perspective. 🏔️",
      image: image,
      likes: 124,
      comments: 18
    },
    {
      id: 3,
      username: "Mike Chen",
      profileImage: profile,
      timestamp: "5 hours ago",
      body: "Excited to announce that I've just launched my new web development portfolio! It's been months of hard work, but I'm so proud of how it turned out. Check it out and let me know what you think! 🚀",
      image: null,
      likes: 89,
      comments: 12
    }
  ];

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