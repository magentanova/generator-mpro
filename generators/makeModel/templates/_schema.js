const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const <%= modelLower %>Schema = new Schema({

})

module.exports = {
   <%= modelName %>: createModel(' <%= modelName %>', <%= modelLower %>Schema),
}
