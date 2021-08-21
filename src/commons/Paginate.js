import React from 'react';

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  next() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }
  previous() {
    this.setState(prevState => ({
      page: prevState.page === 1 ? prevState.page : prevState.page - 1,
    }));
  }
  paginate(data) {
    const { pageSize = 10 } = this.props;
    const start = (this.state.page - 1) * pageSize;
    const end = this.state.page * pageSize;
    return data.slice(start, end);
  }
  render() {
    return (
      <div>
        {this.props.children(
          this.state.page,
          this.paginate,
          this.next,
          this.previous
        )}
      </div>
    );
  }
}

export default Paginate;
