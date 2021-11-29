import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';

import Repository from '../repository/Repository';
import styles from './RepositoryList.module.scss';
import { RepositoryInterface } from 'interfaces/repository.interface';
import ListHeader from 'components/feature/list-header/ListHeader';
import Select from 'components/shared/select/Select';
import { fetchRepositories } from 'api/trending';
import Message from 'components/shared/message/Message';

const repositoriesCount = 25;

const RepositoryList: FC = () => {
  const [dateRange, setDateRange] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [spokenLangCode, setSpokenLangCode] = useState<string>('');

  const { data, isError, isLoading } = useQuery<RepositoryInterface[], Error>(
    ['repositories', { language, dateRange, spokenLangCode }],
    () => fetchRepositories({ language, dateRange, spokenLangCode }),
  );

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

  const renderRepositories = () => {
    if (isError) {
      return <Message text="Some error happened" />;
    }

    if (isLoading) {
      return (
        <div className={styles.container}>
          {[...Array(repositoriesCount)].map((repository, i) => (
            <Repository key={i} isPlaceholder repository={repository} />
          ))}
        </div>
      );
    }

    if (!isLoading && !data) {
      return <Message text="No results found" />;
    }

    return (data || []).map((repository) => (
      <Repository
        key={`${repository.username}/${repository.repositoryName}`}
        repository={repository}
        isPlaceholder={isLoading}
      />
    ));
  };

  return (
    <div data-testid="repository-list">
      <ListHeader actions={renderActions()} />
      <div className={styles.container}>{renderRepositories()}</div>
    </div>
  );
};

export default RepositoryList;
