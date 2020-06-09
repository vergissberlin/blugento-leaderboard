<template>
	<div class="card">
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
		</div>

		<div class="card-body">
			<g-image
				src="~/assets/img/blugento-logo.svg"
				width="144"
				class="row"
			/>
			<dl class="leaderboard row">
				<template v-for="user in $page.allUsers.edges">
					<dt>
						<div
							class="progress"
							:title="`${procent(user.node.scores)}% of ${totalScores} scores.`"
						>
							<div
								class="progress-bar"
								:style="`width: ${procent(user.node.scores)}%`"
							></div>
						</div>
					</dt>
					<dd :title="`Level ${user.node.level}`">
						<div class="leaderboard-name">{{ user.node.name }}</div>
						<div class="leaderboard-value">{{ user.node.scores }}</div>
					</dd>
				</template>
			</dl>

			<p class="note">Data is updated on a daily base</p>
		</div>

	</div>
</template>

<page-query>
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
</page-query>
<script>
export default {
	metaInfo: {
		title: "overview"
	},
	computed: {
		totalScores() {
			let total = 0;
			this.$page.allUsers.edges.forEach(element => {
				total += parseInt(element.node.scores);
			});
			return total;
		},
		leader() {
			return this.$page.allUsers.edges[0];
		}
	},
	methods: {
		procent: function(scores) {
			return Math.round((100 / this.totalScores) * scores);
		}
	}
};
</script>
