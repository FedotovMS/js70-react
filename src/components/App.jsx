import user from './data/user.json';
import Profile from './Profile/Profile';

const App = () => {
  return (
    // user profile
    <>
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </>
    </>
  );
};

export default App;
