import React from 'react';
import store from '../../../store';
import CounterAction from '../../../store/actions/CounterAction';

export interface Props {
  name: string
}

export interface State {
  value: number
}


class Box extends React.Component<Props, State> {

  public value: number = 0;
  constructor(props:Props) {
    super(props)
    this.state = {
      value: 0,
    }
  }  

  username: String = 'sdf';
  public onShowValue = (val: number): void => {
    this.setState({value:val});
  }

  private increment(): void {
    store.dispatch(CounterAction.increment());
  }

  componentWillMount() {
    this.increment();
    console.log(store.getState());
  }
  

  render() {
    return <div>
      <h1>{store.getState().counter.val}</h1>
    </div>
  }
}

export default Box;
