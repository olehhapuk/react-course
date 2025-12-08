import { getHomePath } from '@/constants/routes';
import { Link } from 'react-router';

export default function AboutView() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About Us</h1>
      <Link to={getHomePath()}>Home</Link>
    </div>
  );
}
