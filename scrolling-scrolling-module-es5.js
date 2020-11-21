(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scrolling-scrolling-module"], {
    /***/
    "./src/app/scrolling/scrolling.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/scrolling/scrolling.component.ts ***!
      \**************************************************/

    /*! exports provided: ScrollingComponent */

    /***/
    function srcAppScrollingScrollingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingComponent", function () {
        return ScrollingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/nav/nav.component */
      "./src/app/shared/nav/nav.component.ts");
      /* harmony import */


      var _shared_step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/step/step.component */
      "./src/app/shared/step/step.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/card/card.component */
      "./src/app/shared/card/card.component.ts");
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../ng-sortgrid/src/lib/ngsg-item.directive */
      "../ng-sortgrid/src/lib/ngsg-item.directive.ts");

      function ScrollingComponent_ngsg_card_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngsg-card", 6);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoScroll", true)("scrollPointTop", ctx_r0.height)("ngSortGridItems", ctx_r0.items)("item", item_r1);
        }
      }

      var ScrollingComponent = /*#__PURE__*/function () {
        function ScrollingComponent() {
          _classCallCheck(this, ScrollingComponent);

          this.height = 350;
          this.items = Array.from(Array(50).keys());
        }

        _createClass(ScrollingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ScrollingComponent;
      }();

      ScrollingComponent.ɵfac = function ScrollingComponent_Factory(t) {
        return new (t || ScrollingComponent)();
      };

      ScrollingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScrollingComponent,
        selectors: [["app-scrolling"]],
        decls: 8,
        vars: 3,
        consts: [["subtitle", "Scrolling demo", 3, "fixed", "height"], [1, "container", 2, "margin-top", "400px"], ["title", "Sample code to enable scrolling with a custom top scroll point.", "image", "scrolling-code.png"], ["title", "Scroll down to the bottom of the page, drag an item over the blue header (which is the top scroll point) and watch it scroll \uD83D\uDE0A"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", "class", "example-box", 3, "autoScroll", "scrollPointTop", "ngSortGridItems", "item", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", 1, "example-box", 3, "autoScroll", "scrollPointTop", "ngSortGridItems", "item"]],
        template: function ScrollingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngsg-demo-nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scrolling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngsg-demo-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngsg-demo-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScrollingComponent_ngsg_card_7_Template, 1, 4, "ngsg-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixed", true)("height", ctx.height + "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _shared_step_step_component__WEBPACK_IMPORTED_MODULE_2__["StepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_5__["NgsgItemDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-scrolling',
            templateUrl: './scrolling.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/scrolling/scrolling.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/scrolling/scrolling.module.ts ***!
      \***********************************************/

    /*! exports provided: ScrollingModule */

    /***/
    function srcAppScrollingScrollingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
        return ScrollingModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../ng-sortgrid/src/lib/ngsg.module */
      "../ng-sortgrid/src/lib/ngsg.module.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _scrolling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./scrolling.component */
      "./src/app/scrolling/scrolling.component.ts");
      /* harmony import */


      var _scrolling_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scrolling.routing.module */
      "./src/app/scrolling/scrolling.routing.module.ts");

      var ScrollingModule = function ScrollingModule() {
        _classCallCheck(this, ScrollingModule);
      };

      ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ScrollingModule
      });
      ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ScrollingModule_Factory(t) {
          return new (t || ScrollingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _scrolling_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScrollingRoutingModule"], _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_2__["NgsgModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
          declarations: [_scrolling_component__WEBPACK_IMPORTED_MODULE_4__["ScrollingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _scrolling_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScrollingRoutingModule"], _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_2__["NgsgModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_scrolling_component__WEBPACK_IMPORTED_MODULE_4__["ScrollingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _scrolling_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScrollingRoutingModule"], _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_2__["NgsgModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/scrolling/scrolling.routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/scrolling/scrolling.routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ScrollingRoutingModule */

    /***/
    function srcAppScrollingScrollingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingRoutingModule", function () {
        return ScrollingRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _scrolling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scrolling.component */
      "./src/app/scrolling/scrolling.component.ts");

      var ScrollingRoutingModule = function ScrollingRoutingModule() {
        _classCallCheck(this, ScrollingRoutingModule);
      };

      ScrollingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScrollingRoutingModule
      });
      ScrollingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ScrollingRoutingModule_Factory(t) {
          return new (t || ScrollingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
          path: '',
          component: _scrolling_component__WEBPACK_IMPORTED_MODULE_2__["ScrollingComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
              path: '',
              component: _scrolling_component__WEBPACK_IMPORTED_MODULE_2__["ScrollingComponent"]
            }])]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=scrolling-scrolling-module-es5.js.map