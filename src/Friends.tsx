import React from "react";
import {getFriendsOfUser, User} from "./UserService";
import {FriendCard} from "./FriendCard";

interface Props {
    currentUser: User;
}

const FriendsWrapped = ({currentUser}: Props) => {
    const friends = getFriendsOfUser(currentUser.id);
    return (
        <article className="item-feed">
            <p className="text-center text-lg">Amigos</p>
            <div className="flex flex-wrap justify-center">
                {friends.map((friend) => (
                    <FriendCard
                        key={`${currentUser.id}-${friend.id}`}
                        me={currentUser}
                        friend={friend}
                    />
                ))}
            </div>
        </article>
    );
}

FriendsWrapped.propTypes = {};

export const Friends = React.memo(FriendsWrapped);
