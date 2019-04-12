import React from 'react';
import { List, ListInput } from 'framework7-react';
import tabFilterStyles from '../styles/TabFilter.module.css';

function LeagueFilters({year, setYear, yearOptions}) {

  function onChangeYear(e) {
    const newYear = e.target.value;
    setYear(newYear);
  }

  return (
    <List inlineLabels={true} className={tabFilterStyles.list}>
      <ListInput
        label="Year"
        type="select"
        defaultValue={year}
        placeholder="Please choose..."
        onInput={onChangeYear}
      >
      {yearOptions.map(year => (
        <option value={year} key={year}>{year}</option>
      ))}
      </ListInput>
    </List>
  );
}

export default LeagueFilters;