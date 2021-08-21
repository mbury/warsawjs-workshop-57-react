import * as React from 'react';
import {
  Form,
  Button,
  Header,
  Message,
  Segment,
  Container,
} from 'semantic-ui-react';

const LoginForm = () => {
  const toManyTries = false;
  const error = '';
  const performLogin = () => {};
  const setLogin = () => {};
  const setPassword = () => {};

  const login = '';
  const password = '';
  const authenticating = false;

  return (
    <Container text>
      <br />
      <Segment textAlign="center" stacked>
        <Header>Zaloguj się</Header>

        {toManyTries && (
          <Message warning>
            Możliwość logowania zostąła zablokowana na 5 sekund z powodu zbyt
            wielu prób!
          </Message>
        )}
        {error && <Message error>{error}</Message>}
        <Form onSubmit={() => performLogin({ login, password })} size="large">
          <Segment stacked>
            <Form.Input
              name="login"
              onChange={(e, { value }) => setLogin(value)}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="login"
            />
            <Form.Input
              onChange={(e, { value }) => setPassword(value)}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="hasło"
              type="password"
            />

            <Button loading={authenticating} color="teal" fluid size="large">
              Zaloguj
            </Button>
          </Segment>
        </Form>
        <Message>
          login: <strong>dowolny</strong>
          <br /> hasło: <strong>admin</strong>
        </Message>
      </Segment>
    </Container>
  );
};

export default LoginForm;
