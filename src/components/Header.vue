<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
		<h1 class="logo">Logo</h1>
		<div class="menu">
			<RouterLink to="/search">Log</RouterLink>
			<RouterLink to="/">통계</RouterLink>
			<RouterLink to="/">Rank</RouterLink>
		</div>
	</header>
</template>

<style scoped>
</style>
