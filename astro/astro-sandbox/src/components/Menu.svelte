<script>
	let filterOptions = [
		{ label: "My Posts", selected: true },
		{ label: "All Posts", selected: false },
		{ label: "Distance", selected: false },
		{ label: "Posted", selected: false },
		{ label: "Search", selected: false },
	];

	function handleFilterSelect(option) {
		option.selected = !option.selected;
		console.log("Selected:", option.label);
	}
</script>

<nav class="bg-gray-100 p-4 flex justify-around items-center">
	{#each filterOptions as option}
		<button
			class="cursor-pointer focus:outline-none transition-colors duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300"
			on:click={() => handleFilterSelect(option)}
			aria-pressed={option.selected}
			aria-label={option.label}
			type="button"
		>
			<span
				class="font-semibold"
				class:selected={option.selected
					? "text-blue-500"
					: "text-gray-500"}>{option.label}</span
			>
		</button>
	{/each}
</nav>
