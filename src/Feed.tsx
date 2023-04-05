import {Friends} from "./Friends";
import {User} from "./UserService";
import {Posts} from "./Posts";
import {SuggestedFriends} from "./SuggestedFriends";
import { Divider } from "@mui/material";

interface Props {
    currentUser: User;
}

export function Feed({currentUser}: Props) {
    return (
        <div id="feed"
             className="flex flex-col align-center border gap-y-15">

            <Posts />
            <Divider variant="middle"/>
            <Friends currentUser={currentUser}/>
            <Divider variant="middle"/>
            <SuggestedFriends currentUser={currentUser}/>
        </div>
    );
}
