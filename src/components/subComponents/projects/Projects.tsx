import "./index.css";
export default function Projects() {
  return (
    <div
      className="bg-colorSecondary pt-8 md:pt-24 p-8 md:p-20 mb-8 md:mb-16 lg:mb-40"
      id="project"
    >
      <h1 className="mb-4 text-4xl font-extrabold leading-10 text-white text-center tracking-tight sm:text-4xl sm:leading-none md:text-5xl">
        Proyectos
      </h1>
      <div className="flex justify-center">
        <div className="w-8 h-0.5 md:w-16 h-1 rounded-full bg-colorComplementaryTwo mb-4 md:mb-10 lg:mb-16"></div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10 text-white"
      >
        {people.map((person) => (
          <li key={person.name} className="rounded-lg mb-8">
            <div className="card shadow-lg">
              <img
                src={person.imageUrl}
                alt=""
                className="image-style w-full h-auto p-2"
              />
              <div className="text mt-4">
                <p className="text-lg font-semibold">{person.name}</p>
                <p className="text-black">{person.date}</p>
                <p>{person.company}</p>
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
      "https://cdn.discordapp.com/attachments/966004692985475183/1189675482128592956/1605201945134.png?ex=6632aea2&is=662039a2&hm=819d21986bac2c810740771ef95de5910f6cfa60dbf606207ee274ff1a71fb34&",
  },
  {
    name: "Pagina Web IPCOM",
    date: "Sept. 2021 - feb. 2022",
    company: "Asociada con IPCOM",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189693526150226040/image.png?ex=6632bf70&is=66204a70&hm=42ea6d3f66e9ac5086d728180af9d770a49a672795a3f9d3be65870b33d52f79&",
  },
  {
    name: "Pagina Web INNOVA",
    date: "Sept. 2022 - sept. 2022",
    company: "Asociada con INNOVA",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186794313103966289/image.png?ex=66316dd5&is=661ef8d5&hm=8a3f5e77abfdcdd0116d63760b716677c3ca2dae2ac5b59a1a4e49cf80a084e0&",
  },
  {
    name: "Lil Interns",
    date: "Dic. 2022 - ene. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186794816969900072/image.png?ex=66278b0d&is=6626398d&hm=275243e7d77348134d0abe1d13de435de2002edea5d07fa009ff91a7cdb5bcce&",
  },
  {
    name: "Shipyard",
    date: "Oct. 2022 - ene. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189675911428186292/image.png?ex=6632af08&is=66203a08&hm=088efed960ccfb8777dc520bc05cf39864cec5770a0083022296526572a76180&",
  },
  {
    name: "Ceslegal",
    date: "abr. 2023 - abr. 20233",
    company: "Asociada con Ceslegal",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189676238193836232/image.png?ex=66277a96&is=66262916&hm=b945ee846cf0e303f71645a977fbb826a314e0841322181de5da24fc95e67772&",
  },
  {
    name: "Gws",
    date: "Feb. 2024 - Dic. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189676758904094720/image.png?ex=6632afd2&is=66203ad2&hm=1fe8a6ff632077ca2f22fd413359df6a0e8a547a9a1cb42fe215da1a37b672d6&",
  },
  {
    name: "Arcadia Rp",
    date: "Dic. 2023",
    company: "Independiente",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1189677467401736252/image.png?ex=6632b07b&is=66203b7b&hm=47295e24f17406144707227a1e8ae2f614a25cfc398f98d197fd8b6e563aaf34&",
  },
];

<style></style>;
