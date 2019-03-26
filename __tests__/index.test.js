import getBand, {getBandName, getGenre} from '../src/index';

describe('getBandName', () => {
  it('should return a string', () => {
    expect(typeof getBandName()).toBe('string');
  });
});

describe('getGenre', () => {
  it('should return a string', () => {
    expect(typeof getGenre()).toBe('string');
  });
});

describe('getBand', () => {
  it('should return a string', () => {
    const band = getBand();
    expect(band).toHaveProperty('name');
    expect(band).toHaveProperty('genre');
  });
});
