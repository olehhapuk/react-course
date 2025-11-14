import PostCard from './post-card';

export default function App() {
  return (
    <div>
      <h1>test</h1>
      <PostCard username="John Doe" isOnline />
      <PostCard username="Jane Doe" className="border border-black" />
    </div>
  );
}
