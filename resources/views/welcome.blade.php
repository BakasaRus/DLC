<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
		<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
		<link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
		<title>Laravel</title>
	</head>
	<body>
		<div id="app" v-cloak>
			<v-app id="inspire" v-if="this.auth.isLoggedIn()">
				<v-navigation-drawer clipped fixed v-model="drawer" app>
					<v-list dense>
						<v-list-tile @click="" to="/subjects">
							<v-list-tile-action>
								<v-icon>dashboard</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>Предметы</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
						<v-list-tile @click="" to="/tests">
							<v-list-tile-action>
								<v-icon>settings</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>Тесты</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
						<v-list-tile @click="logout">
							<v-list-tile-action>
								<v-icon>exit_to_app</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>Выйти</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
				</v-navigation-drawer>
				<v-toolbar app fixed clipped-left>
					<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
					<v-toolbar-title>Центр дистанционного обучения</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn flat>@{{ user.first_name }} @{{ user.last_name }}</v-btn>
					</v-toolbar-items>
				</v-toolbar>
				<v-content>
					<v-container fluid fill-height>
						<v-layout justify-center align-center>
								<!--<loading-view v-cloak></loading-view>-->
								<router-view v-cloak></router-view>
						</v-layout>
					</v-container>
				</v-content>
			</v-app>
			<v-app id="inspire" dark v-else>
				<login-view></login-view>
			</v-app>
		</div>
		<script src="{{ mix('/js/manifest.js') }}"></script>
		<script src="{{ mix('/js/vendor.js') }}"></script>
		<script src="{{ mix('/js/app.js') }}"></script>
	</body>
</html>
