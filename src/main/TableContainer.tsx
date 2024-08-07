import ExamTable from "../components/ExamTable";
import CohortsTable from "../components/CohortsTable";
import StudentsTable from "../components/StudentsTable";

const style = {
	width: "100%",
	height: "80%",
	border: "2px solid green",
};

const botCOntStyle = {
    display: 'flex',
    flexDirection: 'row',
	marginTop: '50px'
}

export default function TableContainer() {
	return (
		<div style={style}>
			<div>
				{" "}
				<ExamTable />
			</div>
			<div style={botCOntStyle}>
				<CohortsTable />
				<StudentsTable />
			</div>
		</div>
	);
}
