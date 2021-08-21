import * as React from 'react';
import {
  Button,
  Divider,
  Header,
  Dropdown,
  Container,
} from 'semantic-ui-react';

import OrderSummary from './OrderSummary';

const SelectPaymentMethod = () => {
  const selectedMeal = {};
  const payment = 'blik';
  const selectPayment = () => {};
  const setPayment = () => {};
  const reset = () => {};

  return (
    <Container text>
      <OrderSummary meal={selectedMeal} />
      <Header as="h3">Wybierz formę płatności:</Header>
      <PaymentOptions value={payment} onChange={setPayment} />
      <Divider hidden />
      <SelectButton
        onClick={() => selectPayment(payment)}
        disabled={!payment}
      />
      <ResetButton onClick={reset} />
    </Container>
  );
};

const PaymentOptions = ({ onChange, value }) => (
  <Dropdown
    placeholder="forma płatności..."
    onChange={(e, { value }) => onChange(value)}
    fluid
    value={value}
    selection
    options={paymentsOptions}
  />
);

const ResetButton = ({ onClick }) => (
  <Button onClick={onClick} floated="left">
    Powrót do menu
  </Button>
);

const SelectButton = ({ disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick} primary floated="right">
    Wybierz
  </Button>
);

export const paymentsOptions = [
  {
    key: 'blik',
    text: 'BLIK',
    value: 'blik',
  },
  {
    key: 'paypal',
    text: 'PayPal',
    value: 'paypal',
  },
  {
    key: 'card',
    text: 'Karta Kredytowa',
    value: 'card',
  },
];
export default SelectPaymentMethod;
