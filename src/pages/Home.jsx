import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Home() {
  //cosntante de la agente de vanguardia
  const [openChat, setOpenChat] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([
    { role: "bot", text: "Hola 👋 soy Vanguardia-IA, ¿en qué puedo ayudarte?" },
  ]);
  const [loading, setLoading] = useState(false);

  const enviarMensaje = async () => {
    if (!mensaje.trim()) return;

    const nuevoMensaje = { role: "user", text: mensaje };
    setMensajes((prev) => [...prev, nuevoMensaje]);
    setMensaje("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mensaje: mensaje,
          // luego puedes enviar tipo / ubicacion
        }),
      });

      const data = await response.json();

      setMensajes((prev) => [...prev, { role: "bot", text: data.respuesta }]);
    } catch (error) {
      setMensajes((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Error al conectar con el servidor." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const vanguardiaHeroRef = useRef(null);
  const vanguardiaFooterRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (
      !vanguardiaHeroRef.current ||
      !vanguardiaFooterRef.current ||
      !logoRef.current
    )
      return;

    // Logo flotante
    gsap.to(logoRef.current, {
      y: -12,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    const heroLetters = vanguardiaHeroRef.current.children;
    const footerLetters = vanguardiaFooterRef.current.children;

    gsap.to([heroLetters, footerLetters], {
      keyframes: [
        { y: -10, duration: 1.2, ease: "sine.out" },
        { y: 0, duration: 1.2, ease: "sine.in" },
      ],
      repeat: -1,
      stagger: 0.12,
    });
  }, []);

  return (
    <main>
      {/* =========================
          HERO PRINCIPAL (SEO)
      ========================= */}
      <section
        id="javi"
        className="w-full bg-cover bg-center px-6 py-10"
        style={{ backgroundImage: "url('/img/fondoprincipal.avif')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* IMAGEN ASESOR */}
          <img
            src="/img/javi.png"
            alt="Asesor en inversiones inmobiliarias de Bienes Raíces Vanguardia"
            className="w-[85%] md:w-[50%] max-w-[520px]"
          />

          {/* TEXTO SEO REAL */}
          <div className="text-white max-w-xl flex flex-col items-center text-center">
            <img
              src="/img/LOGO.png"
              alt="Logo Bienes Raíces Vanguardia"
              className="w-40 mb-6"
            />

            <h1
              ref={vanguardiaHeroRef}
              className="text-3xl md:text-5xl font-black mb-4 titulo-vanguardia flex justify-center"
            >
              {"Vanguardia".split("").map((char, i) => (
                <span key={i} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl leading-relaxed">
              Inversiones Inmobiliarias Rentables con Bienes Raíces Vanguardia
              Asesoramos inversionistas que buscan oportunidades reales en
              bienes raíces: preventas, renta y proyectos con alta plusvalía.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICIOS INMOBILIARIOS
      ========================= */}
      <section
        className="relative max-w-5xl mx-auto my-16 px-6 py-12 rounded-xl overflow-hidden bg-cover bg-center "
        style={{ backgroundImage: "url('/img/fondo compra venta.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center text-white">
          <h2 className="font-bold text-3xl md:text-4xl mb-10">
            Servicios para Inversiones Inmobiliarias
          </h2>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            En Bienes Raíces Vanguardia ofrecemos soluciones completas para
            inversionistas que buscan seguridad, rentabilidad y respaldo
            profesional.
          </p>
        </div>
      </section>

      {/* =========================
          MEDICIONES
      ========================= */}
      <section
        className="relative max-w-5xl mx-auto my-16 px-6 py-12 rounded-xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo remediciones.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-white">
          <img
            src="/img/2.png"
            alt="Terreno"
            className="seccionimg w-full max-w-[460px] mx-auto rounded-xl shadow-lg "
          />

          <div className="relative text-white max-w-xl text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-4 pt-20">
              Mediciones del Terreno
            </h1>

            <p className="text-lg md:text-xl leading-relaxed">
              Medimos tu terreno con precisión profesional, ideal para resolver
              disputas, ventas o construcciones. ¡Exactitud garantizada!
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          HERENCIAS
      ========================= */}
      <section
        className="relative max-w-5xl mx-auto my-20 px-6 py-14 rounded-xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo particion.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-white">
          <img
            src="/img/3.png"
            alt="Particiones de propiedades por herencia"
            className="seccionimg seccionimg w-full max-w-[460px] mx-auto rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Particiones por Herencia
            </h2>

            <p className="text-lg md:text-xl max-w-xl">
              Asesoría legal y técnica para división de propiedades heredadas,
              facilitando su venta o inversión futura.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          REMODELACIONES
      ========================= */}
      <section
        className="relative max-w-5xl mx-auto my-20 px-6 py-14 rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo remodelacion.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-white">
          <img
            src="/img/4.png"
            alt="Remodelaciones para aumentar valor de propiedades"
            className="seccionimg w-full max-w-[520px] mx-auto rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Remodelaciones Estratégicas
            </h2>

            <p className="text-lg md:text-xl max-w-xl">
              Incrementa la plusvalía y rentabilidad de tu inversión
              inmobiliaria con remodelaciones bien planificadas.
            </p>
          </div>
        </div>
      </section>
      {/* =========================
          IDENTIDAD VANGUARDIA
      ========================= */}
      <section className="relative w-full py-20 bg-gradient-to-b from-[#0d1b2a] to-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* LOGO IZQUIERDA */}
          <div ref={logoRef} className="flex-shrink-0">
            <img
              src="/img/LOGO.png"
              alt="Logo Bienes Raíces Vanguardia"
              className="w-44 md:w-52 drop-shadow-xl"
            />
          </div>

          {/* TEXTO DERECHA */}
          <div className="texto-box text-center md:text-left">
            <h2 ref={vanguardiaFooterRef} className="empresa-title flex">
              {"Vanguardia".split("").map((char, i) => (
                <span key={i} className="inline-block">
                  {char}
                </span>
              ))}
            </h2>
            <h3 className="empresa-subtitle text-center">Bienes y Raíces</h3>

            <p className="empresa-slogan text-center ">
              Innovación, confianza y respaldo profesional
            </p>
          </div>
        </div>
      </section>
      {/* =========================
    CHAT VANGUARDIA-IA
========================= */}
      <div className="fixed bottom-6 right-6 z-50">
        {!openChat && (
          <button
            onClick={() => setOpenChat(true)}
            className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-xl hover:bg-blue-700"
          >
            💬 Vanguardia-IA
          </button>
        )}

        {openChat && (
          <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
            {/* HEADER */}
            <div className="bg-blue-700 text-white px-4 py-3 flex justify-between items-center">
              <span className="font-bold">Vanguardia-IA</span>
              <button onClick={() => setOpenChat(false)}>✕</button>
            </div>

            {/* MENSAJES */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
              {mensajes.map((m, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[85%] ${
                    m.role === "user"
                      ? "bg-blue-100 ml-auto text-right"
                      : "bg-gray-100"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {loading && <div className="text-gray-400">Escribiendo...</div>}
            </div>

            {/* INPUT */}
            <div className="p-2 border-t flex gap-2">
              <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={enviarMensaje}
                className="bg-blue-600 text-white px-3 rounded-lg"
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
