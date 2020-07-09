<template>
	<div>
		<h1>404</h1>
		<p>Page not found</p>
		<i
			class="rain"
			v-for="index in 144"
			:key="index"
		></i>
        <g-image src="~/assets/img/lost.png" width="256" />
	</div>
</template>

<style lang="scss">
	h1 {
		font-size: 12rem;
		font-weight: 800;
        margin-top: 2rem;
		margin-bottom: 0;
	}
	p {
		margin-top: 0;
		font-size: 3rem;
	}
	h1,
	p {
		text-shadow: #22223243 10px 10px 10px;
	}

	html {
		height: 100%;
	}

	body {
		box-shadow: inset 0 0 500px #111111;
		height: 100%;
		overflow: hidden;
		position: relative;
	}

	.rain {
		background: white;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0) 0%,
			#ffffff 100%
		);
		height: 50px;
		position: absolute;
		width: 1px;
	}

	$rain: 150;

	@for $i from 1 through $rain {
		$top: (random(50) + 50) * 1%;
		$left: random(100) * 1%;
		$opacity: (random(30) + 30) * 0.01;
		$delay: random(20) - 1s;

		.rain:nth-of-type(#{$i}) {
			animation-name: rain-#{$i};
			animation-delay: $delay;
			animation-duration: random(6) + 4s;
			animation-iteration-count: infinite;
			left: $left;
			opacity: $opacity;
			top: -$top;
		}

		@keyframes rain-#{$i} {
			0% {
				left: $left;
				opacity: $opacity;
				top: -$top;
			}
			100% {
				opacity: 0;
				top: $top + 40%;
			}
		}
	}
</style>
<script>
export default {
	metaInfo: {
		title: "Page not found"
	}
};
</script>
