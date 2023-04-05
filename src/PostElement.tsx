import {getAuthorByComment, getCommentsByPost} from "./PostService";
import {Post} from "./PostService";
import React from "react";
interface Props {
    post: Post,
}

const PostElementWrapped = ({post}: Props) => {
  const {postId, date, image, text, title, shares, likeList} = post;
  const likes = likeList.length;

  const comments = getCommentsByPost(postId);

  return <article className="item-feed">
    <p>Data: {date}</p>
    {image && <img
      src={image}
      alt="picture"
    />}
    {title &&
      <p className="font-bold"
         style={{fontSize: "1.5rem"}}>
        {title}
      </p>}
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
  </article>;
}

export const PostElement = React.memo(PostElementWrapped);
