import getBand, {
  bandToString,
  getBandMembers,
  getBandName,
  getGenre,
  getMember,
  getMemberName,
  getMemberInstrument,
} from '../src/index';

describe('Band details', () => {
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
    it('should return a band object with name, genre and members', () => {
      const band = getBand();
      console.log(band);
      expect(band).toHaveProperty('name');
      expect(band).toHaveProperty('genre');
      expect(band).toHaveProperty('members');
    });
  });

  describe('bandToString', () => {
    it('should return a string', () => {
      const band = getBand();
      const bandString = bandToString(band);
      console.log(bandString);
      expect(typeof bandString).toBe('string');
    });
  });
});

describe('Member details', () => {
  describe('getMemberName', () => {
    it('should return a string', () => {
      expect(typeof getMemberName()).toBe('string');
    });
  });

  describe('getMemberInstrument', () => {
    it('should return a string', () => {
      expect(typeof getMemberInstrument()).toBe('string');
    });
  });

  describe('getMember', () => {
    it('should return a member object with name and instrument', () => {
      const member = getMember();
      expect(member).toHaveProperty('name');
      expect(member).toHaveProperty('instrument');
    });
  });

  describe('getBandMembers', () => {
    it('should return an array of member objects', () => {
      expect(getBandMembers()).toBeInstanceOf(Array);
    });
  });
});
