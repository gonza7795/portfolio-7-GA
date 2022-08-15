"use strict";
(self["webpackChunkangular_portfolio"] = self["webpackChunkangular_portfolio"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() {
        this.title = "Gonzalo Alvarez";
        this.paragraph = " Engineer and Doctor in Engineering. Coordinator and Developer of projects in several fields of engineering: processes, products, optimization, programming in several languages" +
            "                           //             -----             //                                 " +
            "Ingeniero y Doctor en Ingeniería. Coordinador y Desarrollador de Proyectos en diversas ramas de la ingeniería: procesos, productos, optimización, programación en varios lenguajes ";
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 18, vars: 2, consts: [["id", "about", 1, "about"], ["about", ""], [1, "about__details"], [1, "about__title"], [1, "gray"], [1, "about__paragraph"], ["href", "assets/img/curriculum-vitae-1-hoja-both-idiomas.pdf"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-light", "btn-lg"], ["aria-hidden", "true", 1, "fa", "fa-2x", "fa-address-card"], ["src", "assets/img/profilePicture.jpg", "alt", "perfil", 1, "about__img"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2")(6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/ Acerca de m\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6)(12, "div", 7)(13, "button", 8)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.paragraph);
    } }, styles: [".about[_ngcontent-%COMP%] {\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  background-color: #316bb3;\n}\n.about__details[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  color: #fff;\n}\n.about__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.5rem;\n}\n.about__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  margin-bottom: 15px;\n}\n.about__img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: auto;\n  max-width: 250px;\n  box-shadow: 10px -10px rgba(0, 0, 0, 0.6);\n  transition: 1s ease-in;\n}\n@media (max-width: 543px) {\n  .about__img[_ngcontent-%COMP%] {\n    max-width: 160px;\n    transition: 1s ease;\n  }\n  .about__details[_ngcontent-%COMP%] {\n    flex-basis: 90%;\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUNBTSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkRKc0I7RUFDeEIseUJBQUE7QUFFRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLFdFTEk7QUZPUjtBQUNFO0VBQ0UsV0VUSTtFRlVKLGlCRVBXO0FGUWY7QUFFRTtFQUNFLFdFZEk7RUZlSixlRUxRO0VGTVIsbUJBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0FBREo7QUNXUTtFREpKO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQUhKO0VBTUU7SUFDRSxlQUFBO0lDckNFLHVCQUFBO0lBRUosYUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHNCRGlDMEI7RUFBNUI7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmFib3V0IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNmJiMztcclxuXHJcbiAgJl9fZGV0YWlscyB7XHJcbiAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTtcclxuICB9XHJcblxyXG4gICZfX3BhcmFncmFwaCB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAkcGFyYWdyYXBoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gICZfX2ltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAtMTBweCAkYm94LXNoYWRvdztcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2UtaW47XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcShzbSwgbWF4KXtcclxuICAuYWJvdXQge1xyXG4gICAgJl9faW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAmX19kZXRhaWxzIHtcclxuICAgICAgZmxleC1iYXNpczogOTAlO1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4pO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xyXG5cclxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZWxlbWVudCB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRsaW5lLCRjb2x1bW4pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcclxuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xyXG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xyXG4gICAgICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogJGJyZWFrcG9pbnQtdmFsdWUgLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxyXG5AbWl4aW4gbXEtYmV0d2VlbigkbG93ZXIsJHVwcGVyKSB7XHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vQ29sb3JzXHJcbiRncmF5MjE6ICMzNjM2MzY7XHJcbiRibHVlOiAjMTg2OGZkO1xyXG4kYmx1ZS1kYXJrOiAjMTkzMTc1OTk7XHJcbiRibHVlLWxpZ2h0OiAjYmJkZWZiO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4vL0ZvbnQgU2l6ZVxyXG4kZm9udC1zaXplLWgxOiAyLjVyZW07XHJcbiRmb250LXNpemUtaDI6IDJyZW07XHJcbiRmb250LXNpemUtaDM6IDEuNzVyZW07XHJcbiRmb250LXNpemUtaDQ6IDEuNXJlbTtcclxuJGZvbnQtc2l6ZS1oNTogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS1oNjogMXJlbTtcclxuXHJcbiRwYXJhZ3JhcGg6IDFyZW07XHJcbiRwYXJhZ3JhcGgtc206IDEuNXJlbTtcclxuJHBhcmFncmFwaC1sZzogMnJlbTtcclxuXHJcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRvdmVybGF5OiByZ2JhKDMyLCAzMiwgMzIsIDAuNzUpO1xyXG5cclxuLy9Gb250XHJcbiRmb250LW9wZW4tc2VyaWY6IFwiT3BlbnMgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1yb2JvdG86IFwiUm9ib3RvXCI7XHJcblxyXG4vL1NjcmVlbnMgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRicmVha3BvaW50cyA6IChcclxuICAgIHhzOjAsIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTo1NDRweCwgLy8gU21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIG1kOjc2OHB4LCAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XHJcbiAgICBsZzo5OTJweCwgLy9MYXJnZSBzY3JlZW4gLyBkZXNrdG9wXHJcbiAgICB4bDoxMjAwLCAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcclxuKTsiXX0= */"] });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill/skill.component */ 4673);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 1563);






class AppComponent {
    constructor() {
        this.title = 'angular-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "about")(3, "skill")(4, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill/skill.component */ 4673);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent,
        _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] }); })();


/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 6055);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 1552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ContactComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
    ngOnInit() {
    }
}
ContactComponent.ɵfac = /*@__PURE__*/ function () { let ɵContactComponent_BaseFactory; return function ContactComponent_Factory(t) { return (ɵContactComponent_BaseFactory || (ɵContactComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ContactComponent)))(t || ContactComponent); }; }();
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 2, consts: [["id", "contato", 1, "contato"], [1, "contato__title"], ["href", "mailto:galvarez@santafe-conicet.gov.ar"], [1, "btn", "btn-light", "btn-lg"], ["src", "../../../assets/img/mailbox.svg", "id", "linkedin"], [1, "redes"], ["href", "https://www.linkedin.com/in/gonzaloealvarez/"], ["src", "../../../assets/img/linkedin.png", "id", "linkedin"], ["href", "https://www.researchgate.net/profile/Gonzalo-Alvarez-16"], ["src", "../../../assets/img/researchgate.png", "id", "twitter", "alt", ""], ["href", "https://www.instagram.com/gonzalo_e.alvarez/"], ["src", "../../../assets/img/instagramLogo.jpg", "id", "instagramLogo", "alt", ""], ["href", "https://github.com/gonza7795"], ["src", "../../../assets/img/GitHubLogo.png", "id", "git", "alt", ""], ["href", "https://www.facebook.com/gonzalo.alvarez.9461/"], ["src", "../../../assets/img/facebookLogo.png", "id", "facebok", "alt", ""], ["href", "https://twitter.com"], ["src", "../../../assets/img/twitter.jpg", "id", "twitter", "alt", ""], ["src", "../../../assets/img/band-argentina.png", "alt", "", 1, "center"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contact me / Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "galvarez@santafe-conicet.gov.ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " \u00A9 2022\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Argentina\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
    } }, styles: [".contato[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px;\n  background-color: #316bb3;\n  color: #fff;\n}\n.contato__title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list__item[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media (min-width: 0) and (max-width: 767px) {\n  .btn-secondary[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 70px;\n    padding: 6px;\n    font-size: 28px;\n    transition: 1s ease;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #316bb3;\n}\n.redes[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n#logoAP[_ngcontent-%COMP%] {\n  width: 150px;\n}\nimg[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.btn[_ngcontent-%COMP%] {\n  border-width: medium;\n}\n\n@media (max-width: 575px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .redes[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .redes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0.2em;\n  }\n\n  #cvimg[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHNjc3NcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDQ1EsdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JETHNCO0VBQ3hCLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdFRk07QUZJUjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjtBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUNnQ1E7RUQ1Qk47SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0FBSEY7QUFLQTtFQUNFLG1CQUFBO0FBRkY7QUFJQTtFQUNFLFlBQUE7QUFERjtBQU1BO0VBQ0UsV0FBQTtBQUhGO0FBS0E7RUFDRSxvQkFBQTtBQUZGO0FBS0EsbUNBQUE7QUFDQTtFQUNFO0lBQ0ksc0JBQUE7RUFGSjs7RUFJQTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBREo7O0VBR0E7SUFDSSxhQUFBO0VBQUo7O0VBR0E7SUFDRSxZQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uY29udGF0byB7XHJcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTZiYjM7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcS1iZXR3ZWVuKHhzLG1kKSB7XHJcbiAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTZiYjM7XHJcbn1cclxuLnJlZGVze1xyXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuI2xvZ29BUHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW1ne1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5idG57XHJcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbn1cclxuXHJcbi8qLS0tIFBhcmEgbGEgdmlzdGEgZGUgY2VsdWxhciAtLS0qL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5yZWRlc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnJlZGVzIGltZ3tcclxuICAgICAgbWFyZ2luOiAwLjJlbTtcclxuICB9XHJcblxyXG4gICNjdmltZ3tcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKCRmbGV4ZGlyZWN0aW9uLCRqdXN0aWZ5Y29udGVudDpmYWxzZSl7XHJcblxyXG4gICAgQGlmICRqdXN0aWZ5Y29udGVudCB7IGp1c3RpZnktY29udGVudDogJGp1c3RpZnljb250ZW50O31cclxuICAgIEBlbHNlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICRmbGV4ZGlyZWN0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMDBweDtcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkZWxlbWVudCl7XHJcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRlbGVtZW50IHtcclxuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gKCN7JGkqMC4yc30pIGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGVtcGxhdGUoJGxpbmUsJGNvbHVtbil7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJGxpbmUsJGNvbHVtbik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvdzozMDBweFxyXG59XHJcblxyXG4vL01lZGlhIHF1ZXJ5IHRvIHVzZSBicmVha3BvaW50c1xyXG5AbWl4aW4gbXEoJGJyZWFrcG9pbnQsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcbiAgICAgICAgQGlmICR0eXBlID09IG1heCB7XHJcbiAgICAgICAgICAgICRicmVha3BvaW50LXZhbHVlOiAkYnJlYWtwb2ludC12YWx1ZSAtIDFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhICgjeyR0eXBlfS13aWR0aDogJGJyZWFrcG9pbnQtdmFsdWUpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL01lZGlhIHF1ZXJ5IHRvIHVzZSB0aGUgc2NyZWVuIHdpdGggbWluaW11bSBhbmQgbWF4aW11bSBzaXplXHJcbkBtaXhpbiBtcS1iZXR3ZWVuKCRsb3dlciwkdXBwZXIpIHtcclxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcclxuICAgICAgICAkbG93ZXItYnJlYWtwb2ludDptYXAtZ2V0KCRicmVha3BvaW50cywgJGxvd2VyKTtcclxuICAgICAgICAkdXBwZXItYnJlYWtwb2ludDptYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6JGxvd2VyLWJyZWFrcG9pbnQpIGFuZCAobWF4LXdpZHRoOigkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyICkgPT0gZmFsc2UpIHtcclxuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcclxuICAgICAgIH1cclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9Db2xvcnNcclxuJGdyYXkyMTogIzM2MzYzNjtcclxuJGJsdWU6ICMxODY4ZmQ7XHJcbiRibHVlLWRhcms6ICMxOTMxNzU5OTtcclxuJGJsdWUtbGlnaHQ6ICNiYmRlZmI7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbi8vRm9udCBTaXplXHJcbiRmb250LXNpemUtaDE6IDIuNXJlbTtcclxuJGZvbnQtc2l6ZS1oMjogMnJlbTtcclxuJGZvbnQtc2l6ZS1oMzogMS43NXJlbTtcclxuJGZvbnQtc2l6ZS1oNDogMS41cmVtO1xyXG4kZm9udC1zaXplLWg1OiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLWg2OiAxcmVtO1xyXG5cclxuJHBhcmFncmFwaDogMXJlbTtcclxuJHBhcmFncmFwaC1zbTogMS41cmVtO1xyXG4kcGFyYWdyYXBoLWxnOiAycmVtO1xyXG5cclxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJG92ZXJsYXk6IHJnYmEoMzIsIDMyLCAzMiwgMC43NSk7XHJcblxyXG4vL0ZvbnRcclxuJGZvbnQtb3Blbi1zZXJpZjogXCJPcGVucyBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRmb250LXJvYm90bzogXCJSb2JvdG9cIjtcclxuXHJcbi8vU2NyZWVucyBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcclxuJGJyZWFrcG9pbnRzIDogKFxyXG4gICAgeHM6MCwgLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIHNtOjU0NHB4LCAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgbWQ6NzY4cHgsIC8vIE1lZGl1bSBzY3JlZW4gLyB0YWJsZXRcclxuICAgIGxnOjk5MnB4LCAvL0xhcmdlIHNjcmVlbiAvIGRlc2t0b3BcclxuICAgIHhsOjEyMDAsIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxyXG4pOyJdfQ== */"], data: { animation: [
            _shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation
        ] } });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


const _c0 = function (a0, a1) { return { "fa-bars": a0, "fa-times": a1 }; };
const _c1 = function (a0) { return { "nav__open": a0 }; };
class HeaderComponent {
    constructor() { }
    scroll(id) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        this.isNavOpen = false;
    }
    ngOnInit() {
        this.isNavOpen = false;
    }
    navOpened() {
        console.log("clicado");
        this.isNavOpen = !this.isNavOpen;
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 300) {
            let element = document.getElementsByClassName('nav')[0];
            element.classList.add('nav--sticky');
        }
        else {
            let element = document.getElementsByClassName('nav')[0];
            element.classList.remove('nav--sticky');
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 7, consts: [[1, "toggle", 3, "click"], [1, "fas", "fa-2x", 3, "ngClass"], [1, "nav", "nav--hightlighted", 3, "ngClass"], [1, "nav__brand"], ["href", "#"], [1, "gray"], [1, "nav__item"], [3, "click"], ["skill", ""], ["portfolio", ""], ["contato", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() { return ctx.navOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav")(4, "ul", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Gonzalo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Alvarez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About/Acerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6)(14, "a", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() { return ctx.scroll("skill"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6)(18, "a", 7, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.scroll("portfolio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projects/Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6)(22, "a", 7, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() { return ctx.scroll("contato"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact/Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx.isNavOpen, ctx.isNavOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isNavOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: auto;\n  width: 100%;\n  z-index: 1;\n  transition: 1s;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 2.5em;\n  right: 2.5em;\n  color: #fff;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.nav[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  font-size: 1.6rem;\n  background: transparent;\n  padding: 16px;\n  transition: 1s;\n}\n\n.nav__brand[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 2rem;\n  font-weight: 300;\n  transform: translateX(-100rem);\n}\n\n.nav__brand[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation: slideIn 0.2s forwards;\n          animation: slideIn 0.2s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%] {\n  transform: translateX(100rem);\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation: slideIn 0.2s forwards;\n          animation: slideIn 0.2s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation: slideIn 0.4s forwards;\n          animation: slideIn 0.4s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation: slideIn 0.6s forwards;\n          animation: slideIn 0.6s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation: slideIn 0.8s forwards;\n          animation: slideIn 0.8s forwards;\n}\n\n.nav__item[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation: slideIn 1s forwards;\n          animation: slideIn 1s forwards;\n}\n\n.nav--hightlighted[_ngcontent-%COMP%] {\n  content: \"\";\n}\n\n.nav--hightlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  overflow: hidden;\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #fff;\n  transition: width 0.3s;\n}\n\n.nav--hightlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  transition: width 0.3s;\n}\n\n.nav--sticky[_ngcontent-%COMP%] {\n  background: #316bb3;\n  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.6);\n  top: 0;\n  color: #fff;\n  padding: 5px;\n  transition: 0.5s;\n}\n\n@media (max-width: 767px) {\n  .toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    display: none;\n    padding-top: 0;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n  }\n\n  .nav__open[_ngcontent-%COMP%] {\n    display: flex;\n    transform: scale(1);\n    opacity: 1;\n    background-color: #316bb3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0NiTTtFRGNOLGVBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUVyQjBCLHlCRnVCSTtFRW5CMUIsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRmdCc0I7RUFDeEIsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUVoQlE7RUFDSSx3Q0FBQTtVQUFBLGdDQUFBO0FGa0JaOztBQUFFO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUFDSjs7QUV4QlE7RUFDSSx3Q0FBQTtVQUFBLGdDQUFBO0FGMEJaOztBRTNCUTtFQUNJLHdDQUFBO1VBQUEsZ0NBQUE7QUY2Qlo7O0FFOUJRO0VBQ0ksd0NBQUE7VUFBQSxnQ0FBQTtBRmdDWjs7QUVqQ1E7RUFDSSx3Q0FBQTtVQUFBLGdDQUFBO0FGbUNaOztBRXBDUTtFQUNJLHNDQUFBO1VBQUEsOEJBQUE7QUZzQ1o7O0FBYkU7RUFDRSxXQUFBO0FBZUo7O0FBYkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkNsREU7RURtREYsc0JBQUE7QUFlTjs7QUFaSTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQWNOOztBQVZFO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLE1BQUE7RUFDQSxXQ2hFSTtFRGlFSixZQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUU1Q1E7RUZxQ047SUFDRSxjQUFBO0VBV0Y7O0VBUkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBV0Y7O0VBUkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EseUJBQUE7RUFXRjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMi41ZW07XHJcbiAgcmlnaHQ6IDIuNWVtO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICR0aGlzOiAmO1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyxmbGV4LWVuZCk7ICBcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIFxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG4gICZfX2JyYW5kIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHJlbSk7XHJcbiAgICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoMSk7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDByZW0pO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmLS1oaWdodGxpZ2h0ZWQge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAjeyR0aGlzfV9faXRlbTo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgI3sgJHRoaXN9X19pdGVtOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tc3RpY2t5IHtcclxuICAgIGJhY2tncm91bmQ6ICMzMTZiYjM7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMnB4IDAgJGJveC1zaGFkb3c7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKG1kLG1heCkge1xyXG4gIC50b2dnbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYgeyAgIFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIH1cclxuXHJcbiAgLm5hdl9fb3BlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE2YmIzO1xyXG4gIH1cclxufSIsIi8vQ29sb3JzXHJcbiRncmF5MjE6ICMzNjM2MzY7XHJcbiRibHVlOiAjMTg2OGZkO1xyXG4kYmx1ZS1kYXJrOiAjMTkzMTc1OTk7XHJcbiRibHVlLWxpZ2h0OiAjYmJkZWZiO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4vL0ZvbnQgU2l6ZVxyXG4kZm9udC1zaXplLWgxOiAyLjVyZW07XHJcbiRmb250LXNpemUtaDI6IDJyZW07XHJcbiRmb250LXNpemUtaDM6IDEuNzVyZW07XHJcbiRmb250LXNpemUtaDQ6IDEuNXJlbTtcclxuJGZvbnQtc2l6ZS1oNTogMS4yNXJlbTtcclxuJGZvbnQtc2l6ZS1oNjogMXJlbTtcclxuXHJcbiRwYXJhZ3JhcGg6IDFyZW07XHJcbiRwYXJhZ3JhcGgtc206IDEuNXJlbTtcclxuJHBhcmFncmFwaC1sZzogMnJlbTtcclxuXHJcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRvdmVybGF5OiByZ2JhKDMyLCAzMiwgMzIsIDAuNzUpO1xyXG5cclxuLy9Gb250XHJcbiRmb250LW9wZW4tc2VyaWY6IFwiT3BlbnMgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1yb2JvdG86IFwiUm9ib3RvXCI7XHJcblxyXG4vL1NjcmVlbnMgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRicmVha3BvaW50cyA6IChcclxuICAgIHhzOjAsIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBzbTo1NDRweCwgLy8gU21hbGwgc2NyZWVuIC8gcGhvbmVcclxuICAgIG1kOjc2OHB4LCAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XHJcbiAgICBsZzo5OTJweCwgLy9MYXJnZSBzY3JlZW4gLyBkZXNrdG9wXHJcbiAgICB4bDoxMjAwLCAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcclxuKTsiLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcclxuXHJcbiAgICBAaWYgJGp1c3RpZnljb250ZW50IHsganVzdGlmeS1jb250ZW50OiAkanVzdGlmeWNvbnRlbnQ7fVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSgkbGluZSwkY29sdW1uKXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93OjMwMHB4XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwX2dldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcclxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5574:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 6055);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 1552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function PortfolioComponent_figure_7_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tools_r3.title);
} }
function PortfolioComponent_figure_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "figure", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PortfolioComponent_figure_7_li_8_Template, 3, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14)(10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const portfolio_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", portfolio_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](portfolio_r1.paragraph);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", portfolio_r1.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", portfolio_r1.github, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class PortfolioComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
    constructor(_el, cdRef, http) {
        super(_el, cdRef);
        this.http = http;
        this.projectList = [];
    }
    ngOnInit() {
        this.http.get("./assets/json/projetos.json").subscribe((portfolio) => {
            this.projectList = portfolio;
        });
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["portfolio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [["id", "portfolio", 1, "portfolio"], [1, "portfolio__heading"], [1, "portfolio__title"], [1, "underline"], [1, "container"], [1, "grid"], ["class", "photo photo--wrapper", 4, "ngFor", "ngForOf"], [1, "photo", "photo--wrapper"], ["alt", "projeto", 1, "photo__img", 3, "src"], [1, "overlay"], [1, "overlay__title"], [1, "overlay__paragraph"], [1, "list"], ["class", "list__item", 4, "ngFor", "ngForOf"], [1, "overlay__icon"], ["role", "button", 1, "btn", "btn-light", 3, "href"], [1, "list__item"], [1, "list__tag"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Works & Projects / Trabajos y Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PortfolioComponent_figure_7_Template, 12, 5, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".portfolio[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem 0 3rem 0;\n  background-color: #abb5b9;\n}\n.portfolio__heading[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n}\n.portfolio__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #363636;\n}\n.photo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.photo__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  background-repeat: no-repeat;\n  background-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 1s;\n  transform: scale(1);\n}\n.photo[_ngcontent-%COMP%]:hover   .photo__img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.photo--wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.photo[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(32, 32, 32, 0.75);\n  opacity: 1;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 1s;\n  box-sizing: border-box;\n  padding: 10px;\n  opacity: 0;\n  color: #fff;\n}\n.overlay__title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 2em;\n}\n.overlay__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.overlay__icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 1.5em;\n}\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n}\n.list__item[_ngcontent-%COMP%] {\n  margin: 3px;\n  background-color: #1868fd;\n  border-radius: 20px;\n}\n.list__tag[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-row: 300px;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 544px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-row: 300px;\n  }\n}\n@media (max-width: 767px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-row: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNDUSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkRMc0I7RUFDeEIsc0JBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDRTtFQUNFLGVFTFc7RUZNWCxjRWRLO0FGZVQ7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFNRTtFQUNFLHdDRXZCTTtFRndCTixVQUFBO0FBSko7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0VyRE07QUZnRFI7QUFPRTtFQUNFLFdFeERJO0VGeURKLGVBQUE7QUFMSjtBQVFFO0VBQ0UsV0U3REk7QUZ1RFI7QUFTRTtFQ2pFTSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkQ2RHdCO0VBQ3hCLGlCQUFBO0FBSEo7QUFPQTtFQ3ZFUSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkRtRXNCO0FBQTFCO0FBRUU7RUFDRSxXQUFBO0VBQ0EseUJFOUVHO0VGK0VILG1CQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtBO0VDOURJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0FENkRKO0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FDekRRO0VENkROO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGO0FDL0RRO0VEbUVOO0lBQ0UsZ0JBQUE7RUFERjtBQUNGO0FDcEVRO0VEeUVOO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGO0FDekVRO0VEK0VOO0lBQ0UsaUJBQUE7RUFIRjtBQUNGO0FDbEVRO0VEeUVOO0lDakdFLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLHdCQUFBO0VEOEZGO0FBQ0Y7QUNyRlE7RUQyRk47SUN2R0UsYUFBQTtJQUNBLHFDQUFBO0lBQ0Esd0JBQUE7RURxR0Y7QUFDRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5wb3J0Zm9saW8ge1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbik7XHJcbiAgcGFkZGluZzogM3JlbSAwIDNyZW0gMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2FiYjViOTtcclxuXHJcbiAgJl9faGVhZGluZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDI7XHJcbiAgICBjb2xvcjogJGdyYXkyMTtcclxuICB9XHJcbn1cclxuXHJcbi5waG90byB7XHJcbiAgJHRoaXM6ICY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmX19pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAjeyR0aGlzfV9faW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcblxyXG4gICYtLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG92ZXJsYXk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICB9XHJcblxyXG4gICZfX3BhcmFncmFwaCB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl9faWNvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3cpO1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93KTtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gICZfX3RhZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmdyaWQge1xyXG4gIEBpbmNsdWRlIGdyaWQtdGVtcGxhdGUoMywgMWZyKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AaW5jbHVkZSBtcShzbSxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcShtZCxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcShsZyxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtcSh4bCxtaW4pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbXEtYmV0d2VlbihtZCxsZykge1xyXG4gIC5ncmlkIHtcclxuICAgIEBpbmNsdWRlIGdyaWQtdGVtcGxhdGUoMiwgMWZyKTtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1xKG1kLG1heCkge1xyXG4gIC5ncmlkIHtcclxuICAgIEBpbmNsdWRlIGdyaWQtdGVtcGxhdGUoMSwgMWZyKTtcclxuICB9XHJcbn0iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcclxuXHJcbiAgICBAaWYgJGp1c3RpZnljb250ZW50IHsganVzdGlmeS1jb250ZW50OiAkanVzdGlmeWNvbnRlbnQ7fVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSgkbGluZSwkY29sdW1uKXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93OjMwMHB4XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwX2dldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcclxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL0NvbG9yc1xyXG4kZ3JheTIxOiAjMzYzNjM2O1xyXG4kYmx1ZTogIzE4NjhmZDtcclxuJGJsdWUtZGFyazogIzE5MzE3NTk5O1xyXG4kYmx1ZS1saWdodDogI2JiZGVmYjtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy9Gb250IFNpemVcclxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xyXG4kZm9udC1zaXplLWgyOiAycmVtO1xyXG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xyXG4kZm9udC1zaXplLWg0OiAxLjVyZW07XHJcbiRmb250LXNpemUtaDU6IDEuMjVyZW07XHJcbiRmb250LXNpemUtaDY6IDFyZW07XHJcblxyXG4kcGFyYWdyYXBoOiAxcmVtO1xyXG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XHJcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XHJcblxyXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcclxuXHJcbi8vRm9udFxyXG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiO1xyXG5cclxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kYnJlYWtwb2ludHMgOiAoXHJcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBtZDo3NjhweCwgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbik7Il19 */"], data: { animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation] } });


/***/ }),

/***/ 6055:
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollAnimation": () => (/* binding */ scrollAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const scrollAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scrollAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: "translateX(0)" })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: "translateY(20%)" })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('show => hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('hide => show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('700ms ease-in'))
]);


/***/ }),

/***/ 1552:
/*!******************************************************!*\
  !*** ./src/app/shared/scroll-animation.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollAnimationComponent": () => (/* binding */ ScrollAnimationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ScrollAnimationComponent {
    constructor(_el, cdRef) {
        this._el = _el;
        this.cdRef = cdRef;
    }
    onScroll() {
        this.componentPosition = this._el.nativeElement.offsetTop;
        this.scrollPosition = window.pageYOffset + ((window.innerHeight * 3) / 4);
        this.checkState();
    }
    checkState() {
        if (this.state = 'hide') {
            if (this.scrollPosition >= this.componentPosition) {
                this.state = 'show';
                this.unsubscribe();
            }
        }
    }
    subscribe() {
        this.subscribeScroll = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'scroll')
            .subscribe(() => this.onScroll());
    }
    unsubscribe() {
        if (this.subscribeScroll) {
            this.subscribeScroll.unsubscribe();
        }
    }
    ngAfterViewInit() {
        this.state = 'hide';
        this.cdRef.detectChanges();
        this.subscribe();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
ScrollAnimationComponent.ɵfac = function ScrollAnimationComponent_Factory(t) { return new (t || ScrollAnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ScrollAnimationComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ScrollAnimationComponent, outputs: { state: "state" } });
ScrollAnimationComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollAnimationComponent, factory: ScrollAnimationComponent.ɵfac });


/***/ }),

/***/ 4673:
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 6055);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 1552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function SkillComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const othersk_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](othersk_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](othersk_r2.title);
} }
function SkillComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](skill_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r3.title);
} }
class SkillComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
    constructor(_el, cdRef, http) {
        super(_el, cdRef);
        this.http = http;
        this.skills = [];
        this.othersks = [];
    }
    ngOnInit() {
        this.http.get("./assets/json/skills.json").subscribe(skills => {
            this.skills = skills;
        });
        this.http.get("./assets/json/e-skills.json").subscribe(othersks => {
            this.othersks = othersks;
        });
    }
}
SkillComponent.ɵfac = function SkillComponent_Factory(t) { return new (t || SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillComponent, selectors: [["skill"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 6, consts: [["id", "skill", 1, "skill"], [1, "skill__heading"], [1, "skill_title_gea"], [1, "skill__paragraph"], [1, "underline"], [1, "list"], ["class", "list__item list--visible ", 4, "ngFor", "ngForOf"], [1, "list__item", "list--visible"], [1, "list__label"]], template: function SkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Engineering Fields / Campos de la Ingenier\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SkillComponent_li_7_Template, 4, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1)(9, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Programming skills / Principales lenguajes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SkillComponent_li_14_Template, 4, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.othersks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".skill[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 4rem 0 4rem 0;\n}\n.skill__heading[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  color: #fff;\n}\n.skill_title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-transform: uppercase;\n  color: #363636;\n}\n.skill__paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #363636;\n  font-size: 1rem;\n}\n.skill_title_gea[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: #363636;\n}\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  padding: 15px;\n}\n.list__item[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n}\n.list__label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 49px;\n  line-height: 49px;\n  border-radius: 17px;\n  margin-top: 20px;\n  color: #fff;\n  background: #1868fd;\n  text-align: center;\n  visibility: hidden;\n}\n.list__label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #1868fd;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.list--visible[_ngcontent-%COMP%]:hover   .list__label[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0NRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCRExzQjtFQUN4QixzQkFBQTtBQUVGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0VMSTtBRk9SO0FBQ0U7RUFDRSxlRUxXO0VGTVgseUJBQUE7RUFDQSxjRWZLO0FGZ0JUO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGNFcEJLO0VGcUJMLGVFUFE7QUZPWjtBQUdFO0VBQ0UsZUVqQlc7RUZrQlgsMEJBQUE7RUFDQSxjRTNCSztBRjBCVDtBQUtBO0VDNUJRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRHlCc0I7RUFDeEIsYUFBQTtBQUNGO0FBQ0U7RUNqQ00sdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JENkJ3QjtBQUs1QjtBQUZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdFM0NJO0VGNENKLG1CRS9DRztFRmdESCxrQkFBQTtFQUNBLGtCQUFBO0FBSUo7QUFGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUlOO0FBQUU7RUFDRSxtQkFBQTtBQUVKIiwiZmlsZSI6InNraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uc2tpbGwge1xyXG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbik7XHJcbiAgcGFkZGluZzogNHJlbSAwIDRyZW0gMDtcclxuXHJcbiAgJl9faGVhZGluZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJl90aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICRncmF5MjE7XHJcbiAgfVxyXG5cclxuICAmX19wYXJhZ3JhcGgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAkZ3JheTIxO1xyXG4gICAgZm9udC1zaXplOiAkcGFyYWdyYXBoO1xyXG4gIH1cclxuXHJcbiAgJl90aXRsZV9nZWEge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWgyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogJGdyYXkyMTtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAkdGhpczogJjtcclxuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3cpO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgJGJsdWU7XHJcbiAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tdmlzaWJsZTpob3ZlciAjeyR0aGlzfV9fbGFiZWwge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn0iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcclxuXHJcbiAgICBAaWYgJGp1c3RpZnljb250ZW50IHsganVzdGlmeS1jb250ZW50OiAkanVzdGlmeWNvbnRlbnQ7fVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZW1wbGF0ZSgkbGluZSwkY29sdW1uKXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93OjMwMHB4XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgICAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwX2dldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcclxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgfVxyXG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XHJcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL0NvbG9yc1xyXG4kZ3JheTIxOiAjMzYzNjM2O1xyXG4kYmx1ZTogIzE4NjhmZDtcclxuJGJsdWUtZGFyazogIzE5MzE3NTk5O1xyXG4kYmx1ZS1saWdodDogI2JiZGVmYjtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuLy9Gb250IFNpemVcclxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xyXG4kZm9udC1zaXplLWgyOiAycmVtO1xyXG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xyXG4kZm9udC1zaXplLWg0OiAxLjVyZW07XHJcbiRmb250LXNpemUtaDU6IDEuMjVyZW07XHJcbiRmb250LXNpemUtaDY6IDFyZW07XHJcblxyXG4kcGFyYWdyYXBoOiAxcmVtO1xyXG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XHJcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XHJcblxyXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcclxuXHJcbi8vRm9udFxyXG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtcm9ib3RvOiBcIlJvYm90b1wiO1xyXG5cclxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kYnJlYWtwb2ludHMgOiAoXHJcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxyXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXHJcbiAgICBtZDo3NjhweCwgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxyXG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxyXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXHJcbik7Il19 */"], data: { animation: [
            _shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation
        ] } });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map