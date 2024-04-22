import { useState } from "react";
import "./hability.css";

import ImgGif from "../../../assets/Imgs/kitty.png";

const CarouselItem = ({ item }) => {
  return (
    <>
      <div className="p-4 carousel-focus flex items-center flex-col relative bg-colorPrimary mx-5 my-10 px-3 py-3 rounded-lg shadow-lg w-64">
        <img
          className="h-40 w-40 rounded-full -mt-16  bg-white"
          src={item.imageUrl}
          alt="Img"
        />
        <p className="text-teal-400 font-bold text-xl mb-3 text-white mt-4">
          {item.title}
        </p>
        <p className="text-white mb-4">{item.description} </p>
      </div>
    </>
  );
};
export default function Hability() {
  return (
    <div className="bg-colorSecondary p-8 md:p-6" id="skills">
      <h1 className="pt-8 md:pt-20 text-2xl md:text-4xl font-extrabold leading-10 text-white text-center tracking-tight sm:text-4xl sm:leading-none md:text-4xl">
        Skills Técnicas 🎮
      </h1>
      <div className="flex mt-2 md:mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-colorComplementaryTwo inline-flex"></div>
      </div>
      <div className="container mx-auto w-full overflow-hidden relative pt-8 md:pt-20">
        <div className="w-full h-full absolute">
          <div className="w-1/4 h-full absolute z-50 left-0"></div>
          <div className="w-1/4 h-full absolute z-50 right-0"></div>
        </div>
        <div
          className="carousel-items flex items-center justify-center"
          style={{
            width: "fit-content",
            animation: "carouselAnim 40s infinite alternate linear",
          }}
        >
          {[...Array(20)].map((_, index) => (
            <CarouselItem key={index} item={ObjetsCarrouisel[index]} />
          ))}
        </div>
      </div>
      <h1 className="pt-8 md:pt-20 text-2xl md:text-4xl font-extrabold leading-10 text-white text-center tracking-tight sm:text-4xl sm:leading-none md:text-4xl">
        Skills Profesionales 🔰
      </h1>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex justify-center">
    <ul role="list" className="text-white">
      {Skill.map((person) => (
        <li
          key={person.name}
          className="col-span-1 rounded-lg mb-8 md:mb-0"
        >
          <div className="">
            <div className="text mt-4">
              <p className="text-lg font-semibold mb-4">{person.name}</p>
              <div className="progress">
                <div className={` ${person.level}`}></div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  <div className="m-auto max-w-xs md:max-w-none md:w-96">
    <img src={ImgGif.src} className="w-full" />
  </div>
</div>

      </div>
    </div>
  );
}
const ObjetsCarrouisel = [
  {
    title: "Figma",
    description: "Ux / Web Design",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627410468048979/figma.png?ex=663281dc&is=66200cdc&hm=2576980300f6aa584ee649842ce885e5893465bde48396e23bd691b3e8b1f3e5&"  },
  {
    title: "React ",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627563316879471/react.png?ex=66328201&is=66200d01&hm=9a9c5e0133a14c3314c4f22d7d7749fa734e22f75b86e3805c6146b2f838272c&",
  },
  {
    title: "Gatsby JS",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627563564355664/gatsby.png?ex=66328201&is=66200d01&hm=1b9efd13ae4bb0742d3ff36f994935d5c1962a5b8dea222aff245f5ba0ff069b&"  },
  {
    title: "Vue 3",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627564633899189/vue.png?ex=66274d41&is=6625fbc1&hm=a3a0bf4d1851f6017a9a487c0318cede45a60a66688d2390085e28ea1a0b3f7d&"  },
  {
    title: "Pug JS",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627563824398447/pug.png?ex=66328201&is=66200d01&hm=61d44e364a0e38b7f71c29b1c702c23130140fd619c9f83c142528cca7b7308f&"  },
  {
    title: "HTML 5",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627537253470268/html.png?ex=663281fb&is=66200cfb&hm=6171f330358977cb6af1224fdaadaddf2c248f70f4d5e4a38ed3f4b17cf7491c&"  },
  {
    title: "JavaScript",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627564361273434/js.png?ex=66328201&is=66200d01&hm=521a3d5e112272cae6668c1d0e1041b32f04ccb6937594149d7d7af4b5143aff&"  },
  {
    title: "Bootstrap ",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627564076048504/boots.png?ex=66328201&is=66200d01&hm=02567086d839c2e75a47b404ba8a1497b87fcf13cc8354deac2e4b411bd34ddc&"  },
  {
    title: "Zeplin",
    description: "Ux / Web Design",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627548582281389/zeplin.png?ex=663281fd&is=66200cfd&hm=50ea6e48f0d23b7fcac9904a88f1b8b20250ddeb59353ff4142095c3f1b32126&"  },
  {
    title: "GraphQL",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627579251040286/graph.png?ex=66328205&is=66200d05&hm=a9e0435fc7efd7b6cc60749c59d19538546fb0efe07d2bc099f468b298b17304&"  },

  {
    title: "Reactstrap",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627579506905178/reacts.png?ex=66328205&is=66200d05&hm=f6b0cbdc2d010f4f3b9ae6e118cbf3d135d5247239886efd9371c3070e9a9281&"  },
  {
    title: "Sass",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627601518600422/sass.png?ex=66274d4a&is=6625fbca&hm=63973b0f9488bf014cf7ccb647bb2d707bf85ebee05feb9dea88b0d1dc57d1a0&"  },
  {
    title: "CSS 3",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627601732521994/css.png?ex=6632820a&is=66200d0a&hm=3f13578aa8e9b48883b894f1771734cbb5ae37b3d1f3fa88d117cb876bc4b6a8&"  },
  {
    title: "Discord",
    description: "Otros",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627601275334776/dis.png?ex=6632820a&is=66200d0a&hm=956748c84fdd6dfda229775686bdda1f9e3c290cd934aa09aba366637343759f&"  },
  {
    title: "Tailwind",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627601988366367/tail.png?ex=6632820a&is=66200d0a&hm=f6b149409ba3788101f135b271849f94659e2b7b566679fba67eddc12f50e975&"  },
  {
    title: "Ant Design",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627602185494651/antd.png?ex=6632820a&is=66200d0a&hm=531df84185dc2b5c1780526e6280b0382b418b52825895b349e3412ec7a8fd76&"  },
  {
    title: "Git",
    description: "Controlador de versiones",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627602491691068/git.png?ex=6632820a&is=66200d0a&hm=c888f954e830bc87e27ef53bc9a92ccfbcff70b1f995ec0d9c00171ca171196e&"  },
  {
    title: "Bulma CSS",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627610804801536/bulma.png?ex=6632820c&is=66200d0c&hm=74ebf5f1e571b499842d98896aa177aedcaccba4d5caec1887ff05db10c1bc2b&"  },
  {
    title: " S3",
    description: "Aws",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627610586677268/s3.png?ex=6632820c&is=66200d0c&hm=5613a506ba3553df7fa166bd6db5776673b8b1d02eb7d7ee9ec0c46eb26d9838&"  },
  {
    title: "Core Ui",
    description: "Frontend",
    imageUrl:
"https://cdn.discordapp.com/attachments/1030674863012200581/1189627611060637736/coreui.png?ex=66274d4c&is=6625fbcc&hm=42ffe01ceb11a058f33c8096fe3034f1a125f02d06d358367c79d8821e7ae6ea&"  },
];

const Skill = [
  {
    name: "Equipo de trabajo",
    level: "progress-value",
  },

  {
    name: "Iniciativa",
    level: "progress-value-medium",
  },
  {
    name: "Orientación al logro Creatividad",
    level: "progress-value-medium",
  },
  {
    name: "Dedicación",
    level: "progress-value-loadintermediate",
  },
];
