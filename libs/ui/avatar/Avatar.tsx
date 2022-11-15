const profileAltText = 'A profile image';

export const Avatar: React.FC = () => {
  return (
    <div className="avatar">
      <div className="w-8 rounded-full">
        <img src="/images/profile.jpg" alt={profileAltText} />
      </div>
    </div>
  );
};
