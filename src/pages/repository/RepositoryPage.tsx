import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchRepositories } from 'api/trending';
import { RepositoryInterface } from 'interfaces/repository.interface';
import RepositoryList from '../../components/repository-list/RespositoryList';

const RespositoryPage = () => {
  const [dateRange, setDateRange] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [spokenLangCode, setSpokenLangCode] = useState<string>('');

  const { data, error, isError, isLoading } = useQuery<
    RepositoryInterface[],
    Error
  >(['repositories', { language, dateRange, spokenLangCode }], () =>
    fetchRepositories({ language, dateRange, spokenLangCode }),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error?.message}</div>;
  }

  if (!data) {
    return null;
  }

  const onClickLanguage = () => {
    setLanguage('javascript');
  };

  const onClickDateRange = () => {
    setDateRange('monthly');
  };

  const onClickSpokenLangCode = () => {
    setSpokenLangCode('fr');
  };

  return (
    <>
      <h1>Repository</h1>
      <RepositoryList repositories={data} />
      {language}/{dateRange}/{spokenLangCode}
      <button onClick={onClickLanguage}>Set language</button>
      <button onClick={onClickDateRange}>Set date range</button>
      <button onClick={onClickSpokenLangCode}>Set spoken lang</button>
    </>
  );
};
export default RespositoryPage;
