/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy, minBy } from "./e17";

export function getGreatestDiscoveryYear(data)
{

  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  function Year(year,count) {
    this.year = year;
    this.count = count;
  };
  let count = 0;
  let years = [];
  let nill = data.asteroids.filter(function(discovery){
    count = 0;
    var nill = data.asteroids.filter(function(name) {
      if (name.discoveryYear == discovery.discoveryYear) {
        count++;
      }
      return years;
    }, 0);
    if (count > 0) {
        years.push(new Year(discovery.discoveryYear, count))
      }
  }, 0);
  return (maxBy(years, (final) => final.count).year);
}

 /*
  let years = [0];
  let minYear = minBy(data.asteroids, (rock) => rock.discoveryYear).discoveryYear;
  let maxYear = maxBy(data.asteroids, (rock) => rock.discoveryYear).discoveryYear;
  let endYears = maxYear - minYear;
  for (let i = 0; i < endYears; i++)
  {
    years[i] = data.asteroids.filter(function (count, j)
    {
      if ((i + minYear) === (data.asteroids[j].discoveryYear))
      {
        years.push(count.count + 1);
        console.log(data.asteroids[j].discoveryYear);
      }
      console.log(data.asteroids[j].discoveryYear);
    })
    return (minYear + maxBy(years, (highest) => highest.count), 0);
  };
}
*/
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
