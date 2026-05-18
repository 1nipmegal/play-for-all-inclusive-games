async function startProgram() {
	while (true) {
		setMainLed({ r: 220, g: 14, b: 255 });
		await Sound.Personality.Dizzy.play(false);
		await rawMotor(60, -60, 3);
		stopRoll();
		setMainLed({ r: 255, g: 238, b: 80 });
		await Sound.Personality.Whee.play(false);
		await roll(0, -60, 4);
		await roll(0, 60, 4);
		await roll(0, -60, 4);
		await roll(0, 60, 4);
		setMainLed({ r: 74, g: 255, b: 246 });
		await Sound.Personality.Celebrate.play(false);
		await rawMotor(255, -255, 3);
		await roll(0, -60, 4);
		await delay(0.025);
	}
