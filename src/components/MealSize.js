import * as React from 'react';
import { Label } from 'semantic-ui-react';

const text = {
  SMALL: 'mała porcja',
  MEDIUM: 'średnia porcja',
  BIG: 'duża porcja',
};

export const MealSizeWithHook = (props) => {
  const isHovered = false;
  return (
    <span>
      <MealSize showDetail={isHovered} {...props} />
    </span>
  );
};

const MealSize = (props) => (
  <Label
    icon="shopping basket"
    content={props.showDetail ? text[props.demand] : props.demand}
  />
);

export default MealSizeWithHook;
