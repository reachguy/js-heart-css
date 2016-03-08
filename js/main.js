var $h1 = $('h1');
var $header = $('header');
var $main = $('main');
var $pfirst = $('main p:first-child');
var $h2 = $('h2');
var $mainlist = $('main ul')
var $img = $('img')
var $ulfirst = $('ul:first-child');
var $ullast = $('ul:last-child');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');

$h1.removeClass('big-heading');
$h1.addClass('logo');

$main.addClass('wrapper');
$pfirst('intro');

$h2.addClass('slug-head');

$mainlist.addClass('slug-list');

$img.addClass('slug-img');

$ulfirst.addClass('slug-list-first');
$ullast.addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('big-label');

$ullast(show);
