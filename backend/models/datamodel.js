const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    end_year: {
        type: Number
    },
    intensity: {
        type: Number
    },
    sector:{
        type:String
    },
    topic: {
        type:String
    },
    insight: {
        type:String
    },
    url: {
        type:String
    },
    region: {
        type:String
    },
    start_year: {
        type:mongoose.Schema.Types.Mixed
    },
    impact: {
        type:mongoose.Schema.Types.Mixed
    },
    added: {
        type:String
    },
    published: {
        type:String
    },
    country: {
        type:String
    },
    relevance: {
        type:Number
    },
    pestle: {
        type:String
    },
    source: {
        type:String
    },
    title: {
        type:String
    },
    likelihood: {
        type:Number
    }
})

const dataModel = mongoose.model('dataModel', dataSchema);

module.exports = dataModel;