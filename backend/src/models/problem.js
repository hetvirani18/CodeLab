const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const problemSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    difficulty:{
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true,
    },
    tags: [{
        type: String,
        enum: ['array', 'string', 'linkedlist', 'graph', 'dp']
    }],
    visibleTestCases:[
        {
            input: {
                type: String,
                required: true,
            },
            output:{
                type: String,
                required: true,
            },
            explanation: {
                type: String,
                required: true,
            }
        }
    ],
    hiddenTestCases: [
        {
            input: {
                type: String,
                required: true,
            },
            output:{
                type: String,
                required: true,
            }
        }
    ],
    startCode: [
        {
            language: {
                type: String,
                enum: ['c++', 'java', 'javascript'],
                required: true,
            },
            initialCode: {
                type: String,
                required: true,
            }
        }
    ],
    referenceSolution: [
        {
            language: {
                type: String,
                enum: ['c++', 'java', 'javascript'],
                required: true,
            },
            completeCode: {
                type: String,
                required: true,
            }
        }
    ],
    totalSubmissions: {
        type: Number,
        default: 0,
    },
    acceptedSubmissions: {
        type: Number,
        default: 0,
    },
    problemCreator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true 
    }
}, {timestamps: true})

const Problem = mongoose.model('problem', problemSchema);

module.exports = Problem;