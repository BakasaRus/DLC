<template>
<v-layout row wrap justify-center align-center>
	<v-flex xs4 v-if="Object.keys(subject).length">
		<v-card color="deep-purple" class="white--text">
			<v-card-title primary-title>
				<div class="headline">Куратор предмета: {{ subject.author.last_name }} {{ subject.author.first_name }} {{ subject.author.middle_name }}</div>
			</v-card-title>
			<v-card-text>
				<div class="body-2">ID: {{ subject.author.id }}</div>
				<div class="body-2">Логин: {{ subject.author.login }}</div>
			</v-card-text>
			<v-card-actions>
				<v-btn flat dark hint="Пока что это не работает :)">Связаться</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			subject: {}
		}),

		created() {
			window.axios.get('/api/subjects/' + this.$route.params.id)
				.then(response => {
					this.subject = response.data.data;
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
</script>