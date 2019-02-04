//using javascript convert the string into an array and filter out any words that begin with the letter 'f'.

stringArray = "Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. " +
	"Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, " +
	"human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? " +
	"Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.";


//separates the string into an array of strings containing each word
splitArray = stringArray.split(" ");
//console.log(splitArray);

//filters out any words beginning with f
filterArray = splitArray.filter(index => {
	// toLowerCase allows me to filter just "f" but also remove "F" from the array of strings
	return index[0].toLowerCase() !== "f";
});
//console.log(filterArray);

//takes the separate array elements and join them back into one string
noFs = filterArray.join(" ");

console.log(noFs);