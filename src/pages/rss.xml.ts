import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts, postUrl } from '../lib/posts';
import { site } from '../lib/site';

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: postUrl(post),
      categories: [post.data.category, ...post.data.tags],
    })),
  });
};
