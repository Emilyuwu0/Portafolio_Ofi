import "./timeline.scss";
export default function Timeline() {
  return (
    /*    <div className="timeline-middle">
  <div className="timeline-circle animate-bounce"></div>
</div> */
    <div className=" pt-24 bg-timeline " id="exp">
      <h1 className=" mb-4 text-4xl font-extrabold leading-10 text-white text-center tracking-tight sm:text-4xl sm:leading-none md:text-4xl">
        XP ✨
      </h1>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-colorComplementaryTwo inline-flex"></div>
      </div>
      <div className="design-section ">
        <div className="timeline">
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component timeline-content text-white">
            <h3 className=" font-bold mb-4">Frontend Developer</h3>
            <p>
              AntPack · Jornada completa <br /> oct. 2022 - actualidad
              <br />1 año
            </p>
          </div>
          <div className="timeline-component timeline-content text-black">
            <h3 className="font-bold mb-4">Desarrollador de front-end</h3>
            <p>
              IPCOM - Jornada completa <br />
              ene. 2021 - oct. 2022 <br /> 1 año 10 meses
            </p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className=" timeline-component timeline-content text-black">
            <h3 className="font-bold mb-4"> Desarrolladora Junior Front-end</h3>
            <p>
              Chefmenu · Jornada completa <br />
              mar. 2020 - sept. 2020 <br /> 7 meses.
            </p>
          </div>

          <div className="timeline-component timeline-content text-black">
            <h3 className="font-bold mb-4">Desarrollador junior</h3>
            <p>
              RednaJava <br />
              ago. 2016 - ene. 2020 <br /> 3 años 6 meses
            </p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle"></div>
        </div>
      </div>
    </div>
  );
}
