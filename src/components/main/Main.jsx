import Search from "../search/Search";
import Posts from "../posts/Posts";
import PostData from "../../data/PostData";
import { useState } from "react";

const Main = () => {
  const [searchTerm, setSearchterm] = useState("");
  const handleInputChange = (e) => {
    setSearchterm(e.target.value);
  };
  const filteredPosts = PostData.filter((post) => {
    return post.title.includes(searchTerm);
  });
  console.log(searchTerm);
  return (
    <div className="container">
      <Search onSearch={handleInputChange} val={searchTerm} />
      <Posts items={filteredPosts} />
    </div>
  );
};
export default Main;
