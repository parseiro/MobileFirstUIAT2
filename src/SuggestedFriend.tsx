import React from "react";
import {commonFriends, getBestFriendBetweenTwoUsers, getUserAvatarUrl, User} from "./UserService";

interface Props {
    currentUser: User,
    suggestion: User,
}

const SuggestedFriendWrapped = ({currentUser, suggestion}: Props) => {
    const common = commonFriends(currentUser.id, suggestion.id);
    const bestCommon = getBestFriendBetweenTwoUsers(currentUser.id, suggestion.id);
    const svg = getUserAvatarUrl(suggestion);

    return (
        <span className="amigo">
            <div className="w-20 h-20"
                 dangerouslySetInnerHTML={{__html: svg}}/>
            <p>{suggestion.name}</p>
            <p>Amigos em comum: {common.length}</p>
            {bestCommon && <p>Amigo em comum: {bestCommon.name}</p>}
            <button type="button">Adicionar</button>
      </span>
    )
}

SuggestedFriendWrapped.propTypes = {};

export const SuggestedFriend = React.memo(SuggestedFriendWrapped);
