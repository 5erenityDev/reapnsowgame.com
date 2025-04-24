
import Image from "next/image";
const CharactersPage = () => {
  return (
    <div className="">
      <main className="text-center flex-col gap-[32px] items-center sm:items-start">
        <div className="">
          <div className="inline-block mx-[10px]">
            <p></p>
            <Image
              src="/images/renders/characters/Farmer.png"
              alt="Farmer Image"
              style={{ width: '4vw', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
            <p>Farmer</p>
          </div>
          <div className="inline-block mx-[10px]">
            <p>Rana</p>
            <Image
              src="/images/renders/characters/Rana.png"
              alt="Rana Image"
              style={{ width: '4vw', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
            <p>Teacher's Assistant</p>
          </div>
          <div className="inline-block mx-[10px]">
            <p>Hampton</p>
            <Image
              src="/images/renders/characters/Hampton.png"
              alt="Hampton Image"
              style={{ width: '4vw', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
            <p>The Mayor</p>
          </div>
          <div className="inline-block mx-[10px]">
            <p>Guinness</p>
            <Image
              src="/images/renders/characters/Guinness.png"
              alt="Guinness Image"
              style={{ width: '4vw', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
            <p>Rambling Drunk</p>
          </div>
          <div className="inline-block mx-[10px]">
            <p>Iris</p>
            <Image
              src="/images/renders/characters/Iris.png"
              alt="Iris Image"
              style={{ width: '4vw', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
            <p>Goth</p>
          </div>
          <div className="inline-block mx-[10px]">
            <p>Edith</p>
            <Image
              src="/images/renders/characters/Edith.png"
              alt="Edith Image"
              style={{ width: '4vw', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
            <p>Farmer's Market Owner</p>
          </div>
          <div className="inline-block mx-[10px]">
            <p>Dog</p>
            <Image
              src="/images/renders/characters/Dog.png"
              alt="Dog Image"
              style={{ width: '4vw', height: 'auto' , margin: 'auto'}}
              width={320}
              height={480}
            />
            <p>Dog (Dog)</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <h1>And more characters to come! Including: </h1>
          <ul>
            <li>Silas - Gravekeeper</li>
            <li>Sister Cecilia - Nun/Teacher</li>
            <li>Father Lawrence - Priest</li>
            <li>Caspian - Fisherman</li>
            <li>Vivian - Doctor</li>
            <li>Reuben - Taxedermist</li>
            <li>Dante - Iris's Brother</li>
            <li>Mary - Iris's Mom</li>
            <li>Richard - Iris's Dad</li>
            <li>Amelia - Rana's Mom</li>
            <li>Tobias - Rana's Brother</li>
            <li>Miss Sage - Barkeep</li>
            <li>Stakes - Pool Shark</li>
            <li>Leo - Sheriff</li>
            <li>Luke - Deputy</li>
            <li>Blacksmith</li>
            <li>Blacksmith's Daughter</li>
            <li>Wheatley - Cat (Not Dog)</li>
          </ul>
        </div>
        <br/>
        <br/>
      </main>
    </div>
  );
};

export default CharactersPage;