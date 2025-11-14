import './App.css';
import avatarImage from './assets/Profile Image.jpg';
// import LikeIcon from './icons/like-icon';
import likeIcon from './assets/like-icon.svg';
import PostCard from './components/post-card';
import PostsList from './components/posts-list';

const isOnline = true;
const imageUrl = avatarImage;

function App() {
  // return (
  //   <div>
  //     {imageUrl && (
  //       <div className="avatar-container">
  //         <img src={avatarImage} alt="John Doe" className="avatar-img" />
  //         <div
  //           className={`avatar-status ${
  //             isOnline ? 'avatar-status_online' : 'avatar-status_offline'
  //           }`}
  //         />
  //       </div>
  //     )}

  //     <button type="button" className="btn">
  //       {/* <LikeIcon isFilled /> */}
  //       <img src={likeIcon} />
  //       10
  //     </button>
  //   </div>
  // );

  return (
    <PostsList>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostsList>
  );
}

export default App;
