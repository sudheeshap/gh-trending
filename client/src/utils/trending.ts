export const getToggleButtonOptions = () => {
  return [
    {
      value: 'repositories',
      text: 'Repositories',
    },
    {
      value: 'developers',
      text: 'Developers',
    },
  ];
};

export const getDefaultRepository = () => ({
  description: '',
  forks: 0,
  language: '',
  languageColor: '',
  rank: '',
  repositoryName: '',
  since: '',
  starsSince: '',
  totalStars: '',
  url: '',
  username: '',
  builtBy: [],
});

export const getDefaultDeveloper = () => ({
  avatar: '',
  name: '',
  rank: null,
  since: '',
  url: '',
  username: '',
  popularRepository: {
    description: '',
    repositoryName: '',
    url: '',
  },
});
