import $ from 'jquery';

function TabPanel(){
  $('.about-section__nav-tabs li span').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.about-section__nav-tabs li').removeClass('about-section__nav-tabs--active');
    $('.tab-pane').removeClass('active');

    $(this).parent().addClass('about-section__nav-tabs--active');
    $("#"+tab_id).addClass('active');
  });
}

export default TabPanel;

// $('.about-section__nav-tabs li span').click(function(){
//   var tab_id = $(this).attr('data-tab');
//
//   $('.about-section__nav-tabs li').removeClass('about-section__nav-tabs--active');
//   $('.tab-pane').removeClass('active');
//
//   $(this).parent().addClass('about-section__nav-tabs--active');
//   $("#"+tab_id).addClass('active');
// });
