
import Image from "next/image";
const GameplayPage = () => {
  return (
    <div className="">
      <main className="text-center flex-col gap-[32px] items-center sm:items-start">
          <p>Horror Farming Game</p>
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
};

export default GameplayPage;