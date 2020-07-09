<template>
	<div>
		<h1 class="display-1">404</h1>
		<p class="display-5">Page not found</p>
		<i
			class="rain"
			v-for="index in 144"
			:key="index"
		></i>
		<a
			href="/"
			title="go back home"
		>
			<g-image
				src="~/assets/img/lost.png"
				width="256"
				class="shake"
				style="z-index: 10"
				alt="Lost in space with rain"
			/>
		</a>
		<br />
		<audio
			autoplay
			preload="yes"
			controls
			tabindex="1"
			title="Let it rain!"
		>
			<source
				src="/assets/snd/rain.mp3"
				type="audio/mpeg"
			/>
		</audio>
		<br>
		<g-image
			src="~/assets/img/whale.png"
			width="312"
			class="whale"
			style="z-index: 0"
			alt="Lost in space with rain"
		/>
	</div>
</template>

<script>
export default {
	metaInfo: {
		title: "Page not found"
	}
};
</script>
