import { List, Map } from 'immutable';

export const INITIAL_STATE = Map();

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

function getWinners(vote) {
  if (!vote) return [];
  const max = vote
    .get('tally')
    .reduce((prev, cur) => (prev > cur ? prev : cur));
  return vote
    .get('tally')
    .filter(v => v === max)
    .keySeq()
    .toList();
}

export function next(state) {
  const entries = state
    .get('entries')
    .concat(getWinners(state.get('vote')));

  if (entries.size === 1) {
    return state
      .remove('vote')
      .remove('entries')
      .set('winner', entries.first());
  }

  return state.merge({
    vote: Map({ pair: entries.take(2) }),
    entries: entries.skip(2)
  });
}

export function vote(voteState, entry) {
  if (!voteState.get('pair').includes(entry))
    return voteState;
    
  return voteState.updateIn(
    ['tally', entry],
    0,
    tally => tally + 1
  );
}
