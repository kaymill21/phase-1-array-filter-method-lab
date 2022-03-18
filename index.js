//const drivers = ['Bobby', 'saMMy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log(('saMMy').toUpperCase())
console.log(('sammy').toUpperCase())

function findMatching(drivers,string) {

    let answer = drivers.filter(el => el.toLowerCase() === string.toLowerCase())
    //let drivers = string.toLowerCase();

    console.log('Bobby'.toLowerCase())
      return answer
}
   
function fuzzyMatch(drivers, string) {
    return drivers
      .map((driver) => driver.split())
      .filter((splitDriver) => splitDriver[0].indexOf(string) === string);
  }
//   function fuzzyMatch(drivers, string){
//     const fuzzyDrivers = drivers.filter(function(person){
//         return person.slice(0) == string.slice(0);
//     });
//     return fuzzyDrivers;