import "./index.css";
export default function Projects() {
  return (
    <div className="pt-8 md:pt-24 p-20 mb-8 md:mb-40">
      <h1 className=" mb-4 text-4xl font-extrabold leading-10 text-white text-center tracking-tight sm:text-4xl sm:leading-none md:text-4xl">
        Proyectos
      </h1>
      <div className="flex mt-2 md:mt-6 justify-center">
        <div className="w-8 h-0.5 md:w-16 h-1 rounded-full bg-colorComplementaryTwo inline-flex mb-4 md:mb-16"></div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-8 md:gap-24 lg:grid-cols-2 xl:grid-cols-4 text-white"
      >
        {people.map((person) => (
          <li key={person.name} className="col-span-1 rounded-lg mb-8">
        <div className="card shadow-lg">
              <img
                src={person.imageUrl}
                alt=""
                className="image-style w-full h-auto  p-2 "
              />

              <div className="text mt-4">
                <p className="text-lg  font-semibold">{person.name}</p>
                <p className="p text-black">{person.date}</p>
                <p className="p ">{person.company}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
const people = [
  {
    name: "Ecommerce Tiendas D1",
    date: "Jul. 2020 - oct. 2020",
    company: "Asociada con Pyra Lab",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189675482128592956/1605201945134.png?ex=659f06a2&is=658c91a2&hm=151be257a5ac90d57b0cb01e3806ab5b65c56a305614380d0c9c207bf4731b7e&",
  },
  {
    name: "Pagina Web IPCOM",
    date: "Sept. 2021 - feb. 2022",
    company: "Asociada con IPCOM",
    imageUrl:"https://cdn.discordapp.com/attachments/966004692985475183/1189693526150226040/image.png?ex=659f1770&is=658ca270&hm=80af8ce9cc50910c1a0d774fbebf8dada5cb689178c9c77698d404e0e6485272&"  },
  {
    name: "Pagina Web INNOVA",
    date: "Sept. 2022 - sept. 2022",
    company: "Asociada con INNOVA",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186794313103966289/image.png?ex=65948b55&is=65821655&hm=f78b292637bb08542427d54fac4ff4e64e834c066030d6e3acaf232b80aedad7&",
  },
  {
    name: "Lil Interns",
    date: "Dic. 2022 - ene. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186794816969900072/image.png?ex=65948bcd&is=658216cd&hm=efc95e45b6e362fec0a28953f8152afbedf32a3bb33fb3b5d0d008b06cebc989&",
  },
  {
    name: "Shipyard",
    date: "Oct. 2022 - ene. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189675911428186292/image.png?ex=659f0708&is=658c9208&hm=7c15159e934bb9716c21a88b5fc8a9a4af93071b76df4bea6fa2b99e530a493c&",
  },
  {
    name: "Ceslegal",
    date: "abr. 2023 - abr. 20233",
    company: "Asociada con Ceslegal",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189676238193836232/image.png?ex=659f0756&is=658c9256&hm=0399c8768205f1ace97aaed1b68560b939600da10aa16f70d99eae66284c54c5&",
  },
  {
    name: "Gws",
    date: "Feb. 2024 - Dic. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189676758904094720/image.png?ex=659f07d2&is=658c92d2&hm=c762ec1b16ebb7ee191ef3d601b7cbd09027692e1bf4679b22f8d6d2f3a54398&",
  },
  {
    name: "Arcadia Rp",
    date: "Dic. 2023",
    company: "Independiente",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189689983641063565/image.png?ex=659f1423&is=658c9f23&hm=e86269020af2abbec9a0408019ee3b83380aeb6ffccfccbfd34fc3bf21905830&",
  },
];

<style></style>;
