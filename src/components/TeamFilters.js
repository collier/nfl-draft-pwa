import React, { useRef } from 'react';
import { List, ListInput } from 'framework7-react';
import _map from 'lodash/map';
import teams from '../util/teams.json';
import tabFilterStyles from '../styles/TabFilter.module.css';

function TeamFilters({year, teamId, setYear, setTeamId, yearOptions}) {
  const yearEl = useRef(null);
  const teamEl = useRef(null);

  // Only call the set state functions if both year and team have been selected
  function onFilterChange() {
    const newYear = yearEl.current.__reactRefs.inputEl.value;
    const newTeamId = teamEl.current.__reactRefs.inputEl.value;
    if(newYear && newTeamId) {
      setYear(newYear);
      setTeamId(newTeamId);
    }
  }

  return (
    <List inlineLabels={true} className={tabFilterStyles.list}>
      <ListInput
        label="Year"
        type="select"
        defaultValue={year}
        onInput={onFilterChange}
        ref={yearEl}
      >
        <option value="">Select Year...</option>
        {yearOptions.map(year => (
          <option value={year} key={year}>{year}</option>
        ))}
      </ListInput>
      <ListInput
        label="Team"
        type="select"
        defaultValue={teamId}
        onInput={onFilterChange}
        ref={teamEl}
      >
        <option value="">Select Team...</option>
        {_map(teams, (teamName, teamId) => (
          <option value={teamId} key={teamId}>{teamName}</option>
        ))}
      </ListInput>
    </List>
  );
}

export default TeamFilters;