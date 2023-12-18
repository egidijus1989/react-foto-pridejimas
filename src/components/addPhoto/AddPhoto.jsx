import { useState } from "react";

let myId = 0;
const AddPhoto = (props) => {
  const [formData, setFormDate] = useState({
    id: "",
    title: "",
    URL: "",
  });

  const handleChange = (event) => {
    setFormDate({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    myId += 1;
    props.onSave({ ...formData, id: myId });
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Photo title"
          className="m-1 form-control"
          onChange={handleChange}
          value={formData.title}
        ></input>
      </div>
      <input
        type="text"
        name="URL"
        placeholder="Photo title"
        className="m-1 form-control"
        onChange={handleChange}
        value={formData.URL}
      ></input>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Saugoti
        </button>
      </div>
    </form>
  );
};
export default AddPhoto;
