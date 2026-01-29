import { useEffect, useState } from 'react';
import { GitHubRepo, fetchUserRepos } from '../services/github';
import ProjectCard from './ProjectCard';
import { Loader2 } from 'lucide-react';

const ProjectGrid = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchUserRepos();
      setRepos(data);
      setLoading(false);
    };
    getRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 text-bachoqueta animate-spin" />
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-bachoqueta tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Proyectos Recientes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Una selección de mis últimos trabajos y contribuciones extraídos directamente de GitHub.
          </p>
        </div>

        {repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10">
            No se pudieron cargar los proyectos en este momento.
          </div>
        )}
        
        <div className="mt-16 text-center">
          <a
            href="https://github.com/mcarbonell"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-bachoqueta font-semibold hover:text-bachoqueta-dark transition-colors"
          >
            Ver todo en GitHub <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
