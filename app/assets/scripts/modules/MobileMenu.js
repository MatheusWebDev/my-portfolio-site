import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".header");
		this.menuIcon = $(".header__menu-icon");
		this.navContent = $(".primary-nav");
		this.events();
	}

	events() {
		this.menuIcon.click(this.troggleTheMenu.bind(this));
	}

	troggleTheMenu() {
		this.navContent.toggleClass("primary-nav--visible");
		this.siteHeader.toggleClass("header--expanded");
		this.menuIcon.toggleClass("header__menu-icon--close");
	}
}
export default MobileMenu;
