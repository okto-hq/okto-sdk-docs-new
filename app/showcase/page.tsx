import { Link as ULink, Tooltip } from "@nextui-org/react"
import { Button } from "@/components/ui/button";
import Image, { type StaticImageData } from 'next/image';
import DisbursalApp from "@/public/images/DisbursalApp.png"
import Lifafa from "@/public/images/Lifafa.png"
import TelegramBot from "@/public/images/TelegramBot.png"
import Stan from "@/public/images/Stan.webp"
import { DollarSign } from 'lucide-react';
import Oktogram from "@/public/images/Oktogram.png";
import Catoff from "@/public/images/Catoff.png";
import { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";

const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.3332 0.666748V1.33341C3.3332 0.666748 3.33369 0.666748 3.33418 0.666749L3.33518 0.666751L3.33722 0.66676L3.3415 0.666798L3.35077 0.666962C3.35728 0.667114 3.36443 0.667358 3.37222 0.667723C3.38782 0.668454 3.40597 0.669671 3.42667 0.671612C3.4681 0.675495 3.51958 0.682265 3.58106 0.693792C3.70412 0.716866 3.86629 0.758824 4.06728 0.834195C4.42304 0.967606 4.89909 1.20517 5.49569 1.62701C7.15181 1.34666 8.84792 1.34666 10.504 1.62701C11.1006 1.20517 11.5767 0.967606 11.9324 0.834195C12.1334 0.758824 12.2956 0.716866 12.4187 0.693792C12.4801 0.682265 12.5316 0.675495 12.5731 0.671612C12.5938 0.669671 12.6119 0.668454 12.6275 0.667723C12.6353 0.667358 12.6424 0.667114 12.649 0.666962L12.6582 0.666798L12.6625 0.66676L12.6645 0.666751L12.6655 0.666749C12.666 0.666748 12.6665 0.666748 12.6665 1.33341V0.666748C12.974 0.666748 13.2415 0.876989 13.3143 1.1757C13.5026 1.94917 13.5235 2.75255 13.3771 3.53268C13.8348 4.27853 14.0516 5.14394 13.9998 6.02129C13.9896 8.37048 12.2868 9.81569 10.4124 10.218C10.6398 10.7898 10.7294 11.4127 10.6665 12.0352V14.6667C10.6665 15.0349 10.3681 15.3334 9.99986 15.3334C9.63167 15.3334 9.3332 15.0349 9.3332 14.6667V12.0001C9.3332 11.9755 9.33456 11.9509 9.33727 11.9265C9.41069 11.2653 9.22112 10.6018 8.80949 10.0793C8.65148 9.87867 8.62193 9.60543 8.73342 9.37569C8.84491 9.14595 9.07783 9.00008 9.3332 9.00008C11.084 9.00008 12.6665 7.85658 12.6665 6.00008C12.6665 5.98588 12.667 5.97168 12.6679 5.9575C12.7114 5.27703 12.5213 4.60925 12.1244 4.05474C12.0114 3.89689 11.9729 3.69764 12.0188 3.50904C12.1234 3.07947 12.1602 2.63781 12.1293 2.19973C11.8667 2.32636 11.5124 2.53237 11.0665 2.86675C10.9167 2.97913 10.7265 3.02329 10.5425 2.98844C8.86445 2.67063 7.13528 2.67063 5.45725 2.98844C5.27323 3.02329 5.08303 2.97913 4.9332 2.86675C4.48236 2.52862 4.12513 2.32176 3.86166 2.1955C3.82784 2.63137 3.86671 3.07082 3.97827 3.49847C4.02828 3.69014 3.99045 3.89412 3.87505 4.05512C3.47948 4.60703 3.28748 5.27901 3.33178 5.9566C3.33272 5.97107 3.3332 5.98557 3.3332 6.00008C3.3332 7.85658 4.91575 9.00008 6.66653 9.00008C6.9225 9.00008 7.15587 9.14664 7.26704 9.37721C7.37821 9.60777 7.34755 9.88163 7.18815 10.0819C6.98198 10.3409 6.83003 10.6353 6.74128 10.9485C6.65189 11.264 6.62523 11.5968 6.66232 11.9253C6.66512 11.9501 6.66653 11.9751 6.66653 12.0001V14.6667C6.66653 15.0349 6.36805 15.3334 5.99986 15.3334C5.63167 15.3334 5.3332 15.0349 5.3332 14.6667V12.0358C5.28332 11.5502 5.32475 11.0569 5.45844 10.585C5.49386 10.46 5.53567 10.3373 5.58356 10.2172C3.71075 9.81377 2.0103 8.36908 1.99991 6.02172C1.94726 5.14749 2.16488 4.28064 2.61955 3.53748C2.46223 2.7523 2.48509 1.94341 2.68812 1.16513C2.7647 0.87158 3.02982 0.666748 3.3332 0.666748Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0.666992 10.6667C0.666992 10.2985 0.965469 10 1.33366 10C1.91058 10 2.33554 10.2963 2.63849 10.5582C2.76667 10.669 2.89407 10.7929 3.00791 10.9036C3.02814 10.9233 3.04795 10.9426 3.06725 10.9613C3.20253 11.0923 3.32645 11.209 3.45629 11.313C3.70867 11.5152 3.96183 11.6516 4.27732 11.6932C4.59793 11.7355 5.05671 11.6892 5.73007 11.3906C6.06665 11.2413 6.4605 11.3932 6.60976 11.7297C6.75902 12.0663 6.60716 12.4602 6.27058 12.6094C5.4406 12.9775 4.73105 13.0979 4.10312 13.0151C3.47007 12.9317 2.99448 12.6515 2.62269 12.3536C2.44045 12.2077 2.27843 12.0535 2.13952 11.9189C2.11624 11.8964 2.09381 11.8746 2.07209 11.8535C1.95736 11.742 1.86251 11.6498 1.76653 11.5668C1.53927 11.3704 1.4234 11.3333 1.33366 11.3333C0.965469 11.3333 0.666992 11.0349 0.666992 10.6667Z" />
    </svg>
);

const ReactLogo = () => (
    <svg width="20" height="20" fill="#ffffff" viewBox="-51.2 -51.2 614.40 614.40" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5_logos</title><path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z"></path><path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z"></path></g></svg>
)

const ApiLogo = () => (
    <svg width="20" height="20" fill="#fff" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>API</title><path d="M8,9H4a2,2,0,0,0-2,2V23H4V18H8v5h2V11A2,2,0,0,0,8,9ZM4,16V11H8v5Z" transform="translate(0 0)"></path><polygon points="22 11 25 11 25 21 22 21 22 23 30 23 30 21 27 21 27 11 30 11 30 9 22 9 22 11"></polygon><path d="M14,23H12V9h6a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H14Zm0-7h4V11H14Z" transform="translate(0 0)"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" ></rect></g></svg>
)

const FlutterLogo = () => (
    <svg width="20" height="20" fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>flutter</title> <path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"></path> </g></svg>
)

const LinkLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
)

interface ShowcaseObject {
    image?: StaticImageData;
    name: string;
    url: string;
    githubUrl: string;
    sdk: ReactNode;
    sdkName: string;
}

export const metadata: Metadata = {
    title: 'Showcase',
    description: 'Cool apps made by Okto',
}

export default function Showcase() {
    const showcases: ShowcaseObject[] = [
        {
            image: DisbursalApp,
            name: 'Disbursal App',
            url: 'https://okto-batch-token-disbursal-app.vercel.app/',
            githubUrl: 'https://github.com/okto-hq/okto-batch-token-disbursal-app',
            sdk: <ReactLogo />,
            sdkName: 'React'
        },
        {
            image: Lifafa,
            name: 'Lifafa',
            url: 'https://www.lifafa.fun/',
            githubUrl: 'https://github.com/okto-hq/okto-sdk-react-example-lifafa',
            sdk: <ReactLogo />,
            sdkName: 'React'
        },
        {
            image: TelegramBot,
            name: 'Telegram Trading Bot',
            url: 'https://t.me/oktron_bot',
            githubUrl: 'https://github.com/ProgramCpp/okotron',
            sdk: <ApiLogo />,
            sdkName: 'API'
        },
        {
            image: Stan,
            name: 'Stan',
            url: 'https://play.google.com/store/apps/details?id=com.getstan',
            githubUrl: '#',
            sdk: <ReactLogo />,
            sdkName: 'React Native'
        },
        {
            image: Oktogram,
            name: 'Oktogram',
            url: 'https://oktogram.ujwl.in/',
            githubUrl: 'https://youtu.be/d0VWSzRpm7U',
            sdk: <ReactLogo />,
            sdkName: 'React'
        },
        {
            image: Catoff,
            name: 'Catoff',
            url: 'https://www.catoff.xyz/',
            githubUrl: '#',
            sdk: <ReactLogo />,
            sdkName: 'React Native'
        },
        {
            name: 'GCaller',
            url: 'https://gcaller.in/',
            githubUrl: '#',
            sdk: <ReactLogo />,
            sdkName: 'React Native'
        },
    ];

    return (
        <div>
            <div className="flex justify-between mx-16 mt-20">
                <div className="text-6xl font-bold">
                    Cool Apps <br />
                    Made with Okto
                </div>
                <div className="flex items-center gap-4">
                    <ULink href="https://teamcoindcx.typeform.com/to/CvPAQNAU" className="text-inherit">
                        <Button className="flex gap-1 rounded-full" variant="outline" >
                            <DollarSign size={17} /> Apply for Okto Grants
                        </Button>
                    </ULink>
                    <ULink href="https://docs.google.com/document/d/1zDPUZoHrI4hpdOUgINWkILJJQPrOi3VqGbd2dpyIrdM/edit?usp=sharing" className="text-inherit">
                        <Button className="flex gap-1 rounded-full" variant="outline" >
                            <DollarSign size={17} /> Hack Ideas
                        </Button>
                    </ULink>
                    <ULink href="https://forms.gle/VN19AYHnvm7V5qe2A" className="text-inherit">
                        <Button className="flex gap-1 rounded-full" variant="outline" >
                            <DollarSign size={17} /> Add your project
                        </Button>
                    </ULink>
                </div>
            </div>
            <div className="mt-12 pb-20 mx-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {showcases.map((showcase) => (
                    <ShowcaseItem key={showcase.url} {...showcase} />
                ))}
            </div>
        </div>
    )
}

function ShowcaseItem({
    name,
    url,
    image,
    githubUrl,
    sdk,
    sdkName
}: ShowcaseObject): React.ReactElement {
    if (image) {
        return (
            <div
                className="relative flex aspect-[1.91/1] flex-col overflow-hidden rounded-2xl border transition-all hover:border-fd-primary/30"
            >
                <Image
                    alt="Preview"
                    src={image}
                    placeholder="blur"
                    fill
                    sizes="100vw, (min-width: 750px) 500px"
                />
                <p className="z-[2] mt-auto bg-black p-4 text-sm font-medium text-white items-center flex justify-between">
                    <span className="flex gap-2">
                        <Tooltip
                            placement="bottom"
                            content={sdkName}
                            color="foreground"
                        >
                            {sdk}
                        </Tooltip>
                        <span>{name}</span>
                    </span>
                    <span>
                        <Button size="icon" variant="ghost" >
                            <Link href={url}>
                                <LinkLogo />
                            </Link>
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Link href={githubUrl}>
                                <GitHubIcon />
                            </Link>
                        </Button>
                    </span>
                </p>
            </div>
        );
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex aspect-[1.91/1] flex-col rounded-2xl border border-transparent p-8 text-center shadow-fd-primary/20 transition-all hover:shadow-fd-primary/30"
            style={{
                backgroundImage:
                    'radial-gradient(closest-side at center, hsl(var(--background)) 89%, transparent 90%),' +
                    'conic-gradient(from 0deg, hsl(var(--background)) 120deg, hsl(var(--primary)), hsl(var(--background)) 240deg),' +
                    'linear-gradient(to right bottom, black, rgb(200,200,200), black)',
                backgroundOrigin: 'border-box',
                boxShadow: 'inset 0px 12px 28px 4px var(--tw-shadow-color)',
                backgroundClip: 'padding-box, padding-box, border-box',
            }}
        >
            <p className="mb-6 text-fd-muted-foreground">{new URL(url).hostname}</p>
            <p className="text-3xl font-semibold">{name}</p>
        </a>
    );
}

function createMetadata(arg0: { title: string; description: string; openGraph: { url: string; }; }) {
    throw new Error("Function not implemented.");
}
