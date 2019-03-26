# metal-band-generator :metal: :guitar:

Randomly generates ficional metal band names and members

[![Build Status](https://travis-ci.org/vspedr/metal-band-generator.svg?branch=master)](https://travis-ci.org/vspedr/metal-band-generator)
[![Greenkeeper badge](https://badges.greenkeeper.io/vspedr/metal-band-generator.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/8b4adc5619fd52a44f64/maintainability)](https://codeclimate.com/github/vspedr/metal-band-generator/maintainability)
![npm](https://img.shields.io/npm/v/metal-band-generator.svg)

### Usage
Install with `npm i band-name-generator` or `yarn add band-name-generator`

```js
import getBand, {
  getBandMembers,
  getBandName,
  getGenre,
  getMember,
  getMemberName,
  getMemberInstrument,
} from 'metal-band-generator';

getBand(); // returns a complete band object, with name, genre and members
getBandMembers(); // returns an array of band members
getBandName(); // returns a random band name
getGenre(); // returns a random genre
getMember(); // returns a random member, with name and instrument
getMemberName(); // returns a random member name
getMemberInstrument(); // returns a random instrument
```

Example band:
```js
{ name: 'Dark Decadence',
  genre: 'Glam Heavy Atmospheric Metal',
  members:
  [ { name: 'Axl Rose', instrument: 'drums' },
    { name: 'Jorn Hetfield', instrument: 'harsh vocals' },
    { name: 'Alissa Hetfield', instrument: 'keyboard' },
    { name: 'Maria Hetfield', instrument: 'rhythm guitar' },
    { name: 'Jorn Hetfield', instrument: 'drums' },
    { name: 'Jorn Kakko', instrument: 'keyboard' } ] }
```

### Scripts
- `build`: transpiles and minifies all code in `./src` into `./lib` using babel;
- `lint`: lints code in `./src` using `eslint`;
- `precommit`: (automatic) runs linter before every commit;
- `prepublish`: (automatic) runs tests before attempting to publish the package;
- `test`: runs tests in `__tests__` using `jest`.

> Metal is for everyone - Freedom Call
