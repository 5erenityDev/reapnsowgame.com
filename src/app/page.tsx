import Image from "next/image";

export default function Home() {
  return (
    <div className="">
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

        <h2 className="text-[300%] drop-shadow-[0_3px_1px_rgba(97,61,37,1)] py-10">Welcome to the farm!</h2>
        <h3 className="text-[100%] drop-shadow-[0_2px_1px_rgba(97,61,37,1)]">Resuming development soon!</h3>
        <br/>
        <Image
              src="/images/renders/playerNight.png"
              alt="Reap What You Sow"
              style={{ width: '50%', height: 'auto' , display: 'block', margin: 'auto'}}
              width={1280}
              height={960}
              unoptimized
        />
        <Image
          src="/images/renders/playerDay.png"
          alt="Reap What You Sow"
          style={{ width: '50%', height: 'auto' , display: 'block', margin: 'auto'}}
          width={1280}
          height={960}
          unoptimized
        />
        <Image
          src="/images/renders/playerSanity.png"
          alt="Reap What You Sow"
          style={{ width: '50%', height: 'auto' , display: 'block', margin: 'auto'}}
          width={1280}
          height={960}
          unoptimized
        />
      </main>
    </div>
  );
}
