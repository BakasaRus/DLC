<template>
<v-layout row wrap justify-center align-center fill-height v-if="Object.keys(user).length">
	<v-flex xs12>
		<v-data-table
			:headers="headers"
			:items="users"
			hide-actions
			class="elevation-1"
			:loading="loading"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td>{{ props.item.login }}</td>
				<td>{{ props.item.last_name }}</td>
				<td>{{ props.item.first_name }}</td>
				<td>{{ props.item.middle_name }}</td>
				<td>{{ props.item.registration_date.date | readable }}</td>
			</template>
		</v-data-table>
	</v-flex>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			
		})
	}
</script>