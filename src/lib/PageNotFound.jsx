import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-black text-white rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}