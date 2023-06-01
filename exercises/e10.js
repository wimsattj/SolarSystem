import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName){
  // Your code goes here...
	let finalObj = {};
  let earth = data.asteroids.filter(function (name, i)
  {
    if (data.asteroids[i].name === asteroidName){
			Object.assign(finalObj,data.asteroids[i]);
      return data.asteroids[i].name === asteroidName;
    }
  })
		return finalObj;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
