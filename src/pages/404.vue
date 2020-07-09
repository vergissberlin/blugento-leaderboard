<template>
	<div>
		<h1 class="display-1">404</h1>
		<p class="display-5">Page not found</p>
		<i class="rain" v-for="index in 144" :key="index"></i>
		<a href="/" title="go back home">
			<g-image src="~/assets/img/lost.png" width="256" class="shake" alt="Lost in space with rain" />
		</a>
		<br />
		<audio autoplay preload="none">
			<source src="/assets/snd/rain.mp3" type="audio/mpeg" />
		</audio>
	</div>
</template>

<script>
export default {
	metaInfo: {
		title: 'Page not found'
	}
}
</script>
