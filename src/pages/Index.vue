<template>
	<Layout>
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
		<p class="note">Data is updated on a daily base.</p>
	</Layout>
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
		title: "board"
	},
	computed: {
		totalScores() {
			let total = 0;
			this.$page.allUsers.edges.forEach(element => {
				total += parseInt(element.node.scores);
			});
			return total;
		}
	},
	methods: {
		procent: function(scores) {
			return Math.round((100 / this.totalScores) * scores);
		}
	}
};
</script>
