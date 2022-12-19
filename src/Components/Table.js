import React, { useMemo, useState, useEffect } from "react";

import {
  useTable,
  useBlockLayout,
  useFilters,
  useRowSelect,
} from "react-table";
import { useSticky } from "react-table-sticky";
import { Styles } from "./TableStyles";
import { Columns } from "./Columns";
import { ColumnFilter } from "./ColumnFilter";
import { Checkbox } from "./Checkbox";
// Back up data when the server is not working.
import Data from "./Data.json";

function Table() {
  const [items, setItems] = useState([]);
  const [averageAge, setAverageAge] = useState([]);

  // Bring data from php.
  useEffect(() => {
    fetch("http://localhost/api/api.php")
      .then((res) => res.json())
      .then((result) => setItems(result))
      // Set up back up data in case the server is not working.
      .catch((error) => setItems(Data));
  }, []);

  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => items, [items]);
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useBlockLayout,
    useSticky,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  // Calculate average age when the button is being clicked.
  const averageAgeHandler = () => {
    let ages = selectedFlatRows.map((row) => row.cells[7].value);
    let average =
      ages.reduce((a, b) => parseInt(a) + parseInt(b)) / ages.length;
    setAverageAge(average);
  };

  return (
    <>
      <Styles>
        <div
          {...getTableProps()}
          className="table sticky"
          style={{ width: 1200, height: 600 }}
        >
          <div className="header">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="th">
                    {column.render("Header")}
                    <div>
                      {column["Header"] === "Department"
                        ? column.render("Filter")
                        : null}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="body">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="footer">
            {footerGroups.map((footerGroup) => (
              <div {...footerGroup.getHeaderGroupProps()} className="tr">
                {footerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="footerTd">
                    {column.render("Footer")}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <button className="averageBtn" onClick={averageAgeHandler}>
            Calculate Average Age
          </button>
          <div className="averageNum">{averageAge}</div>
        </div>
      </Styles>
    </>
  );
}

export default Table;
