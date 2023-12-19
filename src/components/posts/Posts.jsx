import AddPhoto from "../addPhoto/AddPhoto";
import Post from "../post/Post";
import { useState } from "react";

const Posts = (props) => {
  const [post, setPosts] = useState([]);
  const handleFormDate = (data) => {
    setPosts((prevData) => {
      return [data, ...prevData];
    });
    setClicked2(false);
  };
  const [clicked2, setClicked2] = useState(false);
  const handleClick2 = () => {
    setClicked2(true);
  };
  return (
    <div className="container">
      <button onClick={handleClick2} className="btn btn-danger">
        Prideti nuotrauka
      </button>
      <div className="row">
        {post.filter(item => item.title.includes(props.searchTerm)).map((post) => (
          <Post key={post.id} title={post.title} URL={post.URL} />
        ))}
      </div>
      {clicked2 ? (
        <div>
          <h2>Prideti nuotrauka</h2>
          <AddPhoto onSave={handleFormDate} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Posts;
