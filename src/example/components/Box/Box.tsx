import React from 'react';
import AppHome from '../../../layout/AppHome/AppHome';

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
  username: String = 'sdf';
  public onShowValue = (val: number): void => {
    this.setState({value:val});
  }

  componentWillMount() {
    console.log('Component will mount!');
  }
  
  componentDidMount() {
    console.log('after first render')
  }

  render() {
    return <div>
      <AppHome></AppHome>
    </div>
  }
}

export default Box;
