export interface RepositoryInterface {
  description: string;
  forks: number;
  language: string;
  languageColor: string;
  rank: number;
  repositoryName: string;
  since: string;
  starsSince: number;
  totalStars: number;
  url: string;
  username: string;
  builtBy: Array<{
    avatar: string;
    url: string;
    username: string;
  }>;
}
