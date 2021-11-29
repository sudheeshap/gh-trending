import React, { FC, useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import Developer from '../developer/Developer';
import styles from './DeveloperList.module.scss';
import { DeveloperInterface } from 'interfaces/developer.interface';
import ListHeader from 'components/feature/list-header/ListHeader';
import Select from 'components/shared/select/Select';
import { fetchDevelopers } from 'api/trending';
import Message from 'components/shared/message/Message';
import { getSelectOptions } from 'utils/trending';
import { OptionInterface } from 'interfaces/option.interface';

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

  const renderActions = useCallback(() => {
    const selectOptions = getSelectOptions(['language', 'dateRange']);

    return (
      <>
        {selectOptions.map((selectOption) => (
          <Select
            defaultText="Any"
            key={selectOption.key}
            label={selectOption.label}
            testId={`select-${selectOption.key}`}
            onChange={(value) => handleChangeFilter(selectOption.key, value)}
          >
            <Select.Header>{selectOption.label}</Select.Header>

            {selectOption.options.map((option: OptionInterface) => (
              <Select.Item key={option.value} value={option.value}>
                {option.text}
              </Select.Item>
            ))}
          </Select>
        ))}
      </>
    );
  }, []);

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
