var faker = require('faker');
var moment = require('moment');
var _ = require('lodash');

let brandsName = [
  'almay',
  'alva',
  'anna sui',
  'annabelle',
  'benefit',
  'boosh',
  "burt's bees",
  'butter london',
  "c'est moi",
  'cargo cosmetics',
  'china glaze',
  'clinique',
  'coastal classic creation',
  'colourpop',
  'covergirl',
  'dalish',
  'deciem',
  'dior',
  'dr. hauschka',
  'e.l.f.',
  'essie',
  'fenty',
  'glossier',
  'green people',
  'iman',
  "l'oreal",
  'lotus cosmetics usa',
  "maia's mineral galaxy",
  'marcelle',
  'marienatie',
  'maybelline',
  'milani',
  'mineral fusion',
  'misa',
  'mistura',
  'moov',
  'nudus',
  'nyx',
  'orly',
  'pacifica',
  'penny lane organics',
  'physicians formula',
  'piggy paint',
  'pure anada',
  'rejuva minerals',
  'revlon',
  "sally b's skin yummies",
  'salon perfect',
  'sante',
  'sinful colours',
  'smashbox',
  'stila',
  'suncoat',
  'w3llpeople',
  'wet n wild',
  'zorah',
  'zorah biocosmetiques'
];
// generate 10 categories
const brands = [];
for (let i = 0; i < brandsName.length; i++) {
  var category = {
    id: i + 1,
    name: brandsName[i],
    label: faker.company.companyName(),
    title: faker.lorem.sentence(),
    summary: faker.lorem.paragraphs(1),
    description: faker.lorem.paragraphs(
      faker.random.number({
        min: 3,
        max: 9
      })
    ),
    date: faker.date.past(),
    link: faker.internet.domainWord()
  };

  brands.push(category);
}

module.exports = function() {
  return {
    brands: brands
  };
};
