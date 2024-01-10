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
    <div className="bg-colorSecondary p-4" id="skills">
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
                  <p className="text-lg font-semibold">{person.name}</p>
                  <div className="progress">
                    <div className={` ${person.level}`}></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-auto">
        <img src={ImgGif.src} className="w-full md:w-96" />
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
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627410468048979/figma.png?ex=659ed9dc&is=658c64dc&hm=585238e6e6bfc549bbc9c03a757a75701bd544d29c449f23b38b77799a72060f&",
  },
  {
    title: "React ",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627563316879471/react.png?ex=659eda01&is=658c6501&hm=b7cf7fbe43db0c65b5a764ba1fac308b301367b88fc4ab52f0c4f5b2c0757e24&",
  },
  {
    title: "Gatsby JS",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627563564355664/gatsby.png?ex=659eda01&is=658c6501&hm=71136efe67cb81bed8868610e657c9c49ba1a8183862306378ca0dad28b7c6dc&",
  },
  {
    title: "Vue 3",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627564633899189/vue.png?ex=659eda01&is=658c6501&hm=0d700097e58e1fce2cf2425e839f81ee03295194042dfc1151fa845d1a4b2c7d&",
  },
  {
    title: "Pug JS",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627563824398447/pug.png?ex=659eda01&is=658c6501&hm=e3eb65426a71dc2304cf404d733443ff876ff9bcbc12c4271c6e768aafafe589&",
  },
  {
    title: "HTML 5",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627537253470268/html.png?ex=659ed9fb&is=658c64fb&hm=96e2acaf3ee81cabeb6b3499b3885aca1f1127be579a0e4029467f67b4d87713&",
  },
  {
    title: "JavaScript",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627564361273434/js.png?ex=659eda01&is=658c6501&hm=ac3e7bdc9a2854be58c5e0485befd575d25a728d333e31cb4787aaa22c057a1d&",
  },
  {
    title: "Bootstrap ",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627564076048504/boots.png?ex=659eda01&is=658c6501&hm=c34f32c53617cec3e3f647434938dfb0f3839b825ad0fd46aa235fed37c84545&",
  },
  {
    title: "Zeplin",
    description: "Ux / Web Design",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627548582281389/zeplin.png?ex=659ed9fd&is=658c64fd&hm=08461ef3285c68077080dfa2903a074bc6ae4cff13503ad4414373412323f31e&",
  },
  {
    title: "GraphQL",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627579251040286/graph.png?ex=659eda05&is=658c6505&hm=92fee7d0404a43db805f6b19c440a1aa2ba18e203143f84135da3b22dd4e3e89&",
  },

  {
    title: "Reactstrap",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627579506905178/reacts.png?ex=659eda05&is=658c6505&hm=2918037d50d4a71ae318e7f148f396ba6de45ac704066fdb1e810bdc2c3c6411&",
  },
  {
    title: "Sass",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627601518600422/sass.png?ex=659eda0a&is=658c650a&hm=fd17f9bab114f23387cd8ea42c1024a7da46316eb0d4da9567cdc4aac3656d0a&",
  },
  {
    title: "CSS 3",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627601732521994/css.png?ex=659eda0a&is=658c650a&hm=2c739ca1d296c4dc663257365337045173d70ae34e148a47232e1159fa5b05c4&",
  },
  {
    title: "Discord",
    description: "Otros",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627601275334776/dis.png?ex=659eda0a&is=658c650a&hm=f502bf810e6e48674a7ea53b132ca63131a714c22fa44a790924bbc621e7098f&",
  },
  {
    title: "Tailwind",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627601988366367/tail.png?ex=659eda0a&is=658c650a&hm=e313c2092920aabac1685d581d1465b168846e4c63f155323b9db139e92b4984&",
  },
  {
    title: "Ant Design",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627602185494651/antd.png?ex=659eda0a&is=658c650a&hm=22b33c50910aa88976a814bb0ec71307377e107a1830d372dc452e54dc47a1b7&",
  },
  {
    title: "Git",
    description: "Controlador de versiones",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627602491691068/git.png?ex=659eda0a&is=658c650a&hm=8116e2f39a17bb4731ddffda1fe55d5968a5200b7b3b2a0e361807083c292857&",
  },
  {
    title: "Bulma CSS",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627610804801536/bulma.png?ex=659eda0c&is=658c650c&hm=350818f1a3f0fd8ad02c66e1d953eea8df90e6d79cc6f70e8a904d989d3fa73d&",
  },
  {
    title: " S3",
    description: "Aws",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627610586677268/s3.png?ex=659eda0c&is=658c650c&hm=a37b13f5e905909c71e5d034be6798660be9c6d10ebce3bff2239e40b2dbddfb&",
  },
  {
    title: "Core Ui",
    description: "Frontend",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1030674863012200581/1189627611060637736/coreui.png?ex=659eda0c&is=658c650c&hm=bc6635b6834fa682b05d07526909277faaafe415bbd785c49ec69ddc75f43508&",
  },
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
