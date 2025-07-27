import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { MoveLeft, Frown } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="w-full h-screen flex text-center">
      <Card className="m-auto w-2xl p-10 px-20 bg-slate-100">
        <div className="flex flex-col items-center">
          <Frown size={80} className="text-slate-600 mb-6" />
          <h1 className="text-8xl font-bold mb-6">Oops!</h1>
          <h2 className="text-red-500 text-4xl mb-4 font-medium">404 - PAGE NOT FOUND</h2>
          <p className="mb-8 text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-3 rounded hover:bg-sky-600 transition">
            <MoveLeft size={20} />
            Go back to home
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
