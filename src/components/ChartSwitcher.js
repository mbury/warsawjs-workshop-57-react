import * as React from 'react';
import { Checkbox } from 'semantic-ui-react';

const ChartSwitcher = ({ isVisible, onChange }) => {
  return (
    <Checkbox
      checked={isVisible}
      onChange={(e, { checked }) => onChange(checked)}
      toggle
      label="Pokaż wykres"
    />
  );
};
export default React.memo(ChartSwitcher);
