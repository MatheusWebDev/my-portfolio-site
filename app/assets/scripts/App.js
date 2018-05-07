import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import TabPanel from './modules/TabPanel';
import Typed from 'typed.js';

var mobileMenu = new MobileMenu();
// var tabPanel = new TabPanel();

$('.about-section__nav-tabs li span').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('.about-section__nav-tabs li').removeClass('about-section__nav-tabs--active');
  $('.tab-pane').removeClass('active');
  $('.tab-pane').removeClass('in');

  $(this).parent().addClass('about-section__nav-tabs--active');
  $("#"+tab_id).addClass('in');
  $("#"+tab_id).addClass('active');
});

var options = {
  strings: ["Web Designer", "UX Designer", "Web Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true
}

var typed = new Typed("#typed-strings", options);
