import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IAS Coaching',
  description: 'Created by Sai and Akhilesh'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}