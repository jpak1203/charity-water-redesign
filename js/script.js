var active = false;

$("#right").click(function() {
    if (active) {
        return;
    }
    var w = $(window).width();
    var susLeft = parseInt($("#sustainable").css("left"));
    var localLeft = parseInt($("#localpartners").css("left"));
    var proveLeft = parseInt($("#prove").css("left"));

    if (susLeft !== (w/2)) {
        active = true;
        $("#sustainable").animate({left: susLeft + (w * .75)}, 300);
        $("#localpartners").animate({left: localLeft + (w*.75)}, 300);
        $("#prove").animate({left: proveLeft + (w *.75)}, 300, function() {
            active = false;
        });
    }
})

$("#left").click(function() {
    if (active) {
        return;
    }
    var w = $(window).width();
    var susLeft = parseInt($("#sustainable").css("left"));
    var localLeft = parseInt($("#localpartners").css("left"));
    var proveLeft = parseInt($("#prove").css("left"));
    
    if (proveLeft !== (w/2)) {
        active = true;
        $("#sustainable").animate({left: susLeft - (w * .75)}, 300);
        $("#localpartners").animate({left: localLeft - (w*.75)}, 300);
        $("#prove").animate({left: proveLeft - (w*.75)}, 300, function() {
            active = false
        });
    }
})
