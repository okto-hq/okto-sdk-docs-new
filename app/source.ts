import { docs, meta, blogs } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});

export const blogSource = loader({
  baseUrl: '/blogs',
  source: createMDXSource(blogs, meta),
});