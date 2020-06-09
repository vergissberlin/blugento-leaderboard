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
				<div class="dial-title">{{ level(leader.node.scores) }}</div>
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
					<dd>
						<div class="leaderboard-name">{{ user.node.name }}</div>
						<div
							class="leaderboard-value"
							:title="`Level ${level(user.node.scores)}`"
						>{{ user.node.scores }}</div>
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
		},
		level: scores => {
			switch (true) {
				case scores > 10 && scores < 12:
					return 1;
				case scores >= 12 && scores < 144:
					return 2;
				case scores >= 144 && scores < 512:
					return 3;
				case scores >= 512 && scores < 1024:
					return 4;
				case scores >= 1024 && scores < 2048:
					return 5;
				case scores >= 2048 && scores < 4096:
					return 6;
				case scores >= 4096:
					return 7;
				default:
					return 0;
			}
		}
	}
};
</script>
