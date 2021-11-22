import React, { FC, ReactElement } from 'react';

import ToggleButtonGroup from 'components/toggle-button-group/ToggleButtonGroup';
import styles from './ListHeader.module.scss';
import { getToggleButtonOptions } from 'utils/trending';
import { useNavigate, useLocation } from 'react-router-dom';
import { TrendingCategoryEnum } from 'enums/trending-category.enum';

interface ListHeaderProps {
  actions: ReactElement;
}

const categoryOptions = getToggleButtonOptions();

const ListHeader: FC<ListHeaderProps> = ({ actions }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedCategory = location.pathname.replace('/', '') || TrendingCategoryEnum.repositories;

  const handleClickCategory = (category: string) => {
    navigate(`/${category}`, { replace: true });
  };

  return (
    <div className={styles.container}>
      <div>
        <ToggleButtonGroup
          options={categoryOptions}
          selected={selectedCategory}
          onClick={handleClickCategory}
        />
      </div>
      <div className={styles.actionContainer}>{actions}</div>
    </div>
  );
};

export default ListHeader;
