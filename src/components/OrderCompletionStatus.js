import * as React from 'react';
import { Step, Icon, Container } from 'semantic-ui-react';

const OrderCompletionStatus = ({ step = 1 }) => (
  <Container>
    <Step.Group widths={3}>
      <Step disabled={step !== 1} active={step === 1}>
        {step > 1 ? (
          <Icon color="green" name="checkmark" />
        ) : (
          <Icon name="food" />
        )}
        <Step.Content>
          <Step.Title>Menu</Step.Title>
          <Step.Description>Wybierz danie dla siebie</Step.Description>
        </Step.Content>
      </Step>
      <Step disabled={step !== 2} active={step === 2}>
        {step > 2 ? (
          <Icon color="green" name="checkmark" />
        ) : (
          <Icon name="payment" />
        )}
        <Step.Content>
          <Step.Title>Płatność</Step.Title>
          <Step.Description>Wprowadź formę płatności</Step.Description>
        </Step.Content>
      </Step>
      <Step disabled={step !== 3} active={step === 3}>
        {step > 3 ? (
          <Icon color="green" name="checkmark" />
        ) : (
          <Icon name="file alternate outline" />
        )}
        <Step.Content>
          <Step.Title>Potwierdzenie</Step.Title>
          <Step.Description>Potwierdź zamówienie</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  </Container>
);
export default OrderCompletionStatus;
