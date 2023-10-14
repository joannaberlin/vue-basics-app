<template>
	<section>
		<h2>My Workouts</h2>
		<ul>
			<workout-detail></workout-detail>
			<workout-detail></workout-detail>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			workouts: [
				{
					id: 'full-body',
					duration: '45 min',
					type: 'strength training',
					equipment: 'kettlebells',
				},
				{
					id: 'glutes and legs',
					duration: '45 min',
					type: 'strength training',
					equipment: 'rubber resistance bands',
				},
			],
		};
	},
};
</script>
