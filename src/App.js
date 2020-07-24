import React, { Component } from "react";

import "./App.css";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.isClickedCountButton = this.isClickedCountButton.bind(this);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const todayISO = today.toISOString().slice(0, 10);
    const tomorrowISO = tomorrow.toISOString().slice(0, 10);

    this.state = {
      initialWeight: "30",
      desiredWeight: "30",
      height: "150",

      looseWeight: "",
      gainWeight: "",
      currentBMI: "",
      desiredBMI: "",
      currentDate: todayISO,
      endDate: tomorrowISO,
      numbersOfDays: "",
      emptyView: null,
      clickedCountButton: false,
    };
  }

  handleChangeEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
      clickedCountButton: false,
    });
  };

  handleCountButton = () => {
    this.getLoseandGain();
    this.getNumberofDays();
    this.getBMI();
    this.setState({
      clickedCountButton: true,
    });
  };

  isClickedCountButton() {
    return this.state.clickedCountButton;
  }

  getLoseandGain = () => {
    const { desiredWeight, initialWeight } = this.state;
    const looseWeight = initialWeight - desiredWeight;
    const gainWeight = desiredWeight - initialWeight;
    this.setState({
      looseWeight: looseWeight,
      gainWeight: gainWeight,
    });
  };

  getNumberofDays = () => {
    const { currentDate, endDate } = this.state;
    const oneDay = 24 * 60 * 60 * 1000;
    const dateDiffrence = new Date(currentDate) - new Date(endDate);
    const numbersOfDays = Math.round(Math.abs(dateDiffrence / oneDay));

    this.setState({
      currentDate: currentDate,
      endDate: endDate,
      numbersOfDays: numbersOfDays,
    });
  };

  getBMI = () => {
    const { initialWeight, desiredWeight, height } = this.state;

    const currentBMI = (initialWeight / (height / 100) ** 2).toFixed(1);

    const desiredBMI = (desiredWeight / (height / 100) ** 2).toFixed(1);

    this.setState({
      currentBMI: currentBMI,
      desiredBMI: desiredBMI,
    });
  };

  getCurrentBmiText = () => {
    const { currentBMI } = this.state;

    if (currentBMI <= 0) {
      return "";
    } else if (currentBMI < "15") {
      return "Very severely underweight";
    } else if (currentBMI < "16") {
      return "Severely underweight";
    } else if (currentBMI < "18,5") {
      return "Underweight";
    } else if (currentBMI < "25") {
      return "Normal";
    } else if (currentBMI < "30") {
      return "Overweight";
    } else if (currentBMI < "35") {
      return "Moderately obese ";
    } else if (currentBMI < "40") {
      return "Severely obese ";
    } else {
      return "Very severely obese ";
    }
  };

  getDesiredBmiText = () => {
    const { desiredBMI } = this.state;

    if (desiredBMI <= 0) {
      return "";
    } else if (desiredBMI < "15") {
      return "Very severely underweight";
    } else if (desiredBMI < "16") {
      return "Severely underweight";
    } else if (desiredBMI < "18,5") {
      return "Underweight";
    } else if (desiredBMI < "25") {
      return "Normal";
    } else if (desiredBMI < "30") {
      return "Overweight";
    } else if (desiredBMI < "35") {
      return "Moderately obese ";
    } else if (desiredBMI < "40") {
      return "Severely obese ";
    } else {
      return "Very severely obese ";
    }
  };

  render() {
    const {
      initialWeight,
      desiredWeight,
      height,
      looseWeight,
      gainWeight,
      currentBMI,
      desiredBMI,
      currentDate,
      endDate,
      numbersOfDays,
    } = this.state;

    return (
      <div className="App">
        <header className="header">Desired web calculator</header>
        <Main
          handleCountButton={this.handleCountButton}
          handleChangeEvent={this.handleChangeEvent}
          initialWeight={initialWeight}
          desiredWeight={desiredWeight}
          height={height}
          looseWeight={looseWeight}
          gainWeight={gainWeight}
          currentBMI={currentBMI}
          desiredBMI={desiredBMI}
          currentDate={currentDate}
          endDate={endDate}
          numbersOfDays={numbersOfDays}
          getCurrentBmiText={this.getCurrentBmiText}
          getDesiredBmiText={this.getDesiredBmiText}
          isClickedCountButton={this.isClickedCountButton}
        />
      </div>
    );
  }
}

export default App;
