import React, { FC, ReactElement } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ToggleButtonGroup from 'components/shared/toggle-button-group/ToggleButtonGroup';
import styles from './ListHeader.module.scss';
import { getToggleButtonOptions } from 'utils/trending';
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
      <ToggleButtonGroup
        options={categoryOptions}
        selected={selectedCategory}
        onClick={handleClickCategory}
      />
      <div className={styles.actionContainer}>{actions}</div>
    </div>
  );
};

export default ListHeader;
