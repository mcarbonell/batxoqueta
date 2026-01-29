import { ArrowRight, Code, Cpu, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Mario Raúl Carbonell</span>{' '}
              <span className="block text-bachoqueta xl:inline">Soluciones de software</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Especialista en desarrollo web, aplicaciones a medida e inteligencia artificial.
              Desde motores de ajedrez hasta consultoría de IA avanzada, transformo ideas complejas en código eficiente.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bachoqueta hover:bg-bachoqueta-dark transition-colors md:text-lg"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-bachoqueta text-base font-medium rounded-md text-bachoqueta bg-white hover:bg-bachoqueta-accent transition-colors md:text-lg"
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-bachoqueta-accent rounded-lg overflow-hidden p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Code className="h-8 w-8 text-bachoqueta mb-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Fullstack</span>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Cpu className="h-8 w-8 text-bachoqueta mb-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Algoritmia</span>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Brain className="h-8 w-8 text-bachoqueta mb-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">IA / ML</span>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Code className="h-8 w-8 text-bachoqueta mb-2" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Consultoría</span>
                  </div>
                </div>
                {/* Decorative bean-like shapes could go here */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bachoqueta opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-bachoqueta-light opacity-10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
