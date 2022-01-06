(self["webpackChunkvue_searchable_select"] = self["webpackChunkvue_searchable_select"] || []).push([[179],{

/***/ 881:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(963);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(252);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(577);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/App.vue?vue&type=template&id=7a8e9296


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<nav class=\"navbar navbar-expand-lg navbar navbar-light bg-white shadow-sm mb-3\"><span class=\"navbar-brand mb-0\">SearchableSelect demo</span><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"https://github.com/degica/vue-searchable-select\" target=\"_blank\"> GitHub</a></li></ul></nav>", 1);

const _hoisted_2 = {
  class: "container"
};
const _hoisted_3 = {
  class: "row"
};
const _hoisted_4 = {
  class: "col-md-8 mb-3"
};
const _hoisted_5 = {
  class: "card"
};

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", null, "whats up", -1);

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("label", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" test vanilla "), /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("select", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("option", null, "one"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("option", null, "two"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("option", null, "three")])], -1);

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Selected: ");

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<aside class=\"col-md-4 mb-3\"><div class=\"card\"><div class=\"card-header\"> Links</div><div class=\"card-body\"><ul><li><a href=\"https://github.com/ankurk91/vue-toast-notification\" target=\"_blank\">GitHub</a></li><li><a href=\"https://www.npmjs.com/package/vue-toast-notification\" target=\"_blank\">npm</a></li></ul></div></div></aside>", 1);

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("footer", {
  class: "text-center text-muted small mb-3"
}, " Copyright © 2021 Degica ", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchableSelect = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SearchableSelect");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", null, [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)("main", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("form", {
    class: "card-body",
    method: "post",
    onSubmit: _cache[2] || (_cache[2] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)((...args) => _ctx.show && _ctx.show(...args), ["prevent"]))
  }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("label", null, [_hoisted_6, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_SearchableSelect, {
    modelValue: $data.selected,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.selected = $event),
    search: $options.search
  }, null, 8, ["modelValue", "search"])]), _hoisted_7], 32), _hoisted_8, (0,runtime_core_esm_bundler/* createVNode */.Wm)("pre", null, (0,shared_esm_bundler/* toDisplayString */.zw)($data.selected), 1)])]), _hoisted_9])]), _hoisted_10]);
}
;// CONCATENATED MODULE: ./examples/App.vue?vue&type=template&id=7a8e9296

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Component.vue?vue&type=template&id=62088723

const Componentvue_type_template_id_62088723_hoisted_1 = {
  class: "vue-searchable-select"
};
const Componentvue_type_template_id_62088723_hoisted_2 = {
  key: 0
};
const Componentvue_type_template_id_62088723_hoisted_3 = {
  key: 1
};
function Componentvue_type_template_id_62088723_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Caret = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Caret");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", Componentvue_type_template_id_62088723_hoisted_1, [_ctx.name ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("input", {
    key: 0,
    type: "hidden",
    name: _ctx.name,
    value: _ctx.selectedValue
  }, null, 8, ["name", "value"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.query = $event),
    style: _ctx.showOptions ? {} : {
      display: 'none'
    },
    onKeydown: _cache[2] || (_cache[2] = $event => _ctx.inputKeyHandler($event)),
    onFocus: _cache[3] || (_cache[3] = $event => _ctx.inputFocusHandler($event)),
    onBlur: _cache[4] || (_cache[4] = $event => _ctx.inputBlurHandler($event)),
    ref: "searchInput"
  }, null, 36), [[runtime_dom_esm_bundler/* vModelText */.nr, _ctx.query]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("input", {
    type: "text",
    value: _ctx.selectedDisplay,
    style: _ctx.showOptions ? {
      display: 'none'
    } : {},
    onFocus: _cache[5] || (_cache[5] = $event => _ctx.showOptions = true)
  }, null, 44, ["value"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Caret, {
    onClick: _cache[6] || (_cache[6] = $event => _ctx.showOptions = true)
  }), _ctx.showOptions ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("ul", {
    key: 1,
    onScroll: _cache[7] || (_cache[7] = $event => _ctx.scrollHandler($event))
  }, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.options, (option, i) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("li", {
      key: option.value ? option.value : option
    }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("button", {
      class: _ctx.buttonClass(i),
      onMouseover: $event => _ctx.hoverIndex = i,
      onClick: $event => _ctx.buttonClicked(i)
    }, [option.text ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", Componentvue_type_template_id_62088723_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)(option.text), 1)) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("span", Componentvue_type_template_id_62088723_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(option), 1))], 42, ["onMouseover", "onClick"])]);
  }), 128))], 32)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
}
;// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=template&id=62088723

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Caret.vue?vue&type=template&id=baa83688


const Caretvue_type_template_id_baa83688_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("path", {
  d: "M0 0.656738L11.3137 0.656738L5.65685 6.31359L0 0.656738Z",
  fill: "#172E44"
}, null, -1);

function Caretvue_type_template_id_baa83688_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("svg", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
    class: "vue-searchable-select-caret",
    width: "12",
    height: "7",
    viewBox: "0 0 12 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [Caretvue_type_template_id_baa83688_hoisted_1]);
}
;// CONCATENATED MODULE: ./src/js/Caret.vue?vue&type=template&id=baa83688

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Caret.vue?vue&type=script&lang=js

/* harmony default export */ const Caretvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  emits: ['click'],

  setup(_, {
    emit
  }) {
    return {
      onClick() {
        emit('click');
      }

    };
  }

}));
;// CONCATENATED MODULE: ./src/js/Caret.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/js/Caret.vue



Caretvue_type_script_lang_js.render = Caretvue_type_template_id_baa83688_render

/* harmony default export */ const Caret = (Caretvue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(262);
// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(296);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Component.vue?vue&type=script&lang=js



/* harmony default export */ const Componentvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'search-select',
  components: {
    Caret: Caret
  },
  props: {
    modelValue: {
      type: [Object, String],
      required: true
    },
    search: {
      type: Function,
      required: true
    },
    name: {
      type: String,
      required: false
    },
    debounceTime: {
      type: Number,
      default: 200
    }
  },
  emits: ['update:modelValue'],
  methods: {
    buttonClass(i) {
      const classes = [];

      if (i === this.selectedIndex) {
        classes.push('vue-searchable-select-selected');
      }

      if (i === this.hoverIndex) {
        classes.push('vue-searchable-select-hover');
      }

      return classes;
    },

    async buttonClicked(i) {
      this.selectedIndex = i;
      this.showOptions = false;
    },

    parentElement() {
      return this.$refs.searchInput.closest('.vue-searchable-select');
    }

  },
  watch: {
    // This scrolls the UL to a point where we can actually see the selected
    // list item.
    //
    // It's a bit hacky, but far simpler than performing arithmetic and using
    // manual scroll functions.
    async hoverIndex() {
      this.ignoreFocus = true;
      await this.$nextTick();
      const hovered = this.parentElement().getElementsByClassName('vue-searchable-select-hover')[0];

      if (hovered) {
        hovered.focus();
      }

      await this.$nextTick();
      this.$refs.searchInput.focus();
      await this.$nextTick();
      this.ignoreFocus = false;
    },

    // This scrolls to the currently-selected option when the tray is opened.
    async showOptions(value) {
      console.log('updated', value);
      if (!value) return;
      await this.$nextTick();
      const selected = this.parentElement().getElementsByClassName('vue-searchable-select-selected')[0];

      if (selected) {
        selected.focus();
      }

      await this.$nextTick();
      this.$refs.searchInput.focus();
    }

  },

  setup(props, {
    emit
  }) {
    // This is the current search results; the selectable options displayed to
    // the user.
    const options = (0,reactivity_esm_bundler/* ref */.iH)([]); // Index of the currently hovered element. Pressing "enter" will select it.

    const hoverIndex = (0,reactivity_esm_bundler/* ref */.iH)(0); // Index of the currently selected element.

    const selectedIndex = (0,reactivity_esm_bundler/* ref */.iH)(null); // Raw selected object. Might be a string value or an object with 'value' and 'text' keys.

    const selected = (0,runtime_core_esm_bundler/* computed */.Fl)(() => typeof selectedIndex.value === 'number' ? options.value[selectedIndex.value] : null); // This is the "value" of the selected object.

    const selectedValue = (0,runtime_core_esm_bundler/* computed */.Fl)(() => {
      if (selectedIndex.value === null) {
        if (props.modelValue && typeof props.modelValue === 'object') return props.modelValue['value'];else return props.modelValue;
      } else if (selected.value && typeof selected.value === 'object') return selected.value.value;else return selected.value;
    }); // This is the user-facing display text of the selected object.

    const selectedDisplay = (0,runtime_core_esm_bundler/* computed */.Fl)(() => {
      if (selectedIndex.value === null) {
        if (props.modelValue && typeof props.modelValue === 'object') return props.modelValue['text'];else return props.modelValue;
      } else if (selected.value && typeof selected.value === 'object') return selected.value.text;else return selected.value;
    });
    (0,runtime_core_esm_bundler/* watch */.YP)(options, value => {
      if (hoverIndex.value >= value.length) hoverIndex.value = 0;
    });
    (0,runtime_core_esm_bundler/* watch */.YP)(selectedValue, value => emit('update:modelValue', value)); // This will be called whenever the user input changes. It's debounced so
    // that we don't perform IO-heavy search operations too often.

    const debouncedSearch = lodash_debounce_default()(async (query, page) => {
      options.value = await props.search(query || '', page);
    }, props.debounceTime, {
      leading: true,
      trailing: true
    }); // This is the current page. It will increment when the user scrolls down.
    // When the search query is modified, it will be set back to 0.

    let currentPage = 0; // This is the search query that the user types in.
    // Whenever it's changed, we update the search promise.

    const query = (0,reactivity_esm_bundler/* ref */.iH)(props.modelValue && typeof props.modelValue === 'object' ? props.modelValue['text'] : props.modelValue);
    (0,runtime_core_esm_bundler/* watch */.YP)(query, value => {
      selectedIndex.value = null;
      debouncedSearch(value, 0);
      currentPage = 0;
    }); // This is called when the user scrolls to the bottom.

    let lastPageEmpty = false;
    (0,runtime_core_esm_bundler/* watch */.YP)(query, () => lastPageEmpty = false);

    const nextPage = async () => {
      currentPage += 1;
      const results = await props.search(query.value || '', currentPage);

      if (results.length == 0) {
        // We don't want to search anymore if we hit an empty page.
        lastPageEmpty = true;
      } else {
        options.value = options.value.concat(results);
      }
    }; // This function will handle the 'scroll' event for the options list.
    // If the user scrolls near the bottom, we ask for the next page.


    let pagePromise = null;

    const scrollHandler = event => {
      if (pagePromise !== null) return;
      if (lastPageEmpty) return;
      const scrollMax = event.target.scrollHeight - event.target.offsetHeight;
      if (event.target.scrollTop < scrollMax - 80) return;
      pagePromise = nextPage();
      pagePromise.then(() => pagePromise = null);
    }; // This is whether or not the options tray is displayed.


    const showOptions = (0,reactivity_esm_bundler/* ref */.iH)(false); // This function handles keyboard input - up and down arrows will be used
    // to select next and previous options.
    // Also supports "enter" for selecting the currently hovered option.

    const inputKeyHandler = event => {
      switch (event.code) {
        case 'ArrowUp':
          event.preventDefault();
          if (hoverIndex.value > 0) hoverIndex.value -= 1;
          break;

        case 'ArrowDown':
          event.preventDefault();
          if (hoverIndex.value < options.value.length - 1) hoverIndex.value += 1;
          break;

        case 'PageUp':
          event.preventDefault();
          hoverIndex.value = Math.max(0, hoverIndex.value - 20);
          break;

        case 'PageDown':
          event.preventDefault();
          hoverIndex.value = Math.min(options.value.length - 1, hoverIndex.value + 20);
          break;

        case 'Enter':
          event.preventDefault();
          selectedIndex.value = hoverIndex.value;
          showOptions.value = false;
          break;
      }
    }; // This is called when the user focuses the "display" text input.
    // Mainly, we want to show the search dropdown.
    // Also we can pre-populate the search results if necessary.


    let deselectTimer = null;
    const ignoreFocus = (0,reactivity_esm_bundler/* ref */.iH)(false);

    const inputFocusHandler = () => {
      if (deselectTimer) {
        clearTimeout(deselectTimer);
        deselectTimer = null;
      }

      if (ignoreFocus.value) return;
      console.log("showOptions = true because of focus");
      showOptions.value = true;

      if (options.value.length === 0) {
        debouncedSearch(query.value, 0);
        currentPage = 0;
      }
    }; // Close the options tray on blur - after a delay.
    // We need the delay because the query input gets blurred quite a lot during
    // regular use.
    // There's no one event to reliably detect when it's blurred "for real".


    const inputBlurHandler = event => {
      if (deselectTimer) {
        clearTimeout(deselectTimer);
        deselectTimer = null;
      }

      deselectTimer = setTimeout(() => {
        if (document.activeElement !== event.target) {
          showOptions.value = false;
        }
      }, 500);
    }; // Values exposed to the template:


    return {
      query,
      selected,
      options,
      showOptions,
      hoverIndex,
      selectedIndex,
      selectedValue,
      selectedDisplay,
      ignoreFocus,
      scrollHandler,
      inputKeyHandler,
      inputFocusHandler,
      inputBlurHandler
    };
  }

}));
;// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/js/Component.vue



Componentvue_type_script_lang_js.render = Componentvue_type_template_id_62088723_render

/* harmony default export */ const Component = (Componentvue_type_script_lang_js);
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ const src = (Component);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/App.vue?vue&type=script&lang=js

/* harmony default export */ const Appvue_type_script_lang_js = ({
  name: 'app',

  data() {
    return {
      selected: {
        value: '??',
        text: 'type something!'
      }
    };
  },

  components: {
    SearchableSelect: src
  },
  methods: {
    search(query, page) {
      console.log("Starting mock search of", query, 'page', page);
      return new Promise((resolve, _) => {
        if (query) {
          if (page >= 10) return resolve([]);
          setTimeout(() => {
            resolve([page * 10 + 0, page * 10 + 1, page * 10 + 2, page * 10 + 3, page * 10 + 4, page * 10 + 5].map(x => ({
              value: `${x}`,
              text: `${query.toUpperCase()} ${x}`
            })));
          }, 1000);
        } else {
          setTimeout(() => {
            resolve([page * 10 + 0, page * 10 + 1, page * 10 + 2, page * 10 + 3, page * 10 + 4, page * 10 + 5].map(x => `<nothing> ${x}`));
          }, 200);
        }
      });
    }

  }
});
;// CONCATENATED MODULE: ./examples/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./examples/App.vue




;
Appvue_type_script_lang_js.render = render

/* harmony default export */ const App = (Appvue_type_script_lang_js);
;// CONCATENATED MODULE: ./examples/index.js






const app = (0,runtime_dom_esm_bundler/* createApp */.ri)(App);
app.mount('#app');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [736], () => (__webpack_exec__(881)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);