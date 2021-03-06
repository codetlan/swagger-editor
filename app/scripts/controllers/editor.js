'use strict';

PhonicsApp.controller('EditorCtrl', function EditorCtrl($scope, $rootScope,
  Editor, Builder, Storage, ASTManager) {
  var debouncedOnAceChange = _.debounce(onAceChange, 1000);

  $scope.aceLoaded = Editor.aceLoaded;

  $scope.aceChanged = function () {
    Storage.save('progress', 0);
    debouncedOnAceChange();
  };

  Editor.ready(function () {
    Storage.load('yaml').then(function (yaml) {
      $rootScope.editorValue = yaml;
      onAceChange();
    });
  });

  function onAceChange() {
    var value = $rootScope.editorValue;

    Storage.save('yaml', value);
    ASTManager.refresh();
  }
});
