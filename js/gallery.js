function activateGallery() {	
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo > img");

	thumbnails.forEach(function(thumbnail) {
		//Preload large versions of images for snappier UX
		let newImageSrc = thumbnail.dataset.largeVersion;
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;

		thumbnail.addEventListener("click", function() {
			// Set clicked image as main image.
			let newAlt = thumbnail.alt;
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", newAlt);

			// Change which image is current.
			document.querySelector(".current").classList.remove("current");
			thumbnail.parentNode.classList.add("current");

			// Update image title and description.
			let galleryInfo   = document.querySelector("#gallery-info");
			let title 	      = galleryInfo.querySelector(".title");
			let description   = galleryInfo.querySelector(".description");
			title.innerHTML       = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}