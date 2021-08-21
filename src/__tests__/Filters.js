import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { FILTER_OPTIONS } from '../commons/const';

import Filters from '../components/Filters';

afterEach(cleanup);

describe('Filter component:', () => {
  test('render all filters', () => {
    const onClick = jest.fn();
    const length = FILTER_OPTIONS.length;
    const { getAllByTestId } = render(
      <Filters options={FILTER_OPTIONS} onChange={onClick} />
    );
    const checkbox = getAllByTestId('checkbox-filter');
    expect(checkbox.length).toBe(length);
  });

  test('call onChange with new filter value', () => {
    const onClick = jest.fn();
    const filter = FILTER_OPTIONS[0];
    const { getByLabelText } = render(
      <Filters options={FILTER_OPTIONS} onChange={onClick} />
    );
    const checkbox = getByLabelText(filter.text);
    fireEvent.click(checkbox);
    expect(onClick).toHaveBeenCalledWith(filter.value, true);
  });

  test('render 0 if no unit in filter', () => {
    const { getAllByTestId } = render(<Filters options={FILTER_OPTIONS} />);
    const checkbox = getAllByTestId('checkbox-filter');
    expect(checkbox[0].textContent).toMatch(/\(0\)/i);
  });

  test('render unit number in filter', () => {
    const filterIndex = 0;
    const unitInFilter = 1;
    const filter = FILTER_OPTIONS[filterIndex];
    const count = { [filter.value]: unitInFilter };
    const { getAllByTestId } = render(
      <Filters options={FILTER_OPTIONS} count={count} />
    );
    const checkbox = getAllByTestId('checkbox-filter');
    expect(checkbox[filterIndex].textContent).toMatch(
      new RegExp('(' + unitInFilter + ')')
    );
  });
});
