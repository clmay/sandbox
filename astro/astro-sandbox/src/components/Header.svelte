<script>
	import UserMenu from "@components/UserMenu.svelte";

	export let sitename;
	export let username;
</script>

<header class="bg-white shadow-md py-4 px-8 flex justify-between items-center">
	<img src="logo.png" alt="Logo" class="h-24" />
	<h1 class=" text-4xl font-bold justify-center">{sitename}</h1>
	<UserMenu {username} />
</header>
