const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    problemId: {
        type: Schema.Types.ObjectId,
        ref: 'problem',
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: ['c++', 'java', 'javascript'],
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'wrong', 'error', 'tle', 'mle'],
        default: 'pending',
    },
    runtime: {
        type: Number, //milliseconds
        default: 0,
    },
    memory: {
        type: Number, //kb
        default: 0,
    },
    errorMessage: {
        type: String,
        default: '',
    },
    failDetails: {
        input: { type: String, default: "" },
        expectedOutput: { type: String, default: "" },
        userOutput: { type: String, default: "" },
        caseNumber: { type: Number }
    },
    testCasesPassed: {
        type: Number,
        default: 0,
    },
    testCasesTotal: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

submissionSchema.index({userId:1, problemId:1});

const Submission = mongoose.model('submission', submissionSchema);

module.exports = Submission;