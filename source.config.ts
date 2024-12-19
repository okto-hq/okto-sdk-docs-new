import {
    defineDocs,
    defineCollections,
    frontmatterSchema,
    metaSchema,
  } from 'fumadocs-mdx/config';
  import { z } from 'zod';
  
  export const { docs, meta } = defineDocs({
    docs: {
      schema: frontmatterSchema.extend({
        preview: z.string().optional(),
        index: z.boolean().default(false),
        /**
         * API routes only
         */
        method: z.string().optional(),
      }),
    },
    meta: {
      schema: metaSchema.extend({
        description: z.string().optional(),
      }),
    },
  });
  
  export const blogs = defineCollections({
    type: 'doc',
    dir: 'content/blogs',
    schema: frontmatterSchema.extend({
      author: z.string(),
      date: z.string().date().or(z.date()).optional(),
    }),
  });
  
  