<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="/css/app.css">
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
                    <v-list-tile @click="" to="/">
                      <v-list-tile-action>
                        <v-icon>dashboard</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Dashboard</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon>settings</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Settings</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="logout">
                      <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Logout</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-navigation-drawer>
                <v-toolbar app fixed clipped-left>
                  <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                  <v-toolbar-title>Application</v-toolbar-title>
                </v-toolbar>
                <v-content>
                  <v-container fluid fill-height>
                    <v-layout justify-center align-center>
                        <router-view></router-view>
                    </v-layout>
                  </v-container>
                </v-content>
            </v-app>
            <v-app id="inspire" v-else>
                <login-view></login-view>
            </v-app>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
