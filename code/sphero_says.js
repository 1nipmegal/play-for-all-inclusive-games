async function startProgram() {
	await speak('Ας παίξουμε!!! Κάντε ότι λέω, μόνο όταν ακούτε το όνομα μου!!', true);
	while (true) {
		await delay(2);
		await speak('Το Σφερο λέει', true);
		setMainLed({ r: 0, g: 225, b: 0 });
		await speak('Σηκώστε τα χέρια ψηλα', true);
		setSpeed(80);
		stopRoll();
		await delay(3);
		await speak('Το Σφερο λέει', true);
		setMainLed({ r: 0, g: 255, b: 0 });
		await speak('Κάντε μια στροφή γύρω από τον εαυτό σας!! ', true);
		await rawMotor(60, -60, 3);
		stopRoll();
		setMainLed({ r: 255, g: 255, b: 255 });
		await speak('Χοροπηδηξτε!!! ', true);
		setMainLed({ r: 255, g: 0, b: 0 });
		await delay(3);
		await Sound.Game.Fail.play(true);
		await speak('Λυπάμαι χάσατε αν χοροπηδηξατε!!! ', true);
		await delay(3);
		await speak('Το Σφερο λέει', true);
		setMainLed({ r: 0, g: 255, b: 0 });
		await speak('Πιάστε τη μύτη σας!!!', true);
		await spin(6020, 3);
		await delay(3);
		await speak('Το Σφερο λέει!!!', true);
		setMainLed({ r: 0, g: 255, b: 0 });
		await speak('Χορέψτε με τον διπλανό σας', true);
		await spin(6000, 5);
		await delay(3);
		setMainLed({ r: 209, g: 180, b: 255 });
		await speak('Καθηστε κάτω!!!', true);
		setMainLed({ r: 255, g: 0, b: 55 });
		await delay(3);
		await Sound.Effects.Boing.play(true);
		await speak('Λυπάμαι χάσατε αν καθήσατε!!! ', true);
		await delay(3);
		await delay(0.025);
	}
}
