"use client"

import Image, { type StaticImageData } from 'next/image';
import { ReactNode, useState } from "react";
import Link from "next/link";
import { Link as ULink, Tooltip } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DollarSign } from 'lucide-react';

// --- Icons ---
const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.3332 0.666748V1.33341C3.3332 0.666748 3.33369 0.666748 3.33418 0.666749L3.33518 0.666751L3.33722 0.66676L3.3415 0.666798L3.35077 0.666962C3.35728 0.667114 3.36443 0.667358 3.37222 0.667723C3.38782 0.668454 3.40597 0.669671 3.42667 0.671612C3.4681 0.675495 3.51958 0.682265 3.58106 0.693792C3.70412 0.716866 3.86629 0.758824 4.06728 0.834195C4.42304 0.967606 4.89909 1.20517 5.49569 1.62701C7.15181 1.34666 8.84792 1.34666 10.504 1.62701C11.1006 1.20517 11.5767 0.967606 11.9324 0.834195C12.1334 0.758824 12.2956 0.716866 12.4187 0.693792C12.4801 0.682265 12.5316 0.675495 12.5731 0.671612C12.5938 0.669671 12.6119 0.668454 12.6275 0.667723C12.6353 0.667358 12.6424 0.667114 12.649 0.666962L12.6582 0.666798L12.6625 0.66676L12.6645 0.666751L12.6655 0.666749C12.666 0.666748 12.6665 0.666748 12.6665 1.33341V0.666748C12.974 0.666748 13.2415 0.876989 13.3143 1.1757C13.5026 1.94917 13.5235 2.75255 13.3771 3.53268C13.8348 4.27853 14.0516 5.14394 13.9998 6.02129C13.9896 8.37048 12.2868 9.81569 10.4124 10.218C10.6398 10.7898 10.7294 11.4127 10.6665 12.0352V14.6667C10.6665 15.0349 10.3681 15.3334 9.99986 15.3334C9.63167 15.3334 9.3332 15.0349 9.3332 14.6667V12.0001C9.3332 11.9755 9.33456 11.9509 9.33727 11.9265C9.41069 11.2653 9.22112 10.6018 8.80949 10.0793C8.65148 9.87867 8.62193 9.60543 8.73342 9.37569C8.84491 9.14595 9.07783 9.00008 9.3332 9.00008C11.084 9.00008 12.6665 7.85658 12.6665 6.00008C12.6665 5.98588 12.667 5.97168 12.6679 5.9575C12.7114 5.27703 12.5213 4.60925 12.1244 4.05474C12.0114 3.89689 11.9729 3.69764 12.0188 3.50904C12.1234 3.07947 12.1602 2.63781 12.1293 2.19973C11.8667 2.32636 11.5124 2.53237 11.0665 2.86675C10.9167 2.97913 10.7265 3.02329 10.5425 2.98844C8.86445 2.67063 7.13528 2.67063 5.45725 2.98844C5.27323 3.02329 5.08303 2.97913 4.9332 2.86675C4.48236 2.52862 4.12513 2.32176 3.86166 2.1955C3.82784 2.63137 3.86671 3.07082 3.97827 3.49847C4.02828 3.69014 3.99045 3.89412 3.87505 4.05512C3.47948 4.60703 3.28748 5.27901 3.33178 5.9566C3.33272 5.97107 3.3332 5.98557 3.3332 6.00008C3.3332 7.85658 4.91575 9.00008 6.66653 9.00008C6.9225 9.00008 7.15587 9.14664 7.26704 9.37721C7.37821 9.60777 7.34755 9.88163 7.18815 10.0819C6.98198 10.3409 6.83003 10.6353 6.74128 10.9485C6.65189 11.264 6.62523 11.5968 6.66232 11.9253C6.66512 11.9501 6.66653 11.9751 6.66653 12.0001V14.6667C6.66653 15.0349 6.36805 15.3334 5.99986 15.3334C5.63167 15.3334 5.3332 15.0349 5.3332 14.6667V12.0358C5.28332 11.5502 5.32475 11.0569 5.45844 10.585C5.49386 10.46 5.53567 10.3373 5.58356 10.2172C3.71075 9.81377 2.0103 8.36908 1.99991 6.02172C1.94726 5.14749 2.16488 4.28064 2.61955 3.53748C2.46223 2.7523 2.48509 1.94341 2.68812 1.16513C2.7647 0.87158 3.02982 0.666748 3.3332 0.666748Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.666992 10.6667C0.666992 10.2985 0.965469 10 1.33366 10C1.91058 10 2.33554 10.2963 2.63849 10.5582C2.76667 10.669 2.89407 10.7929 3.00791 10.9036C3.02814 10.9233 3.04795 10.9426 3.06725 10.9613C3.20253 11.0923 3.32645 11.209 3.45629 11.313C3.70867 11.5152 3.96183 11.6516 4.27732 11.6932C4.59793 11.7355 5.05671 11.6892 5.73007 11.3906C6.06665 11.2413 6.4605 11.3932 6.60976 11.7297C6.75902 12.0663 6.60716 12.4602 6.27058 12.6094C5.4406 12.9775 4.73105 13.0979 4.10312 13.0151C3.47007 12.9317 2.99448 12.6515 2.62269 12.3536C2.44045 12.2077 2.27843 12.0535 2.13952 11.9189C2.11624 11.8964 2.09381 11.8746 2.07209 11.8535C1.95736 11.742 1.86251 11.6498 1.76653 11.5668C1.53927 11.3704 1.4234 11.3333 1.33366 11.3333C0.965469 11.3333 0.666992 11.0349 0.666992 10.6667Z" />
    </svg>
);

const ReactLogo = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="-51.2 -51.2 614.40 614.40" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5_logos</title><path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z"></path><path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z"></path></g></svg>
)

const ApiLogo = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>API</title><path d="M8,9H4a2,2,0,0,0-2,2V23H4V18H8v5h2V11A2,2,0,0,0,8,9ZM4,16V11H8v5Z" transform="translate(0 0)"></path><polygon points="22 11 25 11 25 21 22 21 22 23 30 23 30 21 27 21 27 11 30 11 30 9 22 9 22 11"></polygon><path d="M14,23H12V9h6a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H14Zm0-7h4V11H14Z" transform="translate(0 0)"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" ></rect></g></svg>
)

const FlutterLogo = () => (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>flutter</title> <path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"></path> </g></svg>
)

const LinkLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

interface ShowcaseObject {
    image?: StaticImageData;
    name: string;
    url: string;
    githubUrl: string;
    sdk: ReactNode;
    sdkName: string;
    description?: string;
    videoUrl?: string;
    demoUrl?: string;
}

function ShowcaseCard({ showcase, onOpen }: { showcase: ShowcaseObject; onOpen: (showcase: ShowcaseObject) => void }) {
    return (
        <Card 
            className="group relative overflow-hidden hover:border-primary/30 transition-all duration-200 cursor-pointer w-full"
            onClick={() => onOpen(showcase)}
        >
            <CardContent className="p-0 aspect-video relative">
                {showcase.image && (
                    <Image
                        alt={showcase.name}
                        src={showcase.image}
                        placeholder="blur"
                        fill
                        sizes="100vw, (min-width: 750px) 500px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}
            </CardContent>

            <CardFooter className="flex flex-col p-2">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Tooltip placement="bottom" content={showcase.sdkName} color="foreground">
                            {showcase.sdk}
                        </Tooltip>
                        <h3 className="font-medium text-sm truncate">{showcase.name}</h3>
                    </div>

                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href={showcase.url} target="_blank" rel="noreferrer noopener" onClick={e => e.stopPropagation()}>
                            <Button size="icon" variant="ghost" className="h-8 w-8">
                                <LinkLogo />
                            </Button>
                        </Link>
                        {showcase.githubUrl !== '#' && (
                            <Link href={showcase.githubUrl} target="_blank" rel="noreferrer noopener" onClick={e => e.stopPropagation()}>
                                <Button size="icon" variant="ghost" className="h-8 w-8">
                                    <GitHubIcon />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

const showcases: ShowcaseObject[] = [
    {
        image: require('@/public/images/Pixiverse.png'),
        name: 'Pixiverse',
        url: 'https://rpg-game-six.vercel.app',
        githubUrl: 'https://github.com/0xClint/Pixiverse',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Pixiverse is an immersive 2D open-world game powered by Okto SDK for seamless on-boarding and interactions. It offers an engaging play-to-earn experience, where players can earn rare collectibles by clearing levels in challenging dungeons.\n\nOkto SDK handles all key integrations with smart contracts, manages user authentication through Google OAuth, and handles in-game interactions using raw transaction execute methods.',
        videoUrl: 'https://www.youtube.com/embed/5PhhP2hM_3o'
    },
    {
        image: require('@/public/images/Nixarcade.png'),
        name: 'NIXARCADE',
        url: 'https://nixarcade.fun/',
        githubUrl: 'https://github.com/NIXBLACK11/Nixarcade',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Nixarcade is a social gaming platform where users can enjoy classic board games like Ludo with friends and family. Players can easily sign in through their Google account, contribute SOL, and join private games through unique codes.\n\nUsers can easily log in using their Google account and create an in-game wallet with Okto SDK, enabling them to play games without prior Web3 knowledge.',
        demoUrl: 'https://drive.google.com/file/d/1_MjB4ilZy6zHGz7FFmEYstkupDzt9kJo/view'
    },
    {
        image: require('@/public/images/Gcaller.png'),
        name: 'GCaller',
        url: 'https://gcaller.in/',
        githubUrl: 'https://github.com/Ronakkkkk/G-Caller',
        sdk: <FlutterLogo />,
        sdkName: 'Flutter',
        description: 'A unified spam protection platform powered by ZK compression to prove spam and incentivize users to flag spam. Uses on-chain ZK reputation to verify spam.\n\nOkto Wallet SDK is used as the embedded in-app wallet for authentication, wallet creation, and point distribution.',
        demoUrl: 'https://drive.google.com/file/d/1-3y6JcNnFK9Z2vvvWz_eS2lJbszjTs64/view'
    },
    {
        image: require('@/public/images/Emojipay.png'),
        name: 'Emojipay',
        url: 'https://emojipay.vercel.app/',
        githubUrl: 'https://github.com/0xPasho/emojipay.it',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Send crypto with just emojis. No wallet addresses, no personal info—just your email and a fun, secure emoji handle.\n\nThe platform exclusively uses Okto for account creation, OAuth authentication, sending crypto, viewing portfolio and transaction details, and cross-chain transfers.',
        videoUrl: 'https://www.youtube.com/embed/72yIzyO67xA'
    },
    {
        image: require('@/public/images/Seconds.png'),
        name: 'Seconds',
        url: 'http://seconds.fi',
        githubUrl: 'https://github.com/shah-aman/seconds-fi-backend',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'Empowering savings through digital dollars and high-yield opportunities.\n\nLeverages Okto for creating and managing decentralized wallets for digital dollar savings and high-yield investments.',
        videoUrl: 'https://www.loom.com/embed/7b7de0f6c3da4333b0f2c7d78db320af'
    },
    {
        image: require('@/public/images/Catoff.png'),
        name: 'Catoff',
        url: 'https://www.catoff.xyz/',
        githubUrl: '#',
        sdk: <ReactLogo />,
        sdkName: 'React Native',
        description: 'Catoff is a P2P IRL Challenge Wagering dApp.\n\nIntegrates Okto decentralized wallet to enable seamless account abstraction and streamlined payments, allowing users to deposit funds, place wagers, and receive payouts within the dApp.',
        videoUrl: 'https://www.youtube.com/embed/VtZ2sgXiooU'
    },
    {
        image: require('@/public/images/Sublinks.png'),
        name: 'Sublinks',
        url: 'https://sublinks-frontend.vercel.app/home',
        githubUrl: 'https://github.com/HD-Delta-H/sublinks',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Sublinks is a decentralised solution built on Solana Blockchain which utilises the power of BlockChain Links (Blinks) to help creators post premium content right within Twitter.\n\nUses Okto for creating wallets for creators and enables them to earn money in their created wallet with the ability to transfer to any external wallet.',
        videoUrl: 'https://www.youtube.com/embed/rq9o6qNRNy8'
    },
    {
        image: require('@/public/images/Poynt.png'),
        name: 'Poynt',
        url: 'https://drive.google.com/drive/folders/1_jpVT_uNJa7-uEOBoqw-mlD1UeEI8XuS',
        githubUrl: 'https://github.com/Solana-Poynt',
        sdk: <ReactLogo />,
        sdkName: 'React Native',
        description: 'Poynt is a product that seamlessly blends ride-hailing with in-transit advertising, built on the Solana blockchain. Offers a unique solution that reduces commute costs for passengers through optional ad viewing.\n\nIntegrates with Okto to allow drivers to receive payments directly in the embedded wallet and enables passengers to send crypto directly for payment from the app.',
        videoUrl: 'https://www.youtube.com/embed/mua6LWbo3vA'
    },
    {
        image: require('@/public/images/Stan.webp'),
        name: 'Stan',
        url: 'https://play.google.com/store/apps/details?id=com.getstan',
        githubUrl: '#',
        sdk: <ReactLogo />,
        sdkName: 'React Native',
        description: 'Stan is a mobile application integrated with Okto React Native SDK for seamless wallet management and transactions in the esports fan engagement ecosystem.'
    },
    {
        image: require('@/public/images/Oktogram.png'),
        name: 'Oktogram',
        url: 'https://oktogram.ujwl.in/',
        githubUrl: 'https://github.com/dhruv-colosus/OktoGram',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A messaging app integrated with Okto for wallet functionality and token interactions.\n\nUtilizes Okto wallet and Auth Store with access tokens, transfer feature, portfolio viewing, and wallet management features.',
        videoUrl: 'https://www.loom.com/embed/c8b0436a9e0d4079a27e89046b33827e'
    },
    {
        image: require('@/public/images/OktoDeFiBot.png'),
        name: 'Okto DeFi Bot',
        url: 'https://discord.com/oauth2/authorize?client_id=1293702542072479907&permissions=67584&integration_type=0&scope=bot',
        githubUrl: 'https://github.com/samblackspy/Okto-DeFi-Bot/',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'A Discord bot that allows users to manage their DeFi assets and perform token transfers seamlessly within Discord.\n\nLeverages the Okto SDK to provide an all-in-one platform for managing digital assets within Discord.',
    },
    {
        image: require('@/public/images/DisbursalApp.png'),
        name: 'Disbursal App',
        url: 'https://okto-batch-token-disbursal-app.vercel.app/',
        githubUrl: 'https://github.com/okto-hq/okto-batch-token-disbursal-app',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A batch token disbursal application using Okto SDK.'
    },
    {
        image: require('@/public/images/Lifafa.png'),
        name: 'Lifafa',
        url: 'https://www.lifafa.fun/',
        githubUrl: 'https://github.com/okto-hq/okto-sdk-react-example-lifafa',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A gifting application built with Okto React SDK.'
    },
    {
        image: require('@/public/images/TelegramBot.png'),
        name: 'Telegram Trading Bot',
        url: 'https://t.me/oktron_bot',
        githubUrl: 'https://github.com/ProgramCpp/okotron',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'A Telegram bot enabling DeFi trading actions via Okto API. Used for cross chain token transfers, token swaps and automated token limit orders and copy trading.'
    },
    {
        image: require('@/public/images/BullRun.png'),
        name: 'Bull Run',
        url: 'https://unfold24-psi.vercel.app/',
        githubUrl: 'https://github.com/rk-rishikesh/unfold24',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A decentralized platform utilizing Okto for Chain Abstraction, Gas Abstraction, and Secure Wallet Integration. The platform provides comprehensive integration including a Raw Transaction API and advanced Wallet APIs for seamless blockchain interactions.\n\nFeatures include secure authentication, efficient transaction handling, and intuitive portfolio management.',
        videoUrl: 'https://www.youtube.com/embed/RB-BvEgLAd4'
    },
    {
        image: require('@/public/images/OpenFund.png'),
        name: 'OpenFund',
        url: 'https://openfund.virajbhartiya.com/',
        githubUrl: 'https://github.com/Team-Obviously/OpenFund',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A platform that leverages Okto SDK as an OAuth solution for user authentication and wallet generation. The system maps GitHub IDs with generated wallet addresses to facilitate fund distribution to users, making it accessible even to those new to web3.\n\nIncludes features for seamless cryptocurrency transactions and efficient wallet management.',
        videoUrl: 'https://www.loom.com/embed/421c57e35a5c4a2a8b531fc4473ba16c'
    },
    {
        image: require('@/public/images/AuroraFi.png'),
        name: 'AuroraFi',
        url: 'https://aurora-fi-frontend.vercel.app/',
        githubUrl: 'https://github.com/AuroraFi',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Voice-Activated Multi-Agent Personal Finance & DeFi Platform - Making Web3 Accessible to Everyone. We are leveraging Okto APIs and SDK to facilitate transaction creation, cross-chain wallet management, and secure authentication within our platform. By integrating Okto\'s powerful tools, we enable users to perform seamless transactions, manage assets across multiple blockchains, and authenticate securely, all while providing a streamlined, user-friendly experience. This integration ensures robust functionality and enhances the overall security and efficiency of our platform.',
        videoUrl: 'https://www.youtube.com/embed/1A00_LbsFCM'
    },
    {
        image: require('@/public/images/ProofOfFollower.png'),
        name: 'Proof of Follower (PoF)',
        url: 'https://vanguard-eth.vercel.app/',
        githubUrl: 'https://github.com/mahim37/PoM',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A platform that uses Google Sign-in and Okto\'s embedded wallet functionality for seamless web3 interactions. Features Raw Transaction execution and easy account address management.\n\nProvides a frictionless onboarding experience through well-integrated wallet and Google authentication.',
        videoUrl: 'https://www.youtube.com/embed/c0cwsH5i-Mc'
    },
    {
        image: require('@/public/images/SuperSplit.png'),
        name: 'SuperSplit',
        url: 'https://super-split.vercel.app/',
        githubUrl: 'https://github.com/Thirumurugan7/Super-Split',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A platform implementing Google Sign-in authentication and ERC-20 token transfers using Okto SDK. The application enables users to read values from the chain and execute write function calls seamlessly.\n\nFeatures integrated wallet functionality and streamlined transaction processes.',
        videoUrl: 'https://www.youtube.com/embed/nurJOwzeU-g'
    },
    {
        image: require('@/public/images/CommitMint.png'),
        name: 'CommitMint',
        url: 'https://commit-mint.vercel.app/home',
        githubUrl: 'https://github.com/an2yea/CommitMint_Unfold24',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Commit-mint is a consumer app designed to get more users to Web3 without the hassle of dealing with complex account addresses and private keys. Okto enabled us to achieve this with social login through Google, instantly creating wallets across chains for the user without any explicit input from them, making the transition very smooth and seamless as compared to a web2 experience.',
        videoUrl: 'https://www.loom.com/embed/1c1b5bbcd23645f2823f3fc9b79a57ba'
    },
    {
        image: require('@/public/images/CryptoMilan.png'),
        name: 'Crypto Milan',
        url: 'https://crypto-milan-react-oup5.vercel.app/',
        githubUrl: 'https://github.com/crypto-unfold2024/crypto-milan-react',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'Crypto Milan revolutionizes event engagement with POAPs (Proof of Attendance Protocol). Integrating geoFencing while circumferencing the area allows attendees to collect exclusive 3D POAPs as proof of participation @ Web3 events with AR/AI, unlocking rewards like discounts, NFTs, or exclusive perks. This incentivizes attendance, strengthens loyalty, and turns events into interactive and rewarding experiences for the community. By building on Okto, Crypto Milan uses its multichain transaction infrastructure to support POAP issuance, reward redemptions, and geofencing functionalities.',
        videoUrl: 'https://www.youtube.com/embed/uL2Ohjx7XHo'
    },
    {
        image: require('@/public/images/EzPortfolioManager.png'),
        name: 'Ez Portfolio Manager',
        url: 'https://github.com/AceVikings/Unfold-24-ace',
        githubUrl: 'https://github.com/AceVikings/Unfold-24-ace/tree/main/TelegramMiniApp',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A personal crypto fund manager for everyone right on Telegram. The app uses Okto\'s embedded wallet and sandbox APIs to transfer tokens and manage in-app wallet for the user.',
        videoUrl: 'https://www.youtube.com/embed/CCMAq3TxtBQ'
    },
    {
        image: require('@/public/images/Intentify.png'),
        name: 'Intentify',
        url: 'https://intention-9s4f.vercel.app',
        githubUrl: 'https://github.com/abelzach/Intention',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'A user entering the Intentify application is authenticated via email OTP using OKTO. An embedded wallet is created for each user, with all on-chain transactions executed using OKTO SDK. The application provides logout functionality through the okto-react-sdk.\n\nKey challenges included executing transactions from the embedded wallet, which was overcome by thorough documentation review. The project focuses on smooth workflows, minimal user clicks, and leveraging gas fee sponsorship.',
        videoUrl: 'https://www.youtube.com/embed/dvc6sWlNMcI?start=191'
    },
    {
        image: require('@/public/images/Web3Games.png'),
        name: 'Web3Games',
        url: 'https://github.com/AceVikings/eth-india-project-2024',
        githubUrl: 'https://github.com/AceVikings/eth-india-project-2024',
        sdk: <ApiLogo />,
        sdkName: 'API',
        description: 'Casual Gaming made safer, profitable, and more fun with a decentralized solution. Web3Games blends gaming technology with AI and DeFi, creating a consumer-focused application where users can play safely and earn passively.\n\nThe platform leverages blockchain technology to provide a unique gaming experience that allows users to earn tokens while enjoying interactive gameplay.',
        videoUrl: 'https://www.youtube.com/embed/DxFuyROEw70'
    },
    {
        image: require('@/public/images/Palgo.png'),
        name: 'PalGo',
        url: 'https://www.palgo.live/',
        githubUrl: 'https://github.com/PalgoDev',
        sdk: <ReactLogo />,
        sdkName: 'React',
        description: 'PalGo is a massively multiplayer real-world 2.5D mobile explorer game inspired by Pokémon Go. Players interact with their surroundings to earn tokens, solving web3 user onboarding through an engaging gameplay experience.\n\nUsers are incentivized to explore real-life locations, battle in arenas, and find orbs to earn in-game tokens that can be converted to ETH. The Okto SDK enables seamless email login and wallet creation, empowering the next generation of web3 users from commercial and retail perspectives.',
        videoUrl: 'https://www.youtube.com/embed/V-oVmB6vDSM'
    }
];

// We will define a specific order of SDK sections.
const sdkSections = ["React", "React Native", "Flutter", "API", "All"];

export default function Showcase() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedShowcase, setSelectedShowcase] = useState<ShowcaseObject | null>(null);
    const [activeTab, setActiveTab] = useState("All");

    const handleOpen = (showcase: ShowcaseObject) => {
        setSelectedShowcase(showcase);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setSelectedShowcase(null);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-16 mt-20 gap-8">
                <div className="text-4xl lg:text-6xl font-bold">
                    Explore Okto-Powered Projects
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <ULink href="https://teamcoindcx.typeform.com/to/CvPAQNAU" className="text-inherit">
                        <Button className="flex gap-1 rounded-full" variant="outline">
                            <DollarSign size={17} /> Apply for Okto Grants
                        </Button>
                    </ULink>
                    <ULink href="https://docs.google.com/document/d/1zDPUZoHrI4hpdOUgINWkILJJQPrOi3VqGbd2dpyIrdM/edit?usp=sharing" className="text-inherit">
                        <Button className="flex gap-1 rounded-full" variant="outline">
                            <DollarSign size={17} /> Hack Ideas
                        </Button>
                    </ULink>
                    <ULink href="https://forms.gle/VN19AYHnvm7V5qe2A" className="text-inherit">
                        <Button className="flex gap-1 rounded-full" variant="outline">
                            <DollarSign size={17} /> Add your project
                        </Button>
                    </ULink>
                </div>
            </div>

            {/* Description and Disclaimer */}
            <div className="mx-4 lg:mx-16 mt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                    Discover innovative applications built by developers worldwide using the Okto SDKs.
                </p>

                <div className="p-4 bg-muted/50 border rounded-lg">
                    <p className="text-sm font-medium">
                        ⚠️ Disclaimer: These are community projects and are not maintained by the Okto team.
                    </p>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-16 mx-4 lg:mx-16">
                <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="mb-8">
                        {sdkSections.map((sdk) => (
                            <TabsTrigger key={sdk} value={sdk} className="px-4">
                                {sdk}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {sdkSections.map((sdkName) => {
                        const filtered = sdkName === "All" 
                            ? showcases 
                            : showcases.filter(sc => sc.sdkName === sdkName);
                            
                        if (filtered.length === 0) return null;

                        return (
                            <TabsContent key={sdkName} value={sdkName}>
                                <div className={`
                                    grid gap-4
                                    grid-cols-1 
                                    min-[400px]:grid-cols-2
                                    sm:grid-cols-2 
                                    md:grid-cols-3 
                                    lg:grid-cols-4 
                                    xl:grid-cols-5
                                    2xl:grid-cols-6
                                    [&>*]:w-full
                                `}>
                                    {filtered.map((showcase) => (
                                        <ShowcaseCard 
                                            key={showcase.url} 
                                            showcase={showcase} 
                                            onOpen={handleOpen}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>

            {/* Project Details Modal */}
            {selectedShowcase && (
                <Dialog open={openDialog} onOpenChange={handleClose}>
                    <DialogContent className="max-w-2xl w-full bg-background rounded-3xl">
                        <DialogHeader className="pb-2">
                            <DialogTitle className="text-2xl font-bold">{selectedShowcase.name}</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col gap-4">
                            {selectedShowcase.videoUrl ? (
                                <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                                    <iframe
                                        src={selectedShowcase.videoUrl}
                                        className="absolute top-0 left-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : selectedShowcase.demoUrl ? (
                                // Show image with Watch Demo button for non-embeddable videos
                                <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                                    {selectedShowcase.image && (
                                        <Image 
                                            src={selectedShowcase.image} 
                                            alt={selectedShowcase.name} 
                                            fill 
                                            className="object-cover" 
                                        />
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                        <Link 
                                            href={selectedShowcase.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Button 
                                                className="flex items-center gap-2"
                                                variant="secondary"
                                            >
                                                <svg 
                                                    width="24" 
                                                    height="24" 
                                                    viewBox="0 0 24 24" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                >
                                                    <polygon points="5 3 19 12 5 21 5 3" />
                                                </svg>
                                                Watch Demo
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                // Fallback to image if no video or demo URL
                                selectedShowcase.image && (
                                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                                        <Image 
                                            src={selectedShowcase.image} 
                                            alt={selectedShowcase.name} 
                                            fill 
                                            className="object-cover" 
                                        />
                                    </div>
                                )
                            )}

                            <div className="flex gap-3">
                                <Link href={selectedShowcase.url} target="_blank" rel="noreferrer noopener">
                                    <Button variant="outline" className="flex gap-2">
                                        <LinkLogo /> Visit Website
                                    </Button>
                                </Link>
                                {selectedShowcase.githubUrl !== '#' && (
                                    <Link href={selectedShowcase.githubUrl} target="_blank" rel="noreferrer noopener">
                                        <Button variant="outline" className="flex gap-2">
                                            <GitHubIcon /> View on GitHub
                                        </Button>
                                    </Link>
                                )}
                            </div>

                            {selectedShowcase.description && (
                                <p className="text-sm text-muted-foreground">
                                    {selectedShowcase.description}
                                </p>
                            )}

                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                <div className="flex items-center gap-1">
                                    {selectedShowcase.sdk}
                                    Built with {selectedShowcase.sdkName}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}