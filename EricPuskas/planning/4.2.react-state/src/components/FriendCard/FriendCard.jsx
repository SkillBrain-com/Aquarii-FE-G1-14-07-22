import React, { useState } from "react";

import "./FriendCard.css";

export const FriendCard = (props) => {
  const { name, email, birthdate } = props;

  const [counter, setCounter] = useState(0);

  console.log({ counter });

  const handleClick = () => {
    // 0
    setCounter(counter + 1);

    // 0
    console.log("counter:", counter);
  };

  console.log({ birthdate });

  return (
    <div className="friend-card">
      <p> Counter: {counter} </p>
      <p> Name: {name} </p>
      <p> Email: {email} </p>
      {/* <p> Birthdate: {birthdate.toLocaleDateString()} </p> */}
      <button onClick={handleClick}> Click Me! </button>
    </div>
  );
};
