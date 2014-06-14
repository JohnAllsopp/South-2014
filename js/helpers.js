var helpers = {
	
	init: function(){
		var speakerHeroElements = document.querySelectorAll(".speaker-hero")
		var lightBox = document.querySelector("#lightbox")
		for (var i=0; i < speakerHeroElements.length; i++) {
			speakerHeroElements[i].addEventListener("click", helpers.showSpeakerInfo, false)
		};
		
		lightBox.addEventListener('click', helpers.hideSpeakerInfo, false);
		
		var styleSheets = document.styleSheets
		
	},
	
	showSpeakerInfo: function(event){
		var element = event.currentTarget;
		var moreElement = element.querySelector(".speaker-more")

		var lightBox = document.querySelector("#lightbox")
		lightBox.classList.add("visible")

		
		if (moreElement) {
			moreElement.classList.add("visible") 	
		}
	},
	
	hideSpeakerInfo: function(){
		var visibleSpeakerElements = document.querySelectorAll(".speaker-more.visible")
		
		for (var i=0; i < visibleSpeakerElements.length; i++) {
			visibleSpeakerElements[i].classList.remove("visible")
		};
		
		var lightBox = document.querySelector("#lightbox")
		lightBox.classList.remove("visible")
		
	}
	
}

window.addEventListener('load', helpers.init, false)