<template>
<v-layout row wrap justify-center v-if="info">
	<v-flex xs4>
		<v-card>
			<v-card-title primary-title>
				<div class="headline">Статистика по вопросам</div>
			</v-card-title>
			<v-card-text>
				<div class="body-2">Количество предметов: {{ info.subjects }}</div>
				<div class="body-2">Количество тестов: {{ info.tests }}</div>
				<div class="body-2">Количество вопросов: {{ info.questions }}</div>
			</v-card-text>
		</v-card>
	</v-flex>
</v-layout>
</template>

<script>
	export default {
		data: () => ({
			info: {}
		}),

		created() {
			window.axios.get('/api/dashboard')
						.then(response => this.info = response.data)
						.catch(error => console.log(error));
		}
	}
</script>