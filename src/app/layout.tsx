import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "学马仕计算器",
    description: "输入学马仕分数，快速自动计算成绩",
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 1
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
        </html>
    );
}
