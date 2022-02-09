import React from "react";

import './styles.css';
import './query.css';

let dummyCharities = [
  {
    id: 1,
    charity_name: 'charity one',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 2,
    charity_name: 'charity two',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 3,
    charity_name: 'charity three',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 4,
    charity_name: 'charity four',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 5,
    charity_name: 'charity five',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 6,
    charity_name: 'charity six',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
];

const CharityCard = () => {
  return (
    <section className="charity-card-wrapper">
      <h1>charity card</h1>
    </section>
  );
};

export default CharityCard;