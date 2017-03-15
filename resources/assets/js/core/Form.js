import Errors from './Errors';

class Form
{
    /**
     *
     * @param data
     */
    constructor(data) {
        this.isSubmitting = false;
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    /**
     *
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
        this.errors.clear();
    }

    /**
     *
     * @returns {{}}
     */
    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }
        return data;
    }

    post(url) {
        return this.submit('post', url);
    }

    /**
     *
     * @param requestType
     * @param url
     */
    submit(requestType, url) {
        this.isSubmitting = true;
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });
        });

    }

    /**
     *
     * @param data
     */
    onSuccess(data) {
        this.isSubmitting = false;
        this.reset();
        alert(data.message);
    }

    /**
     *
     * @param errors
     */
    onFail(errors) {
        this.isSubmitting = false;
        this.errors.records(errors)
    }
}

export default Form;