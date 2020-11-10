let helpMsg = 
`
*Welcome to our bot*
🎶🎇🎉🎊🎈

Here are some things this bot can do

(DICE)
*/dice* - _Sends a dice_ 🎲

(JOKES)
*/jokeoftheday* - _Get joke of the day_
*/cnj* - _Get a random Chuck Norris Joke_
*/joke* - _Get any random joke_
*/joke* - _Get any random joke_

(FUN)
*/riddle* - _Get a random riddle_
*/story* - _Get a story_
*/advice* - _Get an advice_

(FACTS)
*/f (number)* - _Get a fact on any number_
*/ask (any)* - _Get any answer_

(IMAGE)
*/dogbreeds* - _Get a list of all dog breeds_
*/dog (breed)* - _Get a random image of dog breed_
*/cat* - _Get a random image of cat_
*/cat (name)* - _Get your name caption on cat picture_

(DICTIONARY)
*/dict* - _Get list of all your words._
*/dict make* - _Setup a database._
*/dict add <word>* - _Add a word to your database dictionary._
*/dict get <word>* - _Get more info about specific word present in database._
*/dict valid* - _Get meaningful words._
*/dict invalid* - _Get not meaningful words._
*/dict delete <word>* - _Delete a specific word from database dictionary._
*/dict delete* - _Delete whole database._


*Use Inline Mode*
*@cutioBot s (any)  optional(int results)* - _Search for any song_
*@cutioBot p (any) optional(int results)* - _Search for any Image_
*@cutioBot w (any)* - _Search for anything on wikipedia_
`;
  
dogbreeds = [
    "affenpinscher",
    "african",
    "airedale",
    "akita",
    "appenzeller",
    "basenji",
    "beagle",
    "bluetick",
    "borzoi",
    "bouvier",
    "boxer",
    "brabancon",
    "briard",
    "buhund",
    "bulldog",
    "bullterrier",
    "cairn",
    "cattledog",
    "chihuahua",
    "chow",
    "clumber",
    "cockapoo",
    "collie",
    "coonhound",
    "corgi",
    "cotondetulear",
    "dachshund",
    "dalmatian",
    "dane",
    "deerhound",
    "dhole",
    "dingo",
    "doberman",
    "elkhound",
    "entlebucher",
    "eskimo",
    "frise",
    "germanshepherd",
    "greyhound",
    "groenendael",
    "hound",
    "husky",
    "keeshond",
    "kelpie",
    "komondor",
    "kuvasz",
    "labrador",
    "leonberg",
    "lhasa",
    "malamute",
    "malinois",
    "maltese",
    "mastiff",
    "mexicanhairless",
    "mix",
    "mountain",
    "newfoundland",
    "otterhound",
    "papillon",
    "pekinese",
    "pembroke",
    "pinscher",
    "pointer",
    "pomeranian",
    "poodle",
    "pug",
    "puggle",
    "pyrenees",
    "redbone",
    "retriever",
    "ridgeback",
    "rottweiler",
    "saluki",
    "samoyed",
    "schipperke",
    "schnauzer",
    "setter",
    "sheepdog",
    "shiba",
    "shihtzu",
    "spaniel",
    "springer",
    "stbernard",
    "terrier",
    "vizsla",
    "waterdog",
    "weimaraner",
    "whippet",
    "wolfhound"
  ];


module.exports = {
    helpMsg,
    dogbreeds,
}