import { Sun, Sprout, Mail, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Sprout className="w-6 h-6 text-green-400" />
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-green-400">Agro</span>
                <span className="text-yellow-400">Volt</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolucionando la agricultura con energía solar. Protegemos tus cultivos mientras 
              generas energía limpia para un futuro sostenible.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Instalación Agrovoltaica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoría Técnica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mantenimiento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monitoreo Remoto</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group">
                  Sobre Nosotros
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    En construcción
                  </span>
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group">
                  Casos de Éxito
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    En construcción
                  </span>
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer relative group">
                  Blog
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    En construcción
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@agrovolt.com</span>
              </div>
              
              <div className="flex space-x-4">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group">
                  <Linkedin className="w-5 h-5" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    En construcción
                  </span>
                </span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group">
                  <Instagram className="w-5 h-5" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    En construcción
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AgroVolt. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}