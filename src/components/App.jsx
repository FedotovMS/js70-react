import user from './data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from './data/data.json';
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
        <Statistics title="Upload stats" stats={data} />
      </>
    </>
  );
};

export default App;
