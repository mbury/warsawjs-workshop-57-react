import React, { useReducer, createContext, useCallback } from 'react';
import { Segment } from 'semantic-ui-react';
import OrderCompletionStatus from './OrderCompletionStatus';

const OrderContext = createContext(null);

const initialState = { step: 1, meal: null, paymentMethod: null };

function init(initialState) {
  return { ...initialState };
}

function reducer(state, action) {
  switch (action.type) {
    case 'meal':
      const { meal } = action.payload;
      return { ...state, step: 2, meal };
    case 'paymentMethod':
      const { method } = action.payload;
      return { ...state, step: 3, paymentMethod: method };
    case 'reset':
      return init(initialState);
    default:
      throw new Error();
  }
}
export function useOrderFlow() {
  const context = React.useContext(OrderContext);

  if (!context) {
    throw new Error('useOrderFlow must be used within a OrderFlowProvider');
  }

  const { state, dispatch } = context;

  const selectMeal = useCallback(
    (meal) => dispatch({ type: 'meal', payload: { meal } }),
    [dispatch]
  );

  const selectPayment = useCallback(
    (method) => dispatch({ type: 'paymentMethod', payload: { method } }),
    [dispatch]
  );

  const reset = useCallback(
    () => dispatch({ type: 'reset', payload: initialState }),
    [dispatch]
  );

  return { state, selectMeal, selectPayment, reset };
}

export function OrderFlowProvider({
  productList,
  paymentMethod,
  confirmOrder,
}) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const context = { state, dispatch };
  return (
    <OrderContext.Provider value={context}>
      <Section>
        <OrderCompletionStatus step={state.step} />
      </Section>
      <Section>
        {state.step === 1 && productList}
        {state.step === 2 && paymentMethod}
        {state.step === 3 && confirmOrder}
      </Section>
    </OrderContext.Provider>
  );
}

const Section = (props) => (
  <Segment vertical style={{ padding: '2em 0em' }}>
    {props.children}
  </Segment>
);
