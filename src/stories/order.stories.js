import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

import { FILTER_OPTIONS } from '../commons/const';

import ChartSwitcher from '../components/ChartSwitcher';
import Filters from '../components/Filters';
import SortBar from '../components/SortBar';
import RatingChart from '../components/RatingChart';
import MealList from '../components/MealList';
import OrderSummary from '../components/OrderSummary';
import OrderCompletionStatus from '../components/OrderCompletionStatus';

const ContainerDecorator = (storyFn) => (
  <Container text>
    <Segment style={{ margin: 25 }} padded="very">
      {storyFn()}
    </Segment>
  </Container>
);

storiesOf('ChartSwitcher', module)
  .addDecorator(withKnobs)
  .addDecorator(ContainerDecorator)
  .add('default', () => {
    const isVisible = boolean('isVisible', false);
    return <ChartSwitcher isVisible={isVisible} onChange={action('clicked')} />;
  });

storiesOf('Filters', module)
  .addDecorator(ContainerDecorator)
  .add('default', () => {
    const mealsInFilter = { POLAND: 11, ITALY: 22, VIETNAM: 33 };
    return (
      <Filters
        count={mealsInFilter}
        options={FILTER_OPTIONS}
        onChange={action('clicked')}
      />
    );
  });

storiesOf('SortBar', module)
  .addDecorator(ContainerDecorator)
  .addDecorator(withKnobs)
  .add('default', () => {
    const label = 'sortField';
    const options = {
      price: 'price',
      reviews: 'reviews',
      rating: 'rating',
    };
    const defaultValue = 'price';
    const sortField = radios(label, options, defaultValue);
    return <SortBar sortField={sortField} onChange={action('clicked')} />;
  });

storiesOf('RatingChart', module)
  .addDecorator(ContainerDecorator)
  .add('default', () => {
    const chartData = [
      {
        rating: 11,
        price: 11,
        reviews: 11,
        name: 'test 1',
      },
      {
        rating: 22,
        price: 22,
        reviews: 22,
        name: 'test 2',
      },
    ];
    return <RatingChart onSelect={action('clicked')} data={chartData} />;
  });

storiesOf('MealList', module)
  .addDecorator(ContainerDecorator)
  .add('default', () => {
    const meals = MEALS;
    return <MealList meals={meals} onSelect={action('clicked')} />;
  });

storiesOf('OrderCompletionStatus', module)
  .addDecorator(withKnobs)
  .addDecorator(ContainerDecorator)
  .add('etap pierwszy', () => {
    return <OrderCompletionStatus step={1} />;
  })
  .add('etap drugi', () => {
    return <OrderCompletionStatus step={2} />;
  })
  .add('etap trzeci', () => {
    return <OrderCompletionStatus step={3} />;
  });

storiesOf('OrderSummary', module)
  .addDecorator(withKnobs)
  .addDecorator(ContainerDecorator)
  .add('etap drugi', () => {
    const meal = MEALS[0];
    return <OrderSummary meal={meal} />;
  })
  .add('etap trzeci', () => {
    const meal = MEALS[0];
    const paymentMethod = 'BLIK';
    return <OrderSummary meal={meal} paymentMethod={paymentMethod} />;
  });

const MEALS = [
  {
    image: 'http://lorempixel.com/175/175/food',
    id: '856b0fc0-463a-43c8-a44a-4679b8dca036',
    title: 'Tasty Metal Fish',
    location: {
      address: '87459 Karolina Gateway, 96-865, South Bertrandside',
      delivery: 40,
    },
    rating: { average: 6.4, reviews: 216 },
    size: 'BIG',
    origin: 'ITALY',
    price: { amount: 71, delivery: true },
  },
  {
    image: 'http://lorempixel.com/175/175/food',
    id: '6af2cb08-aa74-41e7-82ab-7ec5c90193ba',
    title: 'Intelligent Granite Chips',
    location: {
      address: '63977 Irma Ranch, 64-692, Wesołowskimouth',
      delivery: 55,
    },
    rating: { average: 8.8, reviews: 469 },
    size: 'MEDIUM',
    origin: 'POLAND',
    price: { amount: 70, delivery: true },
  },
];
