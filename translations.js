angular.module('sample').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('ja_JP', {"Sample Application":"サンプル アプリケーション","This text will be shown in particular language.":"このテキストが表示されます特に言語。"});
/* jshint +W100 */
}]);