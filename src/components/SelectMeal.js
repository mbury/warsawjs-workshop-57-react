import * as React from 'react';
import { Grid, Container } from 'semantic-ui-react';

const SelectMeal = (props) => {
  return (
    <Layout>
      <Layout.Sidebar>sidebar...</Layout.Sidebar>
      <Layout.Feed>lista...</Layout.Feed>
    </Layout>
  );
};

const Layout = ({ children }) => (
  <Container>
    <Grid stackable divided>
      <Grid.Row>{children}</Grid.Row>
    </Grid>
  </Container>
);

const Sidebar = ({ children }) => (
  <Grid.Column width={4}>{children}</Grid.Column>
);

const Feed = ({ children }) => <Grid.Column width={12}>{children}</Grid.Column>;

Layout.Sidebar = Sidebar;
Layout.Feed = Feed;

export default SelectMeal;
