import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faLinkedin, faSlack, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleXmark, faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Block, ISociety, Social } from "../data/societies";
import { GridItem } from "./Grid";
import { useState } from 'react';

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
				<div title="Click to learn more.">
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
				<div title="Click to learn more.">
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
				<div title="Click to learn more.">
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

const SOCIAL_TITLE_ICON_MAP = {
	fb: { title: 'Facebook', icon: faSquareFacebook },
	insta: { title: 'Instagram', icon: faInstagram },
	linkedin: { title: 'LinkedIn', icon: faLinkedin },
	metawiki: { title: 'MetaWiki', icon: faBook },
	website: { title: 'Website', icon: faGlobe },
	slack: { title: 'Slack', icon: faSlack },
	twitter: { title: 'Twitter', icon: faTwitter }
}

function TableCell(props: TableCellProps) {
	Modal.setAppElement('#root');
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		if (!modalIsOpen) setIsOpen(true);
	}

	function closeModal() {
		if (modalIsOpen) setIsOpen(false);
	}

	return <div className={`cell-container ${props.type}`} onClick={openModal}>
		<Element {...props} />
		{props.type === 'society' && <Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			shouldCloseOnEsc={true}
			contentLabel='Society Details'
			className={'table modal'}
			overlayClassName={'table modal-overlay'}
		>
			<div className='table soc-modal'>
				<div className="modal-header">
					<h2 className="modal-title">
						{props.society.name}
					</h2>
					<button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faCircleXmark} size="2xl" /></button>
				</div>
				<div className='modal-element'>
					<Element {...props} />
				</div>
				<p className="modal-desc">{props.society.description}</p>
				<div className="modal-socials">
					{Object.keys(props.society.links).map((social) => {
						const { icon, title } = SOCIAL_TITLE_ICON_MAP[social as Social];
						const link = props.society.links[social as Social];

						return <a
							className="modal-social"
							href={link}
							title={title}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={icon} size="2x" />
							{title}
						</a>
					})}
				</div>
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
				<div className="modal-header">
					<h2 className="modal-title">
						The Unknown Society
					</h2>
					<button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faCircleXmark} size="2xl" /></button>
				</div>
				<div className='modal-element'>
					<Element {...props} />
				</div>
				<p className="modal-desc">Incompleteness creates room for innovation and hence this element symbolizes our faith in the student community to push the ambits of existing boundaries. If your society is not listed here, please let us know via the Slack link below.</p>
				<div className="modal-socials">
					<a
						className="modal-social"
						href="https://slack.metakgp.org"
						title="metaKGP Slack"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faSlack} size="2x" />
						metaKGP Slack
					</a>
				</div>
			</div>
		</Modal>
		}
		{props.type === 'undiscovered' && <Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			shouldCloseOnEsc={true}
			contentLabel="Society Details"
			className={'modal'}
			overlayClassName={'modal-overlay'}
		>
			<div className='table soc-modal'>
				<div className="modal-header">
					<h2 className="modal-title">
						{getIUPACTemporaryNameAndSymbol(props.index).name} (Undiscovered)
					</h2>
					<button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faCircleXmark} size="2xl" /></button>
				</div>
				<div className='modal-element'>
					<Element {...props} />
				</div>
				<p className="modal-desc">This society has not been discovered yet and has been given a temporary name. If you know any society that fits this category, let us know at the slack link below.</p>
				<div className="modal-socials">
					<a
						className="modal-social"
						href="https://slack.metakgp.org"
						title="metaKGP Slack"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faSlack} size="2x" />
						metaKGP Slack
					</a>
				</div>
			</div>
		</Modal>
		}
	</div>

}

export default TableCell;