// Declare the farmAnimals string once
const farmAnimals = 'cow horse sheep pig chicken';

// Use destructuring to assign variables for animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Use destructuring to assign specific animal names, skipping horse
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// Use destructuring to assign animal names based on colors, skipping horse and chicken
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Declare the colors array
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Use destructuring to assign variables for each color name
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Assign initials for six colors, skipping indigo
const [r, o, y, g, b, , v] = colors;

// Assign indigo to a different variable
const [, , , , , indg] = colors;

// Muppet object
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// Destructure the muppet object
const { muppetName, color, song, job, partner } = muppet;

// Nested muppet object
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructure nested properties
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;

