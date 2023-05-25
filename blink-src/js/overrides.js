/*
*   Javascript donde están las funciones que sobreescriben a funciones de Basic
*/

const overrides =  {
	removeFinalSlide: (t) => {
		let thisStyle = blink.activity.currentStyle;
		thisStyle.parent.removeFinalSlide.call(thisStyle.parent, thisStyle, true);
	}
};
export default overrides;
