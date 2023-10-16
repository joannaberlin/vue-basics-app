<template>
	<li>
		<h2>{{ trainingType }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Body parts: </strong>{{ id }}</li>
			<li><strong>Duration: </strong>{{ duration }}</li>
			<li><strong>Equipment used: </strong>{{ equipment }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	// props: ['id', 'duration', 'trainingType', 'equipment'],
	props: {
		id: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: true,
		},
		trainingType: {
			type: String,
			required: true,
		},
		equipment: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
};
</script>
