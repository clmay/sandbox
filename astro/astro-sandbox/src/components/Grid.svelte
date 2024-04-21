<script>
	import Card from "@components/Card.svelte";

	// Simulated data array
	let cards = Array.from({ length: 25 }, (_, i) => ({
		title: `Post ${i + 1}`,
		text: "Lorem ipsum dolor sit amet.",
	}));
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5"
>
	{#each cards as card}
		<Card title={card.title} text={card.text} />
	{/each}
</div>
