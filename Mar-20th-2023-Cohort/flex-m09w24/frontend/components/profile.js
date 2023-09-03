import Name from "./name";

// props drilling
const Profile = ({ user }) => {
  return (
    <div>
      Profile is <Name user={user} />
    </div>
  );
};

export default Profile;
