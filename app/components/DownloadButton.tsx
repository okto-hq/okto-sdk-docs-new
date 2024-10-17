import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
    <path d="M8 1C8.27614 1 8.5 1.22386 8.5 1.5V9.293L10.6464 7.14645C10.8417 6.95118 11.1583 6.95118 11.3536 7.14645C11.5488 7.34171 11.5488 7.65829 11.3536 7.85355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L4.64645 7.85355C4.45118 7.65829 4.45118 7.34171 4.64645 7.14645C4.84171 6.95118 5.15829 6.95118 5.35355 7.14645L7.5 9.293V1.5C7.5 1.22386 7.72386 1 8 1Z"/>
    <path d="M2 10.5C2 10.2239 2.22386 10 2.5 10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V10.5ZM3 11V13H13V11H3Z"/>
  </svg>

);

const DownloadButton = () => {
  return (
    <Button
      variant="outline" size="icon" className='dark:hover:bg-gray-700 dark:hover:text-[#7C8FFF] rounded-full hover:bg-[#F5F6FE] hover:text-[#5166EE]'
      asChild
    >
      <Link href="/docs/brand-kit"><DownloadIcon/></Link>
    </Button>
  );
};

export default DownloadButton;