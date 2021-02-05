window.addEventListener("load",function() {
	const nmButton = document.querySelector("#nmButton");
	const rmButton = document.querySelector("#rmButton");
	const body = document.querySelector("body");

	let nmState = true;
	let rmState = true;


	nmButton.addEventListener("click", function() {
		if (nmState) {
			rmButton.style.backgroundColor = "#F0E68C";
			rmButton.style.color = "black";
			rmState = true;

			this.style.backgroundColor = "white";
			this.style.color = "black";
			
			body.style.backgroundColor = "black";
			body.style.color = "white";

			nmState = false;

		}	else {
			this.style.backgroundColor = "black";
			this.style.color = "white";

			body.style.backgroundColor = "white";
			body.style.color = "black";
			nmState = true;
		}
		
	})

	rmButton.addEventListener("click", function() {
		if (rmState) {
			nmButton.style.backgroundColor = "black";
			nmButton.style.color = "white";
			nmState = true;

			this.style.backgroundColor = "white";
			
			body.style.color = "black";
			body.style.backgroundColor = "#F0E68C";
			

			rmState = false;
		}	else {
			this.style.backgroundColor = "#F0E68C";			
			
			body.style.backgroundColor = "white";
			body.style.color = "black";
			rmState = true;
		}
		
	})

})


