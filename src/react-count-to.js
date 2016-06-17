/*
 Forked from @MicheleBertoli's react-count-to component at:
 https://github.com/MicheleBertoli/react-count-to/
 */
import React from 'react';

class CountTo extends React.Component{
  constructor(props) {
    super(props);
    this.formatter = (props.formatter) ? props.formatter : (value) => {return value};
  }
  componentDidMount() {
    this.start(this.props);
  };
  componentWillReceiveProps(nextProps) {
    this.start(nextProps);
  };
  next() {
    if (this.state.counter < this.state.to) {
      let step = Math.round(this.state.counter + this.state.increment);
      this.setState({
        counter: (step>this.state.to) ? this.state.to : step
      });
      window.requestAnimationFrame(this.next.bind(this));
    }
  };
  start(props) {
    this.state = {
      counter: (this.props.hasOwnProperty('from')) ? this.props.from : 0,
      delay: (this.props.hasOwnProperty('delay')) ? this.props.delay : 100,
      to: (this.props.hasOwnProperty('to')) ? this.props.to : 0
    };
    this.state['loops'] = Math.ceil(props.speed / this.state.delay);
    this.state['increment'] = (props.to - this.state.counter) / this.state.loops;
    window.requestAnimationFrame(this.next.bind(this));
  };
  render() {
    let counter = this.state ? this.state.counter : 0;
    return (
        <span>
          {this.formatter(counter)}
        </span>
    );
  };
};

CountTo.propTypes = {
  from: React.PropTypes.number,
  to: React.PropTypes.number.isRequired,
  speed: React.PropTypes.number.isRequired,
  delay: React.PropTypes.number,
  formatter: React.PropTypes.func
};

export default CountTo;
