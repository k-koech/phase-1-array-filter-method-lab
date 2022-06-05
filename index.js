// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name)
{
    return  drivers.filter(temp=>temp.toLowerCase() === name.toLowerCase())
  
} 

function fuzzyMatch(drivers, letters)
{
    return  drivers.filter(fuzzy=>fuzzy.toLowerCase().startsWith(letters.toLowerCase()))
  
} 

function matchName(drivers, person)
{
    return  drivers.filter(newMatch=>newMatch.name.toLowerCase()===person.toLowerCase())

}