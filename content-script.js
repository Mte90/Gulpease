if (typeof browser === "undefined") {
    var background = chrome;
} else {
    var background = browser;
}
window.addEventListener("mousedown", evt => {
  if (evt.button === 2 && evt.target.tagName !== 'undefined' && evt.target.tagName.toLowerCase() === "textarea") {
        gulpease(evt.target.value);
  }
}, true);
window.addEventListener("keydown", evt => {
	if (evt.target.tagName !== 'undefined' && evt.target.tagName.toLowerCase() === "textarea") {
	  gulpease(evt.target.value);
	}
}, true);

function gulpease(text) {
  // Based on http://digilander.libero.it/RobertoRicci/variabilialeatorie/esperimenti/leggibilita.htm
  var parole = text.split(" ");
  var nP = parole.length;
  var LP = 0;
  for (var i = 0; i < nP; i++) {
	LP += parole[i].length;
  }
  var frasi = text.split(/[\.\:\?] \n?|[;!\(\n]+/);
  var nF = frasi && frasi.length || 0;
  var index = Math.round(89 - (10 * LP / nP) + (300 * nF / nP));
  if (index < 40) {
	index += ' :-(((';
  } else if (index < 60) {
	index += ' :-((';
  } else if (index < 80) {
	index += ' :-(';
  } else if (index > 81) {
	index += ' :-)';
  }
  if (typeof browser === "undefined") {
    var contentscript = chrome;
  } else {
    var contentscript = browser;
  }
  contentscript.runtime.sendMessage({
	'message': 'gulpeaseUpdateMessage',
	'index': index
  });
}
