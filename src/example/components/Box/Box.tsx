import React from 'react';

export interface Props {
  name: string
}

export interface State {
  value: number
}


class Box extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props)
    this.state = {
      value: 0,
    }
  }  

  // Action 
  // private increment(): any {
  //   return {
  //     type: 'INCREMENT'
  //   }
  // }

  // private decement(): any {
  //   return {
  //     type: 'DECREMENT'
  //   }
  // }

  // // Reducer 
  // private conunter(state:any = 0, action: any): any {
  //   switch(action.type) {
  //     case 'INCREMENT':
  //       return state + 1;
  //     case 'DECREMENT':
  //       return state - 1;
  //   }
  // }

  username: String = 'sdf';
  public onShowValue = (val: number): void => {
    this.setState({value:val});
  }

  componentWillMount() {
    // let store: any = createStore(this.conunter);
    // store.dispatch(this.increment());
    // store.dispatch(this.decement());
    // store.dispatch(this.decement());
    // console.log(store.getState());
  }
  

  render() {
    return <div>
      <h1>Hello World</h1>
    </div>
  }
}

export default Box;
