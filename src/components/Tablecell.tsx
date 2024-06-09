import { Block, ISociety } from "../data/societies";
import { GridItem } from "./Grid";
import Modal from 'react-modal'
import { useState } from 'react';
import facebook from '../assets/socials_facebook.png';
import '../styles/_modal.scss';

export type TableCellProps = { society: ISociety, index: number, type: "society" } | { index: number, type: "undiscovered", block: Block } | { type: "empty" | "inner-transition" | "the-unknown-soc" };

/**
 * Gives the temporary name and symbol of an undiscovered element according to IUPAC nomenclature.
 * See https://en.wikipedia.org/wiki/Systematic_element_name for more information
 * @param index The index of the undiscovered element
 * @returns The temporary name and symbol
**/

function getIUPACTemporaryNameAndSymbol(index: number): { name: string, symbol: string } {
	const NUMERICAL_ROOTS = ["nil", "un", "bi", "tri", "quad", "pent", "hex", "sept", "oct", "en"];
	const index_digits = index.toString().split('').map((digit_str) => parseInt(digit_str));

	let symbol = index_digits.map((digit) => NUMERICAL_ROOTS[digit][0]).join('');
	symbol = symbol[0].toUpperCase() + symbol.slice(1);

	let name = index_digits.map((digit) => NUMERICAL_ROOTS[digit]).join('');
	name = name[0].toUpperCase() + name.slice(1) + "ium";
	name.replace('nnn', 'nn');
	name.replace('ii', 'ii');

	return {
		name,
		symbol
	}
}

function Element(props: TableCellProps) {

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
			</>;
		case "undiscovered":
			const { symbol } = getIUPACTemporaryNameAndSymbol(props.index);

			return <>
				<div data-tooltip-id={`${props.index.toString()}-${symbol}`} data-tooltip-delay-hide={0}>
					<GridItem className={`society undiscovered-soc block-${props.block.toLowerCase()}`} >
						<span className="index">{props.index}</span>
						<span className="year">?</span>
						<span className="symbol">{symbol}</span>
						<span className="size">NA</span>
					</GridItem>
				</div>
			</>;
	}
}

function TableCell(props: TableCellProps) {
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = useState(false);	
    
    function openModal() {
        if(!modalIsOpen) setIsOpen(true);
    }
    
    
    function closeModal() {
        if(modalIsOpen) setIsOpen(false);
    }

    
    return <div className={`cell-container ${props.type}`} onClick={openModal}>
        <Element {...props}/>
        {props.type === 'society' && <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnEsc={true}
            contentLabel='Society Details'
            className={'table modal'}
            overlayClassName={'table modal-overlay'}
            >
                <div className='table soc-modal'>
                    <h2>{props.society.name}</h2>
					<div className='modal-element'>
                    	<Element {...props} />
					</div>
                    <p className="modal-desc">{props.society.description}</p>
                    <a className="modal-socials" href={props.society.link} target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook" /></a>
                </div>
            </Modal>
        }
		{props.type === 'the-unknown-soc' && <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnEsc={true}
            contentLabel="Society Details"
            className={'modal'}
            overlayClassName={'modal-overlay'}
            >
                <div className='table soc-modal'>
                    <h2>The Unknown Society</h2>
					<div className="modal-element">
                    	<Element {...props} />
					</div>
                    <p className="modal-desc">Incompleteness creates room for innovation and hence this element symbolizes our faith in the student community to push the ambits of existing boundaries. If your society is not listed here, please let us know via the Slack link below.</p>
                </div>
            </Modal>
		}
    </div>

}


export default TableCell;