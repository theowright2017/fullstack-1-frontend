import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const examColumns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'cohorts',
    headerName: 'Cohorts',
    width: 110,
    editable: true,
  },
  {
    field: 'sessions',
    headerName: 'Sessions',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, name: 'Snow', description: 'Jon', cohorts: 14, sessions: 'one, two' },
  { id: 2, name: 'Lannister', description: 'Cersei', cohorts: 31, sessions: 'one, two' },
  { id: 3, name: 'Lannister', description: 'Jaime', cohorts: 31, sessions: 'one, two' },
  { id: 4, name: 'Stark', description: 'Arya', cohorts: 11, sessions: 'one, two' },
  { id: 5, name: 'Targaryen', description: 'Daenerys', cohorts: null, sessions: 'one, two' },
  { id: 6, name: 'Melisandre', description: null, cohorts: 150, sessions: 'one, two' },
  { id: 7, name: 'Clifford', description: 'Ferrara', cohorts: 44, sessions: 'one, two' },
  { id: 8, name: 'Frances', description: 'Rossini', cohorts: 36, sessions: 'one, two' },
  { id: 9, name: 'Roxie', description: 'Harvey', cohorts: 65, sessions: 'one, two' },
];

export default function ExamTable() {
  return (
    <Box sx={{ height: '50%', width: '100%', border: '2px solid blue' }}>
      <DataGrid
        rows={rows}
        columns={examColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <button onClick={() => console.log("clicked")}>Add</button>
    </Box>
  );
}