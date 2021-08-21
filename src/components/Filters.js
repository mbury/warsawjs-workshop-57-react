import * as React from 'react';
import { Header, Divider, Checkbox } from 'semantic-ui-react';

const Filters = ({ count = {}, onChange, options = [] }) => (
  <>
    <Header as="h4">Filtruj według następujących kryteriów:</Header>
    <Divider />
    <Header as="h5">Kraj pochodzenia</Header>
    {options.map((b) => (
      <div data-testid="checkbox-filter" key={b.value}>
        <Checkbox
          onChange={(e, { value, checked }) => onChange(value, checked)}
          value={b.value}
          id={b.value}
          label={b.text}
        />{' '}
        ({count[b.value] || 0})
      </div>
    ))}
  </>
);

export default React.memo(Filters);
