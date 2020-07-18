(() => {
	console.log('fired!');

	let lightBox = document.querySelector(".lightbox"),
	lblclose = lightBox.querySelector("span"),
	lblVideo = lightBox.querySelector("video"),
	sigils = document.querySelectorAll(".sigilContainer"),
	houseImages = document.querySelector("#houseImages"),
	houseName = document.querySelector(".house-name"),
	houseBio = document.querySelector(".house-info");

	const houseInfo =[
	["Stark", "House Stark of Winterfell is one of the Great Houses of Westeros and the principal noble house of the north. In days of old they ruled as Kings of Winter, but since Aegon's Conquest they have been Wardens of the North and ruled as Lords of Winterfell."],
	["Baratheon", "House Baratheon was founded by Orys Baratheon, a general in the army of King Aegon I Targaryen, the founder of the Targaryen dynasty who conquered the Seven Kingdoms. Orys Baratheon was also rumored to be Aegon's bastard half-brother. He defeated Argilac the Arrogant, the last of the Storm Kings, and captured his castle of Storm's End."],
	["Lannister", "House Lannister is one of the Great Houses of Westeros. Their lands are in the far west of the continent. Their seat is Casterly Rock, a castle on a rocky promontory overlooking the Sunset Sea. It overlooks the thriving city of Lannisport and sits atop the most productive gold mine in the Westerlands."],
	["Tully", "House Tully of Riverrun is a Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are Family, Duty, Honor."],
	["Greyjoy", "House Greyjoy is one of the Great Houses of Westeros. Their lands are the Iron Islands off the west coast of the continent. They rule from their castle Pyke from the island of the same name. The Iron Islands are harsh and bleak and the Greyjoys have traditionally survived by raiding their neighbors."],
	["Arryn", "House Arryn of the Eyrie is one of the Great Houses of Westeros, and is the principal noble house in the Vale of Arryn. Their main seat is the Eyrie, which is considered impregnable. House Arryn has at least one other holding, their winter castle at the Gates of the Moon, which was once their main seat."]
	]

	function showHideLightBox(){
		lightBox.classList.toggle('show-lightbox');

		if(lblVideo.paused){
			lblVideo.play();
		}
		else{
			lblVideo.currentTime=0;
			lblVideo.pause();
		}
	}

	function animateBanner() {

		houseImages.style.right=`${this.dataset.offset* 600}px`;

		houseName.textContent=`House ${houseInfo[this.dataset.offset][0]}`;
		houseBio.textContent=`${houseInfo[this.dataset.offset][1]}`;
	}

	

	sigils.forEach(sigil => sigil.addEventListener("click", showHideLightBox));
	sigils.forEach(sigil => sigil.addEventListener("click", animateBanner));
	lblclose.addEventListener("click", showHideLightBox);

	lblVideo.addEventListener("ended", showHideLightBox);
})();