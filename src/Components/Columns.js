import React from "react";

export const Columns = [
  {
    Header: "EEID",
    accessor: "EEID",
    sticky: "top",
  },
  {
    Header: "Full Name",
    accessor: "FullName",
    sticky: "top",
  },
  {
    Header: "Department",
    accessor: "Department",
    sticky: "top",
  },
  {
    Header: "Business Unit",
    accessor: "BusinessUnit",
    sticky: "top",
  },
  {
    Header: "Gender",
    accessor: "Gender",
    sticky: "top",
  },
  {
    Header: "Ethnicity",
    accessor: "Ethnicity",
    sticky: "top",
  },
  {
    Header: "Age",
    accessor: "Age",
    sticky: "top",
  },
  {
    Header: "Hire Date",
    accessor: "HireDate",
    sticky: "top",
  },
  {
    Header: "Annual Salary($)",
    // Calculate & display the sum of Anuual Salary.
    Footer: (info) => {
      const total = React.useMemo(
        () =>
          info.rows.reduce(
            (sum, row) => parseInt(row.values.AnnualSalary) + parseInt(sum),
            0
          ),
        [info.rows]
      );

      return <>${total.toLocaleString()}</>;
    },
    accessor: "AnnualSalary",
    sticky: "top",
  },
  {
    Header: "Bonus %",
    accessor: "Bonus%",
    sticky: "top",
  },
  {
    Header: "Country",
    accessor: "Country",
    sticky: "top",
  },
  {
    Header: "City",
    accessor: "City",
    sticky: "top",
  },
  {
    Header: "Exit Date",
    accessor: "ExitDate",
    sticky: "top",
  },
];
