import { FriendCard } from "../FriendCard";

export const FriendsList = (props) => {
  const { friends } = props;

  const renderFriends = () => {
    return friends.map((friend) => {
      return (
        <FriendCard
          key={friend.id}
          name={friend.name}
          email={friend.email}
          birthdate={friend.birthdate}
        />
      );
    });
  };

  return <div>{renderFriends()}</div>;
};
