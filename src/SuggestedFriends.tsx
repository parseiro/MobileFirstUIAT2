import {getPotentialFriends, User} from "./UserService";
import React from "react";
import {SuggestedFriend} from "./SuggestedFriend";


interface Props {
    currentUser: User;
}


const SuggestedFriendsWrapped = ({currentUser}: Props) => {
    const suggestedFriends = getPotentialFriends(currentUser.id);

    return (
        <article className="item-feed">
            <p className="text-center text-lg">Sugestões de amigos</p>
            <div className="flex flex-wrap justify-center">
                {suggestedFriends.map((suggestion) => (
                    <SuggestedFriend
                        key={`${currentUser.id}-${suggestion.id}`}
                        currentUser={currentUser}
                        suggestion={suggestion}
                    />
                ))}
            </div>
        </article>
    );
}

SuggestedFriendsWrapped.propTypes = {};

export const SuggestedFriends = React.memo(SuggestedFriendsWrapped);
