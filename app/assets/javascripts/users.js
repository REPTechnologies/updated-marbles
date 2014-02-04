var App = {
  messageTime: 3000
};
(function($, undefined) {
  var timer = null;

  var clearMessages = function clearMessagesFn() {
    $('#messages').empty();
  };

  var addAlert = function addAlertFn(msg, classes) {
    classes = $.isArray(classes) ? classes : classes.split(' ');
    classes.push('alert');
    $('<div/>', {
      'class': classes.join(' ')
    }).append($('<div/>', {
      'class': 'center',
      text: msg
    })).appendTo('#messages');
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      $('#messages .alert').fadeOut().promise().done(clearMessages);
      timer = null;
    }, App.messageTime);
  };

  App.successMessage = function sucessMessageFn(msg) {
    addAlert(msg, 'alert-success');
  };

  App.errorMessage = function errorMessageFn(msg) {
    addAlert(msg, 'alert-danger');
  };

  App.clearMessages = clearMessages;
})(jQuery);

