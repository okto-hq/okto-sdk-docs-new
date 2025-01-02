"use client"

import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { Link as ULink, Tooltip } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GitHubIcon, LinkLogo, HackIdeasIcon, AddProjectIcon, DollarSignIcon } from './icons';
import { showcases } from './projects';

// SDK type for the tabs
const sdkSections = ["All", "React", "React Native", "Flutter", "API"] as const;

function ShowcaseCard({ showcase, onOpen }: { showcase: (typeof showcases)[0]; onOpen: (showcase: (typeof showcases)[0]) => void }) {
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

export default function Showcase() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedShowcase, setSelectedShowcase] = useState<(typeof showcases)[0] | null>(null);
    const [activeTab, setActiveTab] = useState("All");

    const handleOpen = (showcase: (typeof showcases)[0]) => {
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
                {/* Left Side: Heading and Description */}
                <div className="lg:max-w-2xl">
                    <div className="text-4xl lg:text-6xl font-bold lg:whitespace-nowrap">
                        Explore Okto-Powered Projects
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Discover innovative applications built by developers worldwide using the Okto SDKs.
                    </p>
                </div>

                {/* Right Side: Buttons */}
                <div className="flex lg:flex-col flex-wrap lg:items-end gap-4 lg:ml-auto">
                    <ULink href="https://docs.google.com/document/d/1zDPUZoHrI4hpdOUgINWkILJJQPrOi3VqGbd2dpyIrdM/edit?usp=sharing" className="text-inherit">
                        <Button className="flex gap-2 rounded-full w-60 items-center justify-center" variant="outline">
                            <HackIdeasIcon />
                            Hack Ideas
                        </Button>
                    </ULink>
                    <ULink href="https://forms.gle/VN19AYHnvm7V5qe2A" className="text-inherit">
                        <Button className="flex gap-1 rounded-full w-60" variant="outline">
                            <AddProjectIcon />
                            Add Your Project
                        </Button>
                    </ULink>
                    <ULink href="https://teamcoindcx.typeform.com/to/CvPAQNAU" className="text-inherit">
                        <Button className="flex gap-1 rounded-full w-60" variant="outline">
                            <DollarSignIcon />
                            Apply for Okto Grants
                        </Button>
                    </ULink>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="mx-4 lg:mx-16 mt-4">
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