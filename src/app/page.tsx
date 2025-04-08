import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-[500%] drop-shadow-[0_5px_1px_rgba(97,61,37,1)]">Reap What You Sow</h1>
        <h2 className="text-[300%] drop-shadow-[0_3px_1px_rgba(97,61,37,1)] py-10">Welcome to the farm!</h2>
        <h3 className="text-[100%] drop-shadow-[0_2px_1px_rgba(97,61,37,1)]">Releasing 2026 (probably)</h3>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center drop-shadow-[0_1px_1px_rgba(97,61,37,1)]">
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
  );
}
