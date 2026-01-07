import { Heart, MessageCircleMore ,Bookmark} from "lucide-react";
import profile from '../../assets/profile.png'

const PostCard = ({ post }) => {
    const getTimeAgo = (timestamp) => {
    if (!timestamp) return '';

    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInMs = now - postDate;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return postDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className=" bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 max-w-2xl ">
      <div className="flex items-center mb-3">
        <img 
          src={profile}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h5 className=" text-gray-900">kyomuhendo Precious</h5>
          <p className="text-sm text-gray-500">@precious_kay</p>
          <p className="text-xs text-gray-500">{getTimeAgo(post?.createdAt)}</p>
        </div>
      </div>

      <h3 className="font-semibold text-gray-900">{post.title}</h3>
      <p className="text-gray-800 mb-3">{post.body}</p>

      {post?.coverImage && (
        <img 
          src={ `data:image/jpeg;base64,${post.coverImage}`} 
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