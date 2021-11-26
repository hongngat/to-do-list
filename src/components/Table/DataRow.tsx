import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';
const DataRow = (
  x: any,
  i: any,
  header: any,
  handleRemove: any,
  handleEdit: any
) => (
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
export default DataRow;
