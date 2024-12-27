import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently Asked Questions about our products and services',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${inter.className} bg-white`}>
      {children}
    </section>
  )
}

