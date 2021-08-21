import * as React from 'react';

import SelectMeal from './SelectMeal';
import OrderCompletionStatus from './OrderCompletionStatus';
import { Segment } from 'semantic-ui-react';

const PageContent = () => {
  return (
    <div>
      <Section>
        <OrderCompletionStatus />
      </Section>
      <Section>
        <SelectMeal />
      </Section>
    </div>
  );
};
export default PageContent;

const Section = (props) => (
  <Segment vertical style={{ padding: '2em 0em' }}>
    {props.children}
  </Segment>
);
