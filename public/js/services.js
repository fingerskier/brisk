'use strict';

var FBURL = 'https://fingerskier.firebaseio.com/';

angular.module('brisk.services', [])
.factory('User', function($log) {
  var authClient = new FirebaseAuthClient(FBURL, function(error, user) {
    if (error) {
      $log.error(error);
    } else if (user) {
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    } else {
      console.info('User is logged out');
    }
  });

  return {
    create: function(email, password, callback) {
      authClient.createUser(email, password, callback);
    },
    login: function(email, password, rememberMe) {
      rememberMe = rememberMe || false;

      return authClient.login('password', {
        email: email,
        password: password,
        rememberMe: rememberMe
      });
    },
    logout: function() {
      return authClient.logout();
    }
  }
})
.factory('AppData', function($log, $rootScope) {
  var appRef = new Firebase(FBURL + 'app');

  appRef.on('value', function(snapshot) {
    $log.info('app data value', snapshot.val());
    $rootScope.$apply(function() {
      $rootScope.app = snapshot.val();
    });
  });
})
.factory('News', function($log, $rootScope) {
  var newsRef = new Firebase(FBURL + 'news');

  newsRef.on('value', function(snapshot) {
    $log.info('new news', snapshot.val());
    $rootScope.$apply(function() {
      $rootScope.news = snapshot.val();
    });
  });
})
;