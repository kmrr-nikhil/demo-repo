const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

    formId: {
        type: Schema.Types.ObjectId
    }

});

const FormModel = mongoose.model("Form", FormType);


module.exports = {
    FormModel: FormModel
};