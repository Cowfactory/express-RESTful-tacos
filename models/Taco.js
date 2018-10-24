const tacoModel = {
    data: [
        {
            name: "Captain Beefheart",
            protein: "Carne Asada",
            garnish: "cheddar, lettuce, and pico"
        },
        {
            name: "Piggy Azalea",
            protein: "Carnitas",
            garnish: "chile peppers and pineapple"
        }
    ],
    addTaco: function(name, protein, garnish) {
        let newTaco = {
            name, //es6 feature - leave out the
            protein, //same as protein: protein
            garnish
        };
        this.data.push(newTaco);
    },
    getAllTacos: function() {
        return this.data;
    },
    getTaco: function(id) {
        return (id < this.data.length && id >= 0) ? 
            this.data[id] : null;
    },
    updateTaco: function(id, name, protein, garnish) {
        if(id < this.data.length && id >= 0) {
            let newTaco = { name, protein, garnish };
            this.data[id] = newTaco;
        }
    },
    deleteTaco: function(id) {
        return (id < this.data.length && id >= 0) ?
            this.data.splice(id, 1) : null;
    }
};

module.exports = tacoModel;