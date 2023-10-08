const impacts = require('../datasets/meteor-impacts');
const courses = require('../datasets/courses');

// 🦉 Los alle oefeningen hieronder op zonder gebruik te maken van for/while lussen 🦉
// 🦉 Gebruik enkel forEach/map/filter/reduce en andere Array functies              🦉
// 🦉 Als je écht uitdaging wil, vermijd GitHub Copilot, e.d.                       🦉
// 🦉 Verwijder eventuele lege return-statements                                    🦉
// 🦉 Voer `yarn test` uit om jouw resultaten te controleren                        🦉

/**
 * Geef de namen van alle docenten terug door gebruik te maken van `forEach`.
 *
 * @returns {string[]}
 */
function oefening1() {
  const courseNames = [];

  courses.forEach(c => 
    courseNames.push(c.teacher)
  );

  return courseNames;
}

/**
 * Geef een array terug met enkel de { id, name } van alle courses door gebruik
 * te maken van `forEach`.
 *
 * @returns {{ id: number, name: string }[]}
 */
function oefening2() {
  let idNameArray = [];
  
  courses.forEach( c => {
    idNameArray.push({
      id: c.id,
      name: c.name
    })
  });

  return idNameArray;
}

/**
 * De voorgaande problemen zijn typische voorbeelden waarbij we de `map` functie
 * zouden gebruiken. Herschrijf oefening2 met behulp van `map`.
 */
function oefening3() {
  return courses.map((c) => ({id : c.id, name : c.name }));
}

/**
 * Gebruik `forEach` om een array terug te geven met de courses die 3 uur per week duren.
 *
 * @returns {string[]}
 */
function oefening4() {
  const courses3hours = [];
  courses.forEach( c => {
    if (c.hours === 3) courses3hours.push(c);
    
  });
  return courses3hours
}

/**
 * Hier is opnieuw een ingebouwde functie voor: `filter`. Herschrijf oefening4 met
 * behulp van `filter`.
 *
 * @returns {string[]}
 */
function oefening5() {
  return courses.filter(c => c.hours === 3);
}

/**
 * Het is ook mogelijk om meerdere functies te combineren. Gebruik `filter` en `map`
 * om een array terug te geven met enkel de docenten van de courses die 3 uur per week
 * duren.
 *
 * @returns {string[]}
 */
function oefening6() {
  return courses.filter( c=> c.hours === 3).map( c => c.teacher);
}

/**
 * Zowel `map` als `filter` werken op één item tegelijk, soms wil je een operatie
 * uitvoeren die meer, of alle, items in de lijst nodig heeft. Gebruik `forEach`
 * om de course met het grootste id terug te geven.
 *
 * @returns {{ id: number; name: string; hours: number; teacher: string; }}
 */
function oefening7() {
  let grootsteId = null
  courses.forEach( course => {
    if(!grootsteId || course.id > grootsteId.id){
      grootsteId = course
    }
  })
  return grootsteId;
}

/**
 * Hier is wederom een ingebouwde functie voor: `reduce`. Herschrijf oefening7 met
 * behulp van `reduce`.
 *
 * 💡 Hint: Start met een fictieve course met id 0 (en verder niets).
 *
 * @returns {{ id: number; name: string; hours: number; teacher: string; }}
 */
function oefening8() {
  const initialCourse = { id: 0, name: '', hours: 0, teacher: '' };

  // Use reduce to find the course with the largest ID
  const courseWithLargestId = courses.reduce((acc, current) => {
    if (current.id > acc.id) {
      return current; // Update the accumulator if current course has a larger ID
    } else {
      return acc; // Otherwise, keep the current accumulator
    }
  }, initialCourse);

  return courseWithLargestId;
}

/**
 * Gebruik `reduce` om de som van alle uren van alle courses te berekenen.
 *
 * @returns {number}
 */
function oefening9() {
  return courses.reduce((acc, current) => {
      return acc + current.hours;
  }, 0);
}

// 🦉 Gebruik vanaf nu enkel `map`, `filter`, `reduce` om de oefeningen op 🦉
// 🦉 te lossen. Alles kan wel opgelost worden met `forEach`, maar dat is  🦉
// 🦉 niet de bedoeling van deze oefeningen.                               🦉
// 🦉                                                                      🦉
// 🦉 Het is mogelijk dat je hulpfuncties moet schrijven, of delen van een 🦉
// 🦉 oplossing kan hergebruiken in een andere oefening.                   🦉

/**
 * Gebruik `reduce` om de naam van de teacher van de course met het kleinste id
 * terug te geven.
 *
 * @returns {string}
 */
function oefening10() {
  const initialCourse = { id: Infinity, name: '', hours: 0, teacher: '' };

  // Use reduce to find the course with the largest ID
  const courseWithSmallestId = courses.reduce((acc, current) => {
    if (current.id < acc.id) {
      return current; // Update the accumulator if current course has a larger ID
    } else {
      return acc; // Otherwise, keep the current accumulator
    }
  }, initialCourse);

  return courseWithSmallestId.teacher;
}

// 🦉 Gebruik de `impacts` dataset vanaf nu, niet meer de `courses` 🦉
/**
 * Geef het aantal meteorietinslagen terug die een geolocatie hebben.
 * Maak een helperfunctie voor de filter predicate.
 *
 * @returns {number}
 */
const hasGeolocation = (impact) => impact.geolocation;
const hasNoGeolocation = (impact) => !impact.geolocation;

function oefening11() {
  return impacts.filter(i => hasGeolocation(i)).length;

}

/**
 * Geef een array terug met de namen van alle meteorietinslagen die geen
 * geolocatie hebben.
 * Maak een helperfunctie voor de filter predicate, hergebruik de functie
 * uit oefening11.
 */
function oefening12() {
  return impacts.filter(i => hasNoGeolocation(i)).map(i => i.name);
}


// 🦉 In de theorie heb je geleerd wat currying is. Simpel gezegd, in plaats      🦉
// 🦉 van een functie met meerdere argumenten te maken, maak je een functie met   🦉
// 🦉 één argument, die een functie retourneert die een argument accepteert, enz. 🦉
// 🦉                                                                             🦉
// 🦉 Je zou het niet aanroepen als fn(a, b, c), maar eerder als fn(a)(b)(c).     🦉
// 🦉                                                                             🦉
// 🦉 Dit maakt de gedeeltelijke toepassing van de argumenten van een functie     🦉
// 🦉 mogelijk. Simpel gezegd kun je ofwel alle argumenten doorgeven die een      🦉
// 🦉 functie verwacht en het resultaat krijgen, ofwel een subset van die         🦉
// 🦉 argumenten doorgeven en een functie terugkrijgen die wacht op de rest van   🦉
// 🦉 de argumenten.                                                              🦉
// 🦉                                                                             🦉
// 🦉 Gebruik deze techniek in de volgende oefening(en)                           🦉

const isImpactGreaterThan = (threshold) => (impact) =>
impact.mass > threshold;
/**
 * Geef een array terug met de namen van alle meteorietinslagen die een grotere
 * massa hebben dan de meegegeven parameter.
 * 
 * 💡 Hint: je hebt parseInt() nodig om de massa te parsen naar een getal.
 *
 * @param {number} impactSize - De massa van de meteorietinslagen die je wil teruggeven
 *
 * @returns {string[]}
 */
function oefening13(impactSize) {
  return impacts.filter(isImpactGreaterThan(impactSize)).map(i => i.name);
}

/**
 * Geef een array terug met de namen van alle meteorietinslagen die na een bepaald
 * jaar gebeurd zijn.
 * Maak opnieuw een helperfunctie voor de filter predicate.
 *
 * @param {number} age - De leeftijd van de meteorietinslagen die je wil teruggeven
 *
 * @returns {string[]}
 */

const impactAfterYear = (year) => (impact) =>
new Date(impact.year).getFullYear() > year;

function oefening14(age) {
  return impacts.filter(impactAfterYear(age)).map(i => i.name)
}

/**
 * Geef een object terug met het aantal meteorietinslagen per jaar, beginnend vanaf 1945,
 * en in de vorm { year: #impacts }. Bijvoorbeeld: { 1951: 2, 2012: 3, ... }
 *
 * @returns {{ [key: number]: number }}
 */
function oefening15() {
  const impactCounts = {};
  impacts.filter(impactAfterYear(1945)).forEach( i => {
    const year = new Date(i.year).getFullYear();
    impactCounts[year] = (impactCounts[year] || 0) + 1;
  })
  return impactCounts;
}

/**
 * Geef terug of er meteorietinslagen zijn gebeurd na 2012 (retourneer `true` of `false`).
 * Gebruik een eerder gemaakte curried functie. Gebruik een ingebouwde Array functie
 * die je nog niet eerder hebt gebruikt.
 *
 * @returns {boolean}
 */
function oefening16() {
  return (impacts.filter(impactAfterYear(2012)).length > 0)
}

/**
 * Geef terug of alle meteorietinslagen een geolocatie hebben (retourneer `true` of `false`).
 * Gebruik een eerder gemaakte curried functie. Gebruik een ingebouwde Array functie
 * die je nog niet eerder hebt gebruikt.
 *
 * @returns {boolean}
 */
function oefening17() {
  return impacts.every(hasGeolocation)
}

/**
 * Geef terug of er een meteorietinslag is met de meegegeven id (retourneer `true` of `false`).
 * Zorg ervoor dat je filter predicate herbruikbaar is. Gebruik `parseInt` om het id te parsen.
 *
 * @param {number} id - Het id van de meteorietinslag die je wil zoeken.
 *
 * @returns {boolean}
 */

function oefening18(id) {
  return undefined;
}

/**
 * Geef een array terug met alle ids (als numbers) van de meteorietinslagen, gesorteerd van
 * klein naar groot.
 *
 * @returns {number[]}
 */
function oefening19() {
  return [];
}

/**
 * Geef een array terug met de kleinste en grootste massa van de meteorietinslagen.
 * Gebruik `parseInt` om het id te parsen. Je mag sort() niet gebruiken!
 *
 * 💡 Let op: sommige massa's zijn niet gedefinieerd.
 * 
 * @returns {[number, number]}
 */
function oefening20() {
  return [];
}

//-------------------------------------------------------------------
//  🛑 NIETS WIJZIGEN 🛑
//
//  Onderstaande code exporteert alle functies zodat de testen deze
//  kunnen gebruiken.
//
//-------------------------------------------------------------------
module.exports = {
  oefening1,
  oefening2,
  oefening3,
  oefening4,
  oefening5,
  oefening6,
  oefening7,
  oefening8,
  oefening9,
  oefening10,
  oefening11,
  oefening12,
  oefening13,
  oefening14,
  oefening15,
  oefening16,
  oefening17,
  oefening18,
  oefening19,
  oefening20
};
