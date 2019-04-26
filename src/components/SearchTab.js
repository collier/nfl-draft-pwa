import React from 'react';
import { List, ListItem } from 'framework7-react';
import teams from '../util/teams.json';
import usePickTrie from '../hooks/usePickTrie';

// get queried picks and return as list
function SearchTab({query}) {

  const picks = usePickTrie (query);

  return (
    <List mediaList>
      {
        !picks.length &&
        <ListItem>
          <div slot="media">Hello... anyone there?</div>
        </ListItem>
      }
      {
        picks.map ((player, i) => (
          <ListItem title={`${player.name} · ${player.year}`} subtitle={`${player.position} · ${teams[player.team]} · ${player.school}`} key={i}>
            <div slot="media">{player.round}.{player.pick}</div>
          </ListItem>
        ))
      }
    </List>
    )
}

export default SearchTab;