const User = ({ name, place }) => {
  return (
    <div className="user-div">
      <h2>{name}</h2>
      <h3>{place}</h3>
      <h3>@avelinannvarghese@github.com</h3>
    </div>
  );
};
export default User;
