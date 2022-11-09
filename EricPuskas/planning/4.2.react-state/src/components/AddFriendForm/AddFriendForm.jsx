import { useState } from "react";
import "./AddFriendForm.css";

export const AddFriendForm = (props) => {
  const { addFriend } = props;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    birthdate: new Date()
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFriend = {
      id: new Date().getTime(),

      ...formData,
      birthdate: new Date(formData.birthdate)
    };

    console.log({ newFriend });
    setFormData({
      email: "",
      name: "",
      birthdate: new Date()
    });
    addFriend(newFriend);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "email") setEmail(value);
    if (name === "name") setName(value);
    if (name === "birthdate") setBirthdate(value);

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-friend-form">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formData.name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          onChange={handleChange}
          name="birthdate"
          value={formData.birthdate}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary submit-button">
        Submit
      </button>
    </form>
  );
};
