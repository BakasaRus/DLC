<template>
<v-layout row wrap justify-center align-center v-if="Object.keys(test).length">
	<v-flex xs4>
		<v-card>
			<v-card-title primary-title>
				<div class="headline">{{ test.name }}</div>
			</v-card-title>
			<v-card-text>
				<div class="body-2">ID: {{ test.id }}</div>
				<div class="body-2">Количество вопросов: {{ test.questions_count }}</div>
			</v-card-text>
			<v-card-actions>
				<v-btn flat hint="Пока что это не работает :)">Связаться</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
	<v-flex xs4>
		<v-card>
			<v-card-title primary-title>
				<div class="headline">Автор теста: {{ test.author.last_name }} {{ test.author.first_name }} {{ test.author.middle_name }}</div>
			</v-card-title>
			<v-card-text>
				<div class="body-2">ID: {{ test.author.id }}</div>
				<div class="body-2">Логин: {{ test.author.login }}</div>
			</v-card-text>
			<v-card-actions>
				<v-btn flat hint="Пока что это не работает :)">Связаться</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
	<v-flex xs4>
		<v-card>
			<v-card-title primary-title>
				<div class="headline">Предмет: {{ test.subject.name }}</div>
			</v-card-title>
			<v-card-text>
				<div class="body-2">ID: {{ test.subject.id }}</div>
			</v-card-text>
			<v-card-actions>
				<v-btn flat hint="Пока что это не работает :)">Посмотреть все тесты</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			test: {}
		}),

		created() {
			window.axios.get('/api/tests/' + this.$route.params.id)
				.then(response => {
					this.test = response.data.data;
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
</script>