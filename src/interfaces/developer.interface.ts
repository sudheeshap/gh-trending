export interface DeveloperInterface {
  avatar: string;
  name: string;
  rank: number;
  since: string;
  url: string;
  username: string;
  popularRepository: {
    description: string;
    repositoryName: string;
    url: string;
  };
}
