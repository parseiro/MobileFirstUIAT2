import {getAuthorByComment, getCommentsByPost} from "./PostService";

export function Post({post}) {
  const {postId, date, image, likes, text, title} = post;

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
    <div>
      <h3>Comentários</h3>
      {comments.length === 0 && <p>Nenhum comentário ainda</p>}
      {comments.length > 0 && comments.map((l) => (
        <div key={l.commentId}>
          Autor: {getAuthorByComment(l.commentId).name}
          {' | '}
          Comentário: {l.text}
        </div>
      ))}
    </div>
  </article>;
}
