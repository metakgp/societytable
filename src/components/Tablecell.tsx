import { Tooltip } from 'react-tooltip';
import { Block, ISociety } from "../data/societies";
import { GridItem } from "./Grid";
import Modal from 'react-modal'
import { useState } from 'react';
import facebook from '../assets/socials_facebook.png';

export type TableCellProps = { society: ISociety, index: number, type: "society" } | { index: number, type: "undiscovered", block: Block } | { type: "empty" | "inner-transition" | "the-unknown-soc" };


function getIUPACTemporaryNameAndSymbol(index: number): { name: string, symbol: string } {
	const NUMERICAL_ROOTS = ["nil", "un", "bi", "tri", "quad", "pent", "hex", "sept", "oct", "en"];
	const index_digits = index.toString().split('').map((digit_str) => parseInt(digit_str));

	let symbol = index_digits.map((digit) => NUMERICAL_ROOTS[digit][0]).join('');
	symbol = symbol[0].toUpperCase() + symbol.slice(1);

	let name = index_digits.map((digit) => NUMERICAL_ROOTS[digit]).join('');
	name.replace('nnn', 'nn');
	name.replace('iii', 'ii');
	name = name[0].toUpperCase() + name.slice(1) + "ium";

	return {
		name,
		symbol
	}
}

function Cell(props: TableCellProps & { insideModal?: boolean }) {

	switch (props.type) {
		case "society":
			return <>
					<div>
                        <GridItem className={`society block-${props.society.block.toLowerCase()}`}>
                            <span className="index">{props.index}</span>
                            <span className="year">{props.society.year}</span>
                            <span className="recognized">{props.society.tsg_recognized ? "*" : ""}</span>
                            <span className="symbol">{props.society.symbol}</span>
                            <span className="size">{props.society.size}</span>
                        </GridItem>
					</div>
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
		case "undiscovered":
			const { name, symbol } = getIUPACTemporaryNameAndSymbol(props.index);

			return <>
				<div data-tooltip-id={`${props.index.toString()}-${symbol}`} data-tooltip-delay-hide={0}>
					<GridItem className={`society undiscovered-soc block-${props.block.toLowerCase()}`} >
						<span className="index">{props.index}</span>
						<span className="year">?</span>
						<span className="symbol">{symbol}</span>
						<span className="size">NA</span>
					</GridItem>
				</div>
				<Tooltip className="soc-tooltip" id={`${props.index.toString()}-${symbol}`} delayHide={0} delayShow={0}>
					<span className="soc-tooltip-name">{name} (Not Discovered)</span>
					<p className="soc-toolip-desc">This society has not been discovered yet and has been assigned a temporary name.</p>
				</Tooltip>
			</>;
	}
}

function TableCell(props: TableCellProps) {
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = useState(false);	
    
    function openModal() {
        setIsOpen(true);
    }
    
    
    function closeModal() {
        setIsOpen(false);
    }

    
    return <div onClick={openModal}>
        <Cell {...props}/>
        {props.type === 'society' && <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnEsc={true}
            contentLabel="Society Details"
            style={{
                overlay: {
                    position: 'fixed',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                content: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    border: '1px solid #ccc',
                    background: 'hsl(51, 45%, 85%)',
                    borderRadius: '5px',
                    width: '80%',
                    maxWidth: '500px',
                }
            }}
            >
                <div className='table soc-modal'>
                    <h2>{props.society.name}</h2>
                    <Cell {...props} />
                    <p>{props.society.description}</p>
                    <a href={props.society.link} target="_blank" rel="noreferrer"><img style={{ height: '1.5em', width: '1.5em' }} src={facebook} alt="Facebook" /></a>
                </div>
            </Modal>
        }
    </div>

}


export default TableCell;