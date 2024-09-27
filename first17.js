$(document).ready(function(){
    $.getJSON('data.json', function (data) {
        $.each(data,function(index,user){
            $('#user-table tbody').append('<tr><td>' + +',/td><td> + user.name')
        });
    });
});