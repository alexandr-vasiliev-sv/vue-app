class Errors {
    /**
     *
     */
    constructor() {
        this.errors = {};
    }

    /**
     *
     * @param field
     * @returns {*}
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     *
     * @param field
     * @returns {boolean}
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     *
     * @returns {boolean}
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     *
     * @param errors
     */
    records(errors) {
        this.errors = errors;
    }

    /**
     *
     * @param field
     */
    clear(field) {
        if (field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }
}

export default Errors;