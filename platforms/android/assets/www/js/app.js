// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
	
var exampleApp = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

exampleApp.controller("ExampleController", function($scope, $cordovaBarcodeScanner, $cordovaCamera, $cordovaImagePicker) {
 
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            var image = document.getElementById('text');
            image.innerHTML = imageData.text;
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };

    $scope.clickPicture = function() {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    },function(err) {
      alert("Error");
      // error
    });

$scope.pickPicture = function() {

  var pic_options = {
   maximumImagesCount: 10,
   width: 800,
   height: 800,
   quality: 80
  };

  $cordovaImagePicker.getPictures(pic_options)
    .then(function (results) {
      alert("Successfull");
      for (var i = 0; i < results.length; i++) {
        var image = document.getElementById('text');
            image.innerHTML=image.innerHTML+results[i];
        console.log('Image URI: ' + results[i]);
      }
    }, function(error) {
      // error getting photos
    });

};

 

      };

// exampleApp.controller('PictureCtrl', function($scope, $cordovaCamera) {


//   };

  // document.addEventListener("deviceready", function () {

  //   var options = {
  //     quality: 50,
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     sourceType: Camera.PictureSourceType.CAMERA,
  //     allowEdit: true,
  //     encodingType: Camera.EncodingType.JPEG,
  //     targetWidth: 100,
  //     targetHeight: 100,
  //     popoverOptions: CameraPopoverOptions,
  //     saveToPhotoAlbum: false
  //   };

  //   $cordovaCamera.getPicture(options).then(function(imageData) {
  //     var image = document.getElementById('myImage');
  //     image.src = "data:image/jpeg;base64," + imageData;
  //   }, function(err) {
  //     // error
  //   });

  // }, false);
});