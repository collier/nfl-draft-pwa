import React from 'react';
import { Searchbar } from 'framework7-react';

function LeagueFilters() {
  return (
    <Searchbar
      customSearch={true}
      disableButton={false}
    />
  );
}

export default LeagueFilters;