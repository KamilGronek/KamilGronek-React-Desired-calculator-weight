// import React, { Component } from "react";

// class BmiFunctions extends Component {

//   handleCountButton = () => {
//     this.getLoseandGain();
//     this.getNumberofDays();
//     this.getBMI();
//     // this.getChangeVisibility();
//   };

//   getLoseandGain = () => {
//     const { desiredWeight, initialWeight } = this.state;

//     const looseWeight = desiredWeight - initialWeight;
//     const gainWeight = initialWeight - desiredWeight;

//     this.setState({
//       looseWeight: looseWeight,
//       gainWeight: gainWeight,
//     });
//   };

//   getNumberofDays = () => {
//     const { date, nextDate } = this.state;

//     const currentDate = date;
//     const endDate = nextDate;
//     const oneDay = 24 * 60 * 60 * 1000;
//     const dateDiffrence = new Date(currentDate) - new Date(endDate);
//     const numbersOfDays = Math.round(Math.abs(dateDiffrence / oneDay));

//     this.setState({
//       currentDate: currentDate,
//       endDate: endDate,
//       numbersOfDays: numbersOfDays,
//     });
//   };

//   getBMI = () => {
//     const { initialWeight, desiredWeight, height } = this.state;

//     const currentBMI = (initialWeight / (height / 100) ** 2).toFixed(1);

//     const desiredBMI = (desiredWeight / (height / 100) ** 2).toFixed(1);

//     this.setState({
//       currentBMI: currentBMI,
//       desiredBMI: desiredBMI,
//     });
//   };

//   render() {
//     return <div></div>;
//   }
// }

// export default BmiFunctions;
