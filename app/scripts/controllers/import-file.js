'use strict';

PhonicsApp.controller('FileImportCtrl', function FileImportCtrl($scope,
  $modalInstance, $rootScope, $localStorage,FileLoader, Storage, ASTManager) {
  var results;

  $scope.fileChanged = function ($fileContent) {
    results = FileLoader.load($fileContent);
  };

  $scope.ok = function () {
    if (angular.isString(results)) {
      $rootScope.editorValue = results;
      Storage.save('yaml', results);
      ASTManager.refresh();
    }
    $modalInstance.close();
  };

  $scope.isInvalidFile = function () {
    return results === null;
  };

  $scope.isFileSelected = function () {
    return !!results;
  };

  $scope.cancel = $modalInstance.close;
});
