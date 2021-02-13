function onload(){
	
	var imgs=[
	'alien spin.gif',
	'alien weed.gif',
	'Sexy Alien.gif',
	'UFO Monthly.jpg',
	'Alien Dancing.gif',
	'nana.jpeg',
	'toaster fire.gif',
	'heady flash drive.png'
	];
	
	
	for (var i=0;i<imgs.length;i++){
		img = imgs[i];
		
		switch(img) {
		case 'alien spin.gif':
			$("#imgs").append("<a target='_blank' href='https://ufostalker.com/'><img src='./img/"+img+"' class='spin img-link sm-img'></a>");
			
			break;
		case 'alien weed.gif':
			$("#imgs").append("<a target='_blank' href='https://www.nps.gov/hocu/learn/historyculture/hopewell-mound-group.htm'><img src='./img/"+img+"' class='smoke img-link'></a>");
			
			break;
		case 'Sexy Alien.gif':
			$("#imgs").append("<a target='_blank' href='https://www.nps.gov/hocu/learn/historyculture/hopewell-mound-group.htm'><img src='./img/"+img+"' class='sexy img-link'></a>");
			break;
		case 'UFO Monthly.jpg':
			$("#imgs").append("<a target='_blank' href='https://iasos.com/metaphys/ektar/'><img src='./img/"+img+"' class='monthly img-link'></a>");
			break;
		case 'Alien Dancing.gif':
			$("#imgs").append("<a target='_blank' href='https://www.afushop.se/en'><img src='./img/"+img+"' class='dancing img-link'></a>");
			break;
		case 'nana.jpeg':
			var img2=imgs[++i];
			$("#imgs").append("<div class='stack'><a target='_blank' href='https://sacred-texts.com/atl/ssm/ssm11.htm'><img src='./img/"+img+"' class='nana img-link'></a><a target='_blank' href='https://web.archive.org/web/20071014213700/'><img src='./img/"+img2+"' class='toaster img-link'></a></div>");
			break;
		case 'toaster fire.gif':
			//handled in nana
			break;
		case 'heady flash drive.png':
			$("#imgs").append("<a target='_blank' href='http://morusalba.bandcamp.com/'><img src='./img/"+img+"' class='drive img-link'></a>");
			break;
		default:
			throw 'image not found: '+img;
		}
		
	}
}