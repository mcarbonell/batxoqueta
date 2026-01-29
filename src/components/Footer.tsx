import { Sprout, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-6 w-6 text-bachoqueta-light" />
              <span className="text-xl font-bold">Batxoqueta.com</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Especialista en desarrollo software a medida, algoritmia avanzada e inteligencia artificial.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Desarrollo Web & Apps</li>
              <li>Consultoría IA</li>
              <li>Algoritmia Personalizada</li>
              <li>Arquitectura de Software</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="flex flex-col space-y-4">
              <a href="mailto:info@batxoqueta.com" className="flex items-center space-x-2 text-gray-400 hover:text-bachoqueta-light transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@batxoqueta.com</span>
              </a>
              <div className="flex space-x-4">
                <a href="https://github.com/mcarbonell" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/mcarbonell" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Batxoqueta.com. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
