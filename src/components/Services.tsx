import { Globe, Smartphone, BrainCircuit, Terminal, Database, LineChart } from 'lucide-react';

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y escalables utilizando React, Node.js y las últimas tecnologías.',
    icon: Globe,
  },
  {
    title: 'Aplicaciones a Medida',
    description: 'Soluciones personalizadas en JavaScript, PHP, C++ o Delphi para optimizar tus procesos de negocio.',
    icon: Smartphone,
  },
  {
    title: 'Consultoría en IA',
    description: 'Integración de modelos de lenguaje y algoritmos de IA para potenciar tu productividad.',
    icon: BrainCircuit,
  },
  {
    title: 'Algoritmia Avanzada',
    description: 'Optimización de procesos complejos, resolución del TSP y desarrollo de motores especializados.',
    icon: Terminal,
  },
  {
    title: 'Gestión de Datos',
    description: 'Diseño y optimización de bases de datos SQL para manejar grandes volúmenes de información.',
    icon: Database,
  },
  {
    title: 'Análisis y Estrategia',
    description: 'Consultoría técnica para definir la arquitectura ideal de tus proyectos tecnológicos.',
    icon: LineChart,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-bachoqueta tracking-wide uppercase">Servicios</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Soluciones informáticas integrales
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Ofrezco una amplia gama de servicios técnicos adaptados a las necesidades de la era digital.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-bachoqueta rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
