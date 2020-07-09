<template>
	<div class="app">
		<div class="card">
			<Leader />
			<div
				class="card-body"
				id="card-body"
			>
				<g-image
					src="~/assets/img/blugento-logo.svg"
					width="144"
					class="row"
				/>
				<Menu />
				<slot />
			</div>
		</div>
		<footer class="footer">
			<nav class="menu"><a href="/imprint#card-body">imprint</a> | <a href="/privacy#card-body">privacy</a></nav>
		</footer>
		<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"url": "https://blugento-leaderboard.surge.sh",
			"logo": "https://blugento-leaderboard.surge.sh/assets/img/blugentoleaders-logo.png",
			"name": "blugento leaderboard",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Leipzig, Germany",
				"postalCode": "04229",
				"streetAddress": "Nonnenstraße 11c",
				"email": "info@blugento.com"
			}
		}
		</script>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Menu from "~/components/Menu.vue";
import Leader from "~/components/Leader.vue";

export default {
	computed: {
		leader() {
			return this.$page.allUsers.edges[0];
		}
	},
	components: {
		Leader,
		Menu
	}
};
</script>
