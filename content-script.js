var textarea = document.querySelectorAll('textarea');

//for (var i = 0; i < textarea.length; i++) {
//  textarea[i].addEventListener("contextmenu", function (event) {
//	var text = this.textContent;
//  }, true);
//}
window.addEventListener("mousedown", evt => {
  if (evt.button === 2 && evt.target.tagName && evt.target.tagName.toLowerCase() === "textarea") {
        gulpease(evt.target.textContent);
  }
}, true);
window.addEventListener("keydown", evt => {
  if (evt.key === "ContextMenu") {
	if (evt.target.tagName && evt.target.tagName.toLowerCase() === "textarea") {
	  gulpease(evt.target.textContent);
	}
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
  var frasi = text.match(/[\.\:\?\!\;]/g);
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
  browser.runtime.sendMessage({
	'message': 'gulpeaseUpdateMessage',
	'index': index
  });
}
