import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reap What You Sow",
  description: "Welcome to the farm! Reap What You Sow is a N64-inspired horror farming game being built by a team of 3 devs.",
  keywords: ['indie game', 'indie games', 'game development', 'reap what you sow', 'you reap what you sow', 'serenitydev', "prinnypants", "greentigerbeast", 'horror'],
  themeColor: '#04010A',
  icons: {
    icon:'/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  openGraph: {
    type: 'website',
    title: 'Reap What You Sow',
    description: "Welcome to the farm! Reap What You Sow is a N64-inspired horror farming game being built by a team of 3 devs.",
    locale: 'en_US',
    url: 'https://www.reapnsowgame.com/',
    images: [
      {
        url: '/images/site/logo.png',
        width: 400, // Optional: Specify width
        height: 400, // Optional: Specify height
        alt: 'RWYS Logo', // Optional: Specify alt text
      },
    ],
    
  },
  twitter: {
    card: 'summary', // Or 'summary', 'app', 'player'
    title: 'Reap What You Sow',
    description: "Welcome to the farm! Reap What You Sow is a N64-inspired horror farming game being built by a team of 3 devs.",
    site: '@reapnsowgame', // Optional: Your website's Twitter handle
    creator: '@PrinnyPants', // Optional: The creator's Twitter handle
    images: [
      {
        url: '/images/site/logo.png', // Specific image for Twitter
        width: 400, // Optional
        height: 400, // Optional: Twitter often prefers a 16:9 aspect ratio
        alt: 'RWYS Logo', // Optional
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className = "min-h-screen bg-linear-to-t from-[#3E6286] to-[#4D79A6]">
          <div className = "flex-grow bg-night-2 mx-[0] lg:mx-[10vw]">
            {children}

          </div>
        </div>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center drop-shadow-[0_1px_1px_rgba(97,61,37,1)] bg-[#39603F] w-screen h-40">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.youtube.com/@reapnsowgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              YouTube
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://bsky.app/profile/reapnsowgame.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Bluesky
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://x.com/reapnsowgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Twitter
            </a>
          </footer>
        <Analytics />
      </body>
      
    </html>
  );
}
