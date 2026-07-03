import type { APIRoute } from 'astro';
import { getPosts, postUrl } from '../lib/posts';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  return Response.json(
    posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
      tags: post.data.tags,
      url: postUrl(post),
    })),
  );
};
