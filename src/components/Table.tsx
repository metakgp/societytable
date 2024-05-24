import { Tooltip } from 'react-tooltip';
import { Block, ISociety } from "../data/societies";
import { Grid, GridItem } from "./Grid";

type TableCellProps = {society: ISociety, index: number, type: "society"} | {type: "empty" | "inner-transition" | "the-unknown-soc"};
function TableCell(props: TableCellProps) {
	switch (props.type) {
		case "society":
			return <>
				<a href={props.society.link} target="_blank" rel="noreferrer" data-tooltip-delay-hide={0} data-tooltip-id={`${props.index.toString()}-${props.society.symbol}`}>
					<GridItem className={`society block-${props.society.block.toLowerCase()}`}>
						<span className="index">{props.index}</span>
						<span className="year">{props.society.year}</span>
						<span className="recognized">{props.society.tsg_recognized ? "*" : ""}</span>
						<span className="symbol">{props.society.symbol}</span>
						<span className="size">{props.society.size}</span>
					</GridItem>
				</a>
				<Tooltip className="soc-tooltip" id={`${props.index.toString()}-${props.society.symbol}`} delayHide={0} delayShow={0}>
					<span className="soc-tooltip-name">{props.society.name}</span>
					<p className="soc-toolip-desc">{props.society.description}</p>
				</Tooltip>
			</>;
		case "empty":
			return <GridItem className="society empty-cell"></GridItem>;
		case "inner-transition":
			return <GridItem className="society inner-transition-cell">
					<span className="symbol">↓</span>
				</GridItem>;
		case "the-unknown-soc":
			return <>
				<div data-tooltip-id="the-unknown-soc" data-tooltip-delay-hide={0}>
					<GridItem className={`society the-unknown-soc`} >
						<span className="index">?</span>
						<span className="year">?</span>
						<span className="symbol">Us</span>
						<span className="size">?</span>
					</GridItem>
				</div>
				<Tooltip className="soc-tooltip" id="the-unknown-soc" delayHide={0} delayShow={0}>
					<span className="soc-tooltip-name">The Unknown Society</span>
					<p className="soc-toolip-desc">Incompleteness creates room for innovation and hence this element symbolizes our faith in the student community to push the ambits of existing boundaries. If your society is not listed here, please let us know via the Slack link below.</p>
				</Tooltip>
			</>;
	}
}

// Number of columns in the main table (which excludes the inner transition elements)
const MAIN_TABLE_COLUMNS = 12;
// A map of which block each column in a row belongs to
const MAIN_SOC_COLUMN_BLOCKS: Block[] = ["T", "TO", "TO", "O", "O", "O", "O", "C", "C", "C", "CC", "U"];
// A map of how many cells must be left empty and after which element index
const EMPTY_CELL_MAP = {
	1: MAIN_TABLE_COLUMNS - 2,
	4: MAIN_TABLE_COLUMNS - 7,
	11: MAIN_TABLE_COLUMNS - 7
};
// Number of columns in the inner transition block
const INNER_TRANSITION_COLUMNS = 5;
// The column (zero-indexed) where gap is left for inner transition societies
const INNER_TRANSITION_GAP_COLUMN = 2;
// The row (zero-indexed) where inner transition socities start
const INNER_TRANSITION_START_ROW = 4;

function Table(props: {societies: ISociety[]}) {
	// All societies that will be part of the main table
	const MAIN_SOCIETIES = props.societies.filter((soc) => soc.block != "W");
	// All inner transition societies
	const INNER_TRANSITION_SOCIETIES = props.societies.filter((soc) => soc.block === "W");
	// Number of elements in the inner transition block (+1 for the unknown society)
	const INNER_TRANSITION_ELEMENTS = INNER_TRANSITION_SOCIETIES.length + 1;
	// Number of rows in the inner transition block
	const INNER_TRANSITION_ROWS = Math.floor(INNER_TRANSITION_ELEMENTS / INNER_TRANSITION_COLUMNS);

	// Cells of the main table's Grid
	const main_grid_entries: TableCellProps[] = [];

	// Index/atomic number of the current society
	let index = 0;
	// Column in the table where the next element will be inserted
	let column = 0;
	// Row in the current table
	let row = 0;
	// The index offsets for each row in the inner transition block
	const inner_transition_offsets: number[] = [];

	while (MAIN_SOCIETIES.length > 0) {
		if (row >= INNER_TRANSITION_START_ROW && column === INNER_TRANSITION_GAP_COLUMN) {
			main_grid_entries.push({type: "inner-transition"});
			inner_transition_offsets.push(index + 1);

			// The number of inner transition block rows already used
			const used_inner_rows = inner_transition_offsets.length;
			// Calculate the offset to be added to the main block elements
			if (used_inner_rows < INNER_TRANSITION_ROWS) {
				// If less than the number of total rows, then the row is full
				// Offset the index by number of columns
				index += INNER_TRANSITION_COLUMNS
			} else {
				// If equal to the number of rows, then the row may not be full
				// Ofset by the number of elements in the last row
				// -1 to exclude the unknown society
				index += (INNER_TRANSITION_ELEMENTS - 1) - INNER_TRANSITION_COLUMNS * (used_inner_rows - 1);
			}
		} else {
			// The block the next element must belong to
			const block = MAIN_SOC_COLUMN_BLOCKS[column];
			// Find the index of the next soc that belongs to this block
			const next_soc_index = MAIN_SOCIETIES.findIndex((soc) => soc.block === block);

			if (next_soc_index === -1) {
				// If there are no more socs in this block, add an empty cell
				// TODO: Replace this with a "not found" element later
				main_grid_entries.push({type: "empty"});
			} else {
				// If a soc exists, insert its element
				index += 1;
				const next_soc = MAIN_SOCIETIES.splice(next_soc_index, 1)[0];
				main_grid_entries.push({society: next_soc, index, type: "society"});
			}

			if (index in EMPTY_CELL_MAP) {
				// If parts of the row should be left empty, do that
				const num_empty_cells = EMPTY_CELL_MAP[index as keyof typeof EMPTY_CELL_MAP];
				main_grid_entries.push(...new Array(num_empty_cells).fill({type: "empty"}));
				column += num_empty_cells;
			}
		}

		column += 1;
		if (column >=MAIN_TABLE_COLUMNS) {
			column %= MAIN_TABLE_COLUMNS;
			row += 1;
		}
	}

	console.log(inner_transition_offsets)

	return (
		<div className="table">
			<Grid
				options={{numColumns: MAIN_TABLE_COLUMNS}}
			>
				{main_grid_entries.map((props) => <TableCell {...props} />)}
			</Grid>
			<Grid
				options={{numColumns: INNER_TRANSITION_COLUMNS}}
			>
				{INNER_TRANSITION_SOCIETIES.map((society, i) => {
					// The row of the current inner transition element
					let inner_row = Math.floor(i / INNER_TRANSITION_COLUMNS);
					// The index of the element, calculated by adding offset to its index in the current row
					let index = inner_transition_offsets[inner_row] + (i % INNER_TRANSITION_COLUMNS);

					return <TableCell society={society} index={index} type="society" />;
				})}
				<TableCell type="the-unknown-soc" />
			</Grid>
		</div>
	);
}

export default Table;