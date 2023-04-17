import { PortableText } from '@portabletext/react';

import type { SanityDocument } from '@sanity/client';

export default function Post({ post }: { post: SanityDocument }) {
  const { title, body } = post;

  return (
    <main className='container mx-auto prose prose-lg p-4 text-black'>
      {title ? <h1>{title}</h1> : null}

      {body ? <PortableText value={body} /> : null}
    </main>
  );
}
