export interface IGridProps {
	options: {
		/** Number of columns */
		numColumns: number,
		/** Gap between columns and rows. CSS gap property */
		gap?: string
	},
	className?: string,
	children?: React.ReactNode
}

export function Grid(
	{ children, options, className = '' }: IGridProps
) {
	let gridTemplateColumns = '';

	for (let i = 0; i < options.numColumns; i++) gridTemplateColumns += `1fr `;

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns,
				gap: options.gap ?? '0px 0px',
			}}
			className={`grid-container ${className}`}
		>
			{children}
		</div>
	)
}

export interface IGridItemProps {
	options?: {
		width?: number
	},
	children?: React.ReactNode,
	className?: string
}

export function GridItem({ children, options = {}, className }: IGridItemProps) {
	const width = options.width ?? 1;

	return (
		<div className={`grid-item ${className ? className : ''}`} style={{ gridColumnEnd: `span ${width}` }}>
			{children}
		</div>
	)
}