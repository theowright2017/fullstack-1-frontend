import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { handleGET, handlePOST } from "../api/handleREST";
import StudentModal from "./modal/StudentModal";

const studentColumns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "name",
		headerName: "Name",
		width: 150,
		editable: true,
	},
	{
		field: "email",
		headerName: "Email",
		width: 150,
		editable: true,
	},
	{
		field: "cohortId",
		headerName: "Cohort Id",
		width: 110,
		editable: true,
	},
];

export default function StudentsTable() {
	const [open, setIsOpen] = useState(false);
	const queryClient = useQueryClient();

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["students"],
		queryFn: async () => {
			const { students } = await handleGET("/students");

			return students;
		},
	});

	const mutation = useMutation({
		mutationFn: async (newStudent) => {
			return handlePOST("/students", newStudent);
		},
		onSuccess: () => {

			queryClient.invalidateQueries({ queryKey: ["students"] });
		},
	});

	return (
		<>
			<Box sx={{ height: 200, width: "50%", border: "2px solid purple" }}>
				<DataGrid
					rows={data}
					columns={studentColumns}
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
			{open && <StudentModal setIsOpen={setIsOpen} mutation={mutation} />}
		</>
	);
}
