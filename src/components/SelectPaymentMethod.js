/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Divider,
  Header,
  Dropdown,
  Container,
} from 'semantic-ui-react';

import OrderSummary from './OrderSummary';
import { useOrderFlow } from './OrderContext';

import usePersistsValue from '../commons/usePersistsValue';

const SelectPaymentMethod = (props) => {
  const [preferred, setPreferred] = usePersistsValue('preferredMethod', null);
  const [payment, setPayment] = useState(preferred);

  const { state, selectPayment, reset } = useOrderFlow();

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setPreferred(payment);
    }
  }, [payment, setPreferred]);

  return (
    <Container text>
      <OrderSummary meal={state.meal} />
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
