import React from "react";

const TableRow = props => {
    const formatCurrency = value => {
        return (value).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    return (
        <tr>
            <td>{props.year}</td>
            <td>${formatCurrency(props.savingsEndOfYear)}</td>
            <td>${formatCurrency(props.yearlyInterest)}</td>
            <td>${formatCurrency(props.yearlyContribution)}</td>
            <td>${formatCurrency(props.investedCapital)}</td>
        </tr>
    );
};

export default TableRow;

/*

*/