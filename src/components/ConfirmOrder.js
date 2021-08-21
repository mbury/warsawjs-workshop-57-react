import * as React from 'react';
import { Button, Container, Message } from 'semantic-ui-react';

import OrderSummary from './OrderSummary';
import { useOrderFlow } from './OrderContext';
import { delay } from '../commons/utils';

const ConfirmOrder = () => {
  const { state, reset } = useOrderFlow();
  const {
    isLoading,
    isSuccess,
    isFailure,
    confirmRequest,
    error,
  } = useConfirmOrder();

  return (
    <Layout>
      <OrderSummary meal={state.meal} paymentMethod={state.paymentMethod} />
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

function useConfirmOrder() {
  const [isLoading, setLoading] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);
  const [isFailure, setFailure] = React.useState(false);
  const [error, setError] = React.useState('');

  const confirmRequest = async () => {
    setLoading(true);

    await delay(1000);
    try {
      // await Promise.reject('Kuchnia nie przyjmuje zamówień');
      await Promise.resolve();
      setSuccess(true);
      setLoading(false);
    } catch (e) {
      setError(e);
      setFailure(true);
      setLoading(false);
    }
  };

  return { isLoading, isSuccess, isFailure, confirmRequest, error };
}

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
