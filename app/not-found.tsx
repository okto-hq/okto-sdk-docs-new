"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { useEffect } from 'react';


export default function NotFound() {

    return (
        <div>
            <div className='text-center h-screen flex flex-col justify-center items-center'>
                <div className='text-LG md:text-3xl'>
                    Oops<span className='text-6xl md:text-9xl'>404!</span>
                </div>Page Not Found!
                <div>
                    The page you are looking for does not exist.
                </div>
                <Link href='/'>
                    <Button className='mt-4'>
                        Go to Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}