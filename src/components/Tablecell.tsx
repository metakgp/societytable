import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faLinkedin, faSlack, faTwitter, faYoutube, IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleXmark, faBook, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Block, ISociety, Social } from "../data/societies";
import { GridItem } from "./Grid";
import { useState } from 'react';

export type TableCellProps = { society: ISociety, index: number, type: "society", invisible?: boolean } | { index: number, type: "undiscovered", block: Block, invisible?: boolean } | { type: "empty" | "inner-transition" | "the-unknown-soc", invisible?: boolean };

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
				<div title={props.society.name}>
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
	twitter: { title: 'Twitter', icon: faTwitter },
	email: { title: 'Email', icon: faEnvelope },
	youtube: { title: 'YouTube', icon: faYoutube }
}

interface IDetailsModalProps {
	name: string;
	description: string;
	links: {
		title: string,
		url: string,
		icon: IconDefinition
	}[];
	elementProps: TableCellProps;
	isOpen: boolean;
	closeModal: () => void;
}
function DetailsModal(props: IDetailsModalProps) {
	return <Modal
		isOpen={props.isOpen}
		onRequestClose={props.closeModal}
		shouldCloseOnEsc={true}
		contentLabel='Society Details'
		className={'table modal'}
		overlayClassName={'table modal-overlay'}
	>
		<div className='table soc-modal'>
			<div className="modal-header">
				<h2 className="modal-title">
					{props.name}
				</h2>
				<button className="modal-close-btn" onClick={props.closeModal}><FontAwesomeIcon icon={faCircleXmark} /></button>
			</div>
			<div className='modal-element'>
				<Element {...props.elementProps} />
			</div>
			<p className="modal-desc">{props.description}</p>
			<div className="modal-socials">
				{props.links.map(({ title, url, icon }) => {
					return <a
						className="modal-social"
						href={url}
						title={title}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={icon} size="2x" />
						<p className="modal-social-title">{title}</p>
					</a>
				})}
			</div>
		</div>
	</Modal>
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

	return <div className={`cell-container ${props.type} ${(props.invisible ?? false) ? 'invisible' : ''}`} onClick={openModal}>
		<Element {...props} />

		{props.type === 'society' && <DetailsModal
			isOpen={modalIsOpen}
			closeModal={closeModal}
			elementProps={props}
			name={props.society.name}
			description={props.society.description}
			links={Object.keys(props.society.links).map((social) => {
				const { title, icon } = SOCIAL_TITLE_ICON_MAP[social as Social];
				const url = props.society.links[social as Social] as string;

				return {
					title,
					icon,
					url
				}
			})}
		/>}
		{props.type === 'the-unknown-soc' && <DetailsModal
			isOpen={modalIsOpen}
			closeModal={closeModal}
			elementProps={props}
			name="The Unknown Society"
			description="Incompleteness creates room for innovation and hence this element symbolizes our faith in the student community to push the ambits of existing boundaries. If your society is not listed here, please let us know via the Slack or Github link below."
			links={[
				{ title: 'metaKGP Slack', url: 'https://slack.metakgp.org', icon: faSlack },
				{ title: 'Soc Addition Request', url: 'https://github.com/metakgp/societytable/issues/new?template=new_soc.yml', icon: faGithub }
			]}
		/>}
		{props.type === 'undiscovered' && <DetailsModal
			isOpen={modalIsOpen}
			closeModal={closeModal}
			elementProps={props}
			name={`${getIUPACTemporaryNameAndSymbol(props.index).name} (Undiscovered)`}
			description="This society has not been discovered yet and has been given a temporary name. If you know any society that fits this category, let us know at the slack link below."
			links={[{ title: 'metaKGP Slack', url: 'https://slack.metakgp.org', icon: faSlack }]}
		/>
		}
	</div>
}

export default TableCell;
