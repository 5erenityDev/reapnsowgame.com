
import Image from "next/image";
const CharactersPage = () => {
  return (
    <div className="">
      <main className="text-center flex-col gap-[32px] items-center sm:items-start">
        <div className="items-start">
          <div className="inline-block">
            <p>Farmer</p>
            <Image
              src="/images/renders/characters/Farmer.png"
              alt="Farmer Image"
              style={{ width: '100%', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
          </div>
          <div className="inline-block">
            <p>Rana</p>
            <Image
              src="/images/renders/characters/Rana.png"
              alt="Rana Image"
              style={{ width: '100%', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
          </div>
          <div className="inline-block">
            <p>Hampton</p>
            <Image
              src="/images/renders/characters/Hampton.png"
              alt="Hampton Image"
              style={{ width: '100%', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
          </div>
          <div className="inline-block">
            <p>Guinness</p>
            <Image
              src="/images/renders/characters/Guinness.png"
              alt="Guinness Image"
              style={{ width: '100%', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
          </div>
          <div className="inline-block">
            <p>Iris</p>
            <Image
              src="/images/renders/characters/Iris.png"
              alt="Iris Image"
              style={{ width: '100%', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
          </div>
          <div className="inline-block">
            <p>Edith</p>
            <Image
              src="/images/renders/characters/Edith.png"
              alt="Edith Image"
              style={{ width: '100%', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CharactersPage;