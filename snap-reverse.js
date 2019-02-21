let string = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";

let words = string.split(" ");
/** backW = function backwards() {
*	 return words.reverse();
* }
* console.log(backW());
**/

function backwards(accumulator, cuurentValue) {
	let combine = words.reverse();
	return (combine.join(" "))
}

const final = words.reduce(backwards, 0);

console.log(final);