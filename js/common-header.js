// Lookup and return a parameter value in the url.
function get_query_variable(parameter) {
	let query = window.location.search.substring(1);
	let vars  = query.split('&');
	for (let i=0; i<vars.length; i++) {
		let pair = vars[i].split('=');
		if (pair[0] == parameter) {
			return pair[1];
		}
	}
	return false;
}

// Load a script.
function load_script(script_url) {
	let script = document.createElement('script');
	script.src = script_url;
	document.head.appendChild(script);
	return new Promise((resolve, reject) => {
		script.onload = function() {
			resolve();
		}
		script.onerror = function() {
			reject();
		}
	});
}