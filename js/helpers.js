var helpers = {
	
	init: function(){
		var speakerHeroElements = document.querySelectorAll(".speaker-hero")
		for (var i=0; i < speakerHeroElements.length; i++) {
			speakerHeroElements[i].addEventListener("click", helpers.showSpeakerInfo, false)
		};

		var closeElements = document.querySelectorAll(".speaker-close")
		for (var i=0; i < closeElements.length; i++) {
			closeElements[i].addEventListener("click", helpers.hideSpeakerInfo, false)
		};

		var lightBox = document.querySelector("#lightbox")		
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
	
	hideSpeakerInfo: function(event){
		if(event) {
			event.stopPropagation()	
		}
		
		var visibleSpeakerElements = document.querySelectorAll(".speaker-more.visible")
		
		for (var i=0; i < visibleSpeakerElements.length; i++) {
			visibleSpeakerElements[i].classList.remove("visible")
		};
		
		var lightBox = document.querySelector("#lightbox")
		lightBox.classList.remove("visible")
		
	}
	
}

window.addEventListener('load', helpers.init, false)