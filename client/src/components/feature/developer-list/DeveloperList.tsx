import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';

import Developer from '../developer/Developer';
import styles from './DeveloperList.module.scss';
import { DeveloperInterface } from 'interfaces/developer.interface';
import ListHeader from 'components/feature/list-header/ListHeader';
import Select from 'components/shared/select/Select';
import { fetchDevelopers } from 'api/trending';
import Message from 'components/shared/message/Message';

const developersCount = 25;

const DeveloperList: FC = () => {
  const [dateRange, setDateRange] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  const { data, isError, isLoading } = useQuery<DeveloperInterface[], Error>(
    ['developers', { language, dateRange }],
    () => fetchDevelopers({ language, dateRange }),
  );

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

  const renderDevelopers = () => {
    if (isError) {
      return <Message text="Some error happened" />;
    }

    if (isLoading) {
      return (
        <div className={styles.container}>
          {[...Array(developersCount)].map((developer, i) => (
            <Developer key={i} isPlaceholder developer={developer} />
          ))}
        </div>
      );
    }

    if (!isLoading && !data) {
      return <Message text="No results found" />;
    }

    return (data || []).map((developer) => (
      <Developer key={developer.rank} developer={developer} isPlaceholder={isLoading} />
    ));
  };

  return (
    <div data-testid="developer-list">
      <ListHeader actions={renderActions()} />
      <div className={styles.container}>{renderDevelopers()}</div>
    </div>
  );
};

export default DeveloperList;
