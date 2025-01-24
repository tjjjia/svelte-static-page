<script>
	import { Grid } from "svelte-virtual";
	import fuzzysort from "fuzzysort";

	import ResourceCard from "$lib/ResourceCard.svelte";

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	let items = data.rows;

	const kebabCase = string => string
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, '-')
		.toLowerCase();


	let searchTerm = $state("");
	let filteredList = $derived(
		searchTerm
			? fuzzysort.go(searchTerm, items, {
					keys: [
						"resourceTitle",
						obj => obj.resourceTags?.join(),
						"contributor",
						"summary",
					]
				}).map(result => result.obj)
			: items
		);
</script>

<h1>Virtual list</h1>

Filter: <input bind:value={searchTerm} />

{#if searchTerm.length > 0}
	 Found {filteredList.length} items for "{searchTerm}".
{/if}

<h1>Resources</h1>
<p>{items.length} items available</p>
<main>
	{#each filteredList as data}
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<ResourceCard data={data} />
	{:else}
		<p>No items found.</p>
	{/each}
</main>

<style lang="scss">

	$tags: (
		"blender": "hsl(33, 100%, 47%)",
		"fusion-360": "hsl(155, 60%, 21%)",
		"rhino": "hsl(0, 100%, 50%)"
	);
	:root {
		--radius-text: .25rem;
		--radius-card: .25rem;

		--color-blender: hsl(33, 100%, 47%);
		--color-blender: hsl(33, 100%, 47%);

	}

	main {
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		padding: 1rem;
	}
</style>
