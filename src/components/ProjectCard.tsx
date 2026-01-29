import { Github, Star, ExternalLink } from 'lucide-react';
import { GitHubRepo } from '../services/github';

const ProjectCard = ({ repo }: { repo: GitHubRepo }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 truncate pr-2" title={repo.name}>
            {repo.name}
          </h3>
          <div className="flex items-center space-x-1 text-gray-500 bg-gray-50 px-2 py-1 rounded-md text-sm">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{repo.stargazers_count}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm h-15">
          {repo.description || 'Sin descripción disponible.'}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.language && (
            <span className="px-2 py-1 bg-bachoqueta-accent text-bachoqueta-dark text-xs font-semibold rounded-md">
              {repo.language}
            </span>
          )}
          {repo.topics.slice(0, 3).map(topic => (
            <span key={topic} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
              {topic}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center mt-auto">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-700 hover:text-bachoqueta transition-colors font-medium text-sm"
        >
          <Github className="h-4 w-4" />
          <span>Código</span>
        </a>
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-bachoqueta transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
