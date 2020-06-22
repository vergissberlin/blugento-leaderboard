<template>
	<span>
		<svg
			:class="fullscreen"
			@click="toggleFullscreen()"
			xmlns="http://www.w3.org/2000/svg"
			v-if="!mobile"
			width="20"
			height="20"
			viewBox="0 0 24 24"
		>
			<path d="M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9zm11 4h-16v12h16v-12z" />
		</svg>
	</span>
</template>

<script>
export default {
	name: "Fullscreen",
	props: {
		element: {
			type: String,
			required: true,
			default: "html"
		},
		mobile: {
			type: String,
			default: false
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			if (process.isClient) {
				this.mobile = "ontouchstart" in window;
			}
		});
	},
	methods: {
		toggleFullscreen() {
			if (this.fullscreen) {
				this.fullscreen = false;
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
			} else {
				this.fullscreen = true;
				let elem = document.getElementsByTagName(this.element)[0];
				if (elem.requestFullscreen) {
					elem.requestFullscreen();
				} else if (elem.mozRequestFullScreen) {
					/* Firefox */
					elem.mozRequestFullScreen();
				} else if (elem.webkitRequestFullscreen) {
					/* Chrome, Safari and Opera */
					elem.webkitRequestFullscreen();
				} else if (elem.msRequestFullscreen) {
					/* IE/Edge */
					elem.msRequestFullscreen();
				}
			}
		}
	}
};
</script>

