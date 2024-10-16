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

export default function PersonaCard() {
    return (
        <Card className="hover:bg-[#e7eafd] bg-[#F5F6FE] dark:bg-gray-800 transition-colors duration-300 rounded-xl shadow-sm hover:shadow-md border-none">
            <CardContent className="flex items-center justify-between p-4">
                Okto
            </CardContent>
        </Card>
    )
}