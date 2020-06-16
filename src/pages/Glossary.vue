<template>
	<Layout>

		<div class="row">
			<table class="table">
				<tr>
					<th colspan="2">Application</th>
				</tr>
				<tr title="Get 10 points for each of these actions!">
					<td>Created, Updated, Restarted, Debugged</td>
					<td>10</td>
				</tr>
				<tr title="Delete a store is the hardest thing to do. Delete one and earn 50 points!">
					<td>Deleted</td>
					<td>50</td>
				</tr>
			</table>
			<table class="table">
				<tr>
					<th colspan="2">Blugento</th>
				</tr>
				<tr title="Blugento is a live because you are using it. Give us feedback and earn 50 points!">
					<td>Feedback given</td>
					<td>50</td>
				</tr>
				<tr title="For any page visit you get on point on your card!">
					<td>Any page visit</td>
					<td>1</td>
				</tr>
			</table>

			<table class="table">
				<tr>
					<th colspan="2">Profile</th>
				</tr>
				<tr title="Let's see whats inside you profile!">
					<td>Visited</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Edit</td>
					<td>5</td>
				</tr>
				<tr title="Dark mode is one of the coolest things ever. Did you ever try it?">
					<td>Dark/light mode</td>
					<td>5</td>
				</tr>
			</table>

		</div>
	</Layout>
</template>
<page-query>
query {
  allUsers(sortBy: "scores", order: DESC, limit: 1) {
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
		title: "glossary"
	}
};
</script>
