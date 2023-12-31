import './globals.css'
import {Figtree} from 'next/font/google'
import React from "react";

const font = Figtree({subsets: ['latin']})

export const metadata = {
    title: 'Spotify',
    description: 'Spotify Clone :)',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={font.className}>{children}</body>
        </html>
    )
}
