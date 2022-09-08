import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA from "./Mock_data.json";
import { COLUMNS } from "./Columns";
import { GlobalFilter } from "./GlobalFilter";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import "./Table.css";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageSize } = state;

  return (
    <>
      {/* <div className="table_header_custom">
        <div className="search_box">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div> */}

      
        <div className="table-responsive mb-0">
          <table {...getTableProps()} className="table table-sm">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                      {column.render("Header")}{" "}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ↓ "
                            : " ↑ "
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="list">
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>     
        <div className="table-footer mt-4" >
          <div className="row d-flex  justify-content-between  p-2">
            <div className="col-sm-8 pl-11">
           <div className="d-flex align-items-center table_count ">
           <span>Show&nbsp;</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="form-select"
                aria-label="Default select example"
              >
                {[5, 10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
              <span> &nbsp;entries </span>
           </div>
            </div>
            <div className="col-sm-4 text-center">
           
                {/* <div className="col">
                  <button className="btn btn-sm btn-primary"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    <BsChevronDoubleLeft/>
                  </button>
                </div> */}
          
                  <nav aria-label="Page navigation example">
                    <ul className="pagination nav_ul justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <BsChevronDoubleLeft />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <BsChevronDoubleRight />
                        </a>
                      </li>
                    </ul>
                  </nav>
                
                {/* <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
                  {
                    [20,15,50].map(pageSize=>(
                    <option key={pageSize} value={pageSize}>
                      Show{pageSize}
                    </option>
                    ))
                  }
                </select> */}
                {/* <div className="col">
                  <button className="btn btn-sm btn-primary" onClick={() => nextPage()} disabled={!canNextPage}>
                  <BsChevronDoubleRight/>
                  </button>
                </div> */}
             
            </div>
          </div>
        </div>   
    </>
  );
};

export default BasicTable;
