
export default function Projects() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-colorSecondary"
    >
      {people.map((person) => (
        <li key={person.name}>
          <div className="card">
            <div className="img">
              <img src={person.imageUrl} className="w-full" />
            </div>

            <div className="text">
              <p className="h3"> {person.name} </p>
              <p className="p"> {person.date} </p>
              <p className="p"> {person.company} </p>
              {/*   <div className="icon-box">
            <p className="span">Business Trip</p>
          </div> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
const people = [
  {
    name: "Ecommerce Tiendas D1",
    date: "Jul. 2020 - oct. 2020",
    company: "Asociada con Pyra Lab",
    imageUrl:
      "https://media.licdn.com/dms/image/C562DAQFJOfK1DaIpJw/profile-treasury-image-shrink_800_800/0/1605201945134?e=1703631600&v=beta&t=_V-7wI-QT20viIP0qrmE6QzKh7E3BVKgzwajbtWgx9M",
  },
  {
    name: "Pagina Web IPCOM",
    date: "Sept. 2021 - feb. 2022",
    company: "Asociada con IPCOM",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186793729978277978/image.png?ex=65948aca&is=658215ca&hm=54ed0d543cbdfde03a82ca8030f5bd150f337d95e7b0bc5b3e03c576be71bf2a&",
  },
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
    name: "Lil Interns",
    date: "Dic. 2022 - ene. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186794816969900072/image.png?ex=65948bcd&is=658216cd&hm=efc95e45b6e362fec0a28953f8152afbedf32a3bb33fb3b5d0d008b06cebc989&",
  },
  {
    name: "Lil Interns",
    date: "Dic. 2022 - ene. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186794816969900072/image.png?ex=65948bcd&is=658216cd&hm=efc95e45b6e362fec0a28953f8152afbedf32a3bb33fb3b5d0d008b06cebc989&",
  },
  {
    name: "Lil Interns",
    date: "Dic. 2022 - ene. 2023",
    company: "Asociada con AntPack",
    imageUrl:
      "https://cdn.discordapp.com/attachments/966004692985475183/1186794816969900072/image.png?ex=65948bcd&is=658216cd&hm=efc95e45b6e362fec0a28953f8152afbedf32a3bb33fb3b5d0d008b06cebc989&",
  },
];

<style>
  
</style>