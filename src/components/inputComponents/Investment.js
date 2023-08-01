import React from "react";
import InvestmentForm from "./InvestmentForm";

const Investment = props => {

    const submitInvestmentDetails = (investmentDetails) => {
        console.log("InvestCurrSav: " + investmentDetails.currentSaving);
        console.log("InvestyearlySav: " + investmentDetails.yearlySaving);
        console.log("InvestInterestChange: " + investmentDetails.interest);
        console.log("InvestDurrationChange: " + investmentDetails.duration);

        props.calculateInvestment(investmentDetails);
    };

    const resetInvestmentDetails = () => {
        props.resetInvestment();
    }

    return (
        <InvestmentForm onSubmitInvestment={submitInvestmentDetails} onResetInvestment={resetInvestmentDetails}/>
    );
};

export default Investment;