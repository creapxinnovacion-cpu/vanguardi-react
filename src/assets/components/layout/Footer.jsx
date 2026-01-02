import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-center md:text-left">
        {/* MARCA */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Vanguardia</h3>
          <p className="text-sm leading-relaxed">
            Especialistas en compra, venta, alquiler y remodelación de bienes
            raíces. Acompañamiento profesional en cada paso.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-white transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/soluciones" className="hover:text-white transition">
                Soluciones
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 El Salvador</li>
            <li>📞 +503 7756 2416</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Vanguardia Bienes Raíces · Todos los
        derechos reservados
      </div>
    </footer>
  );
}
