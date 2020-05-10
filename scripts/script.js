$(document).ready(function(){
    mySvg = $('svg').drawsvg({'reverse': 'false', 'stagger': 200, 'duration': 1000});
    $('svg').css({stroke: 'black'});
    $(window).scroll(function(){
        // var position = 0.5;
        console.log($(window).scrollTop()/($(document).height()/2 -  $(window).height()));
        var position = ($(window).scrollTop())/($(document).height()/2 -  $(window).height());
        mySvg.drawsvg('progress', position);
        if(position > 1 && position < 2){
            $('svg').css({'width': 90 / position + '%', 'left': 25 + (position*25) + '%', 'top': 80 - (position*30) + '%'});
            // $('svg').css({'transform': 'scale(' + (1 / position)+ ')', 'left': 20 + (position*30) + '%', 'top': 80 - (position*30) + '%'});
        }
        if(position > 2){
            $('path').css({fill: 'goldenrod'});
        }else{
            $('path').css({fill: 'white'});
        }

    });
    $("#fotki").vc3dEye({
        imagePath:"images/",// the location where you’ve put the images.
        totalImages:9,// the number of images you have.
        imageExtension:"jpg" // the extension of the images. Make sure all the images have same extension.
    });
    $('svg').hover(function(){
        $('path').css({fill: 'goldenrod'});

    }, function(){
        $('path').css({fill: 'white'});
    });
});