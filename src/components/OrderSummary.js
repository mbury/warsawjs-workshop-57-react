import * as React from 'react';
import { Table } from 'semantic-ui-react';
import MealList from './MealList';

const OrderSummary = (props) => (
  <>
    <MealList meals={[props.meal]} />
    {props.paymentMethod && (
      <Table basic="very">
        <Table.Body>
          <Table.Row>
            <Table.Cell>Forma płatności</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              {props.paymentMethod}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cena z danie</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              {props.meal.price.amount} zł
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Koszt dostawy</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              +{getDeliveryCost(props.meal)} zł
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Suma</strong>
            </Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <strong>
                {props.meal.price.amount + getDeliveryCost(props.meal)} zł
              </strong>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )}
  </>
);

function getDeliveryCost(meal) {
  if (meal.price.delivery) return 0;
  const cost = Math.round(meal.price.amount * 0.15);
  return Math.max(cost, 10);
}

export default OrderSummary;
