/**
 * Created by Stefan on 02/08/2016.
 */
class PageState {
	constructor () {
		this.createGlobal();
		this.getSections();
		this.getCurrentSection();

		this.newHulahoop();
	}

	createGlobal () {
		window.pageState = {
			sections     : [],
			currenSection: ''
		};
	}

	// alle sections ophalen en in een array gooien
	getSections () {
		$('body > section').each(function () {
			let section     = $(this),
			    sectionName = $(section).attr('data-name');
			pageState.sections.push(sectionName);
		})
	}

	// kijken of er een current section is
	getCurrentSection () {
		if (window.location.hash) {
			pageState.currenSection = window.location.hash;
			// scroll naar die section
		} else {
			pageState.currenSection = 'een';
		}
	}

	newHulahoop () {
		new Scroll();
	}


}
$(document).ready(function () {
	new PageState();
});