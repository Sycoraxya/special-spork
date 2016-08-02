/**
 * Created by Stefan on 02/08/2016.
 */
class Scroll {
	constructor () {
		this.buildNav();
	}

	buildNav () {
		let mount = $('.sideNav');
		for (var section in pageState.sections) {
			let name = pageState.sections[section];
			mount.append(`
				<span class="nav-item item-${name}" onclick="Scroll.scrollTo('${name}')"></span>
			`)
		}
	}

	static scrollTo (name) {
		let index        = pageState.sections.indexOf(name),
		    currentIndex = pageState.sections.indexOf(pageState.currenSection);

		// vorige op high
		$(`.${pageState.sections[currentIndex]}`).removeClass('is-active').addClass('high');
		// zet naam op actief
		$(`.${name}`).removeClass('low').addClass('is-active');

		// set current
		pageState.currenSection = name;
	}
}