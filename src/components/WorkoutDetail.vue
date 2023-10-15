<template>
	<li>
		<h2>{{ workout.type }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Body parts: </strong>{{ workout.id }}</li>
			<li><strong>Duration: </strong>{{ workout.duration }}</li>
			<li><strong>Equipment used: </strong>{{ workout.equipment }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: false,
			workout: {
				id: 'full-body',
				duration: '45 min',
				type: 'strength training',
				equipment: 'kettlebells',
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
};
</script>
