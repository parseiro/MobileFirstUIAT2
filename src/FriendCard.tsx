import {commonFriends, getUserAvatarUrl, User} from "./UserService";
import React from "react";
import {Card} from "@mui/material";

interface Props {
    me: User,
    friend: User,
}

const FriendCardWrapped = ({me, friend}: Props) => {
    const common = commonFriends(me.id, friend.id);
    const svg = getUserAvatarUrl(friend);

    return (
        <Card className="amigo">
            <div className="w-20 h-20" dangerouslySetInnerHTML={{__html: svg}} />
            <p>{friend.name}</p>
            <p>Amigos em comum: {common.length}</p>
        </Card>
    );
}

FriendCardWrapped.propTypes = {};

export const FriendCard = React.memo(FriendCardWrapped);
