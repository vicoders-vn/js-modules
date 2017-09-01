export function random_string(str_length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < str_length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}