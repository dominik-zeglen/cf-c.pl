import * as React from 'react';

interface IScrollProps {
  children: (scroll: number) => React.ReactNode;
}

interface IScrollState {
  intervalId: any;
  scroll: number;
}

class Scroll extends React.Component<IScrollProps, IScrollState> {
  public state: IScrollState = {
    intervalId: null,
    scroll: 0,
  };

  public setScrollPosition = () => {
    if (this.state.scroll !== window.scrollY) {
      this.setState({
        scroll: window.scrollY,
      });
    }
  };

  public componentDidMount() {
    const intervalId = setInterval(this.setScrollPosition, 33);
    this.setState({
      intervalId,
    });
  }

  public componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  public render() {
    return this.props.children(this.state.scroll);
  }
}
export default Scroll;
