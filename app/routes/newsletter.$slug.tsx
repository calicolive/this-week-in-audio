import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Post from '~/components/Post';
import { client } from '~/lib/sanity';

export const loader = async ({ params }: LoaderArgs) => {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, params);

  return { post };
};

export default function PostRoute() {
  const { post } = useLoaderData();
  return <Post post={post} />;
}
