import React from "react";

const InvestmentForm = props => {

    let currentSaving = "";
    let yearlySaving = "";
    let interest = "";
    let duration = "";

    const onCurrentSavingChange = event => {currentSaving = event.target.value;};
    const yearlySavingChange = event => {yearlySaving = event.target.value;};
    const onInterestChange = event => {interest = event.target.value;};
    const onDurationChange = event => {duration = event.target.value;};


    const onSubmitHandler = event => {

        //To prevent page reload on submit action
        event.preventDefault();
        const investmentFormDetails = {
            currentSaving : currentSaving,
            yearlySaving : yearlySaving,
            interest : interest,
            duration : duration
        };
       

        props.onSubmitInvestment(investmentFormDetails);

    }

    const onResetHandler = event => {
        props.onResetInvestment();
    }

    return (
        <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={onCurrentSavingChange}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={yearlySavingChange}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={onInterestChange}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={onDurationChange}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={onResetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
};

export default InvestmentForm;