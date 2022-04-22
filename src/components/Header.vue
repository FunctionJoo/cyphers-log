<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
		<h1 class="logo">
			<RouterLink to="/">CYPHERS<br>LOG</RouterLink>
		</h1>
		<div class="menu">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/search">Log</RouterLink>
			<RouterLink to="/">통계</RouterLink>
			<RouterLink to="/">Rank</RouterLink>
		</div>
	</header>
</template>

<style scoped>
header {
	position: fixed;
	z-index: 50;
	top: 0;
	left: 0;
}
.logo {
	position: absolute;
	top: 0;
	left: 0;
}
.logo a {
	display: flex;
	align-content: center;
	justify-content: center;
	place-items: center;
	text-align: center;
	width: 100px;
	height: 100px;
	background-color: var(--vt-c-black);
	color: #fff;
	font-size: 1.2rem;
	line-height: 110%;
	letter-spacing: -0.02em;
	font-weight: 700;
}
.menu {
	position: absolute;
	top: 100px;
	left: 0;
}
.menu a {
	display: block;
	padding: 10px;
	font-size: 1.2rem;
}
</style>
