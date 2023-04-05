import './App.css';
import {Feed} from "./Feed.tsx";
import {MainMenu} from "./MainMenu.tsx";
import {getUserById} from "./UserService";

export default function App() {
  const currentUserId = 1;
  const currentUser = getUserById(currentUserId);

  return (
    <>
      <header>Orkut</header>
      <MainMenu/>
      <Feed currentUser={currentUser}/>
    </>
  );
}
