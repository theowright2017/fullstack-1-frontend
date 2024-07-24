import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import ModalWrapper from "./modal/ModalWrapper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const studentColumns: GridColDef<(typeof rows)[number]>[] = [
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

const rows = [
	{ id: 1, name: "Snow", email: "Jon", cohortId: 14 },
	{ id: 2, name: "Lannister", email: "Cersei", cohortId: 31 },
	{ id: 3, name: "Lannister", email: "Jaime", cohortId: 31 },
	{ id: 4, name: "Stark", email: "Arya", cohortId: 11 },
	{ id: 5, name: "Targaryen", email: "Daenerys", cohortId: null },
	{ id: 6, name: "Melisandre", email: null, cohortId: 150 },
	{ id: 7, name: "Clifford", email: "Ferrara", cohortId: 44 },
	{ id: 8, name: "Frances", email: "Rossini", cohortId: 36 },
	{ id: 9, name: "Roxie", email: "Harvey", cohortId: 65 },
];

export default function StudentsTable() {
	const [open, setIsOpen] = useState(false);

	function handleSubmit(e) {
		const formData = new FormData(e.target);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			cohortId: formData.get("cohortId"),
		};
		e.preventDefault();
		e.stopPropagation();
		console.log("submit--", data);
	}

	return (
		<>
			<Box sx={{ height: 200, width: "50%", border: "2px solid purple" }}>
				<DataGrid
					rows={rows}
					columns={studentColumns}
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
				<button onClick={() => setIsOpen(true)}>Add</button>
			</Box>
			{open && (
				<ModalWrapper>
					{(setOpen) => {
						console.log("Modal open");
						return (
							<Box>
								<form
									onSubmit={(e) => {
										handleSubmit(e);
										setOpen(false);
										setIsOpen(false);
									}}
								>
									<TextField name="name" label="Name" variant="filled" />
									<TextField name="email" label="Email" variant="filled" />
									<TextField
										name="cohortId"
										label="CohortId"
										variant="standard"
									/>
									<Stack spacing={2} direction="row">
										<Button
											variant="text"
											onClick={() => {
												setOpen(false);
												setIsOpen(false);
											}}
										>
											Close
										</Button>
										<Button variant="contained" type="submit">
											Submit
										</Button>
									</Stack>
								</form>
							</Box>
						);
					}}
				</ModalWrapper>
			)}
		</>
	);
}
