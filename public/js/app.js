webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ExampleComponent.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Login.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subject.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
			_this.subject = response.data;
		}).catch(function (error) {
			console.log(error);
		});
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subjects.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			subjects: [],
			creatingForm: new window.Form({
				name: ''
			}),
			editingForm: new window.Form({
				name: ''
			}),
			loading: false,
			rules: {
				required: function required(value) {
					return !!value || 'Это поле обязательно для заполнения';
				}
			},
			headers: [{ text: 'ID', value: 'id', align: 'left' }, { text: 'Предмет', value: 'name', align: 'left' }, { text: 'Создатель', value: 'author_id', align: 'left' }, { text: 'Дата создания', value: 'created_at', align: 'left' }, { text: 'Действия', value: 'name', sortable: false }]
		};
	},

	mounted: function mounted() {
		this.creatingForm.ref = this.$refs.createForm;
		this.editingForm.ref = this.$refs.editForm;
		this.loadSubjects();
	},


	methods: {
		loadSubjects: function loadSubjects() {
			var _this = this;

			this.loading = true;
			window.axios.get('/api/subjects').then(function (response) {
				_this.subjects = response.data;
				_this.loading = false;
			}).catch(function (error) {
				_this.subjects = [{ name: error.message }];
				_this.loading = false;
			});
		},
		toggleEditingSubject: function toggleEditingSubject(subject) {
			this.editingForm.name = subject.name;
			this.editingForm.id = subject.id;
			this.editingForm.show();
		},
		updateSubject: function updateSubject() {
			var _this2 = this;

			window.axios.delete('/api/subjects/' + this.editingForm.id, this.editingForm.data()).then(function (response) {
				console.log(response.data);
				_this2.loadSubjects();
			}).catch(function (error) {
				console.log(error.data);
			});
		},
		deleteSubject: function deleteSubject(subject) {
			var _this3 = this;

			window.axios.delete('/api/subjects/' + subject.id).then(function (response) {
				console.log(response.data);
				_this3.loadSubjects();
			}).catch(function (error) {
				console.log(error.data);
			});
		},
		createSubject: function createSubject() {
			var _this4 = this;

			window.axios.post('/api/subjects', this.creatingForm.data()).then(function (response) {
				_this4.creatingForm.hide();
				_this4.creatingForm.reset();
				_this4.loadSubjects();
			}).catch(function (error) {
				console.log(error.data);
			});
		},
		isAuthor: function isAuthor(subject) {
			return subject.author_id == this.$root.user.id;
		}
	},

	filters: {
		readable: function readable(date) {
			return moment(date).fromNow();
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			tests: [],
			subjects: [],
			creatingForm: new window.Form({
				name: '',
				subject_id: 0,
				questions_count: ''
			}),
			loading: false,
			rules: {
				required: function required(value) {
					return !!value || 'Это поле обязательно для заполнения';
				}
			},
			headers: [{ text: 'ID', value: 'id', align: 'left' }, { text: 'Название теста', value: 'name', align: 'left' }, { text: 'Автор', value: 'author_id', align: 'left' }, { text: 'Предмет', value: 'subject_id', align: 'left' }, { text: 'Дата создания', value: 'created_at', align: 'left' }]
		};
	},

	mounted: function mounted() {
		this.creatingForm.ref = this.$refs.createForm;
		this.loadTests();
	},


	methods: {
		loadTests: function loadTests() {
			var _this = this;

			this.loading = true;
			window.axios.get('/api/tests').then(function (response) {
				_this.tests = response.data;
				_this.loading = false;
			}).catch(function (error) {
				console.log(error);
				_this.loading = false;
			});
		},
		createTest: function createTest() {
			var _this2 = this;

			if (this.creatingForm.validate()) {
				window.axios.post('/api/tests', this.creatingForm.data()).then(function (response) {
					_this2.creatingForm.hide();
					_this2.creatingForm.reset();
					_this2.loadTests();
				}).catch(function (error) {
					console.log(error.data);
				});
			}
		},
		loadSubjects: function loadSubjects() {
			var _this3 = this;

			window.axios.get('/api/subjects').then(function (response) {
				return _this3.subjects = response.data;
			}).catch(function (error) {
				return _this3.subjects = [{ name: error.message }];
			});
		}
	},

	filters: {
		readable: function readable(date) {
			return moment(date).fromNow();
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-33212926\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Login.vue":
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
                        { attrs: { color: "primary" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-33212926", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-544f6bde\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
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
                _c("td", { staticClass: "text-xs-right" }, [
                  _vm._v(_vm._s(props.item.name))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-right" }, [
                  _vm._v(
                    _vm._s(props.item.author.first_name) +
                      " " +
                      _vm._s(props.item.author.last_name)
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-right" }, [
                  _vm._v(_vm._s(props.item.subject.name))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-right" }, [
                  _vm._v(_vm._s(_vm._f("readable")(props.item.created_at)))
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
            value: _vm.creatingForm.isVisible,
            callback: function($$v) {
              _vm.$set(_vm.creatingForm, "isVisible", $$v)
            },
            expression: "creatingForm.isVisible"
          }
        },
        [
          _c(
            "v-btn",
            {
              attrs: {
                slot: "activator",
                fixed: "",
                dark: "",
                fab: "",
                bottom: "",
                right: "",
                color: "indigo"
              },
              on: { click: _vm.loadSubjects },
              slot: "activator"
            },
            [_c("v-icon", [_vm._v("add")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-form",
                {
                  ref: "createForm",
                  model: {
                    value: _vm.creatingForm.isValid,
                    callback: function($$v) {
                      _vm.$set(_vm.creatingForm, "isValid", $$v)
                    },
                    expression: "creatingForm.isValid"
                  }
                },
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Новая заготовка для теста")
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
                          value: _vm.creatingForm.name,
                          callback: function($$v) {
                            _vm.$set(_vm.creatingForm, "name", $$v)
                          },
                          expression: "creatingForm.name"
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
                          value: _vm.creatingForm.questions_count,
                          callback: function($$v) {
                            _vm.$set(_vm.creatingForm, "questions_count", $$v)
                          },
                          expression: "creatingForm.questions_count"
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
                          value: _vm.creatingForm.subject_id,
                          callback: function($$v) {
                            _vm.$set(_vm.creatingForm, "subject_id", $$v)
                          },
                          expression: "creatingForm.subject_id"
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
                              _vm.creatingForm.hide()
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
                              _vm.creatingForm.reset()
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
                            disabled: !_vm.creatingForm.isValid
                          },
                          on: { click: _vm.createTest }
                        },
                        [_vm._v("Создать")]
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
    require("vue-hot-reload-api")      .rerender("data-v-544f6bde", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b82b78e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Loading.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-5b82b78e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69b9f3cc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subjects.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.subjects,
          "hide-actions": "",
          "no-data-text": "Пока что тут ничего нет.",
          loading: _vm.loading
        },
        scopedSlots: _vm._u([
          {
            key: "items",
            fn: function(props) {
              return [
                _c("td", [_vm._v(_vm._s(props.item.id))]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-right" }, [
                  _vm._v(_vm._s(props.item.name))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-right" }, [
                  _vm._v(
                    _vm._s(props.item.author.first_name) +
                      " " +
                      _vm._s(props.item.author.last_name)
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-right" }, [
                  _vm._v(_vm._s(_vm._f("readable")(props.item.created_at)))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "justify-center layout px-0" },
                  [
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
                              disabled: !_vm.isAuthor(props.item)
                            },
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
                            attrs: {
                              slot: "activator",
                              icon: "",
                              disabled: !_vm.isAuthor(props.item)
                            },
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
                    )
                  ],
                  1
                )
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
            value: _vm.creatingForm.isVisible,
            callback: function($$v) {
              _vm.$set(_vm.creatingForm, "isVisible", $$v)
            },
            expression: "creatingForm.isVisible"
          }
        },
        [
          _c(
            "v-btn",
            {
              attrs: {
                slot: "activator",
                fixed: "",
                dark: "",
                fab: "",
                bottom: "",
                right: "",
                color: "indigo"
              },
              slot: "activator"
            },
            [_c("v-icon", [_vm._v("add")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-form",
                {
                  ref: "createForm",
                  model: {
                    value: _vm.creatingForm.isValid,
                    callback: function($$v) {
                      _vm.$set(_vm.creatingForm, "isValid", $$v)
                    },
                    expression: "creatingForm.isValid"
                  }
                },
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Новый предмет")
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
                          value: _vm.creatingForm.name,
                          callback: function($$v) {
                            _vm.$set(_vm.creatingForm, "name", $$v)
                          },
                          expression: "creatingForm.name"
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
                            disabled: !_vm.creatingForm.isValid
                          },
                          nativeOn: {
                            click: function($event) {
                              _vm.createSubject()
                            }
                          }
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
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.editingForm.isVisible,
            callback: function($$v) {
              _vm.$set(_vm.editingForm, "isVisible", $$v)
            },
            expression: "editingForm.isVisible"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-form",
                {
                  ref: "editForm",
                  model: {
                    value: _vm.editingForm.isValid,
                    callback: function($$v) {
                      _vm.$set(_vm.editingForm, "isValid", $$v)
                    },
                    expression: "editingForm.isValid"
                  }
                },
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Редактировать предмет")
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
                          value: _vm.editingForm.name,
                          callback: function($$v) {
                            _vm.$set(_vm.editingForm, "name", $$v)
                          },
                          expression: "editingForm.name"
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
                            disabled: !_vm.editingForm.isValid
                          },
                          nativeOn: {
                            click: function($event) {
                              _vm.updateSubject()
                            }
                          }
                        },
                        [_vm._v("Обновить")]
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
    require("vue-hot-reload-api")      .rerender("data-v-69b9f3cc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7168fb6a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ExampleComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
          _c("div", { staticClass: "panel panel-default" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body" }, [
              _vm._v(
                "\n                    I'm an example component!\n                "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7168fb6a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-87c6bfae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subject.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    _vm._l(_vm.subject, function(prop) {
      return _c("li", { domProps: { textContent: _vm._s(prop) } })
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-87c6bfae", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__("./resources/assets/js/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Login__ = __webpack_require__("./resources/assets/js/views/Login.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Loading__ = __webpack_require__("./resources/assets/js/views/Loading.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Loading__);
__webpack_require__("./resources/assets/js/bootstrap.js");




Vue.component('example-component', __webpack_require__("./resources/assets/js/components/ExampleComponent.vue"));

new Vue({
	el: '#app',
	router: __WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */],
	data: {
		auth: new window.Auth(),
		drawer: null,
		user: {}
	},
	components: { LoginView: __WEBPACK_IMPORTED_MODULE_1__views_Login___default.a, LoadingView: __WEBPACK_IMPORTED_MODULE_2__views_Loading___default.a },
	created: function created() {
		var _this = this;

		window.axios.defaults.headers.common['Accept'] = 'application/json';
		window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.auth.tokens.access;

		window.moment.locale('ru');
		window.axios.get('/api/user').then(function (response) {
			return _this.user = response.data;
		}).catch(function (error) {
			return console.log(error);
		});
	},

	methods: {
		logout: function logout() {
			this.$root.auth.logout();
		}
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_auth__ = __webpack_require__("./resources/assets/js/utilities/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_form__ = __webpack_require__("./resources/assets/js/utilities/form.js");

window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuetify___default.a);


window.axios = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;


window.moment = __WEBPACK_IMPORTED_MODULE_4_moment___default.a;


window.Auth = __WEBPACK_IMPORTED_MODULE_5__utilities_auth__["a" /* default */];


window.Form = __WEBPACK_IMPORTED_MODULE_6__utilities_form__["a" /* default */];

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/***/ }),

/***/ "./resources/assets/js/components/ExampleComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ExampleComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7168fb6a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ExampleComponent.vue")
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
Component.options.__file = "resources/assets/js/components/ExampleComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7168fb6a", Component.options)
  } else {
    hotAPI.reload("data-v-7168fb6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");


var routes = [{
	path: '/subjects',
	component: __webpack_require__("./resources/assets/js/views/Subjects.vue")
}, {
	path: '/subjects/:id',
	component: __webpack_require__("./resources/assets/js/views/Subject.vue")
}, {
	path: '/tests',
	component: __webpack_require__("./resources/assets/js/views/Tests.vue")
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
			window.localStorage.removeItem('dlc_tokens');
			this.tokens.access = '';
			this.tokens.refresh = '';
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

/***/ "./resources/assets/js/views/Loading.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Loading.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b82b78e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Loading.vue")
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
Component.options.__file = "resources/assets/js/views/Loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b82b78e", Component.options)
  } else {
    hotAPI.reload("data-v-5b82b78e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-33212926\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Login.vue")
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
Component.options.__file = "resources/assets/js/views/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33212926", Component.options)
  } else {
    hotAPI.reload("data-v-33212926", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Subject.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subject.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-87c6bfae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subject.vue")
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
Component.options.__file = "resources/assets/js/views/Subject.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87c6bfae", Component.options)
  } else {
    hotAPI.reload("data-v-87c6bfae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Subjects.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Subjects.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69b9f3cc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Subjects.vue")
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
Component.options.__file = "resources/assets/js/views/Subjects.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69b9f3cc", Component.options)
  } else {
    hotAPI.reload("data-v-69b9f3cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Tests.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/Tests.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-544f6bde\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/Tests.vue")
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
Component.options.__file = "resources/assets/js/views/Tests.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-544f6bde", Component.options)
  } else {
    hotAPI.reload("data-v-544f6bde", Component.options)
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