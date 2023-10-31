import ImgHeader from "../../assets/Imgs/9193346.png";
import "./hero.scss";
export default function Hero() {
  return (
    <header className="p-10 background-image-color bg-white ">
      <div className=" mx-auto px-4 flex flex-col lg:flex-row items-center mb-20">
        <div className="lg:w-1/2">
          <div className="sm:mt-28 mt-2 sm:ml-12 mt:ml-2  ">
            <h1 className="text-6xl font-extrabold sm:text-left text-center">
              Emily Orduz
            </h1>
            <span className="sm:flex block text-2xl mt-6  sm:text-left text-center">
              <h4 className="text-pink-500  font-medium">Frontend </h4>
              <h4 className="ml-2  font-medium"> Developer</h4>
            </span>
            <button className="bg-pink-400 py-2 px-6 rounded-3xl text-white mt-10 text-lg sm:ml-0 m-auto block">
              Sobre mí
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 z-30">
          <img src={ImgHeader.src} className="" />
        </div>
      </div>
      <div className=" background-hero"></div>
    </header>
  );
}
