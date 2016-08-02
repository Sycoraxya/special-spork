'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Stefan on 02/08/2016.
 */
var PageState = function () {
	function PageState() {
		_classCallCheck(this, PageState);

		this.createGlobal();
		this.getSections();
		this.getCurrentSection();

		this.newHulahoop();
	}

	_createClass(PageState, [{
		key: 'createGlobal',
		value: function createGlobal() {
			window.pageState = {
				sections: [],
				currenSection: ''
			};
		}

		// alle sections ophalen en in een array gooien

	}, {
		key: 'getSections',
		value: function getSections() {
			$('body > section').each(function () {
				var section = $(this),
				    sectionName = $(section).attr('data-name');
				pageState.sections.push(sectionName);
			});
		}

		// kijken of er een current section is

	}, {
		key: 'getCurrentSection',
		value: function getCurrentSection() {
			if (window.location.hash) {
				pageState.currenSection = window.location.hash;
				// scroll naar die section
			} else {
				pageState.currenSection = 'een';
			}
		}
	}, {
		key: 'newHulahoop',
		value: function newHulahoop() {
			new Scroll();
		}
	}]);

	return PageState;
}();

$(document).ready(function () {
	new PageState();
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Stefan on 02/08/2016.
 */
var Scroll = function () {
	function Scroll() {
		_classCallCheck(this, Scroll);

		this.buildNav();
	}

	_createClass(Scroll, [{
		key: 'buildNav',
		value: function buildNav() {
			var mount = $('.sideNav');
			for (var section in pageState.sections) {
				var name = pageState.sections[section];
				mount.append('\n\t\t\t\t<span class="nav-item item-' + name + '" onclick="Scroll.scrollTo(\'' + name + '\')"></span>\n\t\t\t');
			}
		}
	}], [{
		key: 'scrollTo',
		value: function scrollTo(name) {
			var index = pageState.sections.indexOf(name),
			    currentIndex = pageState.sections.indexOf(pageState.currenSection);

			// vorige op high
			$('.' + pageState.sections[currentIndex]).removeClass('is-active').addClass('high');
			// zet naam op actief
			$('.' + name).removeClass('low').addClass('is-active');

			// set current
			pageState.currenSection = name;
		}
	}]);

	return Scroll;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2VTdGF0ZS5qcyIsIlNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0lBR007QUFDTCxzQkFBZTtBQUFBOztBQUNkLE9BQUssWUFBTDtBQUNBLE9BQUssV0FBTDtBQUNBLE9BQUssaUJBQUw7O0FBRUEsT0FBSyxXQUFMO0FBQ0E7Ozs7aUNBRWU7QUFDZixVQUFPLFNBQVAsR0FBbUI7QUFDbEIsY0FBZSxFQURHO0FBRWxCLG1CQUFlO0FBRkcsSUFBbkI7QUFJQTs7QUFFRDs7OztnQ0FDZTtBQUNkLEtBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsWUFBWTtBQUNwQyxRQUFJLFVBQWMsRUFBRSxJQUFGLENBQWxCO0FBQUEsUUFDSSxjQUFjLEVBQUUsT0FBRixFQUFXLElBQVgsQ0FBZ0IsV0FBaEIsQ0FEbEI7QUFFQSxjQUFVLFFBQVYsQ0FBbUIsSUFBbkIsQ0FBd0IsV0FBeEI7QUFDQSxJQUpEO0FBS0E7O0FBRUQ7Ozs7c0NBQ3FCO0FBQ3BCLE9BQUksT0FBTyxRQUFQLENBQWdCLElBQXBCLEVBQTBCO0FBQ3pCLGNBQVUsYUFBVixHQUEwQixPQUFPLFFBQVAsQ0FBZ0IsSUFBMUM7QUFDQTtBQUNBLElBSEQsTUFHTztBQUNOLGNBQVUsYUFBVixHQUEwQixLQUExQjtBQUNBO0FBQ0Q7OztnQ0FFYztBQUNkLE9BQUksTUFBSjtBQUNBOzs7Ozs7QUFJRixFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVk7QUFDN0IsS0FBSSxTQUFKO0FBQ0EsQ0FGRDs7Ozs7OztBQzVDQTs7O0lBR007QUFDTCxtQkFBZTtBQUFBOztBQUNkLE9BQUssUUFBTDtBQUNBOzs7OzZCQUVXO0FBQ1gsT0FBSSxRQUFRLEVBQUUsVUFBRixDQUFaO0FBQ0EsUUFBSyxJQUFJLE9BQVQsSUFBb0IsVUFBVSxRQUE5QixFQUF3QztBQUN2QyxRQUFJLE9BQU8sVUFBVSxRQUFWLENBQW1CLE9BQW5CLENBQVg7QUFDQSxVQUFNLE1BQU4sMkNBQzhCLElBRDlCLHFDQUNpRSxJQURqRTtBQUdBO0FBQ0Q7OzsyQkFFZ0IsTUFBTTtBQUN0QixPQUFJLFFBQWUsVUFBVSxRQUFWLENBQW1CLE9BQW5CLENBQTJCLElBQTNCLENBQW5CO0FBQUEsT0FDSSxlQUFlLFVBQVUsUUFBVixDQUFtQixPQUFuQixDQUEyQixVQUFVLGFBQXJDLENBRG5COztBQUdBO0FBQ0EsV0FBTSxVQUFVLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBTixFQUEwQyxXQUExQyxDQUFzRCxXQUF0RCxFQUFtRSxRQUFuRSxDQUE0RSxNQUE1RTtBQUNBO0FBQ0EsV0FBTSxJQUFOLEVBQWMsV0FBZCxDQUEwQixLQUExQixFQUFpQyxRQUFqQyxDQUEwQyxXQUExQzs7QUFFQTtBQUNBLGFBQVUsYUFBVixHQUEwQixJQUExQjtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFN0ZWZhbiBvbiAwMi8wOC8yMDE2LlxyXG4gKi9cclxuY2xhc3MgUGFnZVN0YXRlIHtcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcblx0XHR0aGlzLmNyZWF0ZUdsb2JhbCgpO1xyXG5cdFx0dGhpcy5nZXRTZWN0aW9ucygpO1xyXG5cdFx0dGhpcy5nZXRDdXJyZW50U2VjdGlvbigpO1xyXG5cclxuXHRcdHRoaXMubmV3SHVsYWhvb3AoKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUdsb2JhbCAoKSB7XHJcblx0XHR3aW5kb3cucGFnZVN0YXRlID0ge1xyXG5cdFx0XHRzZWN0aW9ucyAgICAgOiBbXSxcclxuXHRcdFx0Y3VycmVuU2VjdGlvbjogJydcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvLyBhbGxlIHNlY3Rpb25zIG9waGFsZW4gZW4gaW4gZWVuIGFycmF5IGdvb2llblxyXG5cdGdldFNlY3Rpb25zICgpIHtcclxuXHRcdCQoJ2JvZHkgPiBzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCBzZWN0aW9uICAgICA9ICQodGhpcyksXHJcblx0XHRcdCAgICBzZWN0aW9uTmFtZSA9ICQoc2VjdGlvbikuYXR0cignZGF0YS1uYW1lJyk7XHJcblx0XHRcdHBhZ2VTdGF0ZS5zZWN0aW9ucy5wdXNoKHNlY3Rpb25OYW1lKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyBraWprZW4gb2YgZXIgZWVuIGN1cnJlbnQgc2VjdGlvbiBpc1xyXG5cdGdldEN1cnJlbnRTZWN0aW9uICgpIHtcclxuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG5cdFx0XHRwYWdlU3RhdGUuY3VycmVuU2VjdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cdFx0XHQvLyBzY3JvbGwgbmFhciBkaWUgc2VjdGlvblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFnZVN0YXRlLmN1cnJlblNlY3Rpb24gPSAnZWVuJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5ld0h1bGFob29wICgpIHtcclxuXHRcdG5ldyBTY3JvbGwoKTtcclxuXHR9XHJcblxyXG5cclxufVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0bmV3IFBhZ2VTdGF0ZSgpO1xyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBTdGVmYW4gb24gMDIvMDgvMjAxNi5cclxuICovXHJcbmNsYXNzIFNjcm9sbCB7XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG5cdFx0dGhpcy5idWlsZE5hdigpO1xyXG5cdH1cclxuXHJcblx0YnVpbGROYXYgKCkge1xyXG5cdFx0bGV0IG1vdW50ID0gJCgnLnNpZGVOYXYnKTtcclxuXHRcdGZvciAodmFyIHNlY3Rpb24gaW4gcGFnZVN0YXRlLnNlY3Rpb25zKSB7XHJcblx0XHRcdGxldCBuYW1lID0gcGFnZVN0YXRlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG5cdFx0XHRtb3VudC5hcHBlbmQoYFxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibmF2LWl0ZW0gaXRlbS0ke25hbWV9XCIgb25jbGljaz1cIlNjcm9sbC5zY3JvbGxUbygnJHtuYW1lfScpXCI+PC9zcGFuPlxyXG5cdFx0XHRgKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIHNjcm9sbFRvIChuYW1lKSB7XHJcblx0XHRsZXQgaW5kZXggICAgICAgID0gcGFnZVN0YXRlLnNlY3Rpb25zLmluZGV4T2YobmFtZSksXHJcblx0XHQgICAgY3VycmVudEluZGV4ID0gcGFnZVN0YXRlLnNlY3Rpb25zLmluZGV4T2YocGFnZVN0YXRlLmN1cnJlblNlY3Rpb24pO1xyXG5cclxuXHRcdC8vIHZvcmlnZSBvcCBoaWdoXHJcblx0XHQkKGAuJHtwYWdlU3RhdGUuc2VjdGlvbnNbY3VycmVudEluZGV4XX1gKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuYWRkQ2xhc3MoJ2hpZ2gnKTtcclxuXHRcdC8vIHpldCBuYWFtIG9wIGFjdGllZlxyXG5cdFx0JChgLiR7bmFtZX1gKS5yZW1vdmVDbGFzcygnbG93JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdC8vIHNldCBjdXJyZW50XHJcblx0XHRwYWdlU3RhdGUuY3VycmVuU2VjdGlvbiA9IG5hbWU7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
