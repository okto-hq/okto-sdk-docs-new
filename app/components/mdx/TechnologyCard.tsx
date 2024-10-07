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
            <Card className="hover:bg-[#e7eafd] bg-[#F5F6FE] transition-colors duration-300 rounded-xl shadow-sm hover:shadow-md border-none">
                <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg text-[#161616]">
                            {icon}
                        </div>
                        <div className="flex flex-col text-[#161616]">
                            <div className="font-semibold text-lg text-[foreground]">
                                {title}
                            </div>
                            <div className="text-[#707070] text-sm">
                                {subtitle}
                            </div>
                        </div>
                    </div>
                    <ArrowUpRight className="text-[#5166EE]" />
                </CardContent>
            </Card>
        </Link>
    )
}