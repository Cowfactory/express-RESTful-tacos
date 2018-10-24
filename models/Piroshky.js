const piroshkyModel = {
    data: [
        {
            name: "Tasty Piroshky 1",
            filling: "Tasty Piroshky Filling 1",
            size: "3oz"
        },
        {
            name: "Tasty Piroshky 2",
            filling: "Tasty Piroshky Filling 2",
            size: "6oz"
        }
    ],
    addPiroshky: function(name, filling, size) {
        let piroshky = { name, filling, size };
        this.data.push(piroshky);
    },
    getAllPiroshkys: function() {
        return this.data;
    },
    getPiroshky: function(id) {
        return this.data[id];
    },
    updatePiroshky: function(id, name, filling, size) {
        this.data[id] = { name, filling, size };
    },
    deletePiroshky: function(id){ 
        this.data.splice(id, 1);
    }
};

module.exports = piroshkyModel;