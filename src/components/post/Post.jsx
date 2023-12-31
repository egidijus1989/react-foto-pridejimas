const Post = (props) => {
  console.log(props.URL)
  return (
    <div className="card col-3 m-1">
      <img src={props.URL} className="card-img-top" alt="nerodo foto"></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"></p>
        <a href="#" className="card-link">
          Card link
        </a>
      </div>
    </div>
  );
};
export default Post;
