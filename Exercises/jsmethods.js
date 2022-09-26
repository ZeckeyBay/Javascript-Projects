const characters = [
    {
        name : 'Luke Skywalker',
        height : 172,
        mass : 77,
        eye_color : 'blue',
        gender : 'male',
    },
    {
        name : "Darth Vader",
        height : 202,
        mass : 136,
        eye_color : "yellow",
        gender : "male",
    },
    {
        name : "Leia Organa",
        height : 150,
        mass : 49,
        eye_color : "brown",
        gender : "female",
    },
    {
        name : "Anakin Skywalker",
        height : 188,
        mass : 84,
        eye_color : "blue",
        gender : "male",
    },
    {
        name : "Master Yoda",
        height : 100,
        mass : 30,
        eye_color : "green",
        gender : "male",
    },
];

//filter
const greater100chars = characters.filter((character) => {
    return character.mass > 100;
})
console.log(greater100chars);

const femalechars = characters.filter((character) => {
    return character.gender === "female";
})
console.log(femalechars);

//map
const names = characters.map(character => {
    return character.name;
})
console.log(names);

const records = characters.map(character => ({
    name:character.name,
    height:character.height,
}));
console.log(records);

const firstNames = characters.map(character => character.name.split(" ")[0]);
console.log(firstNames);

















