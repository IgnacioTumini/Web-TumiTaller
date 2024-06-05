import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="section-home">
        <header className="home-header">
          <h1>TumiTaller</h1>
          <p>
            Tu lugar de confianza para el mantenimiento y reparación de
            vehículos.
          </p>
        </header>
        <section className="services">
          <h2>Nuestros Servicios</h2>
          <ul>
            <li>Revisión General</li>
            <li>Cambio de Aceite</li>
            <li>Frenos y Suspensión</li>
            <li>Diagnóstico Electrónico</li>
            <li>Servicio de Neumáticos</li>
          </ul>
        </section>

        <div className="box-secciones">
          <section className="about-us">
            <h2>Sobre Nosotros</h2>
            <p>
              Con más de 20 años de experiencia, ofrecemos servicios de alta
              calidad y confianza. Nuestro equipo de profesionales está siempre
              dispuesto a ayudarte.
            </p>
          </section>

          <section className="booking">
            <h2>Saca tu Turno</h2>
            <p>
              Elige el servicio que necesitas y reserva tu turno fácilmente.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
