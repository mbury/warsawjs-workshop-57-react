import * as React from 'react';
import { Button, Container, Message } from 'semantic-ui-react';

import OrderSummary from './OrderSummary';

const ConfirmOrder = () => {
  const selectedMeal = {};
  const selectedPaymentMethod = {};

  const isSuccess = false;
  const isFailure = false;
  const isLoading = false;
  const error = '';

  const reset = () => {};
  const confirmRequest = () => {};

  return (
    <Layout>
      <OrderSummary meal={selectedMeal} paymentMethod={selectedPaymentMethod} />
      {isSuccess && <SuccessMessage />}
      {isFailure && <ErrorMessage error={error} />}
      {!isSuccess && !isFailure && (
        <CompleteButton onClick={confirmRequest} loading={isLoading} />
      )}
      <ResetButton onClick={reset} />
    </Layout>
  );
};

export default ConfirmOrder;

const SuccessMessage = () => (
  <Message
    success
    header="Rezerwacja zakończyła się sukcesem"
    content="Zapraszamy do skorzystania z naszych usług w przyszłości"
  />
);

const ErrorMessage = ({ error }) => (
  <Message
    error
    header="Rezerwacja zakończyła się niepowodzeniem"
    content={error}
  />
);

const CompleteButton = ({ loading, onClick }) => (
  <Button loading={loading} onClick={onClick} primary floated="right">
    Zarezerwuj
  </Button>
);

const ResetButton = ({ onClick }) => (
  <Button onClick={onClick} floated="left">
    Powrót do menu
  </Button>
);

const Layout = (props) => <Container text>{props.children}</Container>;
