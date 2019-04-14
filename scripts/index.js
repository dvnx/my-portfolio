'use strict';

function handleNavHome() {
  $('.js-home').click( event => {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    event.preventDefault();
  });
}

function handleNavProjects() {
  $('.js-projects').click( (event) => {
    const navHeight = $('nav').outerHeight();

    $('html, body').animate({
      scrollTop: ($('#projects-list').offset().top - navHeight)
    }, 500);
    event.preventDefault();
  });
}

function handleNavAbout() {
  $('.js-about').click((event) => {
    const navHeight = $('nav').outerHeight();

    $('html, body').animate({
      scrollTop: ($('#about').offset().top - navHeight)
    }, 500);
    event.preventDefault();
  });
}

function handleNavResume() {
  $('.js-resume').click((event) => {
    const navHeight = $('nav').outerHeight();

    $('html, body').animate({
      scrollTop: ($('#contact').offset().top - navHeight)
    }, 500);
    event.preventDefault();
  });
}

function handleNavContact() {
  $('.js-contact').click((event) => {
    $('.js-resume').click();
  });
}

function handleArrowToTopClicked() {
  $('.js-arrow').click( () => {
    $('.js-home').click();
  });
}


function main() {
  handleNavHome();
  handleNavProjects();
  handleNavAbout();
  handleNavResume();
  handleNavContact();
  handleArrowToTopClicked();
}

$(main);