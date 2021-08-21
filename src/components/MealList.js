import * as React from 'react';
import { Item } from 'semantic-ui-react';
import MealCard from './MealCard';

const MealList = ({ meals, onSelect }) => (
  <Item.Group divided>
    {meals.map((meal) => (
      <MealCard key={meal.id} meal={meal} onSelect={onSelect} />
    ))}
  </Item.Group>
);

export default React.memo(MealList);
