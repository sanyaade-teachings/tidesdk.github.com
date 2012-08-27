// custom sort by string length
function stringLength(a, b) {
	if ( a.length < b.length ) { return 1; }
	if ( a.length > b.length ) { return -1; }
	return 0;
}

$(function() {
	// carousel
	var featureCarousel = $("#feature-carousel");
	featureCarousel.on('slid', function() { 
		var currSlide = $(this).find(".active").index(),
			prevText = $(".text-prev"),
			nextText = $(".text-next");
		$(this).carousel('pause');
		if ( currSlide === 1 ) {
			prevText.text("Mac");
			nextText.text("Windows");
		} else if ( currSlide == 2 ) {
			prevText.text("Linux");
			nextText.text("Mac");
		} else {
			prevText.text("Windows");
			nextText.text("Linux");
		}
	});
	featureCarousel.carousel('pause');

	// hook up button control
	$(".feature-btn").on('click', function() {
		var self = this;
		featureCarousel.carousel(parseInt($(self).attr("data-slide")));
	});

	// create new kartograph map
	var map = new $K.map("#world-map"),
		symbols,
		markerData = [];
	map.loadMap('javascripts/worldmap.svg', function() {
		map.addLayer({
			id: "continents"
		});
	});

	// add popover to element
	function addPopover(el) {
		el.popover({
			selector: 'li',
			trigger: 'hover',
			placement: 'top'
		});
	}

	// add map tie in for popovers
	function enableMapFX(el) {
		var targetMap = $("#world-map");
		el.on('hover', 'li', function() {
			targetMap.find("img[title='" + $(this).attr("title") + "']").toggleClass("selected");
		});
	}

	// get data to display markers on the map
	$.getJSON('javascripts/profile.json', function(profile) {
		if (profile) {
			var i = 0,
				peopleList = $("ul.people");
			for (i; i < profile.length; i++) {
				var userImage = profile[i].avatar || profile[i].photo || "../images/defaultUser.png";
				markerData.push({ la: profile[i].latlong[0], lo: profile[i].latlong[1], name: profile[i].name });
				var peopleListItem = $("<li>", {
					title: profile[i].name,
					"data-content": profile[i].description,
					style: "background-image: url('" + userImage + "')"
				});
				peopleListItem.appendTo(peopleList);
			}

			addPopover(peopleList);
			enableMapFX(peopleList);

			if (symbols) symbols.remove();

			symbols = map.addSymbols({
				data: markerData,
				type: $K.Icon,
				border: "#a9c7d2",
				icon: "../images/map-marker.png",
				iconsize: [33, 45],
				class: "marker",
				title: function(d) { return d.name },
				location: function(d) { return [d['lo'], d['la']]; },
				offset: [-12,-45]
				//,click: function() { alert("clicked"); }
			});
		}
	});

	// text rotation
	var txtOS = ["Mac", "Windows", "Linux"],
		txtLang = ["HTML5 & CSS3", "Python & HTML5", "Ruby & HTML5", "PHP & HTML5"],
		textLang = $("#textLang"),
		textOS = $("#textOS"),
		rotInterval;

	// set initial width
	textLang.text(txtLang.sort(stringLength)[0]).css({ width: textLang.width() });
	textOS.text(txtOS.sort(stringLength)[0]).css({ width: textOS.width() });

	// pick random text content and animate rotation
	function txtRotPickRandomShow() {
		var currOS = txtOS[Math.floor(Math.random()*txtOS.length)],
			currLang = txtLang[Math.floor(Math.random()*txtLang.length)];
		textLang.delay(200).slideUp(200, function() { $(this).text(currLang).slideDown(200); });
		textOS.slideUp(200, function() { $(this).text(currOS).slideDown(200); });
	}

	// set interval for rotation
	rotInterval = setInterval(txtRotPickRandomShow, 5000);

	// get blog posts
	$.ajax({
		url: '/atom.xml',
		success: function(data) {
			var entries = $(data).find("entry"),
				i = 0,
				feedTarget = $(".feed"),
				limit = 3,
				item = {};
			entries.each(function(i, entry) {
				if ( i === limit ) return false;
				var targetContainer = $('<div>', { class: 'span4' });
				item.title = $(entry).find('title').text();
				item.content = $(entry).find('content').html().substring(0, 250) + "...";
				item.link = $(entry).find('link').attr('href');
				targetContainer.append('<h3>' + item.title + '</h3><p>' + item.content + '</p><a href="' + item.link + '">Read more &raquo;</a>');
				feedTarget.append(targetContainer);
			});
		}
	});

});