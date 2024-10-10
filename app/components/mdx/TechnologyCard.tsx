import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface TechnologyCardProps {
    icon: React.ReactNode
    title: string
    subtitle: string
    link: string
}

export default function TechnologyCard({ icon, title, subtitle, link }: TechnologyCardProps = {
    icon: <div className="w-6 h-6 bg-black rounded-full" />,
    title: "Technology",
    subtitle: "for something",
    link: "#"
}) {
    return (
        <Link
            href={link}
            className="block no-underline w-full max-w-sm group"
        >
            <Card className="hover:bg-[#e7eafd] bg-[#F5F6FE] dark:bg-gray-800 transition-colors duration-300 rounded-xl shadow-sm hover:shadow-md border-none">
                <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg text-[#161616] dark:text-white">
                            {icon}
                        </div>
                        <div className="flex flex-col text-[#161616] dark:text-white">
                            <div className="font-semibold text-lg text-[foreground] dark:text-white">
                                {title}
                            </div>
                            <div className="text-[#707070] dark:text-gray-300 text-sm">
                                {subtitle}
                            </div>
                        </div>
                    </div>
                    <ArrowUpRight className="text-[#5166EE] dark:text-[#7C8FFF]" />
                </CardContent>
            </Card>
        </Link>
    )
}