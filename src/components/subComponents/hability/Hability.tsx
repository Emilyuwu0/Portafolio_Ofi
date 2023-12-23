import Carousel from "../../components/slider/slider";

//skills
import Figma from "../../../assets/Skills/figma.png";
import Zeplin from "../../../assets/Skills/zeplin.png";
import Photoshop from "../../../assets/Skills/photoshop.png";
import Ilustrator from "../../../assets/Skills/ilustrador.png";
import InDesign from "../../../assets/Skills/indesign.png";
import xD from "../../../assets/Skills/xd.png";

export default function Hability() {
  const items = [
    <div >
      <h1 className="text-center text-2xl font-semibold sm:mb-20 mb-10">
        UI/UX 🎀
      </h1>
      <div className="flex justify-center">
        <img src={Figma.src} className="w-40 h-40 ml-4" />
        <img src={Zeplin.src} className="w-40 h-40 ml-4" />
        <img src={Photoshop.src} className="w-40 h-40 ml-4" />
        <img src={Ilustrator.src} className="w-40 h-40 ml-4" />
        <img src={xD.src} className="w-40 h-40 ml-4" />
      </div>
    </div>,
    <>
      {" "}
      <h1 className="text-center text-2xl font-semibold sm:mb-20 mb-10">
        FRONTEND🎡
      </h1>
      <div className="flex justify-center">
        <img src={Figma.src} className="w-40 h-40 ml-4" />
        <img src={Zeplin.src} className="w-40 h-40 ml-4" />
        <img src={Photoshop.src} className="w-40 h-40 ml-4" />
        <img src={Ilustrator.src} className="w-40 h-40 ml-4" />
        <img src={xD.src} className="w-40 h-40 ml-4" />
      </div>
    </>,
    <>
      {" "}
      <h1 className="text-center text-2xl font-semibold sm:mb-20 mb-10">
        CONTROL DE VERSIONES 🧿
      </h1>
      <div className="flex justify-center">
        <img src={Figma.src} className="w-40 h-40 ml-4" />
        <img src={Zeplin.src} className="w-40 h-40 ml-4" />
        <img src={Photoshop.src} className="w-40 h-40 ml-4" />
        <img src={Ilustrator.src} className="w-40 h-40 ml-4" />
        <img src={xD.src} className="w-40 h-40 ml-4" />
      </div>
    </>,
    <>
      <h1 className="text-center text-2xl font-semibold sm:mb-20 mb-10">
        WEB SERVICES🔮
      </h1>
      <div className="flex justify-center">
        <img src={Figma.src} className="w-40 h-40 ml-4" />
      </div>
    </>,
    <>
      <h1 className="text-center text-2xl font-semibold sm:mb-20 mb-10">
        ENTRE OTROS...
      </h1>
      <div className="flex justify-center">
        <img src={Figma.src} className="w-40 h-40 ml-4" />
      </div>
    </>,
  ];
  const autoplayInterval = 3000;
  return (
    <div className="bg-colorSecondary">
    <div className="text-white sm:p-40 p-2 '">
      <h1 className="text-3xl text-center font-medium z-40 sm:mb-40 mb-20">
        {" "}
        Habilidades{" "}
      </h1>
      <div>
        <Carousel items={items} autoplayInterval={autoplayInterval} />
      </div>
    </div></div>
  );
}
