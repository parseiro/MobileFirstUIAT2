import React from "react";
import {
  commonFriends,
  getBestFriendBetweenTwoUsers,
  getUserAvatarUrl
} from "./UserService";
import {Button, Card} from "@mui/material";

const SuggestedFriendWrapped = ({currentUser, suggestion}) => {
    const common = commonFriends(currentUser.id, suggestion.id);
    const bestCommon = getBestFriendBetweenTwoUsers(currentUser.id, suggestion.id);
    const svg = getUserAvatarUrl(suggestion);

    return (
        <Card className="amigo">
            <div className="w-20 h-20"
                 dangerouslySetInnerHTML={{__html: svg}}/>
            <p>{suggestion.name}</p>
            <p>Amigos em comum: {common.length}</p>
            {bestCommon && <p>Amigo em comum: {bestCommon.name}</p>}
            <Button variant="text" size="small">Adicionar</Button>
      </Card>
    )
}

SuggestedFriendWrapped.propTypes = {};

export const SuggestedFriend = React.memo(SuggestedFriendWrapped);
