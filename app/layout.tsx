import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Charan Katkam - AI Developer & Full Stack Engineer',
  description: 'Portfolio of Charan Katkam - Data Science and Full Stack Developer specializing in AI automation, predictive analytics, and scalable web systems.',
  keywords: 'Charan Katkam, AI Developer, Full Stack Developer, Data Science, Machine Learning, Next.js, React, Python',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
