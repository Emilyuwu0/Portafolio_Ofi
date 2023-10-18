import ImgHeader from "../../assets/Imgs/uwu.png";
import "./hero.scss";
export default function Hero() {
  return (
    <div className="h-96">
      <div className="grid grid-cols-2 gap-4 p-20">
        <div className="mt-48 ml-12">
          <h1 className="text-5xl font-bold">Emily Orduz</h1>
          <span className="flex text-2xl mt-8">
            <h4 className="text-purple-600  font-medium">Frontend </h4>{" "}
            <h4 className="ml-2  font-medium"> Developer</h4>
          </span>
          <button className="bg-purple-600 py-2 px-4 rounded-2xl text-white mt-10">
            Sobre mí
          </button>
        </div>

        <div>
          <img src={ImgHeader.src} className="background-image-color" />
        </div>
      </div>
    </div>
  );
}
