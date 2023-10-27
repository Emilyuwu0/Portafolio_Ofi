import ImgHeader from "../../assets/Imgs/pckawaii.png";
import "./hero.scss";
export default function Hero() {
  return (
    <header className="bg-gray-100 p-10">
      <div className=" mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <div className="sm:mt-48 mt-2 sm:ml-12 ml-2">
            <h1 className="text-5xl font-bold">Emily Orduz</h1>
            <span className="flex text-2xl mt-8">
              <h4 className="text-purple-600  font-medium">Frontend </h4>
              <h4 className="ml-2  font-medium"> Developer</h4>
            </span>
            <button className="bg-purple-600 py-2 px-4 rounded-2xl text-white mt-10">
              Sobre mí
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src={ImgHeader.src} className="background-image-color" />
        </div>
      </div>
    </header>
  );
}
