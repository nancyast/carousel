import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isForward: true,
      current: 0
    };
  }

  SlideTo(index, isForward = true) {
    this.setState({
      isForward: isForward,
      current: index
    });
  }

  SlideForward(max, current) {
    if (current === max - 1) {
      current = 0;
    } else {
      current++;
    }
    this.SlideTo(current, true);
  }

  SlideAutoForward() {
    const slides = this.props.children;
    const maxNumSlide = slides.length;
    const currentIndex = this.state.current;
    this.SlideForward(maxNumSlide, currentIndex);
  }

  SlideBack(max, current) {
    if (current === 0) {
      current = 3;
    } else {
      current--;
    }
    this.SlideTo(current, false);
  }

  GetClassName(currentIndex, index) {
    let isForward = this.state.isForward;
    let classname = "slide ";
    if (isForward) {
      classname +=
        currentIndex === index ? "activeMoveleft" : "inactiveMoveLeft";
    } else {
      classname +=
        currentIndex === index ? "activeMoveRight" : "inactiveMoveRight";
    }
    return classname;
  }

  componentDidMount() {
    //this.timerID = setInterval(() => this.SlideAutoForward(), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const slides = this.props.children;
    const maxNumSlide = slides.length;
    const currentIndex = this.state.current;
    return (
      <div className="container">
        <div className="slider">
          {slides.map((slide, index) => {
            return (
              <div
                className={this.GetClassName(currentIndex, index)}
                style={slide.props.backgroundImage}
                key={index}
              />
            );
          })}
        </div>
        <i
          className="fas fa-angle-left"
          onClick={() => this.SlideBack(maxNumSlide, currentIndex)}
        />
        <i
          className="fas fa-angle-right"
          onClick={() => this.SlideForward(maxNumSlide, currentIndex)}
        />
        <div className="indicators">
          {slides.map((slide, index) => {
            return (
              <div
                className={`indicator ${
                  index === currentIndex ? "active" : "inactive"
                }`}
                key={index}
                onClick={() => {
                  this.SlideTo(index, index > currentIndex);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
