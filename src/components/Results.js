import React, { Component } from "react";

class Results extends Component {
  cache = "";
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      emptyTitles: false,
    };
  }

  messages = {
    EmptyDescAndValue: "Incorrectly set values",
  };

  validCalendarDate = () => {
    return this.props.currentDate < this.props.endDate;
  };

  validInitialWeight = () => {
    return parseInt(this.props.initialWeight) > 30;
  };

  validDesiredWeight = () => {
    return parseInt(this.props.desiredWeight) > 30;
  };

  validHeight = () => {
    return parseInt(this.props.height) > 150;
  };

  validInputValues = () => {
    return (
      this.validCalendarDate() &&
      this.validInitialWeight() &&
      this.validDesiredWeight() &&
      this.validHeight()
    );
  };

  render() {
    const {
      looseWeight,
      gainWeight,
      initialWeight,
      desiredWeight,
      currentBMI,
      desiredBMI,
      numbersOfDays,
      getCurrentBmiText,
      getDesiredBmiText,
      isClickedCountButton,
    } = this.props;

    const { result, emptyTitles } = this.state;

    const loosedWeight = looseWeight > 0;
    const text = loosedWeight ? "loose" : "gain";
    const gainedWeight = gainWeight > 0;
    const changeWeight = loosedWeight || gainedWeight;

    const KilogPerDay = looseWeight / numbersOfDays;

    const oneWeek = 7;

    const WeightPerDay = Math.abs(KilogPerDay).toFixed(2);

    const KiloPerWeek = Math.abs(
      looseWeight / (numbersOfDays / oneWeek)
    ).toFixed(2);

    return (
      <>
        {isClickedCountButton()
          ? this.validInputValues()
            ? (this.cache = (
                <section className="results">
                  <p className="resultParagraf">
                    {changeWeight ? "You want " + text + " " : ""}
                    <strong>
                      {loosedWeight ? Math.abs(looseWeight) + " kg" : ""}
                    </strong>
                    <strong>
                      {gainedWeight ? Math.abs(gainWeight) + " kg " : ""}
                    </strong>
                  </p>
                  <p className="resultParagraf">
                    {getCurrentBmiText() === "" ? "" : "Your current BMI is"}{" "}
                    <strong>{result ? currentBMI : true}</strong> {"("}
                    {getCurrentBmiText()}
                    {")"}
                  </p>
                  <p className="resultParagraf">
                    {getDesiredBmiText() === "" ? "" : "Your desired BMI is"}{" "}
                    <strong>
                      <strong>{result ? desiredBMI : true}</strong>{" "}
                    </strong>{" "}
                    {"("}
                    {getDesiredBmiText()}
                    {")"}
                  </p>
                  <p className="resultParagraf">
                    {"You should"} {changeWeight ? text : ""}{" "}
                    <strong>
                      {changeWeight ? WeightPerDay : ""} {"kg"}
                    </strong>{" "}
                    {"per day"}
                  </p>
                  <p className="resultParagraf">
                    {"You should"} {changeWeight ? text : ""}{" "}
                    <strong>
                      {numbersOfDays < 7
                        ? loosedWeight
                          ? Math.abs(looseWeight)
                          : "" || gainedWeight
                          ? Math.abs(gainWeight)
                          : ""
                        : changeWeight
                        ? KiloPerWeek
                        : ""}
                      {" kg"}
                    </strong>{" "}
                    {"per week"}
                  </p>
                </section>
              ))
            : (this.cache = (
                <p className="results" style={{ color: "red" }}>
                  {" "}
                  {this.messages.EmptyDescAndValue}
                </p>
              ))
          : this.cache}
      </>
    );
  }
}

export default Results;
