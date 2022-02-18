const db = require('./connection');
const { User, BlogPost, Charities } = require('../models');

db.once('open', async () => {
  await BlogPost.deleteMany();
  await BlogPost.insertMany([
    {
      author: 'Charlie Pace',
      title: 'Testing One',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam ab ipsum, sit, dolores voluptates numquam nulla quisquam delectus excepturi nesciunt. Exercitationem a rerum eos, neque placeat facere et sequi!'
    },
    {
      author: 'John Locke',
      title: 'Testing Two',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam ab ipsum, sit, dolores voluptates numquam nulla quisquam delectus excepturi nesciunt. Exercitationem a rerum eos, neque placeat facere et sequi!'
    },
    {
      author: 'Hugo Reyes',
      title: 'Testing Three',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam ab ipsum, sit, dolores voluptates numquam nulla quisquam delectus excepturi nesciunt. Exercitationem a rerum eos, neque placeat facere et sequi!'
    },
  ]);

  console.log('seeded posts');

  await Charities.deleteMany();
  await Charities.insertMany([
    {
      charityName: 'Charity One',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charityone@gmail.com',
      charityAddress: 'dummy address one',
    },
    {
      charityName: 'Charity Two',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charitytwo@gmail.com',
      charityAddress: 'dummy address two',
    },
    {
      charityName: 'Charity Three',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charitythree@gmail.com',
      charityAddress: 'dummy address three',
    },
    {
      charityName: 'Charity Four',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charityfour@gmail.com',
      charityAddress: 'dummy address four',
    },
    {
      charityName: 'Charity Five',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charityfive@gmail.com',
      charityAddress: 'dummy address five',
    },
    {
      charityName: 'Charity Six',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charitysix@gmail.com',
      charityAddress: 'dummy address six',
    },
    {
      charityName: 'Charity Seven',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charityseven@gmail.com',
      charityAddress: 'dummy address seven',
    },
    {
      charityName: 'Charity Eight',
      charityDescription: 'Lorem ipsum dolor sit amet',
      charityEmail: 'charityeight@gmail.com',
      charityAddress: 'dummy address eight',
    },
  ]);

  console.log('seeded charities');
  process.exit();
});