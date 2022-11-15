const profileAltText = 'A profile image';

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="w-8 rounded-full">
        <img src="/images/profile.jpg" alt={profileAltText} />
      </div>
    </div>
  );
};

export const NavBar: React.FC = () => {
  return (
    <div className="flex bg-blue-500">
      <div>Im an amazing AppBar 💥</div>
      <Avatar />
    </div>
  );
};
