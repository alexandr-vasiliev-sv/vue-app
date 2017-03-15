import Form from './core/Form';
import Vue from 'vue';
import axios from 'axios';

import Example from './components/Example';

window.axios = axios;
window.Form = Form;

new Vue({
    el: '#app',
    components: {
        Example
    },
    data: {
        form: new Form({
            name: '',
            description: '',
        })
    },
    methods: {
        onSubmit() {
            this.form.post('/projects')
                .then(response => {
                    console.log(response);
                })
                .catch(errors => {
                    console.log(errors);
                });
        }
    },
});