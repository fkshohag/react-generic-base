import React from 'react';
import TopBar from '../../../layout/TopBar/TopBar';

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
      <TopBar></TopBar>
    </div>
  }
}

export default Box;
