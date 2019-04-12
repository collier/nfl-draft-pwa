import React from 'react';
import cn from 'classnames';
import styles from '../styles/TabFilter.module.css';

function TabFilters({children, isActive}) {
  const className = cn(styles.tabFilter, {
    [styles.active]: isActive
  });
  return <div className={className}>{children}</div>;
}

export default TabFilters;