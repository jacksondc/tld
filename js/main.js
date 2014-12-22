window.onload = function() {
  new Tablesort(document.getElementById('domains-table'));

  var prices = document.querySelectorAll('td:nth-child(5)');
  for(var i = 0; i < prices.length; i++) {
    var h = prices[i].innerHTML;
    if(h === "&nbsp;")
      h = "0.0%";
    var n = h.substr(0, h.length-1);
    n = parseFloat(n);
    n = Math.pow(n, 1/5);
    var root = 35 / Math.pow(35, 1/5);
    h = 95 - (n*root);
    var color = /*ColorLuminance("#F00", h);*/ "hsl(10, 100%, " + h + "%)";
    prices[i].style.backgroundColor = color;

  }
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}
