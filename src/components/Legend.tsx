import SymbolLegendImg from "../assets/symbol_legend_nobg.png";
import ColorLegendImg from "../assets/color_legend.png";

function Legend() {
	return (
		<div className="legend">
			<img src={SymbolLegendImg} className="legend-img" />
			<img src={ColorLegendImg} className="legend-img" />
		</div>
	);
}

export default Legend;