var faker = require('faker');
var moment = require('moment');
var _ = require('lodash');

// generate clients (static)
const contacts = [];
const clients = [];
const clientImageTypes = [
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-abnlogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-adidaslogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-klmlogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-microsoftlogozwart-320x161@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-monalogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-nivealogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-nnlogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-oxxiologozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-pathelogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-tomtomlogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-transavialogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-triumphlogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-unileverlogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-walibilogozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-zalandologozwart@2x.png',
  'https://s3.amazonaws.com/vue-test-aaneto/clients/dept-work-desktop--google-font-ziggologozwart@2x.png'
];
let id = 1;
for (let i = 0; i < clientImageTypes.length; i++) {
  let company = faker.company.companyName();
  clients.push({
    id: id,
    name: company,
    image: clientImageTypes[i],
    imageAlt: company
  });
  id++;
}

let categoriesName = [
  'technology',
  'strategy',
  'design',
  'advertising',
  'commerce',
  'media',
  'branding',
  'digital marketing',
  'content',
  'data intelligence',
  'marketing'
];
// generate 10 categories
const categories = [];
for (let i = 0; i < categoriesName.length; i++) {
  var category = {
    id: i + 1,
    name: categoriesName[i]
  };

  categories.push(category);
}

let industriesNames = [
  'b2b',
  'retail & fashion',
  'finance & insurance',
  'utilities',
  'fast moving consumer goods',
  'non-profit',
  'health',
  'education',
  'media',
  'travel'
];

// generate 10 industries
const industries = [];
for (let i = 0; i < industriesNames.length; i++) {
  let industry = {
    id: i + 1,
    name: industriesNames[i]
  };

  industries.push(industry);
}

// generate 100 articles
const imageTypes = [
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-0.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-1.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-2.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-3.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-4.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-5.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-6.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-7.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-8.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-10.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-11.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-12.png',
  'https://s3.amazonaws.com/vue-test-aaneto/dept-work-desktop--google-font-image-13.png'
];
const articles = [];
const featuredArticle = [true, false];

//generating 30 articles per category and industry not featured
for (let i = 0; i < categories.length; i++) {
  for (let j = 0; j < industries.length; j++) {
    for (let k = 1; k <= 30; k++) {
      var article = {
        id: k,
        categoryId: categories[i].id,
        industryId: industries[j].id,
        label: faker.company.companyName(),
        title: faker.lorem.sentence(),
        summary: faker.lorem.paragraphs(1),
        body: faker.lorem.paragraphs(
          faker.random.number({
            min: 3,
            max: 9
          })
        ),
        image: imageTypes[faker.random.number({ min: 0, max: 12 })],
        imageAlt: faker.lorem.sentence(),
        date: faker.date.past(),
        link: faker.internet.domainWord(),
        featured: false
      };
      articles.push(article);
    }
  }
}

//generating 10 articles per category and industry not featured
for (let i = 0; i < categories.length; i++) {
  for (let j = 0; j < industries.length; j++) {
    for (let k = 1; k <= 10; k++) {
      var article = {
        id: k,
        categoryId: categories[i].id,
        industryId: industries[j].id,
        label: faker.company.companyName(),
        title: faker.lorem.sentence(),
        summary: faker.lorem.paragraphs(1),
        body: faker.lorem.paragraphs(
          faker.random.number({
            min: 3,
            max: 9
          })
        ),
        image: imageTypes[faker.random.number({ min: 0, max: 12 })],
        imageAlt: faker.lorem.sentence(),
        date: faker.date.past(),
        link: faker.internet.domainWord(),
        featured: true
      };
      articles.push(article);
    }
  }
}

module.exports = function() {
  return {
    contacts: contacts,
    clients: clients,
    categories: categories,
    industries: industries,
    articles: articles
  };
};
