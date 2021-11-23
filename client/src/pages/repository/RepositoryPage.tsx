import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchRepositories } from 'api/trending';
import { RepositoryInterface } from 'interfaces/repository.interface';
import ListHeader from 'components/feature/list-header/ListHeader';
import RepositoryList from 'components/feature/repository-list/RepositoryList';
import Select from 'components/shared/select/Select';
import Message from 'components/shared/message/Message';
import Header from 'components/shared/header/Header';
import Footer from 'components/shared/footer/Footer';

const RepositoryPage = () => {
  const [dateRange, setDateRange] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [spokenLangCode, setSpokenLangCode] = useState<string>('');

  const { data, isError, isLoading } = useQuery<RepositoryInterface[], Error>(
    ['repositories', { language, dateRange, spokenLangCode }],
    () => fetchRepositories({ language, dateRange, spokenLangCode }),
  );

  if (isError) {
    return <Message text="Some error happened" />;
  }

  if (!isLoading && !data) {
    return <Message text="No results found" />;
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
        <Select
          label="Spoken Language:"
          testId="select-spoken-lang"
          onChange={(value) => handleChangeFilter('spokenLang', value)}
        >
          <Select.Header>Select a spoken language</Select.Header>
          <Select.Item value="en">English</Select.Item>
          <Select.Item value="fr">French</Select.Item>
        </Select>

        <Select
          label="Language:"
          testId="select-language"
          onChange={(value) => handleChangeFilter('language', value)}
        >
          <Select.Header>Select a language</Select.Header>
          <Select.Item value="javascript">JavaScript</Select.Item>
          <Select.Item value="python">Python</Select.Item>
        </Select>

        <Select
          label="Date range:"
          testId="select-date"
          onChange={(value) => handleChangeFilter('dateRange', value)}
        >
          <Select.Header>Adjust time span</Select.Header>
          <Select.Item value="daily">Today</Select.Item>
          <Select.Item value="weekly">This week</Select.Item>
          <Select.Item value="monthly">This month</Select.Item>
        </Select>
      </>
    );
  };

  return (
    <>
      <Header
        title="Trending"
        subTitle="See what the GitHub community is most excited about today."
      />
      <section>
        <ListHeader actions={renderActions()} />
        <RepositoryList repositories={data} isPlaceholder={isLoading} />
        <Footer />
      </section>
    </>
  );
};
export default RepositoryPage;
