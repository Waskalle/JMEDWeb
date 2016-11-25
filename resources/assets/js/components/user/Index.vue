<template>
    <div class="box-body">
        <pre>{{users}}</pre>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                users: [],
                errors: [],
            }
        },
        created(){
            this.$http.get(`${Jmed.api}/users`).then((result) => {
                this.users = result.data
            }, (error) => {
                console.error(error);
            })
    	},
        methods: {
            // onSubmit: function () {
            //     console.log(this.user);
            //     this.$Progress.start()
            //     this.$http.post(`${Jmed.api}/users`,{user: this.user}).then((response) => {
            //         this.swalSuccess(response.data.msg)
            //     }, (response) => {
            //         this.$Progress.fail()
            //         this.errors.push(response.data)
            //     })
            // },
        },
    }
</script>
