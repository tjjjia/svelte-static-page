<script>
	import { base } from '$app/paths';
	let { data } = $props();

	let blocks = data.contents;
	console.log(blocks)
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>Go to a <a href="page">page</a>.</p>

{#each blocks as block}
	{#if block.class === "Image"}

		<figure>
			<img src="{block.image.thumb.url}" alt="">
			<figcaption>{block.title ?? block.generated_title}</figcaption>
		</figure>
	{/if}

{/each}