import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchRepositories } from 'api/trending';
import { RepositoryInterface } from 'interfaces/repository.interface';
import ListHeader from 'components/list-header/ListHeader';
import Button from 'components/button/Button';
import RepositoryList from 'components/repository-list/RepositoryList';

const RepositoryPage = () => {
  const [dateRange, setDateRange] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [spokenLangCode, setSpokenLangCode] = useState<string>('');

  const { data, error, isError, isLoading } = useQuery<RepositoryInterface[], Error>(
    ['repositories', { language, dateRange, spokenLangCode }],
    () => fetchRepositories({ language, dateRange, spokenLangCode }),
  );

  if (isError) {
    return <div>Error! {error?.message}</div>;
  }

  if (!isLoading && !data) {
    return null;
  }

  const handleChangeFilter = (key: string, value: string) => {
    const operations: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
      spokenLang: setSpokenLangCode,
      language: setLanguage,
      dateRange: setDateRange,
    };

    if (!operations[key]) {
      return;
    }

    operations[key](value);
  };

  const renderActions = () => {
    return (
      <>
        <Button icon="star" onClick={() => handleChangeFilter('spokenLang', 'fr')}>
          Spoken language
        </Button>
        <Button onClick={() => handleChangeFilter('language', 'python')}>Language</Button>
        <Button onClick={() => handleChangeFilter('dateRange', 'monthly')}>Date range</Button>
      </>
    );
  };

  // const renderActions = () => {
  //   return (
  //     <ToggleButtonGroup
  //       options={categoryOptions}
  //       selected={selectedCategory}
  //       onClick={handleClickCategory}
  //     />
  //   );
  // };

  return (
    <section>
      <h1>Repository</h1>
      <ListHeader actions={renderActions()} />
      <RepositoryList repositories={data} isPlaceholder={isLoading} />
    </section>
  );
};
export default RepositoryPage;
