import react, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { TablePaginationActions } from '../Pagination';
import DataRow from './DataRow';

const TableComponent = (props: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.data.length) : 0;
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const dataEmpty = props.data.length;
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Table className="tableStyle">
      <TableHead>
        <TableRow>
          {props.header.map((x: any, i: any) => (
            <TableCell key={`thc-${i}`}>{x.name}</TableCell>
          ))}
          <TableCell />
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {(rowsPerPage > 0
          ? props.data.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
          : props.data
        ).map((x: any, i: any) =>
          DataRow(x, i, props.header, props.handleRemove, props.handleEdit)
        )}
        {dataEmpty === 0 && (
          <TableRow style={{ height: 300 * emptyRows }}>
            <TableCell colSpan={12} className="emptyCell">
              Data Empty
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TablePagination
          style={{ textAlign: 'right', width: '100%', borderBottom: 'none' }}
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={12}
          count={props.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableFooter>
    </Table>
  );
};
export default TableComponent;
