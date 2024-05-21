import { ISociety } from "../data/societies";
import { Grid, GridItem } from "./Grid";

type TableCellProps = {society: ISociety, type: "society"} | {type: "empty" | "inner-transition" | "the-unknown-soc"};
function TableCell(props: TableCellProps) {
	switch (props.type) {
		case "society":
			return <a href={props.society.link} target="_blank" rel="noreferrer">
				<GridItem className={`society block-${props.society.block.toLowerCase()}`}>
					<span className="index">{props.society.index}</span>
					<span className="year">{props.society.year}</span>
					<span className="recognized">{props.society.tsg_recognized ? "*" : ""}</span>
					<span className="symbol">{props.society.symbol}</span>
					<span className="size">{props.society.size}</span>
				</GridItem>
			</a>;
		case "empty":
			return <GridItem className="society empty-cell"></GridItem>;
		case "inner-transition":
			return <GridItem className="society inner-transition-cell">
				<span className="symbol">↓</span>
			</GridItem>;
		case "the-unknown-soc":
			return <GridItem className={`society the-unknown-soc`}>
				<span className="index">?</span>
				<span className="year">?</span>
				<span className="symbol">Us</span>
				<span className="size">?</span>
			</GridItem>;
	}
}

const MAIN_TABLE_COLUMNS = 12;
function Table(props: {societies: ISociety[]}) {
	const MAIN_SOCIETIES = props.societies.filter((soc) => soc.block != "W");
	const INNER_TRANSITION_SOCIETIES = props.societies.filter((soc) => soc.block === "W");

	const main_grid_entries: TableCellProps[] = [];

	for (let i in MAIN_SOCIETIES) {
		const soc = MAIN_SOCIETIES[i];
		main_grid_entries.push({society: soc, type: "society"});

		if (soc.index === 1) {
			main_grid_entries.push(...new Array(MAIN_TABLE_COLUMNS - 2).fill({type: "empty"}));
		}

		if (soc.index === 4 || soc.index === 11) {
			main_grid_entries.push(...new Array(MAIN_TABLE_COLUMNS - 7).fill({type: "empty"}));
		}

		if (parseInt(i) < MAIN_SOCIETIES.length - 1) {
			if (MAIN_SOCIETIES[parseInt(i) + 1].index - MAIN_SOCIETIES[i].index > 1) {
				main_grid_entries.push({type: "inner-transition"});
			}
		}
	}

	return (
		<div className="table">
			<Grid
				options={{numColumns: MAIN_TABLE_COLUMNS}}
			>
				{main_grid_entries.map((props) => <TableCell {...props} />)}
			</Grid>
			<Grid
				options={{numColumns: INNER_TRANSITION_SOCIETIES.length / 2}}
			>
				{INNER_TRANSITION_SOCIETIES.map((society) => <TableCell society={society} type="society" />)}
				<TableCell type="the-unknown-soc" />
			</Grid>
		</div>
	);
}

export default Table;