const host = 'http://localhost:8000';

export const fetchRepositories = async (params: Record<string, string>) => {
  let url: URL = new URL(`${host}/api/repositories${params.language ? `/${params.language}` : ''}`);

  if (params.dateRange) {
    url.searchParams.append('since', params.dateRange);
  }

  if (params.spokenLangCode) {
    url.searchParams.append('spoken_language_code', params.spokenLangCode);
  }

  const response = await fetch(String(url));

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchDevelopers = async (params: Record<string, string>) => {
  let url: URL = new URL(`${host}/api/developers${params.language ? `/${params.language}` : ''}`);

  if (params.dateRange) {
    url.searchParams.append('since', params.dateRange);
  }

  const response = await fetch(String(url));

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
