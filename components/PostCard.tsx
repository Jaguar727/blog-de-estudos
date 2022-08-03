import React from "react";
import moment from "moment";
import Link from "next/link";
import { Postcard } from "../types/graphql_queries";

interface PostCardProps {
    post: Postcard;
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className="bg-slate-700 shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-lg pb-80 mb-6">
                <img
                    src={post.node.featuredImage.url}
                    alt={post.node.title}
                    className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>

            <h1
                className="transition duration-700 text-center mb-8 cursor-pointer
      hover:text-cyan-400 text-3xl font-semibold"
            >
                <Link href={`/post/${post.node.slug}`}>{post.node.title}</Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img
                        alt={post.node.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post.node.author.photo?.url ?? ""}
                    />
                    <p className="inline align-middle text-gray-400 ml-2 text-lg">
                        {post.node.author.name}
                    </p>
                </div>
                <div className="font-medium text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline mr-2 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <span className="">
                        {moment(post.node.createdAt).format("DD/MM/YYYY")}
                    </span>
                </div>
            </div>
            <p className="text-center text-lg px-4 lg:px-20 mb-8">
                {post.node.excerpt}
            </p>
            <div className="text-center">
                <Link href={`/post/${post.node.slug}`}>
                    <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-slate-500 rounded-full px-4 py-2 cursor-pointer font-medium text-lg">
                        Continuar Leitura
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
