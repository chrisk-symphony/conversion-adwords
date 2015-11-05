module.exports = function (pixel, orderRevenue) {
	window.google_conversion_id = pixel.conversionId;
	window.google_conversion_language = "en_US";
	window.google_conversion_format = "1";
	window.google_conversion_color = "ffffff";
	window.google_conversion_label = pixel.conversionLabel;
	window.google_conversion_value = orderRevenue;
	window.google_conversion_currency = "USD";
	window.google_remarketing_only = pixel.remarketingOnly ? pixel.remarketingOnly : false;

	(function(){
		var elem = document.createElement('script');
		elem.src = (document.location.protocol == "https:" 
			? "https://" : "http://") 
			+ "www.googleadservices.com/pagead/conversion.js";
	   	elem.async = true;
	   	elem.type = "text/javascript";
	   	var scpt = document.getElementsByTagName('script')[0];
	   	scpt.parentNode.insertBefore(elem,scpt);
	}());

	return "fired";
};