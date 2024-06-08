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
	name = name[0].toUpperCase() + name.slice(1) + "ium";
	name.replace('nnn', 'nn');
	name.replace('iii', 'ii');

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

    
    return <div className='modal-container' onClick={openModal}>
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
					marginRight: '7%',
					fontSize: 'min(2rem, 40px)',
					textAlign: 'center',
					maxHeight: 'fit-content',
                }
            }}
            >
                <div className='table soc-modal'>
                    <h2 style={{marginBottom: '4rem',  }}>{props.society.name}</h2>
					<div style={{scale: '1.6', fontSize: '0.5em', marginBlock: '2em'}}>
                    	<Cell {...props} />
					</div>
                    <p style={{marginTop: '4rem'}}>{props.society.description}</p>
                    <a href={props.society.link} target="_blank" rel="noreferrer"><img style={{ height: '2em', width: '2em' }} src={facebook} alt="Facebook" /></a>
                </div>
            </Modal>
        }
		{props.type === 'the-unknown-soc' && <Modal
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
					marginRight: '7%',
					fontSize: 'min(2rem, 40px)',
					textAlign: 'center',
					maxHeight: 'fit-content',
                }
            }}
            >
                <div className='table soc-modal'>
                    <h2 style={{marginBottom: '4rem'}}>The Unknown Society</h2>
					<div style={{scale: '1.6', fontSize: '0.5em', marginBlock: '2em'}}>
                    	<Cell {...props} />
					</div>
                    <p style={{marginTop: '4rem'}}>This society has not been discovered yet and has been assigned a temporary name.</p>
                </div>
            </Modal>
		}
    </div>

}


export default TableCell;