<template>
    <div class="box box-primary color-palette-box">
        <div class="box-header with-border">
            <md-button class="md-raised md-primary">
                <router-link to="/user/create">
                    <i class="fa fa-plus"></i> Nuevo Usuario
                </router-link>
            </md-button>
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
