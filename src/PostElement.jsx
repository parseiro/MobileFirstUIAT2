import {getAuthorByComment, getCommentsByPost} from "./PostService.js";
import React from "react";
import {Card} from "@mui/material";

const PostElementWrapped = ({post}) => {
    const {postId, date, image, text, title, shares, likeList} = post;
    const likes = likeList.length;

    const comments = getCommentsByPost(postId);

    return <Card className="p-4">
        {image && <img
          src={image}
          alt="picture"
        />}
        <h2>{title}</h2>
        <p>Data: {date}</p>
        <p>{text}</p>
        <p>Curtidas: {likes}</p>
        <p>Compartilhamentos: {shares}</p>
        <div>
            <h3>Comentários</h3>
            {comments.length === 0 && <p>Nenhum comentário ainda</p>}
            {comments.length > 0 && comments.map((l) => (
                <div key={l.commentId}>
                    Autor: {getAuthorByComment(l.commentId)?.name}
                    {' | '}
                    Comentário: {l.text}
                </div>
            ))}
        </div>
    </Card>;
}

export const PostElement = React.memo(PostElementWrapped);
