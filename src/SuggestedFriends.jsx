import {getPotentialFriends} from "./UserService";
import React from "react";
import {SuggestedFriend} from "./SuggestedFriend.jsx";
import {Paper} from "@mui/material";

const SuggestedFriendsWrapped = ({currentUser}) => {
  const suggestedFriends = getPotentialFriends(currentUser.id);

  return (
    <Paper>
      <h2 className="text-center">Sugestões de amizade</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {suggestedFriends.map((suggestion) => (
          <SuggestedFriend
            key={`${currentUser.id}-${suggestion.id}`}
            currentUser={currentUser}
            suggestion={suggestion}
          />
        ))}
      </div>
    </Paper>
  );
};

SuggestedFriendsWrapped.propTypes = {};

export const SuggestedFriends = React.memo(SuggestedFriendsWrapped);
