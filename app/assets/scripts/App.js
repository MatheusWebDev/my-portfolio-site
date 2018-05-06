import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import Typed from 'typed.js';

var mobileMenu = new MobileMenu();

var options = {
  strings: ["Web Designer", "UX Designer", "Web Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true
}

var typed = new Typed("#typed-strings", options);
