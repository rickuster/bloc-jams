var pointsArray = document.getElementsByClassName('point');
 
 var animatePoints = function(points) {

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

 window.onload = function() {
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
        }         
     });
 }