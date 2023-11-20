import UserAvatar from 'react-user-avatar';

// eslint-disable-next-line react/prop-types
const Client = ({ username }) => {

  // eslint-disable-next-line react/prop-types
  const initials = username.toUpperCase();
  return (
    <div className="client">
      <UserAvatar size="48" name={initials} />
      <span className="userName">{username}</span>
    </div>
  );
};

export default Client;
