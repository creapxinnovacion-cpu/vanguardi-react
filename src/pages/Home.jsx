function Home() {
  return (
    <>
      {/* =========================
          HERO
      ========================= */}
      <section
        id="javi"
        className="w-full bg-cover bg-center px-6 py-10"
        style={{
          backgroundImage: "url('/img/fondoprincipal.png')",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* IMAGEN ASESOR */}
          <img
            src="/img/javi.png"
            alt="Asesor de Inversions Vanguardia"
            className="w-[85%] md:w-[50%] max-w-[520px]"
          />

          {/* LOGO */}
          <img
            src="/img/LOGO.png"
            alt="Logo de Inversions Vanguardia"
            className="w-[180px] md:w-[30%] max-w-[420px]"
          />
        </div>
      </section>
      <br />
      {/* =========================
    NUESTROS SERVICIOS
========================= */}
      <section
        className="relative max-w-5xl mx-auto my-16 px-6 py-12 rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/fondo compra venta.png')",
        }}
      >
        {/* OVERLAY GENERAL */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          {/* TITULO */}
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-12">
            Nuestros Servicios
          </h2>

          {/* CAJA INFO */}
          <div className="relative mx-auto rounded-3xl overflow-hidden max-w-4xl">
            {/* OVERLAY CAJA */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2acc] to-[#0d1b2ae6]" />

            {/* TEXTO */}
            <div className="relative z-10 px-10 py-14 text-white">
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Te ayudamos a encontrar el hogar ideal, vender tu propiedad al
                mejor precio o alquilar de forma segura y rápida.
              </p>

              <p className="mt-6 text-xl md:text-2xl font-bold text-blue-200">
                Tu inversión está en buenas manos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    MEDICIONES DEL TERRENO
========================= */}
      <section
        className="relative max-w-5xl mx-auto my-16 px-6 py-12 rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/fondo remediciones.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#655c5c8c] to-[#00000040]" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          {/* IMAGEN */}
          <div className="flex-1 text-center">
            <img
              src="/img/2.png"
              alt="Terreno"
              className="
          w-full max-w-[460px] mx-auto
          rounded-lg
          shadow-[0_12px_30px_rgba(0,0,0,0.35)]
          transition-transform duration-300
          hover:scale-105
        "
            />
          </div>

          {/* TEXTO */}
          <div className="flex-1 text-white text-center md:text-left">
            <h2
              className="
          text-3xl md:text-5xl font-black uppercase tracking-widest mb-5
          bg-gradient-to-r from-[#232222] via-[#2ecc71] to-[#a8ff78]
          bg-clip-text text-transparent
          drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
        "
            >
              Mediciones del Terreno
            </h2>

            <p
              className="
        text-lg md:text-xl leading-relaxed max-w-xl
        drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]
        animate-[fadeUp_0.8s_ease_forwards]
      "
            >
              Medimos tu terreno con precisión profesional, ideal para resolver
              disputas, ventas o construcciones. ¡Exactitud garantizada!
            </p>
          </div>
        </div>
      </section>
      {/* =========================
    PARTICIONES POR HERENCIA
========================= */}
      <section
        className="relative max-w-5xl mx-auto my-20 px-6 py-14 rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/fondo particion.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          {/* IMAGEN */}
          <div className="flex-1 text-center herencia-img">
            <img
              src="/img/3.png"
              alt="Particiones por Herencia"
              className="
          w-full max-w-[460px] mx-auto
          rounded-xl
          shadow-[0_12px_30px_rgba(0,0,0,0.35)]
          transition-transform duration-300
          hover:scale-105
        "
            />
          </div>

          {/* TEXTO */}
          <div className="flex-1 text-white text-center md:text-left herencia-text">
            <h2
              className="
          text-3xl md:text-5xl font-black uppercase tracking-widest mb-5
          bg-gradient-to-r from-[#573939] via-[#ca8310] to-[#e6c75c]
          bg-clip-text text-transparent
          drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
        "
            >
              Particiones por Herencia
            </h2>

            <p
              className="
          text-lg md:text-xl leading-relaxed max-w-xl
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]
        "
            >
              Te apoyamos legal y técnicamente en la división justa y ordenada
              de la propiedad. Trato humano y transparente.
            </p>
          </div>
        </div>
      </section>
      {/* =========================
    REMODELACIONES
========================= */}
      <section
        className="
    relative max-w-5xl mx-auto my-20
    px-6 py-14 rounded-2xl overflow-hidden
    bg-cover bg-center
  "
        style={{
          backgroundImage: "url('/img/fondo remodelacion.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 remodelaciones-trigger">
          {/* IMAGEN */}
          <div className="flex-1 text-center remodelaciones-img">
            <img
              src="/img/4.png"
              alt="Remodelaciones"
              className="
          w-full max-w-[520px] mx-auto
          rounded-2xl
          shadow-[0_14px_35px_rgba(0,0,0,0.35)]
          transition-all duration-500
          hover:scale-105 hover:rotate-[-0.5deg]
        "
            />
          </div>

          {/* TEXTO */}
          <div className="flex-1 text-white text-center md:text-left remodelaciones-text">
            <h2
              className="
          text-3xl md:text-5xl font-black uppercase tracking-widest mb-6
          bg-gradient-to-r from-white via-[#1abc9c] to-[#16a085]
          bg-clip-text text-transparent
          drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]
        "
            >
              Remodelaciones
            </h2>

            <p
              className="
          text-lg md:text-xl leading-relaxed max-w-xl
          drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]
        "
            >
              Renovamos tu espacio con diseño moderno, materiales de calidad y
              precios accesibles. ¡Dale nueva vida a tu hogar!
            </p>
          </div>
        </div>
      </section>
      <section className="vanguardia-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          {/* Logo */}
          <div className="logo-box">
            <img
              src="/img/LOGO.png"
              alt="Vanguardia Bienes y Raíces"
              className="logo"
            />
          </div>

          {/* Texto */}
          <div className="texto-box">
            <h1 className="empresa-title">Vanguardia</h1>
            <h2 className="empresa-subtitle">Bienes y Raíces</h2>
            <p className="empresa-slogan">
              Innovación, confianza y respaldo profesional
            </p>
          </div>
        </div>
      </section>

      {/* ESTILOS */}
      <style>{`
        .vanguardia-hero {
          position: relative;
          width: 100%;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("/img/fondo.png");
          background-size: cover;
          background-position: center;
          overflow: hidden;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top,
            rgba(255, 255, 255, 0.15),
            transparent 60%
          );
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .logo {
          width: 180px;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.4));
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .texto-box {
          color: #ffffff;
        }

        .empresa-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
          background: linear-gradient(90deg, #f3ef00, #e6db0b, #f8fc01);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
          margin-bottom: 10px;
        }

        .empresa-subtitle {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          letter-spacing: 2px;
          color: #ecf0f1;
          margin-bottom: 14px;
        }

        .empresa-slogan {
          font-size: 1.3rem;
          max-width: 420px;
          line-height: 1.6;
          color: #eaf6ff;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
          }

          .empresa-slogan {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
