import { useState, useEffect } from 'react';
import localforage from 'localforage';
import Trie from '../util/Trie';

// instantiate here so we don't rework the trie every time
let draftPicks = [];
let trie = {};

function usePickTrie(q) {
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    const fetchDraftPicks = async (q) => {
      try {
        // Try to fetch draft picks from local IndexedDB first
        if (!draftPicks.length) {
          draftPicks = await localforage.getItem('all');
          trie = new Trie (draftPicks);
        }
        // find all possible matches and set those here
        setPicks (trie.find (q));
      } catch(err) {
        console.log('Unable to load draft picks');
      }
    }
    if (q) {
      fetchDraftPicks (q);
    }
  }, [q]);

  return picks;
}

export default usePickTrie;