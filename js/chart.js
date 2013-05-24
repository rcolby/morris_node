$(document).ready(function() {
  $.ajax({
    url: 'http://localhost:80/',
    method: 'get',
    jsonp: 'callback',
    jsonpCallback: 'callback',
    dataType: 'jsonp',
    success: function(data) {
      $('#chart').html('');
      new Morris.Line({
        element: 'chart',
        data: data,
        xkey: 'title',
        ykeys: ['value'],
        labels: ['Value']
      });
    }
  });
});