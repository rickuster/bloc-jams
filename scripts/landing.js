var animatePoints = function () {
 
     var points = document.getElementsByClassName('point');

     var revealPoint = function (classNodeElementIndex) {
         classNodeElementIndex.style.opacity = 1;
         classNodeElementIndex.style.transform = "rotate(360deg)";
         classNodeElementIndex.style.msTransform = "rotate(360deg)";
         classNodeElementIndex.style.WebkitTransform = "rotate(360deg)";

     };

    for (var i=0; i < points.length; i++){
        revealPoint(points[i]);
    }
   
 };