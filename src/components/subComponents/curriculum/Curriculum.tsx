import "./curriculum.scss";
export default function Hability() {
  return (
    <div className="sm:mt-60 mt-20 text-black ">
      <div className="grid grid-cols-2 auto-cols-max">
        <div className="p-20">
          {" "}
          <h1 className="text-2xl mb-6 font-semibold">Currículum</h1>
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
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/154/154364.png"
                width={40}
                className="text-center m-auto mt-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
