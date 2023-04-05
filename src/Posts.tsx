import {PostElement} from "./PostElement";
import React from "react";
import {getAllPosts} from "./PostService";

const PostsWrapped = () => {
    const posts = getAllPosts();

    return (
        <>
            {posts.map((post) => (
                <PostElement
                    key={post.postId}
                    post={post}
                />
            ))}
        </>
    );
}

PostsWrapped.propTypes = {};

export const Posts = React.memo(PostsWrapped);


