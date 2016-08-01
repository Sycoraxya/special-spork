"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Stefan on 01/08/2016.
 */
var Effects = function Effects(EffectName) {
  _classCallCheck(this, Effects);
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by stefa on 2-8-2016.
 */
var PageState = function () {
				function PageState() {
								_classCallCheck(this, PageState);

								document.write('Initiating..');
								window.pageState = { steps: [] };
								pageState.currentStep = 0;
								PageState.setState({ step: 'Loading' });
				}

				_createClass(PageState, null, [{
								key: 'setState',
								value: function setState(state) {
												if (typeof state.step !== "undefined") {
																pageState.steps.push(state.step);
												}
								}
				}]);

				return PageState;
}();

$(document).ready(function () {
				new PageState();
});
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by stefa on 2-8-2016.
 */
var Loading = function (_Effects) {
  _inherits(Loading, _Effects);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).call(this));
  }

  return Loading;
}(Effects);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVmZmVjdHMuanMiLCJQYWdlU3RhdGUuanMiLCJlZmZlY3RzL0xvYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7SUFHTSxVQUNMLGlCQUFhLFVBQWIsRUFBeUI7QUFBQTtBQUV4Qjs7Ozs7OztBQ05GOzs7SUFHTTtBQUNGLHlCQUFjO0FBQUE7O0FBQ2IsaUJBQVMsS0FBVCxDQUFlLGNBQWY7QUFDQSxlQUFPLFNBQVAsR0FBbUIsRUFBQyxPQUFNLEVBQVAsRUFBbkI7QUFDQSxrQkFBVSxXQUFWLEdBQXdCLENBQXhCO0FBQ0Esa0JBQVUsUUFBVixDQUFtQixFQUFDLE1BQU0sU0FBUCxFQUFuQjtBQUNBOzs7O2lDQUdlLE9BQU87QUFDdEIsZ0JBQUksT0FBTyxNQUFNLElBQWIsS0FBc0IsV0FBMUIsRUFBdUM7QUFDekMsMEJBQVUsS0FBVixDQUFnQixJQUFoQixDQUFxQixNQUFNLElBQTNCO0FBQ0c7QUFDRDs7Ozs7O0FBRUwsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFVO0FBQUMsUUFBSSxTQUFKO0FBQWdCLENBQTdDOzs7Ozs7Ozs7QUNsQkE7OztJQUdNOzs7QUFDRixxQkFBYztBQUFBOztBQUFBO0FBRWI7OztFQUhpQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBTdGVmYW4gb24gMDEvMDgvMjAxNi5cclxuICovXHJcbmNsYXNzIEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yIChFZmZlY3ROYW1lKSB7XHJcblxyXG5cdH1cclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHN0ZWZhIG9uIDItOC0yMDE2LlxyXG4gKi9cclxuY2xhc3MgUGFnZVN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cdCAgICBkb2N1bWVudC53cml0ZSgnSW5pdGlhdGluZy4uJyk7XHJcblx0ICAgIHdpbmRvdy5wYWdlU3RhdGUgPSB7c3RlcHM6W119O1xyXG5cdCAgICBwYWdlU3RhdGUuY3VycmVudFN0ZXAgPSAwO1xyXG5cdCAgICBQYWdlU3RhdGUuc2V0U3RhdGUoe3N0ZXA6ICdMb2FkaW5nJ30pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgc2V0U3RhdGUoc3RhdGUpIHtcclxuXHQgICAgaWYgKHR5cGVvZiBzdGF0ZS5zdGVwICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHBhZ2VTdGF0ZS5zdGVwcy5wdXNoKHN0YXRlLnN0ZXApO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtuZXcgUGFnZVN0YXRlKCl9KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBzdGVmYSBvbiAyLTgtMjAxNi5cclxuICovXHJcbmNsYXNzIExvYWRpbmcgZXh0ZW5kcyBFZmZlY3Rze1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
