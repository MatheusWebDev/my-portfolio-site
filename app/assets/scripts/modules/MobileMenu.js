import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".header");
		this.menuIcon = $(".header__menu-icon");
		this.menuContent = $(".header__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.troggleTheMenu.bind(this));
	}

	troggleTheMenu() {
		this.menuContent.toggleClass("header__menu-content--visible");
		this.siteHeader.toggleClass("header--expanded");
		this.menuIcon.toggleClass("header__menu-icon--close");
	}
}
export default MobileMenu;
