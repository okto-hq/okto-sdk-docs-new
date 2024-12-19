import { createMDX } from 'fumadocs-mdx/next';
import { withContentCollections } from '@content-collections/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

// Chain the middleware functions
export default withContentCollections(withMDX(config));
