import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    <div className="pt-16 flex flex-col md:flex-row">
      {/* Sidebar (Filter Section) */}
      <div className="p-4 md:p-7 md:w-1/4 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Search Term Field */}
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Sort Field */}
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.sort}
              id="sort"
              className="w-full"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>

          {/* Category Field */}
          <div className="flex items-center gap-2">
            <label className="font-semibold">Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
              className="w-full"
            >
              <option value="uncategorized">Select a category</option>
              <option value="Development">Development</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Fullstack Development">
                Fullstack Development
              </option>
              <option value="Database Management">Database Management</option>
              <option value="Web Performance Optimization">
                Web Performance Optimization
              </option>
              <option value="DevOps in Web Development">
                DevOps in Web Development
              </option>
              <option value="Programming Languages">
                Programming Languages
              </option>
              <option value="Data Structures and Algorithms">
                Data Structures and Algorithms
              </option>
              <option value="Programming Paradigms">
                Programming Paradigms
              </option>

              <option value="Frameworks and Libraries">
                Frameworks and Libraries
              </option>
              <option value="APIs and Integrations">
                APIs and Integrations
              </option>

              <option value="Testing and Debugging">
                Testing and Debugging
              </option>
              <option value="AI & ML">
              AI & ML
              </option>
              <option value="Machine Learning in Web Development">
                Machine Learning in Web Development
              </option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Blockchain and Web3 Development">
                Blockchain and Web3 Development
              </option>
              <option value="Mobile-Friendly Web Development">
                Mobile-Friendly Web Development
              </option>
              <option value="Open Source Contributions">
                Open Source Contributions
              </option>
              <option value="Emerging Trends">Emerging Trends</option>
              <option value="Other">Other</option>
            </Select>
            
          </div>

          {/* Apply Filters Button */}
          <Button
            type="submit"
            outline
            gradientDuoTone="purpleToPink"
            className="mt-4"
          >
            Apply Filters
          </Button>
        </form>
      </div>

      {/* Posts Section */}
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 ">
          Posts results:
        </h1>
        <div className="py-7 px-16 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
