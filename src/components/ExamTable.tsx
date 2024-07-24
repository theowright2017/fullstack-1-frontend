import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ExamModal from './modal/ExamModal';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { handleGET, handlePOST } from '../api/handleREST';

const examColumns = [
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

export default function ExamTable() {
	const [open, setIsOpen] = React.useState(false);
	const queryClient = useQueryClient();

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["exams"],
		queryFn: async () => {
			const { exam } = await handleGET("/exams");

			return exam;
		},
	});

	const mutation = useMutation({
		mutationFn: async (exam) => handlePOST("/exams", exam),
		onSuccess: () => {

			queryClient.invalidateQueries({ queryKey: ["exams"] });
		},
	});

	return (
		<>
			<Box sx={{ height: 200, width: "100%", border: "2px solid purple" }}>
				<DataGrid
					rows={data}
					columns={examColumns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 100,
							},
						},
					}}
					pageSizeOptions={[5]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
				<button onClick={() => setIsOpen(true)}>Add</button>
			</Box>
			{open && <ExamModal setIsOpen={setIsOpen} mutation={mutation} />}
		</>
	);
}


