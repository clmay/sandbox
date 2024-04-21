<script>
	export let username;
</script>

<div class="dropdown">
	<button
		class="dropbtn flex items-center bg-transparent border-none cursor-pointer hover:bg-gray-100 p-2 rounded"
	>
		<a href="/{username}/">
			<i class="fa fa-user-circle text-xl"></i>
			<span class="ml-2">{username}</span>
		</a>
	</button>
	<div class="dropdown-content">
		<a href="{username}/settings/">Settings</a>
		<a href="/logout/">Log out</a>
	</div>
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropbtn:hover {
		background-color: #f1f1f1;
		color: #555;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
