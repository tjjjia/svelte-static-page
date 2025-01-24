<script>
	import { onMount } from "svelte";

	let { data, row } = $props();

	const kebabCase = string => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- <figure onclick={()=>{window.open(data.resourceURL)}} title="Open link in new tab"> -->
<figure onclick={()=>{}} title="Open link in new tab">
	<div class="thumbnail">
		<a href="{data.resourceURL}" target="_blank">
			<img src="" alt="">
		</a>
	</div>
	<figcaption>
		<div class="tags">
			{#each data.resourceTags as tag}
				<span class="tag" data-tag="{kebabCase(tag)}">{tag}</span>
			{/each}
		</div>
		<h3><a href="{data.resourceURL}" target="_blank" title="Open link in new tab">{data.resourceTitle}</a></h3>
		<p class="contributor">{data.contributor}</p>
		<p class="summary">{data.summary}</p>
	</figcaption>
</figure>

<style lang="scss">
	$tags: (
		"blender": "hsl(33, 100%, 47%)",
		"fusion-360": "hsl(155, 60%, 21%)",
		"rhino": "hsl(0, 100%, 50%)"
	);
	:root {
		--radius-text: .25rem;
		--radius-card: .5rem;

		--color-blender: hsl(33, 100%, 47%);
		--color-blender: hsl(33, 100%, 47%);

	}
	figure {
		display: flex;
		flex-direction: column;

		max-width: 24rem;
		width: 24rem;
		background-color: hsl(0,0%,95%);
		border-radius: var(--radius-card);
		flex: 1 1 auto;
		cursor: pointer;
	}
	.thumbnail {
		background-image: url("/checkerboard.png");
		opacity: 25%;
		height: 120px;
	}
	@media only screen and (max-width: 900px) {
		main {
			flex-direction: column;
			flex-wrap: nowrap;
		}
		figure {
			// flex-grow: 1;
			flex-shrink: 0;
			width: 100%;
			max-width: unset;
			overflow: hidden;
		}
	}
	figcaption {
		display: flex;
		flex-direction: column;
		gap: .25rem;
		padding: .5rem;
	}
	.tags {
		display: flex;
		flex-direction: row;
		gap: .25rem;
	}
	.tag {
		color: #fff;
		background-color: #ccc;
		padding: 0 .25rem;
		line-height: 1.25rem;
		border-radius: var(--radius-text);
		
		font-size: .75rem;
		text-transform: uppercase;
	}
	[data-tag="blender"]{
		background-color: var(--color-blender);
	}
	@each $tag, $color in $tags {
		[data-tag=#{$tag}] { background-color: #{$color}; }
	}
	.contributor {
		color: hsl(0, 0%, 55%);
	}
	h3 {
		font-weight: 600;
		font-size: 1.333rem;
		line-height: 1.333;
	}
	p {
		font-size: 1rem;
	}
	a:link,a:active,a:hover {
		color: #00f;
	}
	a:visited {
		color: hsl(270,40%,45%);
	}
</style>