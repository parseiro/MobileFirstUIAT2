import {getAllPosts, getPostsByUser} from "./PostService.ts";
import {Post} from "./Post.jsx";

export function Feed({currentUserId}) {
  const posts = getAllPosts();

  return (
    <div id="feed"
         className="flex flex-col align-center border gap-y-15">

      {posts.map((post) => (
        <Post
          key={post.postId}
          post={post}
          />
        ))}

{/*      <article className="item-feed">
        <p style={{textAlign: "center", fontSize: "1.5rem"}}>Amigos</p>
        <div className="flex flex-wrap justify-center">
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Dino Sauro</p>
            <p>Amigos em comum: 2</p>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Bart Simpson</p>
            <p>Amigos em comum: 2</p>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Abana Caudas</p>
            <p>Amigos em comum: 2</p>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Silvio Santos</p>
            <p>Amigos em comum: 2</p>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Ascaris Lumbricoides</p>
            <p>Amigos em comum: 2</p>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Giárdia Lamblia</p>
            <p>Amigos em comum: 2</p>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Dunha Lacoste</p>
            <p>Amigos em comum: 2</p>
          </span>
        </div>
      </article>
      <article className="item-feed">
        <p style={{textAlign: "center", fontSize: "1.5rem"}}>
          Sugestões para adicionar
        </p>
        <div className="flex flex-wrap justify-center">
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Dino Sauro</p>
            <p>Amigos em comum: 2</p>
            <button type="button">Adicionar</button>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Bart Simpson</p>
            <p>Amigos em comum: 2</p>
            <button type="button">Adicionar</button>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Abana Caudas</p>
            <p>Amigos em comum: 2</p>
            <button type="button">Adicionar</button>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Silvio Santos</p>
            <p>Amigos em comum: 2</p>
            <button type="button">Adicionar</button>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Ascaris Lumbricoides</p>
            <p>Amigos em comum: 2</p>
            <button type="button">Adicionar</button>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Giárdia Lamblia</p>
            <p>Amigos em comum: 2</p>
            <button type="button">Adicionar</button>
          </span>
          <span className="amigo">
            <span className="material-symbols-outlined">account_circle</span>
            <p>Dunha Lacoste</p>
            <p>Amigos em comum: 2</p>
            <button type="button">Adicionar</button>
          </span>
        </div>
      </article>*/}
    </div>
  );
}
