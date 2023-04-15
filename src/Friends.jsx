import React from "react";
import {getFriendsOfUser} from "./UserService.js";
import {FriendCard} from "./FriendCard.jsx";
import {Paper} from "@mui/material";

const FriendsWrapped = ({currentUser}) => {
    const friends = getFriendsOfUser(currentUser.id);
    return (
        <Paper className="item-feed">
            <h2 className="text-center">Amigos</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {friends.map((friend) => (
                    <FriendCard
                        key={`${currentUser.id}-${friend.id}`}
                        me={currentUser}
                        friend={friend}
                    />
                ))}
            </div>
        </Paper>
    );
}

FriendsWrapped.propTypes = {};

export const Friends = React.memo(FriendsWrapped);
