/* eslint-disable array-callback-return */
import { useMutation, useQueryClient } from 'react-query';
import { deleteEmployee } from '../../../api/EmployeeAPI';
import LoadingComponent from 'components/Loading';

import TableComponent from '../../../components/Table';
interface ValueData {
  data?: any;
  header?: any;
  handleRemove?: any;
  handleEdit?: any;
  searchForm?: any;
}

function EmployeeList({ data, header, handleEdit, searchForm }: ValueData) {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries('employeeLists');
    },
  });

  const dataSearch = data
    ? data.filter((item: any) => {
        if (
          searchForm.staffcode === '' &&
          searchForm.fullname === '' &&
          searchForm.email === ''
        ) {
          return item;
        } else if (
          (item.staffcode
            .toLowerCase()
            .includes(searchForm.staffcode.toLowerCase()) ||
            searchForm.staffcode === '') &&
          (item.fullname
            .toLowerCase()
            .includes(searchForm.fullname.toLowerCase()) ||
            searchForm.fullname === '') &&
          (item.email.toLowerCase().includes(searchForm.email.toLowerCase()) ||
            searchForm.email === '')
        ) {
          return item;
        }
      })
    : [];
  const handleRemove = async (i: any) => {
    const dataRemove: any = data.filter((row: any, j: any) => j === i);
    await mutateAsync(dataRemove[0].id);
  };
  return (
    <>
      {isLoading ? <LoadingComponent /> : null}
      <TableComponent
        data={dataSearch}
        header={header}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </>
  );
}
export default EmployeeList;
