import * as React from 'react';
import axios from 'axios';
import { Grid, Loader, Container, Button } from 'semantic-ui-react';

import Filters from './Filters';
import MealList from './MealList';
import ChartSwitcher from './ChartSwitcher';
import Paginate from '../commons/Paginate';

import { useQuery } from 'react-query';

import { FILTER_OPTIONS } from '../commons/const';
import * as utils from '../commons/utils';
import { useOrderFlow } from './OrderContext';
import lazyWithPreload from '../commons/lazyWithPreload';

const RatingChart = lazyWithPreload(() => import('./RatingChart'));

const SelectMeal = (props) => {
  const [isChartVisible, setChartVisibility] = React.useState(false);

  const { isLoading, data = [] } = useQuery('meals', () =>
    axios('/meals').then(({ data }) => data)
  );
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = React.useState({});

  const { selectMeal } = useOrderFlow();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const result = await axios('/meals');
  //     RatingChart.preload();
  //     setIsLoading(false);
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  const onChangeFilter = React.useCallback(
    (value, checked) =>
      setFilters((state) => ({
        ...state,
        [value]: checked,
      })),
    []
  );

  const mealsInFilter = React.useMemo(() => utils.countMealsByBedType(data), [
    data,
  ]);
  const filteredData = React.useMemo(() => utils.applyFilter(filters, data), [
    filters,
    data,
  ]);
  const chartData = React.useMemo(() => utils.prepareChartData(data), [data]);

  return (
    <Layout>
      <Layout.Sidebar>
        <ChartSwitcher
          isVisible={isChartVisible}
          onChange={setChartVisibility}
        />
        <Filters
          count={mealsInFilter}
          options={FILTER_OPTIONS}
          onChange={onChangeFilter}
        />
      </Layout.Sidebar>
      <Layout.Feed>
        <React.Suspense fallback={<Loader active inline="centered" />}>
          {isChartVisible && <RatingChart data={chartData} />}
        </React.Suspense>
        {isLoading ? (
          <Loader active inline="centered" />
        ) : (
          <Paginate pageSize={5}>
            {(counter, paginate, next, previous) => {
              return (
                <>
                  <Button onClick={previous} icon="angle left" />
                  <Button>strona: {counter}</Button>
                  <Button onClick={next} icon="angle right" />
                  <MealList
                    meals={paginate(filteredData)}
                    onSelect={selectMeal}
                  />
                </>
              );
            }}
          </Paginate>
        )}
      </Layout.Feed>
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
