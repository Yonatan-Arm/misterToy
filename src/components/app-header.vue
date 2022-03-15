<template>
    <header class="app-header">
        <div class="logo">MisterToy</div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/toy">Toy</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </header>
</template>

<script>
export default {
name:'app-header'
}
</script>

<style>

</style>