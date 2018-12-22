function activateGallery() {	
	let thumbnails = document.querySelector("#gallery-thumbs").
							  querySelectorAll("img");
	let mainImage = document.querySelector("#gallery-photo > img");

	thumbnails.forEach(function(thumbnail) {
		thumbnail.addEventListener("click", function() {
			// Set clicked image as main image.
			let newImageSrc = thumbnail.dataset.largeVersion;
			let newAlt = thumbnail.dataset.alt;
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", newAlt);
		});
	});
}