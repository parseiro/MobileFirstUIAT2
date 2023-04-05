import {PostElement} from "./PostElement";
import React from "react";
import {getAllPosts} from "./PostService";
import {Paper} from "@mui/material";

const PostsWrapped = () => {
    const posts = getAllPosts();

    return (
        <Paper className="item-feed">
            <h2 className="text-center">Posts da timeline</h2>
            {posts.map((post) => (
                <PostElement
                    key={post.postId}
                    post={post}
                />
            ))}
        </Paper>
    );
}

PostsWrapped.propTypes = {};

export const Posts = React.memo(PostsWrapped);


