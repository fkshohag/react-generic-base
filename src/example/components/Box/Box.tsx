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


  username: String = 'sdf';
  public onShowValue = (val: number): void => {
    this.setState({value:val});
  }

  componentWillMount() {
  }
  

  render() {
    return <div>
      <h1>Hello World</h1>
    </div>
  }
}

export default Box;
