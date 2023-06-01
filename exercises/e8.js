import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...

			let planetName = '';
			let name1 = data.planets.filter(function(n, i) {
				if (data.planets[i].moons != undefined) {
					let name2 = data.planets[i].moons.filter(function(name, j) {
						if (data.planets[i].moons[j] === moonName) {
							planetName = data.planets[i].name;
							return name == moonName;
						}
					}, 0);
				}
				return planetName;
			}, 0);
			return (planetName);
  }





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
