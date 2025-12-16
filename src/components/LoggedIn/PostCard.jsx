import { Heart, MessageCircleMore ,Bookmark} from "lucide-react";
const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 max-w-2xl">
      <div className="flex items-center mb-3">
        <img 
          src={post.profileImage} 
          alt={post.username}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{post.username}</h3>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      <p className="text-gray-800 mb-3">{post.body}</p>

      {post.image && (
        <img 
          src={post.image} 
          alt="Post image"
          className="w-full rounded-lg mb-3"
        />
      )}

      <div className="flex items-center gap-6 pt-2 ">
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
          <span className="text-xl"><Heart/></span>
          <span className="text-sm">{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
          <span className="text-xl"><MessageCircleMore/></span>
          <span className="text-sm">{post.comments}</span>
        </button>
        <button className="text-xl ml-auto text-gray-600"><Bookmark/></button>
      </div>
    </div>
  );
};
export default PostCard;