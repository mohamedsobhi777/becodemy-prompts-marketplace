import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Provider from './(Providers)/NextUiProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const monserrat = Montserrat({ subsets: ['latin'], variable: '--font-p' })

export const metadata: Metadata = {
  title: 'Becodemy AI Pormpts Marketplace',
  description: 'A marketplace for AI prompts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monserrat.variable}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
