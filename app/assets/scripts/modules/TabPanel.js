import $ from 'jquery';

class TabPanel {
  constructor() {
    this.spanNavTabs = $('.about-section__nav-tabs li span');
    this.liNavTabs = $('.about-section__nav-tabs li');
    this.tabPane = $('.tab-pane');
    this.tabID = this.spanNavTabs.attr('data-tab');
    this.tabAdd = $('#'+this.tabID);
    this.events();
  }
  
  events() {
		this.spanNavTabs.click(this.changeTabs.bind(this));
	}
	
	changeTabs() {
	  console.log($(this.spanNavTabs).attr('data-tab'));
	  this.liNavTabs.removeClass('about-section__nav-tabs--active');
	  this.tabPane.removeClass(['active','in']);
	  this.liNavTabs.addClass('about-section__nav-tabs--active');
	  this.tabAdd.addClass(['active','in']);
	}
}

export default TabPanel;

// $('.about-section__nav-tabs li span').click(function(){
//   var tab_id = $(this).attr('data-tab');

//   $('.about-section__nav-tabs li').removeClass('about-section__nav-tabs--active');
//   $('.tab-pane').removeClass('active');
//   $('.tab-pane').removeClass('in');

//   $(this).parent().addClass('about-section__nav-tabs--active');
//   $("#"+tab_id).addClass('in');
//   $("#"+tab_id).addClass('active');
// });
