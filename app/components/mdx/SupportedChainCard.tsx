import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Token {
    name: string;
    icon: string;
}

interface Resources {
    [linkName: string]: string;
}

interface Testnet {
    [linkName: string]: string;
}

interface SupportedChainCardProps {
    chainIcon?: string;
    chainName?: string;
    tokens?: Token[];
    resources?: Resources;
    supportedTestnet?: Testnet;
}

export default function SupportedChainCard({
    chainIcon = "/images/polygon-logo.svg",
    chainName = "Polygon",
    tokens = [
        { name: "POL", icon: "/images/polygon-logo.svg" },
        { name: "USDT", icon: "/images/polygon-logo.svg" },
        { name: "USDC", icon: "/images/polygon-logo.svg" },
    ],
    resources = {
        "Solidity": "#",
        "Remix": "#",
        "Hardhat": "#",
        "OpenZeppelin": "#",
    },
    supportedTestnet = {
        "Polygon Amoy Testnet": "#",
    },
}: SupportedChainCardProps) {
    return (
        <Card className="bg-[#F5F6FE] dark:bg-[#121212] rounded-2xl shadow-sm border-none mx-auto w-full">
            <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start">
                    <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
                        <img src={chainIcon} alt={`${chainName} logo`} className="w-12 h-12 m-0 pb-2" />
                        <div className="text-xl sm:text-2xl font-semibold">{chainName}</div>
                    </div>
                    <div className="w-full sm:w-3/4 flex flex-col">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                            <div className="w-full sm:w-1/2 bg-[#FFFFFF] rounded-xl p-4 dark:bg-[#0D0D0D]">
                                <div className="text-base sm:text-lg font-semibold mb-2">Supported Tokens</div>
                                <div className="flex flex-wrap gap-2">
                                    {tokens.map((token, index) => (
                                        <Button variant="outline" className="rounded-full text-xs flex gap-2 pl-1" key={index} size="sm">
                                            <img src={token.icon} alt={token.name} className="w-5 h-5 m-0" /> {token.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 bg-[#FFFFFF] rounded-xl p-4 dark:bg-[#0D0D0D]">
                                <div className="text-base sm:text-lg font-semibold mb-2">Supported Testnet</div>
                                {Object.entries(supportedTestnet).map(([name, link], index) => (
                                    <Button variant="outline" className="rounded-full text-xs flex gap-2 pl-1 dark:bg-[#0D0D0D]" key={index} size="sm">
                                        <img src={chainIcon} alt={chainName} className="w-5 h-5 m-0 dark:bg-[#0D0D0D]" />
                                        <Link href={link} className="py-1 dark:text-white dark:bg-[#0D0D0D] bg-white text-xs rounded-full text-black hover:bg-gray-100 transition-colors duration-200 flex items-center no-underline">
                                            {name}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-6 bg-[#FFFFFF] rounded-xl p-4 dark:bg-[#0D0D0D]">
                            <div className="text-base sm:text-lg font-semibold mb-2">Resources</div>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(resources).map(([name, link], index) => (
                                    <Button key={index} variant="outline" className="rounded-full flex gap-1 dark:bg-[#0D0D0D]" size="sm">
                                        <Link href={link} className="py-1 dark:text-white dark:bg-[#0D0D0D] bg-white rounded-full hover:bg-gray-100 text-black transition-colors duration-200 flex items-center no-underline">
                                            {name}
                                            <ArrowUpRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}