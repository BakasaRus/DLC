webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			info: {}
		};
	},

	created: function created() {
		var _this = this;

		window.axios.get('/api/dashboard').then(function (response) {
			return _this.info = response.data;
		}).catch(function (error) {
			return console.log(error);
		});
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Layouts/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			drawer: null
		};
	},
	created: function created() {
		var _this = this;

		window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$root.auth.tokens.access;
		window.axios.get('/api/user').then(function (response) {
			return _this.$root.user = response.data;
		}).catch(function (error) {
			return console.log(error);
		});
	},

	methods: {
		logout: function logout() {
			this.$root.auth.logout().then(function (response) {
				return console.log(response);
			}).catch(function (error) {
				console.log('Looks like we have troubles logging you out');console.log(error);
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Layouts/Loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Layouts/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			email: 'bakasaru@list.ru',
			password: 'Sparta78'
		};
	},
	created: function created() {
		//
	},


	methods: {
		onSubmit: function onSubmit() {
			var _this = this;

			this.$root.auth.postData.username = this.email;
			this.$root.auth.postData.password = this.password;
			this.$root.auth.login().then(function (message) {
				return _this.$root.$router.push('/');
			}).catch(function (message) {
				return console.log(message);
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subjects/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			subjects: [],
			users: [],
			form: {},
			editing: false,
			loading: false,
			rules: {
				required: function required(value) {
					return !!value || 'Это поле обязательно для заполнения';
				}
			},
			headers: [{ text: 'ID', value: 'id', align: 'left' }, { text: 'Предмет', value: 'name', align: 'left' }, { text: 'Куратор курса', value: 'author_id', align: 'left' }, { text: 'Дата создания', value: 'created_at.date', align: 'left' }, { text: 'Действия', value: 'name', align: 'left', sortable: false }]
		};
	},

	mounted: function mounted() {
		this.form = new window.Form({
			id: 0,
			name: '',
			author_id: this.$root.user.id
		});
		this.form.ref = this.$refs.form;
		this.loadSubjects();
	},


	computed: {
		formCaption: function formCaption() {
			return this.editing ? 'Изменение предмета' : 'Создание предмета';
		},
		formActionBtn: function formActionBtn() {
			return this.editing ? 'Сохранить' : 'Добавить';
		}
	},

	methods: {
		loadSubjects: function loadSubjects() {
			var _this = this;

			this.loading = true;
			window.axios.get('/api/subjects').then(function (response) {
				_this.subjects = response.data.data;
				_this.loading = false;
			}).catch(function (error) {
				_this.subjects = [{ name: error.message }];
				_this.loading = false;
			});
		},
		loadUsers: function loadUsers() {
			var _this2 = this;

			window.axios.get('/api/users', { params: { role: [1, 2] } }).then(function (response) {
				_this2.users = response.data.data;
				_this2.loading = false;
			}).catch(function (error) {
				_this2.users = [{ login: error.message }];
				_this2.loading = false;
			});
		},
		formAction: function formAction() {
			if (this.editing) this.updateSubject();else this.createSubject();
		},
		toggleEditingSubject: function toggleEditingSubject(subject) {
			this.loadUsers();
			this.form.setData(subject);
			this.editing = true;
			this.form.show();
		},
		toggleCreatingSubject: function toggleCreatingSubject() {
			this.loadUsers();
			this.form.reset();
			this.editing = false;
			this.form.show();
		},
		updateSubject: function updateSubject() {
			var _this3 = this;

			window.axios.patch('/api/subjects/' + this.form.id, this.form.data()).then(function (response) {
				console.log(response.data);
				_this3.loadSubjects();
				_this3.form.hide();
			}).catch(function (error) {
				console.log(error.data);
			});
		},
		deleteSubject: function deleteSubject(subject) {
			var _this4 = this;

			window.axios.delete('/api/subjects/' + subject.id).then(function (response) {
				console.log(response.data);
				_this4.loadSubjects();
			}).catch(function (error) {
				console.log(error.data);
			});
		},
		createSubject: function createSubject() {
			var _this5 = this;

			window.axios.post('/api/subjects', this.form.data()).then(function (response) {
				_this5.form.hide();
				_this5.form.reset();
				_this5.loadSubjects();
			}).catch(function (error) {
				console.log(error.data);
			});
		}
	},

	filters: {
		readable: function readable(date) {
			return moment(date).format('LLL');
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subjects/Show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			subject: {}
		};
	},

	created: function created() {
		var _this = this;

		window.axios.get('/api/subjects/' + this.$route.params.id).then(function (response) {
			_this.subject = response.data.data;
		}).catch(function (error) {
			console.log(error);
		});
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Available.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			tests: [],
			loading: false
		};
	},

	created: function created() {
		this.loadTests();
	},


	methods: {
		loadTests: function loadTests() {
			var _this = this;

			this.loading = true;
			window.axios.get('/api/user/tests').then(function (response) {
				_this.tests = response.data.data;
				_this.loading = false;
			}).catch(function (error) {
				console.log(error);
				_this.loading = false;
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			tests: [],
			subjects: [],
			users: [],
			form: new window.Form({
				name: '',
				subject_id: 0,
				questions_count: '',
				id: 0,
				author_id: 0
			}),
			loading: false,
			editing: false,
			rules: {
				required: function required(value) {
					return !!value || 'Это поле обязательно для заполнения';
				}
			},
			headers: [{ text: 'ID', value: 'id', align: 'left' }, { text: 'Название теста', value: 'name', align: 'left' }, { text: 'Предмет', value: 'subject.name', align: 'left' }, { text: 'Дата создания', value: 'created_at', align: 'left' }, { text: 'Действия', value: 'name', align: 'left', sortable: false }]
		};
	},

	mounted: function mounted() {
		this.form.ref = this.$refs.form;
		this.loadTests();
	},


	computed: {
		formCaption: function formCaption() {
			return this.editing ? 'Изменение теста' : 'Создание теста';
		},
		formActionBtn: function formActionBtn() {
			return this.editing ? 'Сохранить' : 'Добавить';
		}
	},

	methods: {
		loadTests: function loadTests() {
			var _this = this;

			this.loading = true;
			window.axios.get('/api/tests').then(function (response) {
				_this.tests = response.data.data;
				_this.loading = false;
			}).catch(function (error) {
				console.log(error);
				_this.loading = false;
			});
		},
		loadUsers: function loadUsers() {
			var _this2 = this;

			window.axios.get('/api/users', { params: { role: [1, 2] } }).then(function (response) {
				_this2.users = response.data.data;
				_this2.loading = false;
			}).catch(function (error) {
				_this2.users = [{ login: error.message }];
				_this2.loading = false;
			});
		},
		createTest: function createTest() {
			var _this3 = this;

			if (this.form.validate()) {
				window.axios.post('/api/tests', this.form.data()).then(function (response) {
					_this3.form.hide();
					_this3.form.reset();
					_this3.loadTests();
				}).catch(function (error) {
					console.log(error.data);
				});
			}
		},
		updateTest: function updateTest() {
			var _this4 = this;

			if (this.form.validate()) {
				window.axios.patch('/api/tests/' + this.form.id, this.form.data()).then(function (response) {
					_this4.loadTests();
					_this4.form.hide();
					_this4.form.reset();
				}).catch(function (error) {
					console.log(error.data);
				});
			}
		},
		formAction: function formAction() {
			if (this.editing) this.updateTest();else this.createTest();
		},
		toggleCreatingTest: function toggleCreatingTest() {
			this.loadSubjects();
			this.loadUsers();
			this.editing = false;
			this.form.reset();
			this.form.show();
		},
		toggleEditingTest: function toggleEditingTest(test) {
			this.loadSubjects();
			this.loadUsers();
			this.editing = true;
			this.form.setData(test);
			this.form.show();
		},
		loadSubjects: function loadSubjects() {
			var _this5 = this;

			window.axios.get('/api/subjects').then(function (response) {
				return _this5.subjects = response.data.data;
			}).catch(function (error) {
				return _this5.subjects = [{ name: error.message }];
			});
		}
	},

	filters: {
		readable: function readable(date) {
			return moment(date).format('LLL');
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Pass.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			questions: [],
			answers: {}
		};
	},
	created: function created() {
		this.loadQuestions();
	},


	methods: {
		loadQuestions: function loadQuestions() {
			var _this = this;

			window.axios.get('/api/user/tests/' + this.$route.params.id).then(function (response) {
				_this.questions = response.data.data;
				for (var i in _this.questions) {
					_this.answers[_this.questions[i].id] = {
						'answer': '',
						'id': _this.questions[i].id
					};
				}
			}).catch(function (error) {
				return console.log(error);
			});
		},
		sendAnswers: function sendAnswers() {
			console.log(this.answers);
			window.axios.post('/api/user/tests/' + this.$route.params.id, { 'answers': this.answers }).then(function (response) {
				console.log(response.data);
			}).catch(function (error) {
				return console.log(error);
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			test: {},
			users: [],
			questionForm: new window.Form({
				body: '',
				answer: '',
				points: 1,
				test_id: 0,
				id: 0
			}),
			userForm: new window.Form({
				users_id: [],
				test_id: 0
			}),
			questionHeaders: [{ text: 'ID', value: 'id', align: 'left' }, { text: 'Вопрос', value: 'body', align: 'left' }, { text: 'Ответ', value: 'answer', align: 'left' }, { text: 'Баллы', value: 'points', align: 'left' }, { text: 'Действия', value: 'name', align: 'left', sortable: false }],
			usersHeaders: [{ text: 'ID', value: 'id', align: 'left' }, { text: 'ФИО', value: 'full_name', align: 'left' }, { text: 'Статус', value: 'test.status', align: 'left' }, { text: 'Количество баллов', value: 'test.points', align: 'left' }, { text: 'Максимальный балл', value: 'test.max_points', align: 'left' }, { text: 'Действия', value: 'name', align: 'left', sortable: false }],
			statuses: [{ id: 0, name: 'Доступен' }, { id: 1, name: 'В процессе' }, { id: 2, name: 'Пройден' }, { id: null, name: 'Скрыт' }],
			loading: false,
			editingQuesion: false,
			editingUsers: false,
			rules: {
				required: function required(value) {
					return !!value || 'Это поле обязательно для заполнения';
				}
			}
		};
	},

	mounted: function mounted() {
		// Это должно работать, но почему-то не
		this.questionForm.ref = this.$refs.questionForm;
		this.userForm.ref = this.$refs.userForm;
	},
	created: function created() {
		this.loadTest();
	},


	computed: {
		questionFormCaption: function questionFormCaption() {
			return this.editingQuesion ? 'Изменение вопроса' : 'Создание вопроса';
		},
		questionFormActionBtn: function questionFormActionBtn() {
			return this.editingQuesion ? 'Сохранить' : 'Добавить';
		}
	},

	methods: {
		isAuthor: function isAuthor(subject) {
			return subject.author_id == this.$root.user.id;
		},
		loadTest: function loadTest() {
			var _this = this;

			window.axios.get('/api/tests/' + this.$route.params.id).then(function (response) {
				_this.test = response.data.data;
				_this.questionForm.test_id = _this.test.id;
				_this.userForm.test_id = _this.test.id;
			}).catch(function (error) {
				console.log(error);
			});
		},
		loadUsers: function loadUsers() {
			var _this2 = this;

			window.axios.get('/api/users').then(function (response) {
				_this2.users = response.data.data;
				_this2.loading = false;
			}).catch(function (error) {
				console.log("Can't load users' info, sorry :(");
				_this2.loading = false;
			});
		},
		questionFormAction: function questionFormAction() {
			if (this.editingQuesion) this.updateQuestion();else this.createQuestion();
		},
		toggleCreatingQuestion: function toggleCreatingQuestion() {
			this.questionForm.ref = this.$refs.questionForm;
			this.editingQuesion = false;
			this.questionForm.reset();
			this.questionForm.show();
		},
		toggleEditingQuestion: function toggleEditingQuestion(test) {
			this.questionForm.ref = this.$refs.questionForm;
			this.editingQuesion = true;
			this.questionForm.setData(test);
			this.questionForm.show();
		},
		toggleCreatingUser: function toggleCreatingUser() {
			this.userForm.ref = this.$refs.userForm;
			this.loadUsers();
			this.editingUsers = false;
			this.userForm.reset();
			this.userForm.show();
		},
		toggleEditingUser: function toggleEditingUser(users_id) {
			this.userForm.ref = this.$refs.userForm;
			this.loadUsers();
			this.editingUsers = true;
			this.userForm.setData({ users_id: users_id, test_id: this.test.id });
			this.userForm.show();
		},
		addUsers: function addUsers() {
			var _this3 = this;

			if (this.userForm.validate()) {
				window.axios.post('/api/tests/' + this.test.id + '/users', this.userForm.data()).then(function (response) {
					_this3.loadTest();
				}).catch(function (error) {});
			}
		},
		deleteUser: function deleteUser(user) {
			var _this4 = this;

			window.axios.delete('/api/tests/' + this.test.id + '/users/' + user.id).then(function (response) {
				_this4.loadTest();
			}).catch(function (error) {});
		},
		createQuestion: function createQuestion() {
			var _this5 = this;

			if (this.questionForm.validate()) {
				window.axios.post('/api/questions', this.questionForm.data()).then(function (response) {
					_this5.questionForm.hide();
					_this5.questionForm.reset();
					_this5.loadTest();
				}).catch(function (error) {
					console.log(error.data);
				});
			} else {
				console.error("Can't send form :(");
			}
		},
		updateQuestion: function updateQuestion() {
			var _this6 = this;

			if (this.questionForm.validate()) {
				window.axios.patch('/api/questions/' + this.questionForm.id, this.questionForm.data()).then(function (response) {
					_this6.loadTest();
					_this6.questionForm.hide();
					_this6.questionForm.reset();
				}).catch(function (error) {
					console.log(error.data);
				});
			}
		},
		deleteQuestion: function deleteQuestion(question) {
			var _this7 = this;

			window.axios.delete('/api/questions/' + question.id).then(function (response) {
				_this7.loadTest();
			}).catch(function (error) {
				console.log(error.data);
			});
		}
	},

	filters: {
		readableStatus: function readableStatus(status) {
			switch (status) {
				case 0:
					return 'Доступен';
				case 1:
					return 'В процессе';
				case 2:
					return 'Пройден';
				case null:
					return 'Скрыт';
				default:
					return 'Неизвестный (' + status + ')';
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Users/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			users: [],
			loading: false,
			headers: [{ text: 'ID', value: 'id', align: 'left' }, { text: 'Логин', value: 'login', align: 'left' }, { text: 'Фамилия', value: 'last_name', align: 'left' }, { text: 'Имя', value: 'first_name', align: 'left' }, { text: 'Отчество', value: 'middle_name', align: 'left' }, { text: 'Роль', value: 'role', align: 'left' }, { text: 'Дата регистрации', value: 'registration_date.date', align: 'left' }]
		};
	},

	mounted: function mounted() {
		this.loadUsers();
	},


	methods: {
		loadUsers: function loadUsers() {
			var _this = this;

			this.loading = true;
			window.axios.get('/api/users').then(function (response) {
				_this.users = response.data.data;
				_this.loading = false;
			}).catch(function (error) {
				console.log(error);
				_this.loading = false;
			});
		}
	},

	filters: {
		readable: function readable(date) {
			return moment(date).format('LLL');
		},
		stringRole: function stringRole(role) {
			switch (role) {
				case 2:
					return 'Администратор';
				case 1:
					return 'Преподаватель';
				default:
					return 'Пользователь';
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f7fa310\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Layouts/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { clipped: "", fixed: "", app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-tile",
                { attrs: { to: "/" }, on: { click: function($event) {} } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("dashboard")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Главная страница")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { attrs: { to: "/tests" }, on: { click: function($event) {} } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("library_books")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Доступные тесты")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { attrs: { to: "/stats" }, on: { click: function($event) {} } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("assessment")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Статистика")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              this.$root.user.role >= 1
                ? _c(
                    "v-list-group",
                    { attrs: { "prepend-icon": "supervisor_account" } },
                    [
                      _c(
                        "v-list-tile",
                        { attrs: { slot: "activator" }, slot: "activator" },
                        [
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v("Администрирование")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        {
                          attrs: { to: "/admin/subjects" },
                          on: { click: function($event) {} }
                        },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("subject")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v("Список предметов")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        {
                          attrs: { to: "/admin/tests" },
                          on: { click: function($event) {} }
                        },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("library_books")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [_vm._v("Список тестов")])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        {
                          attrs: { to: "/admin/users" },
                          on: { click: function($event) {} }
                        },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("group")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v("Список пользователей")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { on: { click: _vm.logout } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("exit_to_app")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Выйти")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        { attrs: { app: "", fixed: "", "clipped-left": "" } },
        [
          _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("Центр дистанционного обучения")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-toolbar-items",
            { staticClass: "hidden-sm-and-down" },
            [
              _c("v-btn", { attrs: { flat: "" } }, [
                _vm._v(
                  _vm._s(this.$root.user.first_name) +
                    " " +
                    _vm._s(this.$root.user.last_name)
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { fluid: "", "grid-list-xl": "" } },
            [_c("router-view", {})],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0f7fa310", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-16319e06\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subjects/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "justify-center": "", "align-center": "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.subjects,
              "hide-actions": "",
              "no-data-text": "Пока что тут ничего нет.",
              loading: _vm.loading,
              expand: ""
            },
            scopedSlots: _vm._u([
              {
                key: "items",
                fn: function(props) {
                  return [
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(props.item.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.author.full_name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("readable")(props.item.created_at.date))
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-tooltip",
                            { attrs: { bottom: "" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mx-0",
                                  attrs: { slot: "activator", icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.toggleEditingSubject(props.item)
                                    }
                                  },
                                  slot: "activator"
                                },
                                [
                                  _c("v-icon", { attrs: { color: "green" } }, [
                                    _vm._v("edit")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("span", [_vm._v("Редактировать")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            { attrs: { bottom: "" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mx-0",
                                  attrs: { slot: "activator", icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.deleteSubject(props.item)
                                    }
                                  },
                                  slot: "activator"
                                },
                                [
                                  _c("v-icon", { attrs: { color: "red" } }, [
                                    _vm._v("delete")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("span", [_vm._v("Удалить")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            { attrs: { bottom: "" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mx-0",
                                  attrs: {
                                    slot: "activator",
                                    icon: "",
                                    disabled: true
                                  },
                                  slot: "activator"
                                },
                                [
                                  _c("v-icon", { attrs: { color: "blue" } }, [
                                    _vm._v("expand_more")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "Подробнее (оставлено на будущее, вдруг пригодится)"
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "500px" },
              model: {
                value: _vm.form.isVisible,
                callback: function($$v) {
                  _vm.$set(_vm.form, "isVisible", $$v)
                },
                expression: "form.isVisible"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      model: {
                        value: _vm.form.isValid,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "isValid", $$v)
                        },
                        expression: "form.isValid"
                      }
                    },
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v(_vm._s(_vm.formCaption))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "body-2" }, [
                          _vm._v("Предметы помогают структурировать тесты")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Название предмета",
                              hint:
                                "Название должно быть узнаваемым и запоминающимся",
                              rules: [_vm.rules.required],
                              counter: 50
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "Куратор предмета",
                              required: "",
                              hint:
                                "Куратор нужен исключительно для красоты. Может быть, в будущем куратор будет иметь административные полномочия в курируемых предметах",
                              rules: [_vm.rules.required],
                              items: _vm.users,
                              "item-value": "id",
                              "item-text": "full_name"
                            },
                            model: {
                              value: _vm.form.author_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "author_id", $$v)
                              },
                              expression: "form.author_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                flat: "",
                                color: "primary",
                                disabled: !_vm.form.isValid
                              },
                              nativeOn: {
                                click: function($event) {
                                  _vm.formAction($event)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.formActionBtn))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            fixed: "",
            dark: "",
            fab: "",
            bottom: "",
            right: "",
            color: "indigo"
          },
          on: { click: _vm.toggleCreatingSubject }
        },
        [_c("v-icon", [_vm._v("add")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16319e06", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-361a3c51\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.info
    ? _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-center": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs4: "" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _c("div", { staticClass: "headline" }, [
                      _vm._v("Статистика по вопросам")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v(
                        "Количество предметов: " + _vm._s(_vm.info.subjects)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v("Количество тестов: " + _vm._s(_vm.info.tests))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v(
                        "Количество вопросов: " + _vm._s(_vm.info.questions)
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-361a3c51", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36a5cbbc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subjects/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "justify-center": "", "align-center": "" } },
    [
      Object.keys(_vm.subject).length
        ? _c(
            "v-flex",
            { attrs: { xs4: "" } },
            [
              _c(
                "v-card",
                { staticClass: "white--text", attrs: { color: "deep-purple" } },
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _c("div", { staticClass: "headline" }, [
                      _vm._v(
                        "Куратор предмета: " +
                          _vm._s(_vm.subject.author.last_name) +
                          " " +
                          _vm._s(_vm.subject.author.first_name) +
                          " " +
                          _vm._s(_vm.subject.author.middle_name)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v("ID: " + _vm._s(_vm.subject.author.id))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v("Логин: " + _vm._s(_vm.subject.author.login))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            flat: "",
                            dark: "",
                            hint: "Пока что это не работает :)"
                          }
                        },
                        [_vm._v("Связаться")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-36a5cbbc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b998df2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Pass.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "justify-center": "" } },
    [
      _vm._l(_vm.questions, function(question) {
        return _c(
          "v-flex",
          { key: question.id, attrs: { md6: "", xs12: "" } },
          [
            _c(
              "v-card",
              [
                _c("v-card-title", [_vm._v(_vm._s(question.points))]),
                _vm._v(" "),
                _c("v-card-text", [_vm._v(_vm._s(question.body))]),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c("v-text-field", {
                      attrs: {
                        name: "question_" + question.id,
                        "single-line": ""
                      },
                      model: {
                        value: _vm.answers[question.id].answer,
                        callback: function($$v) {
                          _vm.$set(_vm.answers[question.id], "answer", $$v)
                        },
                        expression: "answers[question.id].answer"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-btn",
            {
              attrs: {
                fixed: "",
                dark: "",
                fab: "",
                bottom: "",
                right: "",
                color: "green"
              },
              on: { click: this.sendAnswers }
            },
            [_c("v-icon", [_vm._v("done_all")])],
            1
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b998df2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4224a244\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return Object.keys(_vm.test).length
    ? _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-center": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs4: "", "offset-xs4": "" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _c("div", { staticClass: "headline" }, [
                      _vm._v(_vm._s(_vm.test.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v("ID: " + _vm._s(_vm.test.id))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v(
                        "Автор теста: " +
                          _vm._s(_vm.test.author.last_name) +
                          " " +
                          _vm._s(_vm.test.author.first_name) +
                          " " +
                          _vm._s(_vm.test.author.middle_name)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v(
                        "Количество вопросов: " +
                          _vm._s(_vm.test.questions_count)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body-2" }, [
                      _vm._v(
                        "Всего вопросов: " + _vm._s(_vm.test.questions.length)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-tooltip",
                        { attrs: { bottom: "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-0",
                              attrs: { slot: "activator", icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.toggleEditingUser([])
                                }
                              },
                              slot: "activator"
                            },
                            [
                              _c("v-icon", { attrs: { color: "green" } }, [
                                _vm._v("face")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v("Статус пользователей")])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { xs4: "" } }, [_c("v-card")], 1),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.questionHeaders,
                  items: _vm.test.questions,
                  "hide-actions": "",
                  loading: _vm.loading
                },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return [
                        _c("td", [_vm._v(_vm._s(props.item.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(props.item.body))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(props.item.answer))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(props.item.points))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-tooltip",
                              { attrs: { bottom: "" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: { slot: "activator", icon: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.toggleEditingQuestion(props.item)
                                      }
                                    },
                                    slot: "activator"
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "green" } },
                                      [_vm._v("edit")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Редактировать")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              { attrs: { bottom: "" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: { slot: "activator", icon: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.deleteQuestion(props.item)
                                      }
                                    },
                                    slot: "activator"
                                  },
                                  [
                                    _c("v-icon", { attrs: { color: "red" } }, [
                                      _vm._v("delete")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Удалить")])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.usersHeaders,
                  items: _vm.test.users,
                  "hide-actions": "",
                  loading: _vm.loading
                },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return [
                        _c("td", [_vm._v(_vm._s(props.item.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(props.item.full_name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("readableStatus")(
                                props.item.test_info.status
                              )
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(props.item.test_info.points))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(props.item.test_info.max_points))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-tooltip",
                              { attrs: { bottom: "" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: { slot: "activator", icon: "" },
                                    on: { click: function($event) {} },
                                    slot: "activator"
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "green" } },
                                      [_vm._v("edit")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Редактировать")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              { attrs: { bottom: "" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: { slot: "activator", icon: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.deleteUser(props.item)
                                      }
                                    },
                                    slot: "activator"
                                  },
                                  [
                                    _c("v-icon", { attrs: { color: "red" } }, [
                                      _vm._v("delete")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Удалить")])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "500px" },
              model: {
                value: _vm.questionForm.isVisible,
                callback: function($$v) {
                  _vm.$set(_vm.questionForm, "isVisible", $$v)
                },
                expression: "questionForm.isVisible"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-form",
                    {
                      ref: "questionForm",
                      model: {
                        value: _vm.questionForm.isValid,
                        callback: function($$v) {
                          _vm.$set(_vm.questionForm, "isValid", $$v)
                        },
                        expression: "questionForm.isValid"
                      }
                    },
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v(_vm._s(_vm.questionFormCaption))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Вопрос",
                              required: "",
                              "multi-line": "",
                              hint: "В будущем здесь будет поддержка Markdown",
                              rules: [_vm.rules.required]
                            },
                            model: {
                              value: _vm.questionForm.body,
                              callback: function($$v) {
                                _vm.$set(_vm.questionForm, "body", $$v)
                              },
                              expression: "questionForm.body"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Ответ",
                              required: "",
                              hint:
                                "В будущем здесь будет поддержка регулярных выражений",
                              rules: [_vm.rules.required]
                            },
                            model: {
                              value: _vm.questionForm.answer,
                              callback: function($$v) {
                                _vm.$set(_vm.questionForm, "answer", $$v)
                              },
                              expression: "questionForm.answer"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Баллы за вопрос",
                              required: "",
                              rules: [_vm.rules.required],
                              type: "number"
                            },
                            model: {
                              value: _vm.questionForm.points,
                              callback: function($$v) {
                                _vm.$set(_vm.questionForm, "points", $$v)
                              },
                              expression: "questionForm.points"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: {
                                click: function($event) {
                                  _vm.questionForm.hide()
                                }
                              }
                            },
                            [_vm._v("Закрыть")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: {
                                click: function($event) {
                                  _vm.questionForm.reset()
                                }
                              }
                            },
                            [_vm._v("Сбросить")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "blue darken-1",
                                dark: "",
                                disabled: !_vm.questionForm.isValid
                              },
                              on: { click: _vm.questionFormAction }
                            },
                            [_vm._v(_vm._s(_vm.questionFormActionBtn))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "800px" },
              model: {
                value: _vm.userForm.isVisible,
                callback: function($$v) {
                  _vm.$set(_vm.userForm, "isVisible", $$v)
                },
                expression: "userForm.isVisible"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-form",
                    {
                      ref: "userForm",
                      model: {
                        value: _vm.userForm.isValid,
                        callback: function($$v) {
                          _vm.$set(_vm.userForm, "isValid", $$v)
                        },
                        expression: "userForm.isValid"
                      }
                    },
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v("Добавить пользователей")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-select", {
                            attrs: {
                              label: "Пользователи",
                              autocomplete: "",
                              multiple: "",
                              required: "",
                              chips: "",
                              clearable: "",
                              "deletable-chips": "",
                              dense: "",
                              rules: [_vm.rules.required],
                              items: _vm.users,
                              "item-value": "id",
                              "item-text": "full_name"
                            },
                            model: {
                              value: _vm.userForm.users_id,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "users_id", $$v)
                              },
                              expression: "userForm.users_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: {
                                click: function($event) {
                                  _vm.userForm.hide()
                                }
                              }
                            },
                            [_vm._v("Закрыть")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: {
                                click: function($event) {
                                  _vm.userForm.reset()
                                }
                              }
                            },
                            [_vm._v("Сбросить")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "blue darken-1",
                                dark: "",
                                disabled: !_vm.userForm.isValid
                              },
                              on: { click: _vm.addUsers }
                            },
                            [_vm._v("Добавить")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                fixed: "",
                dark: "",
                fab: "",
                bottom: "",
                right: "",
                color: "indigo"
              },
              on: { click: _vm.toggleCreatingQuestion }
            },
            [_c("v-icon", [_vm._v("add")])],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4224a244", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42b933c1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "justify-center": "", "align-center": "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.tests,
              "hide-actions": "",
              loading: _vm.loading
            },
            scopedSlots: _vm._u([
              {
                key: "items",
                fn: function(props) {
                  return [
                    _c("td", [_vm._v(_vm._s(props.item.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.subject.name))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm._f("readable")(props.item.created_at.date))
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "v-tooltip",
                          { attrs: { bottom: "" } },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-0",
                                attrs: { slot: "activator", icon: "" },
                                on: {
                                  click: function($event) {
                                    _vm.toggleEditingTest(props.item)
                                  }
                                },
                                slot: "activator"
                              },
                              [
                                _c("v-icon", { attrs: { color: "green" } }, [
                                  _vm._v("edit")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Редактировать")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tooltip",
                          { attrs: { bottom: "" } },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-0",
                                attrs: { slot: "activator", icon: "" },
                                on: {
                                  click: function($event) {
                                    _vm.deleteSubject(props.item)
                                  }
                                },
                                slot: "activator"
                              },
                              [
                                _c("v-icon", { attrs: { color: "red" } }, [
                                  _vm._v("delete")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Удалить")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tooltip",
                          { attrs: { bottom: "" } },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-0",
                                attrs: {
                                  slot: "activator",
                                  icon: "",
                                  to: "/admin/tests/" + props.item.id
                                },
                                slot: "activator"
                              },
                              [
                                _c("v-icon", { attrs: { color: "blue" } }, [
                                  _vm._v("chevron_right")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Работа с вопросами")])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "500px" },
              model: {
                value: _vm.form.isVisible,
                callback: function($$v) {
                  _vm.$set(_vm.form, "isVisible", $$v)
                },
                expression: "form.isVisible"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      model: {
                        value: _vm.form.isValid,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "isValid", $$v)
                        },
                        expression: "form.isValid"
                      }
                    },
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v(_vm._s(_vm.formCaption))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "body-2" }, [
                          _vm._v(
                            "Непосредственно вопросы можно будет добавить потом или импортировать в формате CSV"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Название теста",
                              required: "",
                              hint:
                                "Название должно быть узнаваемым и запоминающимся",
                              rules: [_vm.rules.required],
                              counter: 50
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Количество вопросов",
                              required: "",
                              hint:
                                "Если вопросов будет меньше, чем здесь указано, то тест не будет отображаться в любом случае. Если вопросов будет больше, то они будут выбираться случайным образом",
                              rules: [_vm.rules.required],
                              type: "number"
                            },
                            model: {
                              value: _vm.form.questions_count,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "questions_count", $$v)
                              },
                              expression: "form.questions_count"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "Предмет, к которому относится тест",
                              required: "",
                              rules: [_vm.rules.required],
                              items: _vm.subjects,
                              "item-value": "id",
                              "item-text": "name"
                            },
                            model: {
                              value: _vm.form.subject_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "subject_id", $$v)
                              },
                              expression: "form.subject_id"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "Куратор предмета",
                              required: "",
                              hint:
                                "Куратор нужен исключительно для красоты. Может быть, в будущем куратор будет иметь административные полномочия в курируемых предметах",
                              rules: [_vm.rules.required],
                              items: _vm.users,
                              "item-value": "id",
                              "item-text": "full_name"
                            },
                            model: {
                              value: _vm.form.author_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "author_id", $$v)
                              },
                              expression: "form.author_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: {
                                click: function($event) {
                                  _vm.form.hide()
                                }
                              }
                            },
                            [_vm._v("Закрыть")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              on: {
                                click: function($event) {
                                  _vm.form.reset()
                                }
                              }
                            },
                            [_vm._v("Сбросить")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "blue darken-1",
                                flat: "",
                                disabled: !_vm.form.isValid
                              },
                              on: { click: _vm.formAction }
                            },
                            [_vm._v(_vm._s(_vm.formActionBtn))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            fixed: "",
            dark: "",
            fab: "",
            bottom: "",
            right: "",
            color: "indigo"
          },
          on: { click: _vm.toggleCreatingTest }
        },
        [_c("v-icon", [_vm._v("add")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42b933c1", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47b00230\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Users/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "justify-center": "", "align-center": "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.users,
              "hide-actions": "",
              loading: _vm.loading
            },
            scopedSlots: _vm._u([
              {
                key: "items",
                fn: function(props) {
                  return [
                    _c("td", [_vm._v(_vm._s(props.item.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.login))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.last_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.first_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(props.item.middle_name))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("stringRole")(props.item.role)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("readable")(props.item.registration_date.date)
                        )
                      )
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47b00230", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56ab5893\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Layouts/Loading.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-progress-circular", {
    attrs: { indeterminate: "", size: 70, width: 7, color: "purple" }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56ab5893", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-68032c00\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Layouts/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "align-center": "", "justify-center": "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", sm8: "", md4: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "elevation-12" },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { color: "primary", dark: "" } },
                        [_c("v-toolbar-title", [_vm._v("Вход в ЦДО")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "person",
                                  name: "login",
                                  label: "Логин",
                                  type: "text"
                                },
                                model: {
                                  value: _vm.email,
                                  callback: function($$v) {
                                    _vm.email = $$v
                                  },
                                  expression: "email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "lock",
                                  name: "password",
                                  label: "Пароль",
                                  id: "password",
                                  type: "password"
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: { click: _vm.onSubmit }
                            },
                            [_vm._v("Login")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68032c00", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fe4d8290\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Available.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "", "justify-center": "" } },
    _vm._l(_vm.tests, function(test) {
      return _c(
        "v-flex",
        { key: test.id, attrs: { md4: "", sm6: "", xs12: "" } },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("div", [
                  _c("div", { staticClass: "headline" }, [
                    _vm._v(_vm._s(test.name))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "subheading" }, [
                    _vm._v("(" + _vm._s(test.subject.name) + ")")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n\t\t\t\tКоличество вопросов: " +
                    _vm._s(test.questions_count)
                ),
                _c("br"),
                _vm._v("\n\t\t\t\tАвтор: " + _vm._s(test.author.full_name)),
                _c("br"),
                _vm._v(" "),
                test.test_info.max_points
                  ? _c("span", [
                      _vm._v(
                        "\n\t\t\t\t\tМаксимум баллов за выданный вариант: " +
                          _vm._s(test.test_info.max_points)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n\t\t\t\t\tНабрано баллов: " +
                          _vm._s(test.test_info.points) +
                          "\n\t\t\t\t"
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        slot: "activator",
                        block: "",
                        color: "primary",
                        dark: ""
                      },
                      on: {
                        to: function($event) {
                          "/tests/" + test.id
                        }
                      },
                      slot: "activator"
                    },
                    [
                      _c("span", [_vm._v("Пройти")]),
                      _vm._v(" "),
                      _c("v-icon", [_vm._v("keyboard_arrow_right")])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fe4d8290", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__("./resources/assets/js/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Layouts_Login__ = __webpack_require__("./resources/assets/js/views/Layouts/Login.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Layouts_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_Layouts_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Layouts_Loading__ = __webpack_require__("./resources/assets/js/views/Layouts/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Layouts_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Layouts_Loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Layouts_App__ = __webpack_require__("./resources/assets/js/views/Layouts/App.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Layouts_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Layouts_App__);
__webpack_require__("./resources/assets/js/bootstrap.js");





new Vue({
	el: '#app',
	router: __WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */],
	data: {
		auth: new window.Auth(),
		user: {}
	},
	components: { LoginView: __WEBPACK_IMPORTED_MODULE_1__views_Layouts_Login___default.a, LoadingView: __WEBPACK_IMPORTED_MODULE_2__views_Layouts_Loading___default.a, MainView: __WEBPACK_IMPORTED_MODULE_3__views_Layouts_App___default.a },
	created: function created() {
		var _this = this;

		window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.auth.tokens.access;

		window.axios.get('/api/user').then(function (response) {
			return _this.user = response.data;
		}).catch(function (error) {
			return console.log(error);
		});
	}
});

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify__ = __webpack_require__("./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify_dist_vuetify_min_css__ = __webpack_require__("./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_auth__ = __webpack_require__("./resources/assets/js/utilities/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_form__ = __webpack_require__("./resources/assets/js/utilities/form.js");

window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuetify___default.a);


window.axios = __WEBPACK_IMPORTED_MODULE_4_axios___default.a;


window.moment = __WEBPACK_IMPORTED_MODULE_5_moment___default.a;
window.moment.locale('ru');


window.Auth = __WEBPACK_IMPORTED_MODULE_6__utilities_auth__["a" /* default */];


window.Form = __WEBPACK_IMPORTED_MODULE_7__utilities_form__["a" /* default */];

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
	window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
	console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/***/ }),

/***/ "./resources/assets/js/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");


var routes = [{
	path: '/admin/subjects',
	component: __webpack_require__("./resources/assets/js/views/Subjects/Index.vue")
}, {
	path: '/admin/subjects/:id',
	component: __webpack_require__("./resources/assets/js/views/Subjects/Show.vue")
}, {
	path: '/admin/tests',
	component: __webpack_require__("./resources/assets/js/views/Tests/Index.vue")
}, {
	path: '/admin/tests/:id',
	component: __webpack_require__("./resources/assets/js/views/Tests/Show.vue")
}, {
	path: '/admin/users',
	component: __webpack_require__("./resources/assets/js/views/Users/Index.vue")
}, {
	path: '/',
	component: __webpack_require__("./resources/assets/js/views/Dashboard.vue")
}, {
	path: '/tests',
	component: __webpack_require__("./resources/assets/js/views/Tests/Available.vue")
}, {
	path: '/tests/:id',
	component: __webpack_require__("./resources/assets/js/views/Tests/Pass.vue")
}];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]({
	routes: routes,
	//mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'is-active'
}));

/***/ }),

/***/ "./resources/assets/js/utilities/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
	function Auth() {
		_classCallCheck(this, Auth);

		this.postData = {
			grant_type: 'password',
			client_id: '2',
			client_secret: 'CTxlPhHYjxJD3l2I03ozyzRTn8vcRlIzjHY9VQ6l',
			username: '',
			password: '',
			scope: ''
		};

		this.tokens = {
			access: '',
			refresh: ''
		};

		if (window.localStorage.getItem('dlc_tokens') != null) {
			this.tokens = JSON.parse(window.localStorage.getItem('dlc_tokens'));
		}
	}

	_createClass(Auth, [{
		key: 'login',
		value: function login() {
			var _this = this;

			return new Promise(function (resolve, reject) {
				window.axios.post('/oauth/token', _this.postData).then(function (response) {
					_this.tokens.access = response.data.access_token;
					_this.tokens.refresh = response.data.refresh_token;
					window.localStorage.setItem('dlc_tokens', JSON.stringify(_this.tokens));
					resolve('Success!');
				}).catch(function (response) {
					return reject(response);
				});
			});
		}
	}, {
		key: 'logout',
		value: function logout() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				window.axios.get('/api/logout').then(function (response) {
					window.localStorage.removeItem('dlc_tokens');
					_this2.tokens.access = '';
					_this2.tokens.refresh = '';
					resolve(response);
				}).catch(function (response) {
					return reject(response);
				});
			});
		}
	}, {
		key: 'isLoggedIn',
		value: function isLoggedIn() {
			return this.tokens.access != "";
		}
	}]);

	return Auth;
}();

/* harmony default export */ __webpack_exports__["a"] = (Auth);

/***/ }),

/***/ "./resources/assets/js/utilities/form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
	function Form(data) {
		_classCallCheck(this, Form);

		this.isValid = false;
		this.isVisible = false;
		this.originalData = data;
		this.ref = null;
		for (var field in data) {
			this[field] = data[field];
		}
	}

	_createClass(Form, [{
		key: "data",
		value: function data() {
			var data = {};
			for (var property in this.originalData) {
				data[property] = this[property];
			}
			return data;
		}
	}, {
		key: "setData",
		value: function setData(data) {
			for (var property in this.originalData) {
				this[property] = data[property];
			}
		}
	}, {
		key: "reset",
		value: function reset() {
			this.ref.reset();
		}
	}, {
		key: "validate",
		value: function validate() {
			return this.ref.validate();
		}
	}, {
		key: "show",
		value: function show() {
			this.isVisible = true;
		}
	}, {
		key: "hide",
		value: function hide() {
			this.isVisible = false;
		}
	}]);

	return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Dashboard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-361a3c51\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Dashboard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-361a3c51", Component.options)
  } else {
    hotAPI.reload("data-v-361a3c51", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Layouts/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Layouts/App.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f7fa310\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Layouts/App.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Layouts/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f7fa310", Component.options)
  } else {
    hotAPI.reload("data-v-0f7fa310", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Layouts/Loading.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Layouts/Loading.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56ab5893\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Layouts/Loading.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Layouts/Loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56ab5893", Component.options)
  } else {
    hotAPI.reload("data-v-56ab5893", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Layouts/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Layouts/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-68032c00\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Layouts/Login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Layouts/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68032c00", Component.options)
  } else {
    hotAPI.reload("data-v-68032c00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Subjects/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subjects/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-16319e06\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subjects/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Subjects/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16319e06", Component.options)
  } else {
    hotAPI.reload("data-v-16319e06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Subjects/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subjects/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36a5cbbc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subjects/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Subjects/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36a5cbbc", Component.options)
  } else {
    hotAPI.reload("data-v-36a5cbbc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Tests/Available.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Available.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fe4d8290\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Available.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Tests/Available.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe4d8290", Component.options)
  } else {
    hotAPI.reload("data-v-fe4d8290", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Tests/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-42b933c1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Tests/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42b933c1", Component.options)
  } else {
    hotAPI.reload("data-v-42b933c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Tests/Pass.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Pass.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b998df2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Pass.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Tests/Pass.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b998df2", Component.options)
  } else {
    hotAPI.reload("data-v-3b998df2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Tests/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4224a244\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Tests/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4224a244", Component.options)
  } else {
    hotAPI.reload("data-v-4224a244", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Users/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Users/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47b00230\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Users/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Users/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47b00230", Component.options)
  } else {
    hotAPI.reload("data-v-47b00230", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);