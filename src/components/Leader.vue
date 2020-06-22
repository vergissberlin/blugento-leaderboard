<template>
	<div class="card-info">
		<div
			class="avatar row"
			:style="'background-image: url(' + leader.node.gravatar + ')'"
		></div>

		<div class="user row">
			<h1>{{ leader.node.name }}</h1>
			<h2>{{ leader.node.scores }} scores</h2>
		</div>

		<div class="statistics">
			<div>
				<div class="statistics-title">rank</div>
				<div class="statistics-value">1</div>
			</div>
			<div>
				<div class="statistics-title">scores</div>
				<div class="statistics-value">{{ leader.node.scores }}</div>
			</div>
		</div>

		<div class="dial">
			<div class="dial-title">{{ leader.node.level }}</div>
			<div class="dial-value">Level</div>
		</div>

		<Fullscreen class="fullscreen" />
	</div>
</template>
<static-query>
query {
  allUsers(sortBy: "scores", order: DESC, limit: 5) {
    edges {
      node {
        name
        gravatar
        scores
		level
      }
    }
  }
}
</static-query>
<script>
import Fullscreen from "~/components/Fullscreen.vue";

export default {
	name: "Leader",
	computed: {
		leader() {
			return this.$static.allUsers.edges[0];
		}
	},
	components: {
		Fullscreen
	}
};
</script>
