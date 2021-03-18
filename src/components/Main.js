// import React, { Component } from "react";
// import Results from "./Results";
// import Article from "./Article";

// class Main extends Component {
//   render() {
//     const {
//       handleChangeEvent,
//       initialWeight,
//       desiredWeight,
//       height,
//       looseWeight,
//       gainWeight,
//       currentBMI,
//       desiredBMI,
//       currentDate,
//       endDate,
//       handleCountButton,
//       numbersOfDays,
//       getCurrentBmiText,
//       getDesiredBmiText,
//       isClickedCountButton,
//     } = this.props;

//     return (
//       <>
//         <main className="calculator_content">
//           <section className="progress_session">
//             <Article
//               handleChangeEvent={handleChangeEvent}
//               initialWeight={initialWeight}
//               desiredWeight={desiredWeight}
//               height={height}
//               currentDate={currentDate}
//               endDate={endDate}
//             />
//             <Results
//               looseWeight={looseWeight}
//               gainWeight={gainWeight}
//               initialWeight={initialWeight}
//               desiredWeight={desiredWeight}
//               height={height}
//               currentBMI={currentBMI}
//               desiredBMI={desiredBMI}
//               currentDate={currentDate}
//               endDate={endDate}
//               numbersOfDays={numbersOfDays}
//               getCurrentBmiText={getCurrentBmiText}
//               getDesiredBmiText={getDesiredBmiText}
//               isClickedCountButton={isClickedCountButton}
//             />
//           </section>
//           <div className="button_position">
//             <button onClick={handleCountButton} className="button ">
//               Count
//             </button>
//           </div>
//         </main>
//       </>
//     );
//   }
// }

// export default Main;
