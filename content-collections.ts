import { defineCollection, defineConfig } from '@content-collections/core';
import {
  createDocSchema,
  transformMDX,
} from '@fumadocs/content-collections/configuration';
 
const blogs = defineCollection({
  name: 'blogs',
  directory: 'content/blogs',
  include: '**/*.mdx',
  schema: createDocSchema,
  transform: transformMDX,
});
 
export default defineConfig({
  collections: [blogs],
});