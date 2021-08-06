<script>
	export let stretch = false;
	export let round = false;

	let style = Object.entries($$props)
		.map(([key, value]) => {
			if (
				value !== null &&
				key.indexOf("$$") !== 0 &&
				!["stretch"].includes(key)
			) {
				return `${key}:${value};`;
			}
		})
		.join("");

	$: style += stretch ? "flex-grow:1;" : "";
	$: style += round ? "border-radius:100%;" : "";
</script>

<div class="skeleton-box" {style}>
	<slot />
</div>

<style>
	.skeleton-box {
		border-radius: 5px;
		background: #f3f3f3;
	}
</style>
