import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const cohortsColumns: GridColDef<(typeof rows)[number]>[] = [
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
		type: "number",
		editable: true,
	},
	{
		field: "sessionId",
		headerName: "Session Id",
		type: "number",
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

const rows = [
	{
		id: 1,
		name: "Snow",
		examId: "Jon",
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
	{
		id: 2,
		name: "Lannister",
		examId: "Cersei",
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
	{
		id: 3,
		name: "Lannister",
		examId: "Jaime",
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
	{
		id: 4,
		name: "Stark",
		examId: "Arya",
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
	{
		id: 5,
		name: "Targaryen",
		examId: "Daenerys",
		sessionId: null,
		scheduleInfo: "",
		students: "",
	},
	{
		id: 6,
		name: "Melisandre",
		examId: null,
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
	{
		id: 7,
		name: "Clifford",
		examId: "Ferrara",
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
	{
		id: 8,
		name: "Frances",
		examId: "Rossini",
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
	{
		id: 9,
		name: "Roxie",
		examId: "Harvey",
		sessionId: "",
		scheduleInfo: "",
		students: "",
	},
];

export default function CohortsTable() {
	return (
		<Box sx={{ height: 200, width: "50%", border: '2px solid orange' }}>
			<DataGrid
				rows={rows}
				columns={cohortsColumns}
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
