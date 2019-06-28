/* Back to top */
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
});

$('.back-to-top').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

document.addEventListener("DOMContentLoaded", function(){
  let headings = document.querySelectorAll('.typography h2');
  let left_menu = document.querySelector('.js-left-menu');

  headings.forEach((h, index) => {
    let list_item = document.createElement('li');
    list_item.innerHTML = '<a href="#'+h.innerText.toLowerCase().normalize('NFD')               // Change diacritics
    .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
    .replace(/\s+/g,'-')            // Change whitespace to dashes
    .toLowerCase()                  // Change to lowercase
    .replace(/&/g,'')          // Replace ampersand
    .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
    .replace(/^-*/,'')              // Remove starting dashes
    .replace(/-*$/,'')+'">'+h.innerText+'</a>';
    list_item.setAttribute('class', 'list-group-item');
    left_menu.appendChild(list_item);

    let anchor = document.createElement('a');
    anchor.setAttribute('href', '#top');
    anchor.setAttribute('class', 'back-to-top');
    anchor.innerText = 'Back to top';
    if(index !== 0) {
      h.parentNode.insertBefore(anchor, h.nextSibling);
    }
  });

  let tables = document.querySelectorAll('.typography table');
  tables.forEach(t => {
    t.setAttribute('class', 'table table-responsive table-bordered')
  })
});
