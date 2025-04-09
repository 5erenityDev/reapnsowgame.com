import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="text-center flex-col gap-[32px] items-center sm:items-start">
        <Image
              src="/images/site/ReapWhatYouSowLogo.png"
              alt="Reap What You Sow"
              style={{ width: '50%', height: 'auto' , display: 'block', margin: 'auto'}}
              width={960}
              height={270}
              unoptimized
              priority
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className="text-[300%] drop-shadow-[0_3px_1px_rgba(97,61,37,1)] py-10">Welcome to the farm!</h2>
        <h3 className="text-[100%] drop-shadow-[0_2px_1px_rgba(97,61,37,1)]">Releasing 2026 (probably)</h3>
      </main>
    </div>
  );
}
