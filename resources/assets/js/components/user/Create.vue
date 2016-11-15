<template>
    <div class="box-body">
        <form v-on:submit.prevent="onSubmit">
            <md-input-container>
                <label>Nombre</label>
                <md-input placeholder="Nombre" v-model="user.name"></md-input>
            </md-input-container>
            <md-input-container>
                <label>Apellidos</label>
                <md-input placeholder="Apellidos" v-model="user.lastname"></md-input>
            </md-input-container>
            <div class="row">
                <pre>
                    {{this.user}}
                </pre>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                user: {
                    name: '',
                    lastname: '',
                },
                errors: [],
            }
        },
        methods: {
            onSubmit: function () {
                console.log(this.user);
                // this.$Progress.start()
                // this.$http.post(`${Jmed.api}/users`,{user: this.user}).then((response) => {
                //     this.swalSuccess(response.data.msg)
                // }, (response) => {
                //     this.$Progress.fail()
                //     this.errors.push(response.data)
                // })
            },
        },
    }
</script>
