import './App.css';
import {Feed} from "./Feed.jsx";
import {MenuPrincipal} from "./MenuPrincipal.jsx";

export default function App() {
  return (
    <>
      <header>Facebook</header>
      <MenuPrincipal/>
      <Feed currentUserId={1}/>
    </>
  );
}
