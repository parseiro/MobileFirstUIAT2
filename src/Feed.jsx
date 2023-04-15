import {Friends} from "./Friends.jsx";
import {Posts} from "./Posts.jsx";
import {SuggestedFriends} from "./SuggestedFriends.jsx";
import {Divider} from "@mui/material";
import React from "react";

export function Feed({currentUser}) {
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
