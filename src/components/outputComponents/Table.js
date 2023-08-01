import React, { useState } from "react";
import TableRow from "./TableRow";

const Table = props => {

    const tableData = props.tableData.map(data => data);
    
    console.log("tableData: " + JSON.stringify(tableData));
    console.log("props.year " + JSON.stringify(tableData.year));
    for (let i = 0; i < tableData.length; i++) {
        console.log(tableData[i]);
        console.log("----");
    }

    return (
        <table className="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                tableData.map((rowData, i) => 
                    <TableRow 
                        year={rowData.year}  
                        yearlyInterest={rowData.yearlyInterest} 
                        savingsEndOfYear={rowData.savingsEndOfYear} 
                        yearlyContribution={rowData.yearlyContribution} 
                        investedCapital={rowData.investedCapital}
                        rowContent={rowData}
                        key={i}
                    />
                )
            } 
        </tbody>
    </table>
    );
};

export default Table;