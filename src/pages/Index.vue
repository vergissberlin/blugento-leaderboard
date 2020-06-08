<template>
	<Layout>
		<div id="leaderboard">
			<div class="card">
				<section class="card-info card-section">
					<div class="avatar row" :style="'background-image: url(' + leader.node.gravatar + ')'"></div>

					<section class="user row">
						<h1 class="user-header">
							{{ leader.node.firstName }}
							<h2 class="sub header">{{ leader.node.scores }} logins</h2>
						</h1>
					</section>

					<section class="statistics">
						<article class="statistic">
							<h4 class="statistic-title">
								Rank
							</h4>
							<h3 class="statistic-value">
								1
							</h3>
						</article>

						<article class="statistic">
							<h4 class="statistic-title">
								Score
							</h4>
							<h3 class="statistic-value">
								{{ leader.node.scores }}
							</h3>
						</article>
					</section>

					<div class="dial">
						<h2 class="dial-title">
							{{ level(leader.node.scores) }}
						</h2>
						<h3 class="dial-value">
							Level
						</h3>
					</div>
				</section>

				<section class="card-details card-section">
					<nav class="menu">
						<article class="menu-item menu-item-active">
							<g-image src="~/assets/img/blugento-logo.jpg" width="144" alt="blugento logo" quality="92" />
						</article>
					</nav>

					<dl class="leaderboard">
						<template v-for="user in $page.allUsers.edges">
							<dt>
								<article class="progress" :title="`${procent(user.node.scores)}% of ${totalScores} scores.`">
									<section class="progress-bar" :style="`width: ${procent(user.node.scores)}%`"></section>
								</article>
							</dt>
							<dd>
								<div class="leaderboard-name">{{ user.node.firstName }} {{ user.node.lastName }}</div>
								<div class="leaderboard-value" :title="`Level ${level(user.node.scores)}`">{{ user.node.scores }}</div>
							</dd>
						</template>
					</dl>
				</section>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query {
  allUsers(sortBy: "scores", order: DESC, limit: 5) {
    edges {
      node {
        firstName
		lastName
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
		title: 'overview'
	},
	computed: {
		totalScores() {
			let total = 0
			this.$page.allUsers.edges.forEach((element) => {
				total += parseInt(element.node.scores)
			})
			return total
		},
		leader() {
			return this.$page.allUsers.edges[0]
		}
	},
	methods: {
		moo: function(name) {
			return `The name ${name}`
		},
		procent: function(scores) {
			return Math.round((100 / this.totalScores) * scores)
		},
		level: (scores) => {
			switch (true) {
				case scores > 10 && scores < 12:
					return 1
				case scores >= 12 && scores < 144:
					return 2
				case scores >= 144 && scores < 512:
					return 3
				case scores >= 512 && scores < 1024:
					return 4
				case scores >= 1024 && scores < 2048:
					return 5
				case scores >= 2048 && scores < 4096:
					return 6
				case scores >= 4096:
					return 7
				default:
					return 0
			}
		}
	}
}
</script>
