import React from 'react';
import { Searchbar } from 'framework7-react';

// essentially just a searchbar running a custom search to set the query
function LeagueFilters({setQuery}) {
  return (
    <Searchbar
      init={true}
      disableButton={false}
      customSearch={true}
      onSearchbarSearch={(searchbar, query)=>{setQuery (query)}}>
    </Searchbar>
  );
}

export default LeagueFilters;