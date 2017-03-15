<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css">
</head>
<body>
    <div id="app" class="container" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <example></example>

        <form action="/projects" method="POST">
            <div class="control">
                <label for="name" class="label">Name</label>
                <input type="text" id="name" name="name" class="input" v-model="form.name">
                <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>
            <div class="control">
                <label for="description" class="label">Description</label>
                <input type="text" id="description" name="description" class="input" v-model="form.description">
                <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>
            <div class="control">
                {{--<button class="button is-primary" :disabled="form.errors.any()">Create</button>--}}
                <button class="button is-primary" :class="{ 'is-loading': form.isSubmitting }" :disabled="form.errors.any()">Create</button>
            </div>
        </form>
    </div>

    <script src="/js/app.js"></script>
</body>
</html>
