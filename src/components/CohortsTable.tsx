import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { handleGET, handlePOST } from "../api/handleREST";
import CohortsModal from "./modal/CohortsModal";

const cohortsColumns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "name",
		headerName: "Name",
		width: 150,
		editable: true,
	},
	{
		field: "examId",
		headerName: "Exam Id",
		width: 150,
		type: "id",
		editable: true,
	},
	{
		field: "sessionId",
		headerName: "Session Id",
		type: "id",
		width: 110,
		editable: true,
	},
	{
		field: "scheduleInfo",
		headerName: "Schedule Info",
		sortable: false,
		width: 160,
	},
	{
		field: "students",
		headerName: "Students",
		sortable: false,
		width: 160,
	},
];

export default function CohortsTable() {
	const [open, setIsOpen] = React.useState(false);
	const queryClient = useQueryClient();

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["cohorts"],
		queryFn: async () => {
			const { cohorts } = await handleGET("/cohorts");

			return cohorts;
		},
	});

	const mutation = useMutation({
		mutationFn: async (cohort) => handlePOST("/cohorts", cohort),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["cohorts"] });
		},
	});

	return (
		<>
			<Box sx={{ height: 200, width: "50%", border: "2px solid purple" }}>
				<DataGrid
					rows={data}
					columns={cohortsColumns}
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
			{open && <CohortsModal setIsOpen={setIsOpen} mutation={mutation} />}
		</>
	);
}
