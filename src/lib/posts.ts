import { getCollection, type CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

export type BlogPost = CollectionEntry<'blog'>;

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const postUrl = (post: BlogPost) => `/blog/${post.id}/`;

export async function getPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }: BlogPost) => !data.draft);
  return posts.sort(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime(),
  );
}

export const getReadingTime = (post: BlogPost) => readingTime(post.body ?? '').text;

export function getRelatedPosts(post: BlogPost, posts: BlogPost[], limit = 3) {
  return posts
    .filter((item) => item.id !== post.id)
    .map((item) => ({
      post: item,
      score:
        (item.data.category === post.data.category ? 3 : 0) +
        item.data.tags.filter((tag) => post.data.tags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}
