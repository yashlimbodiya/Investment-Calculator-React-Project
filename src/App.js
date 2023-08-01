import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Investment from './components/inputComponents/Investment';
import InvestmentTable from './components/outputComponents/InvestmentTable';

function App() {

  const yearlyData = []; // per-year results

  const[newYearlyData, setNewYearlyData] = useState(yearlyData);


  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...


    /*let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];*/

    let currentSavings = Number(userInput.currentSaving); // feel free to change the shape of this input object!
    const yearlyContribution = Number(userInput.yearlySaving); // as mentioned: feel free to change the shape...
    const expectedReturn = Number(userInput.interest) / 100;
    const duration = Number(userInput.duration);
    let totalInterest = 0;
    let year = new Date().getFullYear();
    console.log("currentSavings: " + currentSavings);
    console.log("yearlyContribution: " + yearlyContribution);
    console.log("expectedReturn: " + expectedReturn);
    console.log("duration: " + duration);
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      const investedCapital = currentSavings + yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      /*yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });*/
      totalInterest += yearlyInterest;
      const yearData = {
        year: year + i,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: totalInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2)
      };

      setNewYearlyData(prevData => {
        return [yearData, ...prevData];
      });
    }

    for (let i = 0; i < yearlyData.length; i++) {
      console.log(yearlyData[i]);
    }

    // do something with yearlyData ...
  };

  const resetHandler = () => {
    const emptyList = [];
    setNewYearlyData(emptyList);
  };


  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

     <Investment calculateInvestment={calculateHandler} resetInvestment={resetHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
  
      {newYearlyData.length>0?<InvestmentTable tableData={newYearlyData}/>:<h2 className='result-noData'>No Investment to show</h2>}
      
    </div>
  );
}

export default App;
