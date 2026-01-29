export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

const GITHUB_USERNAME = 'mcarbonell';

export const fetchUserRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    return data.map((repo: GitHubRepo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};
