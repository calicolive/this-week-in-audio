import { PortableText } from '@portabletext/react';

import type { SanityDocument } from '@sanity/client';

export default function Post({ post }: { post: SanityDocument }) {
  const { title, body } = post;

  return (
    <article className='container mx-auto prose-a:text-slate-700  hover:prose-a:text-violet-500 bg-slate-50 prose-a:no-underline prose prose-sm prose-slate md:prose-md lg:prose-lg p-4 text-slate-950'>
      {title ? <h1>{title}</h1> : null}

      {body ? <PortableText value={body} /> : null}
    </article>
  );
}
