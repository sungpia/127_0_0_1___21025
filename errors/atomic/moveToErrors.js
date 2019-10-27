let moveToErrors = {
    resolve: function (executionResult, agent) {
        moveToErrors.errors[executionResult](agent);
    },

    errors: { // todo(sungwonc): deal errors here.
        undefined: function () {
        },
        OK: function (agent) {
            agent.atomic = 'idle';
        }, // good, unlock
        ERR_NOT_OWNER: function () {
            //remove agent from memory;
        },
        ERR_NO_PATH: {
            // reassign target
        }, // no_path: gives penalty.
        ERR_BUSY: {
            //wait until
        ERR_NOT_FOUND: {}, // n/a for now
        ERR_INVALID_TARGET: {}, // err_invalid_target = -7
        ERR_TIRED: {}, // destroy, penalty to weight.creep.bodypart
        ERR_NO_BODYPART: {} // destroy, penalty to weight.creep.bodypart
    }
};

module.exports = moveToErrors;