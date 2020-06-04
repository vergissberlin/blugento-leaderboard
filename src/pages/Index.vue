<template>
	<Layout>
		<div>
			<g-image src="~/assets/img/trophy.svg" width="144" />
			<div v-for="edge in $page.allUsers.edges" :key="edge.node.id">
				<h1 v-html="edge.node.firstName" />
			</div>
		</div>
	</Layout>
</template>

<page-query>
query {
  allUsers {
    edges {
      node {
          id
          firstName          
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
	methods: {
		gravatar: (email) => {
			var hash = CryptoJS.MD5(email)
			return `https://www.gravatar.com/avatar/${hash.toString()}?s=200&d=robohash&r=x`
		},
		procent: function(scores) {
			return Math.round((100 / this.totalScores) * scores)
		},
		level: (scores) => {
			switch (true) {
				case scores > 10 && scores < 12:
					return 1
					break
				case scores >= 12 && scores < 144:
					return 2
					break
				case scores >= 144 && scores < 512:
					return 3
					break
				case scores >= 512 && scores < 1024:
					return 4
					break
				case scores >= 1024 && scores < 2048:
					return 5
					break
				case scores >= 2048 && scores < 4096:
					return 6
					break
				case scores >= 4096:
					return 7
					break
				default:
					return 0
			}
		}
	}
}
</script>
