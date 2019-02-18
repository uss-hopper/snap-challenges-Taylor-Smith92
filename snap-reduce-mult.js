let array = [1,2,3,5,8,13,34];

window.onload = () => {
	const multiplyNums = array.reduce(
		(accumulator, index) => {
			return accumulator * index;
		}
	)
	let target = document.getElementById("target");
	target.innerHTML = multiplyNums;
}