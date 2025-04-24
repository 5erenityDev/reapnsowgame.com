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
        <div className = "min-h-screen bg-[url(/images/site/background.png)] bg-[auto_15vw]">
          <div className = "flex-grow bg-[url(/images/site/inner-background.png)] bg-[auto_4vw] mx-[0] lg:mx-[5vw]">

            <header className = "bg-[url(/images/site/background.png)] bg-[auto_15vw]">
              <div className="">
                <a href="/">
                  <Image
                    src="/images/site/ReapWhatYouSowLogo.png"
                    alt="Button"
                    style={{ width: '20%', height: 'auto' , display: 'inline-block', margin: 'auto'}}
                    width={1280}
                    height={640}
                    
                    priority
                  />
                </a>
                <a href="/story">
                  <Image
                    src="/images/site/navigation/sign-story.png"
                    alt="story"
                    style={{ width: '20%', height: 'auto' , display: 'inline-block', margin: 'auto'}}
                    width={1280}
                    height={640}
                    
                    priority
                  />
                </a>
                <a href="/gameplay">
                  <Image
                    src="/images/site/navigation/sign-gameplay.png"
                    alt="gameplay"
                    style={{ width: '20%', height: 'auto' , display: 'inline-block', margin: 'auto'}}
                    width={1280}
                    height={640}
                    
                    priority
                  />
                </a>
                <a href="/characters">
                  <Image
                    src="/images/site/navigation/sign-characters.png"
                    alt="characters"
                    style={{ width: '20%', height: 'auto' , display: 'inline-block', margin: 'auto'}}
                    width={1280}
                    height={640}
                    
                    priority
                  />
                </a>
                <a href="/support">
                  <Image
                    src="/images/site/navigation/sign-support.png"
                    alt="Support"
                    style={{ width: '20%', height: 'auto' , display: 'inline-block', margin: 'auto'}}
                    width={1280}
                    height={640}
                    
                    priority
                  />
                </a>
              </div>
            </header>

            <br/>
            <br/>
            
            <div className="min-h-screen text-[200%]">
              {children}
            </div>
            
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-[url(/images/site/footer-background.png)] bg-[auto_4vw] h-20 ">
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
          </div>
        </div>
        <Analytics />
      </body>
      
    </html>
  );
}
