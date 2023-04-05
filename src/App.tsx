import './App.css';
import {Feed} from "./Feed";
import {getUserById} from "./UserService";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function App() {
  const currentUserId = 1;
  const currentUser = getUserById(currentUserId);

  return (
    <>
      <header>Orkut</header>
      <ResponsiveAppBar/>
      <Feed currentUser={currentUser}/>
    </>
  );
}
