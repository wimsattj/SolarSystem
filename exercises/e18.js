/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data)
{
// ive been working on this last one too long. I'm struggling with the new concept of (nested simplified callback functions)
// I think I've been doing fairly well, implementing concepts that I do not fully understand. I have a child's grasp on this, and unless I could have an interactive
// conversation on the matter, I will be stuck at my current understanding for a while, I grow weary of trying to invent a new method
// that I cannot find on the internet. this method works, and until I better understand call backs, and make this breakthrough that I need to understand putting these three concepts together, I am, for lack of a better word, stuck.
// the only examples that I can find to count occurences return an an object that when converted to an array
// is no longer accessable with the code as I know it, my attempts to convert it to accessable data result in far more complex code, which defeats
// the purpose of simplification. Therefore, without further guidance, this is as simplified as I can achieve the result.
  
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
