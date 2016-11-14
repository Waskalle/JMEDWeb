<template>
    <div class="box box-primary color-palette-box">
        <div class="box-header with-border">
        </div>
        <div class="box-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                user: {
                    name: '',
                },
            }
        },
        mounted() {
            console.log('Component ready for users.')
        }
    }
</script>
