<template>
    <div class="box box-primary color-palette-box">
        <div class="box-header with-border">
            <router-link to="/user/create" class="btn btn-primary">
                <i class="fa fa-plus"></i> Nuevo Usuario
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                user: {
                    name: false,
                },
            }
        },
        mounted() {
            console.log('Component ready for users.')
        }
    }
</script>
