$(document).ready(function () {
    $("button").click(function() {
        $.getJSON("http://api.idescat.cat/pob/v1/cerca.json?callback=clara", function(result) {
            $.each(result, function(i, field) {
                $("div").append(field + " ");
            });
        });
    });
});
