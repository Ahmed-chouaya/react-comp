import './App.css';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import ProfilePicture from './component/profile/ProfilePhoto';

function App() {
  return (
    <div>
      <FullName/>
      <Address/>
      <ProfilePicture/>
    </div>
  );
}

export default App;
