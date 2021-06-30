const human = {
    name: "cole",
    age: 1000,
    heigh: 9,
    complexion: "caramel",
    setName: function (name) {
        this.name = name;
    }
}

const keys = Object.keys(human);
console.log(keys);
Object.values(human).forEach(val => console.log(val));


// for (const [key, value] of  Object.entries(human)) {
//     console.log(value);
// }
