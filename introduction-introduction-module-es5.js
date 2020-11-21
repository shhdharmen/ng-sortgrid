(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["introduction-introduction-module"], {
    /***/
    "./src/app/introduction/examples/async-pipe/async-pipe-memory.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/introduction/examples/async-pipe/async-pipe-memory.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AsyncPipeMemoryComponent */

    /***/
    function srcAppIntroductionExamplesAsyncPipeAsyncPipeMemoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsyncPipeMemoryComponent", function () {
        return AsyncPipeMemoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/card/card.component */
      "./src/app/shared/card/card.component.ts");
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */
      "../ng-sortgrid/src/lib/ngsg-item.directive.ts");

      function AsyncPipeMemoryComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous sort order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.previousSortOrder);
        }
      }

      function AsyncPipeMemoryComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AsyncPipeMemoryComponent_ngsg_card_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngsg-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function AsyncPipeMemoryComponent_ngsg_card_13_Template_ngsg_card_sorted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.applyOrder($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSortGridItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.item$))("item", item_r3);
        }
      }

      var AsyncPipeMemoryComponent = /*#__PURE__*/function () {
        function AsyncPipeMemoryComponent() {
          _classCallCheck(this, AsyncPipeMemoryComponent);

          this.loading = false;
        }

        _createClass(AsyncPipeMemoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.previousSortOrder = [];
            this.currentSortOrder = [];
          }
        }, {
          key: "loadItems",
          value: function loadItems() {
            var _this = this;

            this.loading = true;
            this.item$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.loading = false;
            }));
          }
        }, {
          key: "applyOrder",
          value: function applyOrder(orderChange) {
            this.currentSortOrder = orderChange.currentOrder;
            this.previousSortOrder = orderChange.previousOrder;
          }
        }]);

        return AsyncPipeMemoryComponent;
      }();

      AsyncPipeMemoryComponent.ɵfac = function AsyncPipeMemoryComponent_Factory(t) {
        return new (t || AsyncPipeMemoryComponent)();
      };

      AsyncPipeMemoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AsyncPipeMemoryComponent,
        selectors: [["ngsg-demo-async"]],
        decls: 15,
        vars: 6,
        consts: [[2, "margin-bottom", "20px"], [1, "btn", "btn-primary", 2, "margin-bottom", "20px", 3, "click"], [1, "card", "border-primary", "mb-3"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "example-container"], ["class", "spinner", 4, "ngIf"], ["ngSortgridItem", "", "ngSortGridGroup", "async-items", "class", "example-box", 3, "ngSortGridItems", "item", "sorted", 4, "ngFor", "ngForOf"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], ["ngSortgridItem", "", "ngSortGridGroup", "async-items", 1, "example-box", 3, "ngSortGridItems", "item", "sorted"]],
        template: function AsyncPipeMemoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "4. Load items and use them with the async pipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsyncPipeMemoryComponent_Template_button_click_2_listener() {
              return ctx.loadItems();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Load items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AsyncPipeMemoryComponent_div_5_Template, 5, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Current sort order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AsyncPipeMemoryComponent_div_12_Template, 3, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AsyncPipeMemoryComponent_ngsg_card_13_Template, 2, 4, "ngsg-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousSortOrder.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentSortOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, ctx.item$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_5__["NgsgItemDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: [".spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% {\n      transform: scale(1.0);\n      -webkit-transform: scale(1.0);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNvcnRncmlkLWRlbW8vc3JjL2FwcC9pbnRyb2R1Y3Rpb24vZXhhbXBsZXMvYXN5bmMtcGlwZS9hc3luYy1waXBlLW1lbW9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPOztFQUVQLHNEQUFzRDtFQUN0RCw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVyw4QkFBOEI7RUFDekMsTUFBTSw4QkFBOEI7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQiw2QkFBNkI7RUFDL0IsRUFBRTtNQUNFLHFCQUFxQjtNQUNyQiw2QkFBNkI7SUFDL0I7QUFDSiIsImZpbGUiOiJwcm9qZWN0cy9uZy1zb3J0Z3JpZC1kZW1vL3NyYy9hcHAvaW50cm9kdWN0aW9uL2V4YW1wbGVzL2FzeW5jLXBpcGUvYXN5bmMtcGlwZS1tZW1vcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbn1cblxuLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uZG91YmxlLWJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cbiAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gIH0gNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsyncPipeMemoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngsg-demo-async',
            templateUrl: './async-pipe-memory.component.html',
            styleUrls: ['./async-pipe-memory.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/introduction/examples/getting-started/getting-started-memory.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/introduction/examples/getting-started/getting-started-memory.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: GettingStartedMemoryComponent */

    /***/
    function srcAppIntroductionExamplesGettingStartedGettingStartedMemoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GettingStartedMemoryComponent", function () {
        return GettingStartedMemoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/card/card.component */
      "./src/app/shared/card/card.component.ts");
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */
      "../ng-sortgrid/src/lib/ngsg-item.directive.ts");

      function GettingStartedMemoryComponent_ngsg_card_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngsg-card", 3);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSortGridItems", ctx_r0.items)("item", item_r1);
        }
      }

      var GettingStartedMemoryComponent = function GettingStartedMemoryComponent() {
        _classCallCheck(this, GettingStartedMemoryComponent);

        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      };

      GettingStartedMemoryComponent.ɵfac = function GettingStartedMemoryComponent_Factory(t) {
        return new (t || GettingStartedMemoryComponent)();
      };

      GettingStartedMemoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GettingStartedMemoryComponent,
        selectors: [["ngsg-demo-memory"]],
        decls: 4,
        vars: 1,
        consts: [[2, "margin-bottom", "20px"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", "class", "example-box", 3, "ngSortGridItems", "item", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "getting-started", 1, "example-box", 3, "ngSortGridItems", "item"]],
        template: function GettingStartedMemoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3. Drag the items around - hold CMD or Control and click on an item to select multiple files");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GettingStartedMemoryComponent_ngsg_card_3_Template, 1, 2, "ngsg-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__["NgsgItemDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettingStartedMemoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngsg-demo-memory',
            templateUrl: 'getting-started-memory.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/introduction/examples/groups/groups-memory.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/introduction/examples/groups/groups-memory.component.ts ***!
      \*************************************************************************/

    /*! exports provided: GroupsMemoryComponent */

    /***/
    function srcAppIntroductionExamplesGroupsGroupsMemoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsMemoryComponent", function () {
        return GroupsMemoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/card/card.component */
      "./src/app/shared/card/card.component.ts");
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */
      "../ng-sortgrid/src/lib/ngsg-item.directive.ts");

      function GroupsMemoryComponent_ngsg_card_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngsg-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2)("ngSortGridItems", ctx_r0.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
        }
      }

      function GroupsMemoryComponent_ngsg_card_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngsg-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3)("ngSortGridItems", ctx_r1.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
        }
      }

      var GroupsMemoryComponent = function GroupsMemoryComponent() {
        _classCallCheck(this, GroupsMemoryComponent);

        this.items = [1, 2, 3, 4];
      };

      GroupsMemoryComponent.ɵfac = function GroupsMemoryComponent_Factory(t) {
        return new (t || GroupsMemoryComponent)();
      };

      GroupsMemoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GroupsMemoryComponent,
        selectors: [["ngsg-demo-groups-memory"]],
        decls: 7,
        vars: 2,
        consts: [[1, "row"], [1, "col"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "one", "class", "example-box", 3, "item", "ngSortGridItems", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "two", "class", "example-box", 3, "item", "ngSortGridItems", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "one", 1, "example-box", 3, "item", "ngSortGridItems"], ["ngSortgridItem", "", "ngSortGridGroup", "two", 1, "example-box", 3, "item", "ngSortGridItems"]],
        template: function GroupsMemoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupsMemoryComponent_ngsg_card_3_Template, 2, 3, "ngsg-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupsMemoryComponent_ngsg_card_6_Template, 2, 3, "ngsg-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__["NgsgItemDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsMemoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngsg-demo-groups-memory',
            templateUrl: 'groups-memory.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/introduction/examples/react-on-changes/react-on-changes-memory.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/introduction/examples/react-on-changes/react-on-changes-memory.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ReactOnChangesMemoryComponent */

    /***/
    function srcAppIntroductionExamplesReactOnChangesReactOnChangesMemoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactOnChangesMemoryComponent", function () {
        return ReactOnChangesMemoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/card/card.component */
      "./src/app/shared/card/card.component.ts");
      /* harmony import */


      var _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../ng-sortgrid/src/lib/ngsg-item.directive */
      "../ng-sortgrid/src/lib/ngsg-item.directive.ts");

      function ReactOnChangesMemoryComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous sort order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.previousSortOrder);
        }
      }

      function ReactOnChangesMemoryComponent_ngsg_card_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngsg-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sorted", function ReactOnChangesMemoryComponent_ngsg_card_8_Template_ngsg_card_sorted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.applyOrder($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2)("ngSortGridItems", ctx_r1.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
        }
      }

      var ReactOnChangesMemoryComponent = /*#__PURE__*/function () {
        function ReactOnChangesMemoryComponent() {
          _classCallCheck(this, ReactOnChangesMemoryComponent);

          this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }

        _createClass(ReactOnChangesMemoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentSortOrder = _toConsumableArray(this.items);
            this.previousSortOrder = [];
          }
        }, {
          key: "applyOrder",
          value: function applyOrder(orderChange) {
            this.currentSortOrder = orderChange.currentOrder;
            this.previousSortOrder = orderChange.previousOrder;
          }
        }]);

        return ReactOnChangesMemoryComponent;
      }();

      ReactOnChangesMemoryComponent.ɵfac = function ReactOnChangesMemoryComponent_Factory(t) {
        return new (t || ReactOnChangesMemoryComponent)();
      };

      ReactOnChangesMemoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReactOnChangesMemoryComponent,
        selectors: [["ngsg-demo-react-on-changes-memory"]],
        decls: 9,
        vars: 3,
        consts: [[1, "card", "border-primary", "mb-3"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "example-container"], ["ngSortgridItem", "", "ngSortGridGroup", "react-on-changes", "class", "example-box", 3, "item", "ngSortGridItems", "sorted", 4, "ngFor", "ngForOf"], ["ngSortgridItem", "", "ngSortGridGroup", "react-on-changes", 1, "example-box", 3, "item", "ngSortGridItems", "sorted"]],
        template: function ReactOnChangesMemoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReactOnChangesMemoryComponent_div_1_Template, 5, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Current sort order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReactOnChangesMemoryComponent_ngsg_card_8_Template, 2, 3, "ngsg-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousSortOrder.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentSortOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _ng_sortgrid_src_lib_ngsg_item_directive__WEBPACK_IMPORTED_MODULE_3__["NgsgItemDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactOnChangesMemoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngsg-demo-react-on-changes-memory',
            templateUrl: 'react-on-changes-memory.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/introduction/introduction.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/introduction/introduction.component.ts ***!
      \********************************************************/

    /*! exports provided: IntroductionComponent */

    /***/
    function srcAppIntroductionIntroductionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function () {
        return IntroductionComponent;
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


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/header/header.component */
      "./src/app/shared/header/header.component.ts");
      /* harmony import */


      var _shared_step_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/step/step.component */
      "./src/app/shared/step/step.component.ts");
      /* harmony import */


      var _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./examples/getting-started/getting-started-memory.component */
      "./src/app/introduction/examples/getting-started/getting-started-memory.component.ts");
      /* harmony import */


      var _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./examples/react-on-changes/react-on-changes-memory.component */
      "./src/app/introduction/examples/react-on-changes/react-on-changes-memory.component.ts");
      /* harmony import */


      var _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./examples/groups/groups-memory.component */
      "./src/app/introduction/examples/groups/groups-memory.component.ts");
      /* harmony import */


      var _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./examples/async-pipe/async-pipe-memory.component */
      "./src/app/introduction/examples/async-pipe/async-pipe-memory.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var IntroductionComponent = /*#__PURE__*/function () {
        function IntroductionComponent() {
          _classCallCheck(this, IntroductionComponent);
        }

        _createClass(IntroductionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IntroductionComponent;
      }();

      IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) {
        return new (t || IntroductionComponent)();
      };

      IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IntroductionComponent,
        selectors: [["app-introduction"]],
        decls: 35,
        vars: 0,
        consts: [[1, "container"], ["title", "Loop over your elements with *ngFor. \uD83D\uDECE\uFE0F the items needs to be an array. Alternate you can also use the async pipe - see below", "image", "gs1.png"], ["title", "Apply the ngSortgridItem directive", "image", "gs2.png"], [1, "chaptor-separator"], ["title", "Pass your items to the directive via the ngSortGridItems input.", "image", "gs3.png"], ["title", "React on the 'sorted' output events", "image", "gs4.png"], ["title", "Pass in a unique name to the ngSortGridGroup input", "image", "gs5.png"], ["title", "Use the async pipe to loop over the items and to pass in the ngSortGridItems", "image", "gs6.png"], ["routerLink", "scrolling", 1, "btn", "btn-primary", 2, "margin-bottom", "50px"]],
        template: function IntroductionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngsg-demo-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngsg-demo-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1. Getting started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngsg-demo-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngsg-demo-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngsg-demo-memory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2. React on changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In most cases you are interested in the new sort order. Often you want to store them in local storage or even send them to the backend. To do so the following two steps are needed in addition to the \"Getting started\" step.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngsg-demo-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngsg-demo-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngsg-demo-react-on-changes-memory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3. Group sortgrids");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "In case you have more than one sortgriditem on the page you need to group the sortgriditems to avoid dropping drags from one group in another group.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngsg-demo-step", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ngsg-demo-groups-memory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "4. Use the async pipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ngsg-demo-step", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ngsg-demo-async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5. Scrolling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " The scrolling demo is in a separate page because we need more items and a sticky navheader. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Check out the demo...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_step_step_component__WEBPACK_IMPORTED_MODULE_3__["StepComponent"], _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedMemoryComponent"], _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_5__["ReactOnChangesMemoryComponent"], _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_6__["GroupsMemoryComponent"], _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_7__["AsyncPipeMemoryComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-introduction',
            templateUrl: './introduction.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/introduction/introduction.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/introduction/introduction.module.ts ***!
      \*****************************************************/

    /*! exports provided: IntroductionModule */

    /***/
    function srcAppIntroductionIntroductionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroductionModule", function () {
        return IntroductionModule;
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


      var _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./examples/async-pipe/async-pipe-memory.component */
      "./src/app/introduction/examples/async-pipe/async-pipe-memory.component.ts");
      /* harmony import */


      var _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./examples/getting-started/getting-started-memory.component */
      "./src/app/introduction/examples/getting-started/getting-started-memory.component.ts");
      /* harmony import */


      var _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./examples/groups/groups-memory.component */
      "./src/app/introduction/examples/groups/groups-memory.component.ts");
      /* harmony import */


      var _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./examples/react-on-changes/react-on-changes-memory.component */
      "./src/app/introduction/examples/react-on-changes/react-on-changes-memory.component.ts");
      /* harmony import */


      var _introduction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./introduction.component */
      "./src/app/introduction/introduction.component.ts");
      /* harmony import */


      var _introduction_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./introduction.routing.module */
      "./src/app/introduction/introduction.routing.module.ts");

      var IntroductionModule = function IntroductionModule() {
        _classCallCheck(this, IntroductionModule);
      };

      IntroductionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: IntroductionModule
      });
      IntroductionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function IntroductionModule_Factory(t) {
          return new (t || IntroductionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _introduction_routing_module__WEBPACK_IMPORTED_MODULE_9__["IntroductionRoutingModule"], _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_2__["NgsgModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IntroductionModule, {
          declarations: [_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"], _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_5__["GettingStartedMemoryComponent"], _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_7__["ReactOnChangesMemoryComponent"], _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_6__["GroupsMemoryComponent"], _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_4__["AsyncPipeMemoryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _introduction_routing_module__WEBPACK_IMPORTED_MODULE_9__["IntroductionRoutingModule"], _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_2__["NgsgModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroductionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"], _examples_getting_started_getting_started_memory_component__WEBPACK_IMPORTED_MODULE_5__["GettingStartedMemoryComponent"], _examples_react_on_changes_react_on_changes_memory_component__WEBPACK_IMPORTED_MODULE_7__["ReactOnChangesMemoryComponent"], _examples_groups_groups_memory_component__WEBPACK_IMPORTED_MODULE_6__["GroupsMemoryComponent"], _examples_async_pipe_async_pipe_memory_component__WEBPACK_IMPORTED_MODULE_4__["AsyncPipeMemoryComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _introduction_routing_module__WEBPACK_IMPORTED_MODULE_9__["IntroductionRoutingModule"], _ng_sortgrid_src_lib_ngsg_module__WEBPACK_IMPORTED_MODULE_2__["NgsgModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/introduction/introduction.routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/introduction/introduction.routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: IntroductionRoutingModule */

    /***/
    function srcAppIntroductionIntroductionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroductionRoutingModule", function () {
        return IntroductionRoutingModule;
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


      var _introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./introduction.component */
      "./src/app/introduction/introduction.component.ts");

      var IntroductionRoutingModule = function IntroductionRoutingModule() {
        _classCallCheck(this, IntroductionRoutingModule);
      };

      IntroductionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: IntroductionRoutingModule
      });
      IntroductionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function IntroductionRoutingModule_Factory(t) {
          return new (t || IntroductionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
          path: '',
          component: _introduction_component__WEBPACK_IMPORTED_MODULE_2__["IntroductionComponent"]
        }])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntroductionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
              path: '',
              component: _introduction_component__WEBPACK_IMPORTED_MODULE_2__["IntroductionComponent"]
            }])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=introduction-introduction-module-es5.js.map