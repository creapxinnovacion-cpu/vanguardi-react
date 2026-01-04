import { Link } from "react-router-dom";

const dropdowns = {
  Compra: [
    ["/Compra/Casas", "Casas"],
    ["/Compra/Terrenos", "Terrenos"],
  ],
  Venta: [
    ["/Venta/Nuevas", "Nuevas"],
    ["/Venta/Usadas", "Usadas"],
  ],
  Alquiler: [
    ["/Alquiler/Casas", "Casas"],
    ["/Alquiler/Apartamentos", "Apartamentos"],
  ],
  Contactos: [
    ["https://wa.me/50377562416?text=Hola%20quiero%20información", "WhatsApp"],
    ["https://www.facebook.com", "Facebook"],
    ["https://www.instagram.com", "Instagram"],
  ],
};

function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <ul
          className="
            flex flex-wrap justify-center gap-x-6 gap-y-3
            text-sm sm:text-base
          "
        >
          {/* INICIO */}
          <li>
            <Link className="hover:text-blue-400 px-2 py-1 block" to="/">
              Inicio
            </Link>
          </li>

          {/* DROPDOWNS */}
          {Object.keys(dropdowns).map((label) => (
            <li key={label} className="relative group">
              {/* TITLE */}
              <div
                className="
                  cursor-pointer
                  hover:text-blue-400
                  px-2 py-1
                  text-center
                "
              >
                {label}
              </div>

              {/* DROPDOWN */}
              <div
                className="
                  absolute
                  left-1/2 -translate-x-1/2
                  top-full mt-2
                  hidden
                  group-hover:block
                  bg-white text-black
                  rounded-lg shadow-lg
                  min-w-[180px]
                  z-50
                "
              >
                {dropdowns[label].map(([link, text]) =>
                  link.startsWith("http") ? (
                    <a
                      key={text}
                      href={link}
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                    >
                      {text}
                    </a>
                  ) : (
                    <Link
                      key={text}
                      to={link}
                      className="block px-4 py-2 hover:bg-gray-100 text-center"
                    >
                      {text}
                    </Link>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
