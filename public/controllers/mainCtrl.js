'use strict';

var mainCtrl = angular.module('mainCtrl', []);

mainCtrl.controller('mainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    var vm = this;
    $scope.muteButton = false;

    $scope.soundVideo = function () {
        var video = $("#video").get(0);
        if (video.muted) {
            video.removeAttribute('muted');
            video.muted = false;
            video.volume = 0;
            vm.volumeUp();
            $scope.videoSound = true;
            $scope.hideVideoText = true;
        } else {
            video.setAttribute('muted', '');
            video.muted = true;
            vm.volumeDown();
            $scope.videoSound = false;
            $scope.hideVideoText = false;
        }
    };

    vm.volumeUp = function () {
        var video = $("#video").get(0);
        if (video.volume < 0.99) {
            video.volume = video.volume + 0.1;
            $timeout(vm.volumeUp, 1000);
        } else {
            video.volume = 1;
        }
    };

    vm.volumeDown = function () {
        var video = $("#video").get(0);
        if (video.volume > 0.01) {
            video.volume = video.volume - 0.1;
            $timeout(vm.volumeDown, 1000);
        } else {
            video.volume = 0;
            video.muted = true;
        }
    };

}]);