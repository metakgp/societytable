import { ISociety } from "../data/societies";
import { Grid, GridItem } from "./Grid";

function Society(props: { society?: ISociety }) {
	if (props.society !== undefined) {
		return <GridItem className="society">
			<span className="index">{props.society.index}</span>
			<span className="year">{props.society.year}</span>
			<span className="recognized">{props.society.tsg_recognized ? "*" : ""}</span>
			<span className="symbol">{props.society.symbol}</span>
			<span className="size">{props.society.size}</span>
		</GridItem>;
	} else {
		return <GridItem className="society empty-cell"></GridItem>
	}
}

function Table(props: {societies: ISociety[]}) {
	return (
		<div className="table">
			<Grid
				options={{
					numColumns: 12
				}}
			>
				{props.societies.map((society) => <Society society={society} />)}
			</Grid>
		</div>
	);
}

export default Table;