import React from 'react';
import { List, ListGroup, ListItem } from 'framework7-react';
import _groupBy from 'lodash/groupBy';
import _map from 'lodash/map';
import useDraftPicks from '../hooks/useDraftPicks';
import { toOrdinal } from '../util';
import teams from '../util/teams.json';

function LeagueTab({ year }) {
  const draftPicks = useDraftPicks(year);

  const byRound = _groupBy(draftPicks, 'round');
  const listGroups = _map(byRound, function(players, key) {
    const round = toOrdinal(key);
    return (
      <ListGroup mediaList key={key}>
        <ListItem title={`${round} Round`} groupTitle></ListItem>
        {players.map((player, i) => (
          <ListItem title={player.name} subtitle={`${player.position} · ${teams[player.team]} · ${player.school}`} key={i}>
            <div slot="media">{player.pick}</div>
          </ListItem>
        ))}
      </ListGroup>
    )
  });
  return (
    <List>
      {listGroups}
    </List>
  );
};

export default LeagueTab;