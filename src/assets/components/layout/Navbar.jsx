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
    ["/Contactos/WhatsApp", "WhatsApp"],
    ["https://www.facebook.com", "Facebook"],
    ["/Contactos/Instagram", "Instagram"],
  ],
};

function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Vanguardia</h2>

        <ul className="flex gap-6">
          <li>
            <Link className="hover:text-blue-400" to="/">
              Inicio
            </Link>
          </li>

          {Object.keys(dropdowns).map((label) => (
            <li key={label} className="relative group">
              {/* TITLE */}
              <div className="cursor-pointer hover:text-blue-400 px-2 py-1">
                {label}
              </div>

              {/* DROPDOWN */}
              <div
                className="
                  absolute left-0 top-full
                  hidden
                  group-hover:block hover:block
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
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {text}
                    </a>
                  ) : (
                    <Link
                      key={text}
                      to={link}
                      className="block px-4 py-2 hover:bg-gray-100"
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
