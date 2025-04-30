import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="text-center flex-col gap-[32px] items-center sm:items-start">


        <h2 className="text-[300%] py-10">Welcome to the farm!</h2>
        <Image
            src="/images/renders/returnTeaser.png"
            alt="Reap What You Sow"
            style={{ width: '50%', height: 'auto' , display: 'block', margin: 'auto'}}
            width={1024}
            height={896}
            unoptimized
        />
        <h3 className="text-[100% py-10">Development has resumed!</h3>
      </main>
    </div>
  );
}
