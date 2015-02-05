"use strict";
var app = null;

(function(){
app = angular.module('sample',['gettext']);





angular.module('sample').run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('ja_JP');
});


})();
