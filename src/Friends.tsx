import React from "react";
import {getFriendsOfUser, User} from "./UserService";
import {FriendCard} from "./FriendCard";
import {Paper} from "@mui/material";

interface Props {
    currentUser: User;
}

const FriendsWrapped = ({currentUser}: Props) => {
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
