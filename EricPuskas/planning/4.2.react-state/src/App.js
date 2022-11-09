import { useState } from "react";
import "./App.css";
import { FriendsList } from "./components/FriendsList";
import { AddFriendForm } from "./components/AddFriendForm";

const data = [
  {
    id: 1,
    name: "Dennis",
    email: "Karley_Dach@jasper.info",
    birthdate: new Date(1996, 0, 15)
  },
  {
    id: 2,
    name: "Kurtis",
    email: "Telly.Hoeger@billy.biz",
    birthdate: new Date(1997, 1, 16)
  },
  {
    id: 3,
    name: "Nicholas",
    email: "Sherwood@rosamond.me",
    birthdate: new Date(1998, 2, 17)
  },
  {
    id: 9,
    name: "Glen",
    email: "Chaim_McDermott@dana.io",
    birthdate: new Date(1999, 3, 12)
  },
  {
    id: 10,
    name: "Clementina",
    email: "Rey.Padberg@karina.biz",
    birthdate: new Date(2000, 4, 14)
  }
];

const App = () => {
  const [friends, setFriends] = useState(data);

  const addFriend = (newFriend) => {
    setFriends((prevState) => [newFriend, ...prevState]);
  };

  return (
    <div>
      <AddFriendForm addFriend={addFriend} />
      <FriendsList friends={friends} />
    </div>
  );
};

export default App;
