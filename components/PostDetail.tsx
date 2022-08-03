import React from "react";
import { Post } from "../types/graphql_queries"

interface PostProps {
    post: Post;
}

const PostDetail = ({ post }: PostProps ) => {
    return (
        <div className="bg-slate-700 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md mb-6">
                <img 
                src={post.featuredImage.url}
                alt={post.title}
                className='object-top h-full w-full rounded-t-lg'
                />
            </div>
            <div className="px-4 lg:px-0">
                <div className="flex items-center mb-8 w-full">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PostDetail;

//TODO: finish this.