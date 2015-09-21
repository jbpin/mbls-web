$(document).foundation();

$(document).one('open.fndtn.reveal', '[data-reveal]', function () {
  var modal = $(this);
  var ifr = modal.find('iframe');
  ifr[0].src = ifr[0].src;
});
