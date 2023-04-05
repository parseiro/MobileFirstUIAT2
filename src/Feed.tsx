import {Friends} from "./Friends";
import {User} from "./UserService";
import {Posts} from "./Posts";
import {SuggestedFriends} from "./SuggestedFriends";

interface Props {
  currentUser: User;
}

export function Feed({currentUser}: Props) {
  return (
    <div id="feed"
         className="flex flex-col align-center border gap-y-15">

      <Posts
          // currentUser={currentUser}
      />

      <Friends currentUser={currentUser}/>

        <SuggestedFriends currentUser={currentUser}/>
    </div>
  );
}
