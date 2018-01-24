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
			<v-app id="inspire">
				<main-view v-if="this.auth.isLoggedIn()"></main-view>
				<login-view v-else></login-view>
			</v-app>
		</div>
		<script src="{{ mix('/js/manifest.js') }}"></script>
		<script src="{{ mix('/js/vendor.js') }}"></script>
		<script src="{{ mix('/js/app.js') }}"></script>
	</body>
</html>
