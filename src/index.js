import r from 'random-seed';
import dedent from 'dedent';

import {
  BAND_FIRST_NAMES,
  BAND_LAST_NAMES,
  GENRES,
} from './data/bands';

import {
  MEMBER_FIRST_NAMES,
  MEMBER_LAST_NAMES,
  INSTRUMENTS,
} from './data/members';

const rand = r.create();
const getOneOf = (array) => array[rand(array.length)];

const getBandName = () => [
  getOneOf(BAND_FIRST_NAMES),
  getOneOf(BAND_LAST_NAMES),
].join(' ');

const getGenre = () => {
  const genreLength = rand(3) + 1;
  const genreNames = [];
  for (let i = 0; i < genreLength; i++) {
    genreNames.push(getOneOf(GENRES));
  }
  return `${genreNames.join(' ')} Metal`;
};

const getBand = () => ({
  name: getBandName(),
  genre: getGenre(),
  members: getBandMembers(),
});

const getMemberName = () => [
  getOneOf(MEMBER_FIRST_NAMES),
  getOneOf(MEMBER_LAST_NAMES),
].join(' ');

const getMemberInstrument = () => getOneOf(INSTRUMENTS);

const getMember = () => ({
  name: getMemberName(),
  instrument: getMemberInstrument(),
});

const getBandMembers = () => {
  const membersCount = rand(10) + 1;
  const members = [];
  for (let i = 0; i < membersCount; i++) {
    members.push(getMember());
  }

  return members;
};

const bandToString = (band) => dedent`
  ${band.name}
  Genre: ${band.genre}

  Members:
  ${ band.members.map((m) => `${m.name} (${m.instrument})`).join('\n')}
`;

export {
  getBandName,
  getGenre,
  getMemberName,
  getMemberInstrument,
  getMember,
  getBandMembers,
  bandToString,
};

export default getBand;
