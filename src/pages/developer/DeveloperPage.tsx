import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Developers from 'components/Developers';
import { fetchDevelopers } from 'api/trending';
import { DeveloperInterface } from 'interfaces/developer.interface';

const DeveloperPage = () => {
  const [dateRange, setDateRange] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  const { data, error, isError, isLoading } = useQuery<
    DeveloperInterface[],
    Error
  >(['developers', { language, dateRange }], () =>
    fetchDevelopers({ language, dateRange }),
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
    setDateRange('weekly');
  };

  return (
    <>
      <h1>Developer</h1>
      <Developers developers={data} />
      {language}/{dateRange}
      <button onClick={onClickLanguage}>Set language</button>
      <button onClick={onClickDateRange}>Set date range</button>
    </>
  );
};
export default DeveloperPage;
