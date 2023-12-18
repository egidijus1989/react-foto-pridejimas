import Search from "../search/Search";
import Posts from "../posts/Posts";
import PostData from "../../data/PostData";
import { useState } from "react";
import AddPhoto from "../addPhoto/AddPhoto";

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
      <AddPhoto />
    </div>
  );
};
export default Main;
