<template>
	<div>
		<div class="card">
			<Leader />
			<div class="card-body">
				<g-image src="~/assets/img/blugento-logo.svg" width="144" class="row" />
				<Menu />
				<slot />
			</div>
		</div>
		<footer>
			<nav class="menu"><a href="/imprint">imprint</a> | <a href="/privacy">privacy</a></nav>
		</footer>
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
import Menu from '~/components/Menu.vue'
import Leader from '~/components/Leader.vue'

export default {
	computed: {
		leader() {
			return this.$page.allUsers.edges[0]
		}
	},
	components: {
		Leader,
		Menu
	}
}
</script>
