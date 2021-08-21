import React from 'react';
import SelectMeal from './SelectMeal';
import SelectPaymentMethod from './SelectPaymentMethod';
import ConfirmOrder from './ConfirmOrder';
import { OrderFlowProvider } from './OrderContext';

const OrderFlow = () => (
  <OrderFlowProvider
    productList={<SelectMeal />}
    paymentMethod={<SelectPaymentMethod />}
    confirmOrder={<ConfirmOrder />}
  ></OrderFlowProvider>
);
export default OrderFlow;
