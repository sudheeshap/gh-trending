import { SelectInputInterface } from 'interfaces/option-group.interface';

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

export const getSelectOptions = (keys: string[] = []): SelectInputInterface[] => {
  const options = [
    {
      label: 'Spoken Language:',
      header: 'Select a spoken language',
      key: 'spokenLang',
      options: [
        {
          value: 'en',
          text: 'English',
        },
        {
          value: 'fr',
          text: 'French',
        },
      ],
    },
    {
      label: 'Language:',
      header: 'Select a language',
      key: 'language',
      options: [
        {
          value: 'javascript',
          text: 'JavaScript',
        },
        {
          value: 'python',
          text: 'Python',
        },
      ],
    },
    {
      label: 'Date range:',
      header: 'Adjust time span',
      key: 'dateRange',
      options: [
        {
          value: 'daily',
          text: 'Today',
        },
        {
          value: 'weekly',
          text: 'This week',
        },
        {
          value: 'monthly',
          text: 'This month',
        },
      ],
    },
  ];

  return options.filter((option) => keys.includes(option.key));
};
