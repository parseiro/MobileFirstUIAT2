/* This is a post service that will be used to fetch posts from a server
 * Every post has a title, a date, a text, an image, a list of comments, a lista of
 * likeList. The service returns a list of posts for a given post id. Instead of returning
 * the list of likeList, it returns the number of likeList.
*/


import {getUserById} from "./UserService";

export interface Post {
    postId: number;
    userId: number;
    date: string;
    image: string;
    title: string;
    text: string;
    likeList: {userId: number}[];
    shares: number;
}

const posts: Post[] = [
  {
    postId: 1,
    userId: 1,
    date: "15/5/2022",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "O Tobinho virou estrelinha",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor," +
      " nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget ultricies nisl nisl eu nunc. Donec auctor, nisl eget ultricies lacinia",
    likeList: [
      {userId: 2},
      {userId: 3},
      {userId: 4},
      {userId: 5},
    ],
    shares: 2,
  },
  {
    postId: 2,
    userId: 3,
    date: "13/5/2022",
    image: "https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Nossa viagem para a praia",
    text: "Olhem essa foto fantástica que consegui fazer",
    likeList: [
      {userId: 1},
      {userId: 3},
      {userId: 6},
      {userId: 8},
      {userId: 10},
    ],
    shares: 0,
  }
];

export function getAllPosts(): Post[] {
  return [...posts];
}

export function getPostsByUser(userId: number): Post[] {
  return posts
    .filter(post => post.userId === userId)
    .map(post => {
      return {
        ...post,
        likes: post.likeList.length
      };
    });
}

/* Every comment has a postId, a userId, a date, a text */
interface Comment {
  postId: number;
    commentId: number;
    autorId: number;
    date: string;
    text: string;
}

/* This is a list of comments. */
const comments: Comment[] = [
  {commentId: 1, postId: 1, autorId: 2, date: '15/5/2022', text: 'Coitadinho'},
  {commentId: 2, postId: 1, autorId: 3, date: '16/5/2022', text: 'Ele está num lugar' +
      ' melhor'},
  {commentId: 3, postId: 1, autorId: 4, date: '17/5/2022', text: 'Não fique triste'},
  {commentId: 4, postId: 1, autorId: 5, date: '17/5/2022', text: 'Meus profundos' +
      ' sentimentos'},
  {commentId: 5, postId: 2, autorId: 1, date: '13/5/2022', text: 'Maravilhoso *_*'},
];

export function getCommentsByPost(postId: number): Comment[] {
  return comments.filter(comment => comment.postId === postId);
}

export function getAuthorByComment(commentId: number) {
  const comment = comments
      .find(comment => comment.commentId === commentId);
  if (comment == null)  return null

  const { autorId } = comment;
  if (autorId == null) return null;

  return getUserById(autorId);
}
