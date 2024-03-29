import { request, gql } from "graphql-request";
import { Category, Postcard } from "../types/graphql_queries";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_EP;

export const getPosts = async (): Promise<Array<Postcard>> => {
    if (!graphqlAPI) return [];
    const query = gql`
        query Post {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};

export const getPostDetails = async (slug: String): Promise<Array<Postcard>> => {
    if (!graphqlAPI) return [];
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug }) { 
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content { 
                    raw
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getRecentPosts = async () => {
    if (!graphqlAPI) {
        return;
    }
    const query = gql`
    query GetPostDetails() {
      posts(
        orderBy:createdAt_ASC
        last:3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
  }
  `;
    const result = await request(graphqlAPI, query);

    return result.posts;
};

export const getSimilarPosts = async (categories: string, slug: string) => {
    if (!graphqlAPI) {
        return;
    }
    const query = gql`
  query GetPostDetails($slug: String!, $categories: [String!]) {
    posts(
      where: { slug_not: $slug, AND {categories_some: { slug_in: $categories}}}
      last: 3
    ){
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
  }`;
    const result = await request(graphqlAPI, query, { categories, slug });

    return result.posts;
};

export const getCategories = async () => {
    if (!graphqlAPI) {
        return;
    }

    const query = gql`
  query GetCategories() {
    categories {
      name
      slug
    }
  }
  `;

    const result = await request(graphqlAPI, query);

    return result.categories;
};
