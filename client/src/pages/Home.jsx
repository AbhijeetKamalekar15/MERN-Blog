import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="mt-14 mb-4">
      <div className="flex flex-col gap-6 px-10 lg:px-20 py-12 w-full lg:max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold lg:text-5xl">
          Welcome to ByteBlog by ECN <br />{" "}
          <span className="text-xl font-semibold lg:text-xl">
            {" "}
            - Where Engineers and Coders Unite!
          </span>
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm text-justify">
          Explore the world of software engineering, web development, and tech.
          Stay updated with the latest trends, tutorials, and insights from the
          ECN community. Whether you're a beginner or a professional, we offer
          resources, real-world examples, expert advice, and hands-on tutorials
          to help you grow. Connect with like-minded individuals, share ideas,
          collaborate on projects, and be part of the conversation. Together,
          let's build a brighter future through coding!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      <div className="w-full mx-auto p-3 items-center flex flex-col gap-8">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center w-full bg-gray-500 text-white">
              Recent Posts
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.slice(0, 4).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

      <div className="p-20">
        <div className="p-10 bg-amber-100 dark:bg-slate-700">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
