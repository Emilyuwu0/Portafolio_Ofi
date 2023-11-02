import "./curriculum.scss";
export default function Hability() {
  return (
    <div className=" mx-auto px-4 flex flex-col lg:flex-row items-center mb-20  sm:mt-52 mt-0">
      <div className="lg:w-1/2 z-index-global ">
        <div className="sm:ml-32 ml-4">
          {" "}
          <h1 className="text-2xl mb-6 font-semibold">
            Mira mi <span className="text-pink-500">Currículum</span>
          </h1>
          <p>
            Mi pasión por desarrollar me impulsa a ofrecer resultados
            excepcionales y contribuir de manera significativa a cualquier
            equipo en el que me encuentre. Estoy emocionado por las
            oportunidades futuras y espero aplicar mis habilidades y experiencia
            para alcanzar nuevos logros.
          </p>
        </div>
      </div>
      <div className="background-curriculum"></div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 z-30 ">
        <section className="product-container product-1">
          <div className="card">
            <div className="photo"></div>
            <div className="content">
              <div className="title">Curriculum</div>
              <div className="bg-title">Mily</div>

              <button className="btn-buy">Descargar</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    /* 
    <div className="sm:mt-60 mt-20 text-black sm:p-20 p-4">
      {" "}
      <div className="background-curriculum"></div>
      <div className="grid grid-cols-2 auto-cols-max">
        {" "}
        <div className="sm:ml-14 ml-4">
          {" "}
          <h1 className="text-2xl mb-6 font-semibold">
            Mira mi <span className="text-pink-500">Currículum</span>
          </h1>
          <p>
            Mi pasión por desarrollar me impulsa a ofrecer resultados
            excepcionales y contribuir de manera significativa a cualquier
            equipo en el que me encuentre. Estoy emocionado por las
            oportunidades futuras y espero aplicar mis habilidades y experiencia
            para alcanzar nuevos logros.
          </p>
        </div>
        <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner">
            <div className="content-div">
              <span className="text-center block text-xl bg-transparent mb-8">
                Curriculum
              </span>
              <span className="text-center block text-ms bg-transparent">
                Descarga aquí
              </span>{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/154/154364.png"
                width={40}
                className="text-center m-auto mt-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div> */
  );
}
