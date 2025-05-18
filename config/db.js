const moongoose = require("moongoose");

const Schema = moongoose.Schema;
const ObjectId = Schema.ObjectId;

const FormType = new Schema({
    name: { 
        type: String
    },

    email: {
        type: String
    },

    mobile: {
        type: Number
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    formId : ObjectId

});

const FormModel = moongoose.Model("Form", FormType);


module.exports = {
    FormModel: FormModel
};