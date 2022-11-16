const profileAltText = 'A profile image';

export const Avatar: React.FC = () => {
  return (
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="avatar">
        <div className="w-8 rounded-full">
          <img src="/images/profile.jpg" alt={profileAltText} />
        </div>
      </div>
    </label>
  );
};
