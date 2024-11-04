const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
	const container = document.querySelector(".container");
	const btn = document.createElement("button");
	btn.innerText = sound;
	btn.addEventListener("click", () => {
		stopSong();
		document.getElementById(sound).play();
	});

	container.appendChild(btn);
});

function stopSong() {
	sounds.forEach((sound) => {
		const song = document.getElementById(sound);
		song.pause();
		song.currentTime = 0;
	});
}
