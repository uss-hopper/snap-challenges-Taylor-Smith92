// using fetch display posts fro jsonplaceholder.com onto the dom
// (https://jsonplaceholder.typicode.com/posts)
// https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

function loadPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(function(response) {
			console.log(response);
			return response.json();
		})
		.then((myJson) => {
			const cards = myJson.map(index => {
				return `
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${index.title}</h5>
							<p class="card-text">${index.body}</p>
						</div>
					</div>
					`
			});
			let html = document.getElementById("target");
			html.innerHTML = cards.join("\r\n");
		});
}

