/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import { TablePaginationActions } from '../../../components/Pagination';
import { useMutation, useQueryClient } from 'react-query';
import { deleteEmployee } from '../../../api/EmployeeAPI';
import Loader from 'react-loader-spinner';

interface ValueData {
  data?: any;
  header?: any;
  handleRemove?: any;
  handleEdit?: any;
  searchForm?: any;
}

const row = (x: any, i: any, header: any, handleRemove: any, handleEdit: any) => (
  <TableRow key={`tr-${i}`}>
    {header.map((y: any, k: any) => (
      <TableCell key={`trc-${k}`}>{x[y.prop]}</TableCell>
    ))}
    <TableCell>
      <EditIcon className="iconStyle" onClick={() => handleEdit(i, x)} />
    </TableCell>
    <TableCell>
      <DeleteIcon className="iconStyle" onClick={() => handleRemove(i)} />
    </TableCell>
  </TableRow>
);

function EmployeeList({ data, header, handleEdit, searchForm }: ValueData) {
  const { mutateAsync, isLoading } = useMutation(deleteEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries('employeeLists');
    },
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dataRow = data.filter((item: any) => {
    if (searchForm.staffcode === '' && searchForm.fullname === '' && searchForm.email === '') {
      return item;
    } else if (
      (item.staffcode.toLowerCase().includes(searchForm.staffcode.toLowerCase()) ||
        searchForm.staffcode === '') &&
      (item.fullname.toLowerCase().includes(searchForm.fullname.toLowerCase()) ||
        searchForm.fullname === '') &&
      (item.email.toLowerCase().includes(searchForm.email.toLowerCase()) || searchForm.email === '')
    ) {
      return item;
    }
  });

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRow.length) : 0;
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  const dataEmpty = dataRow.length;
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const queryClient = useQueryClient();
  const handleRemove = async (i: any) => {
    const dataRemove: any = data.filter((row: any, j: any) => j === i);
    await mutateAsync(dataRemove[0].id);
  };
  return (
    <>
      {isLoading ? (
        <div
          style={{ position: 'fixed', top: '50%', left: '55%', transform: 'translate(-50%, -50%)' }}
        >
          <Loader type="ThreeDots" color="#CCC" height={30} />
        </div>
      ) : null}
      <Table className="tableStyle">
        <TableHead>
          <TableRow>
            {header.map((x: any, i: any) => (
              <TableCell key={`thc-${i}`}>{x.name}</TableCell>
            ))}
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? dataRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : dataRow
          ).map((x: any, i: any) => row(x, i, header, handleRemove, handleEdit))}
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
            count={dataRow.length}
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
    </>
  );
}
export default EmployeeList;
