;(function(){

'use strict';

angular.module('app').run(['$templateCache', function($templateCache) {

  $templateCache.put('components/header/header.tmpl.html', '<section id="main" class="container"><h1 ng-bind="::app.name"></h1></section>');

  $templateCache.put('components/footer/footer.tmpl.html', '<div class="container">footer<ul><li><a href="#" class="item1">Lorem ipsum.</a></li><li><a href="#" class="item2">Perferendis, accusantium.</a></li><li><a href="#" class="item3">Unde, quam.</a></li><li><a href="#" class="item4">Quos, recusandae.</a></li><li><a href="#" class="item5">Dolore, corrupti.</a></li></ul></div>');

  $templateCache.put('views/home/home.tmpl.html', '<section id="home-page" class="container"><h1 ng-bind="::homeText"></h1><h3 ng-bind="::strapline"></h3></section>');

}]);

})();