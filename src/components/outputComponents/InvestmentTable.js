import React from "react";
import Table from "./Table";

const InvestmentTable = props => {

    const tableDataFromAppJS = props.tableData;
    console.log("tableDataFromAppJS: " + tableDataFromAppJS);
    return (
        <Table tableData={props.tableData}/>
    );
};

export default InvestmentTable;