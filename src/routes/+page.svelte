<script>
	// import { base } from '$app/paths';
	let { data } = $props();

	let blocks = data.blocks;
	// blocks = blocks.reverse();
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>Go to a <a href="page">page</a>.</p>

<main>
	<div class="wrapper">
		{#each blocks as block}
			<figure>
				<img src="images/{block.filename}" alt="">
				<figcaption>{block.title}<br>{@html block.description_html}</figcaption>
			</figure>
		{/each}
	</div>
</main>

<footer>
	&copy;2025 <a href="//tjia.work">tjia.work</a>
</footer>

<style>
	main {
		width: 100%;
		max-width: 100vw;
		margin: .5rem 0;

		overflow-x: scroll;
		scroll-snap-type: x mandatory;
	}
	.wrapper {
		display: flex;
		flex-direction: row;
		gap: .25rem;
	}
	figure {
		scroll-snap-align: start;
	}
	figure img {
		max-height: 12rem;
	}
	figure figcaption {
		color: var(--color-gray);
		font-size: .75rem;
	}


</style>