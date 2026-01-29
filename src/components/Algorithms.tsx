import { Share2, BarChart3, Binary, Trophy } from 'lucide-react';

const algorithmFocus = [
  {
    title: 'Problema del Viajante (TSP)',
    description: 'Nuevos enfoques heurísticos y metaheurísticos para optimizar rutas complejas con alta eficiencia computacional.',
    icon: Share2,
    details: 'Implementaciones en C++ y Python'
  },
  {
    title: 'Algoritmos de Ordenación',
    description: 'Investigación y desarrollo de variantes optimizadas de algoritmos clásicos de ordenamiento para casos específicos.',
    icon: BarChart3,
    details: 'Optimización de caché y memoria'
  },
  {
    title: 'Motor de Ajedrez',
    description: 'Desarrollo de un motor de ajedrez personalizado desde cero, integrando búsqueda alfa-beta y funciones de evaluación.',
    icon: Trophy,
    details: 'Algoritmia pura en tiempo real'
  },
  {
    title: 'Complejidad Algorítmica',
    description: 'Análisis profundo de Big O y optimización de estructuras de datos para aplicaciones críticas.',
    icon: Binary,
    details: 'Eficiencia y escalabilidad'
  }
];

const Algorithms = () => {
  return (
    <section id="algorithms" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold text-bachoqueta-light tracking-wide uppercase">Algoritmia Pura</h2>
            <p className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Pasión por la eficiencia
            </p>
            <p className="mt-4 text-xl text-gray-400">
              Más allá del desarrollo convencional, me especializo en el diseño y análisis de algoritmos complejos para resolver problemas computacionales difíciles.
            </p>
            
            <div className="mt-10 space-y-8">
              {algorithmFocus.map((item) => (
                <div key={item.title} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bachoqueta text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-white">{item.title}</h3>
                    <p className="mt-2 text-base text-gray-400">{item.description}</p>
                    <span className="mt-2 inline-block text-xs font-mono text-bachoqueta-light">{item.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 relative">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl overflow-hidden">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs font-mono text-gray-500">algorithm_benchmark.cpp</span>
              </div>
              <pre className="text-sm font-mono text-bachoqueta-light leading-relaxed">
                <code>{`
// Travelling Salesman Problem Heuristic
void solveTSP(vector<Point>& points) {
  int n = points.size();
  vector<bool> visited(n, false);
  int current = 0;
  visited[current] = true;
  
  for(int i = 0; i < n-1; ++i) {
    int next = findNearest(current, visited, points);
    drawEdge(current, next);
    current = next;
    visited[current] = true;
  }
}

// Complexity: O(n²)
                `}</code>
              </pre>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-bachoqueta opacity-5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Algorithms;
