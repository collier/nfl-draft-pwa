import { useState, useEffect } from 'react';
import localforage from 'localforage';
import axios from 'axios';

function useDraftPicks(year) {
  const [draftPicks, setDraftPicks] = useState([]);

  useEffect(() => {
    const fetchDraftPicks = async () => {
      try {
        // Try to fetch draft picks from local IndexedDB first
        let draftPicks = await localforage.getItem(year);
        // If local picks arent there, try to load them from the server
        if(!draftPicks) {
          const result = await axios.get(`./data/${year}.json`);
          draftPicks = result.data;
        }
        setDraftPicks(draftPicks);
      } catch(err) {
        console.log('Unable to load draft picks locally or from server');
      }
    };
    if(year) {
      fetchDraftPicks();
    }
  }, [year]);

  return draftPicks;
}

export default useDraftPicks;