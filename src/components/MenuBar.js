import * as React from 'react';
import { Link } from '@reach/router';

import {
  Button,
  Container,
  Header,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

const MenuBar = () => {
  const isLoggedIn = false;
  const login = 'false';
  const logout = () => {};

  const [fixed, setFixed] = React.useState(false);
  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Visibility
      once={false}
      onBottomPassed={showFixedMenu}
      onBottomPassedReverse={hideFixedMenu}
    >
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 200,
          padding: '0.5em 0em',
        }}
        vertical
      >
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <Container>
            <Menu.Item to="/" as={Link} active>
              ORDERit
            </Menu.Item>
            <Menu.Item position="right">
              {isLoggedIn && (
                <>
                  Witaj, {login}
                  <Button
                    as="a"
                    onClick={logout}
                    inverted={!fixed}
                    primary={fixed}
                    style={{
                      marginLeft: '0.5em',
                    }}
                  >
                    Wyloguj
                  </Button>
                </>
              )}
            </Menu.Item>
          </Container>
        </Menu>
        <HomepageHeading />
      </Segment>
    </Visibility>
  );
};

export default MenuBar;
const HomepageHeading = () => (
  <Container>
    <Header
      as="h1"
      inverted
      style={{
        fontSize: '3em',
        fontWeight: 'normal',
        marginBottom: '0.5em',
        marginTop: '0.5em',
      }}
    >
      Zamów TERAZ i jedz PYSZNIE
      <Header.Subheader>
        Wyszukiwarka Twoich ulubionych potrwa. Blisko Ciebie. W najlepszych
        cenach.
      </Header.Subheader>
    </Header>
  </Container>
);
