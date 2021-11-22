const host = 'http://localhost:8000';

export const fetchRepositories = async (params: Record<string, string>) => {
  let url: URL = new URL(
    `${host}/api/repositories${params.language ? `/${params.language}` : ''}`,
  );

  if (params.dateRange) {
    url.searchParams.append('since', params.dateRange);
  }

  if (params.spokenLangCode) {
    url.searchParams.append('spoken_language_code', params.spokenLangCode);
  }

  return fetch(String(url))
    .then((response) => response.json())
    .catch((error) => error);
};

export const fetchDevelopers = async (params: Record<string, string>) => {
  let url: URL = new URL(
    `${host}/api/developers${params.language ? `/${params.language}` : ''}`,
  );

  if (params.dateRange) {
    url.searchParams.append('since', params.dateRange);
  }

  return fetch(String(url))
    .then((response) => response.json())
    .catch((error) => error);
};
