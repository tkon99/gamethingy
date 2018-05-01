$(document).ready(function () {
	for (x = 0; x < 50; x++) {
		for (y = 0; y < 50; y++) {
			$("#app").append('<div class="block" style="left: ' + x * 2 + '%;top:' + (y * 2) + '%" data-crds="' + x + '-' + y + '"></div>');
		}
	}

	doMenu();
	//doGame();
});

function c(crds) {
	return $("div[data-crds='" + crds.join("-") + "']");
}

function a(crds, color) {
	if (color == undefined) {
		color = "green";
	}
	$("div[data-crds='" + crds.join("-") + "']").addClass(color);
}

function p(crds, color) {
	if (color == undefined) {
		color = "green";
	}
	$("div[data-crds='" + crds.join("-") + "']").removeClass(color);
}

function drawLetter(letter, color, crds) {
	switch (letter) {
		case "a":
			a([crds[0] - 0, crds[1] + 1], color);
			a([crds[0] - 0, crds[1] + 0], color);
			a([crds[0] - 0, crds[1] - 1], color);
			a([crds[0] + 1, crds[1] - 2], color);
			a([crds[0] + 2, crds[1] - 2], color);
			a([crds[0] + 3, crds[1] - 1], color);
			a([crds[0] + 3, crds[1] + 0], color);
			a([crds[0] + 3, crds[1] + 1], color);
			a([crds[0] + 1, crds[1] - 0], color);
			a([crds[0] + 2, crds[1] - 0], color);
			return 5;
			break;
		
		case "b":
			a([crds[0] + 0, crds[1] + 1], color);
			a([crds[0] - 0, crds[1] + 0], color);
			a([crds[0] - 0, crds[1] - 1], color);
			a([crds[0] - 0, crds[1] - 2], color);
			a([crds[0] - 0, crds[1] - 3], color);
			a([crds[0] + 1, crds[1] - 3], color);
			a([crds[0] + 2, crds[1] - 2], color);
			a([crds[0] + 1, crds[1] - 1], color);
			a([crds[0] + 2, crds[1] - 0], color);
			a([crds[0] + 1, crds[1] + 1], color);
			return 4;
			break;
		
		case "c":
			break;
		
		case "d":
			break;
		
		case "e":
			break;
		
		case "f":
			break;

		case "g":
			break;

		case "h":
			break;

		case "i":
			break;

		case "j":
			break;

		case "k":
			break;

		case "l":
			break;
		
		case "m":
			break;
		
		case "n":
			break;

		case "o":
			break;

		case "p":
			a([crds[0] - 2, crds[1] + 1], color);
			a([crds[0] - 2, crds[1] + 0], color);
			a([crds[0] - 2, crds[1] - 1], color);
			a([crds[0] - 2, crds[1] - 2], color);
			a([crds[0] - 2, crds[1] - 3], color);
			a([crds[0] - 1, crds[1] - 3], color);
			a([crds[0] - 0, crds[1] - 2], color);
			a([crds[0] - 1, crds[1] - 1], color);
			break;
		
		case "q":
			break;

		case "r":
			a([crds[0] - 2, crds[1] + 1], color);
			a([crds[0] - 2, crds[1] + 0], color);
			a([crds[0] - 2, crds[1] - 1], color);
			a([crds[0] - 2, crds[1] - 2], color);
			a([crds[0] - 2, crds[1] - 3], color);
			a([crds[0] - 1, crds[1] - 3], color);
			a([crds[0] - 0, crds[1] - 2], color);
			a([crds[0] - 1, crds[1] - 1], color);
			a([crds[0] - 0, crds[1] - 0], color);
			a([crds[0] - 0, crds[1] + 1], color);
			break;

		case "s":
			break;

		case "t":
			break;

		case "u":
			break;

		case "v":
			break;

		case "w":
			break;

		case "x":
			break;

		case "y":
			break;

		case "z":
			break;

		default:
			break;
	}
}

function typeWord(word, color, crds){
	let currentCrds = crds;
	for(i in word){
		let currentWidth = drawLetter(word[i],color,currentCrds);
		currentCrds = [currentCrds[0] + currentWidth, currentCrds[1]];
	}
}

var previous = [];

function doMenu() {
	//typeWord("ab", "green", [24,24]);
	drawLetter("a", "green", [24,24]);
}

function doGame() {
	a([24, 24]);
	previous = [24, 24];
	generateMap();
	bindKeys();
}

function drawLineBetween(crd1, crd2, color) {
	//Handle X-axis
	if (crd1[0] < crd2[0]) {
		for (i = crd1[0]; i <= crd2[0]; i++) {
			a([i, crd1[1]], color);
		}
	} else if (crd1[0] == crd2[0]) {
		//No need
	} else {
		for (i = crd1[0]; i >= crd2[0]; i--) {
			a([i, crd1[1]], color);
		}
	}

	//Handle Y-axis
	if (crd1[1] < crd2[1]) {
		for (h = crd1[1]; h <= crd2[1]; h++) {
			a([crd2[0], h], color);
		}
	} else if (crd1[1] == crd2[1]) {
		//No need
	} else {
		for (h = crd1[1]; h >= crd2[1]; h--) {
			a([crd2[0], h], color);
		}
	}
}

function generateMap() {
	let ppoint = [Math.floor(Math.random() * 49) + 1, Math.floor(Math.random() * 49) + 1];
	let spoint = [Math.floor(Math.random() * 49) + 1, Math.floor(Math.random() * 49) + 1];
	let tpoint = [Math.floor(Math.random() * 49) + 1, Math.floor(Math.random() * 49) + 1];
	let qpoint = [Math.floor(Math.random() * 49) + 1, Math.floor(Math.random() * 49) + 1];

	console.log(ppoint);
	console.log(spoint);
	console.log(tpoint);

	//a(ppoint, "blue");
	//Choose a direction
	// drawLineBetween(ppoint, spoint, "blue");
	// drawLineBetween(spoint, tpoint, "blue");
	// drawLineBetween(tpoint, qpoint, "blue");
	// drawLineBetween(qpoint, ppoint, "blue");

	drawLineBetween([2, 2], [45, 2], "blue");
}

function bindKeys() {
	$(document).keydown(function (e) {
		if (e.keyCode == 87) { //W Up
			if (previous[1] !== 0 && c([previous[0], previous[1] - 1]).hasClass("blue") == false) {
				p(previous);
				let nieuw = previous;
				nieuw[1]--;
				previous = nieuw;
				a(nieuw);
			}
		}
		if (e.keyCode == 68 && c([previous[0] + 1, previous[1]]).hasClass("blue") == false) { //D Right
			if (previous[0] !== 49) {
				p(previous);
				let nieuw = previous;
				nieuw[0]++;
				previous = nieuw;
				a(nieuw);
			}
		}
		if (e.keyCode == 83) { //S Down
			if (previous[1] !== 49 && c([previous[0], previous[1] + 1]).hasClass("blue") == false) {
				p(previous);
				let nieuw = previous;
				nieuw[1]++;
				previous = nieuw;
				a(nieuw);
			}
		}
		if (e.keyCode == 65) { //A Left
			if (previous[0] !== 0 && c([previous[0] - 1, previous[1]]).hasClass("blue") == false) {
				p(previous);
				let nieuw = previous;
				nieuw[0]--;
				previous = nieuw;
				a(nieuw);
			}
		}
	});
}