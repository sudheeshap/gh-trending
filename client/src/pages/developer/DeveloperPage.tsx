import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchDevelopers } from 'api/trending';
import { DeveloperInterface } from 'interfaces/developer.interface';
import DeveloperList from '../../components/feature/developer-list/DeveloperList';
import Header from 'components/shared/header/Header';
import ListHeader from 'components/feature/list-header/ListHeader';
import Select from 'components/shared/select/Select';
import Message from 'components/shared/message/Message';
import Footer from 'components/shared/footer/Footer';

const DeveloperPage = () => {
  const [dateRange, setDateRange] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  const { data, isError, isLoading } = useQuery<DeveloperInterface[], Error>(
    ['developers', { language, dateRange }],
    () => fetchDevelopers({ language, dateRange }),
  );

  if (isError) {
    return <Message text="Some error happened" />;
  }

  if (!isLoading && !data) {
    return <Message text="No results found" />;
  }

  const handleChangeFilter = (key: string, value: string) => {
    const operations: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
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
        <Select label="Language:" onChange={(value) => handleChangeFilter('language', value)}>
          <Select.Header>Select a language</Select.Header>
          <Select.Item value="javascript">JavaScript</Select.Item>
          <Select.Item value="python">Python</Select.Item>
        </Select>

        <Select label="Date range:" onChange={(value) => handleChangeFilter('dateRange', value)}>
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
      <Header title="Trending" subTitle="These are the developers building the hot tools today." />
      <section>
        <ListHeader actions={renderActions()} />
        <DeveloperList developers={data} isPlaceholder={isLoading} />
        <Footer />
      </section>
    </>
  );
};
export default DeveloperPage;
