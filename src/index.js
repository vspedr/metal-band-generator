import r from 'random-seed';
import {BAND_FIRST_NAMES, BAND_LAST_NAMES, GENRES} from './data/bands';

const rand = r.create();
const getBandName = () => [
  BAND_FIRST_NAMES[rand(BAND_FIRST_NAMES.length)],
  BAND_LAST_NAMES[rand(BAND_LAST_NAMES.length)],
].join(' ');

const getGenre = () => {
  const genreLength = rand(3) + 1;
  const genreNames = [];
  for (let i = 0; i < genreLength; i++) {
    genreNames.push(GENRES[rand(GENRES.length)]);
  }
  return `${genreNames.join(' ')} Metal`;
};

const getBand = () => ({
  name: getBandName(),
  genre: getGenre(),
});

export {
  getBandName,
  getGenre,
};

export default getBand;
