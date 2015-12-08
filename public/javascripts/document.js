$(document).ready(function() {
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4'],
			    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
			   	},
			   	afterRender: function(){
					//playing the video
					$('video').get(0).play();
				}
			});
	    });