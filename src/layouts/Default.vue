<template>
	<div class="layout">
		<header class="header">
			<g-link to="/">
				<g-image :alt="$static.metadata.siteName" src="~/assets/img/blugento-logo.png" width="144" />
			</g-link>
		</header>
		<slot />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
