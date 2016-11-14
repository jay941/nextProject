
angular.module('MyApp').controller('readCtrl', function ($scope, $http) {



    // restcall for geting json data
    $http({ method: 'GET', url: 'data.json' }).success(function (data) {
        $scope.data = data.data;


    });
    $scope.isDisabled = true;
    // Dreag and Drop
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () { $scope.centerAnchor = !$scope.centerAnchor }
    $scope.droppedObjects1 = [];
    $scope.onDropComplete1 = function (data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1) {
            $scope.droppedObjects1.push(data);
            $scope.isDisabled = false;

        }

    }

    $scope.onDragSuccess1 = function (data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
     }
    //refresh the Drop are
    $scope.refresh = function () {
        $scope.droppedObjects1 = [];
    }

    //creating canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var elementName;
    //restcall for obtaining image from json
    $.getJSON('data.json', function (data) {
        $.each(data, function (index, element) {
            $.each(element, function (index, element) {
                var imageObj = new Image();
                imageObj.onload = function () {

                    ctx.drawImage(imageObj, element.x, element.y);
                };
                imageObj.id = element.Name;
                imageObj.src = element.Image;
            });
        });
    });

    $.getJSON('data1.json', function (data11) {
        $.each(data11, function (index, element) {
            $.each(element, function (index, element) {
                var imageObj1 = new Image();
                imageObj1.onload = function () {

                    ctx.drawImage(imageObj1, element.x, element.y);
                };
                imageObj1.id = element.Name;
                imageObj1.src = element.Image;
             
            });
        });
    });
    var co_Coordinates = []
    canvas.addEventListener('click', function (evt) {
     console.log(evt)

        x = evt.layerX;
        y = evt.layerY;
        co_Coordinates.push({ x: x, y: y })
        console.log(co_Coordinates)
        if (co_Coordinates.length == 2) {
            drawLine(co_Coordinates);
        }
    })
    function drawLine(co_Coordinates) {
     drawNextLine(ctx, co_Coordinates[0].x, co_Coordinates[0].y, co_Coordinates[1].x, co_Coordinates[1].y);
    }
    function drawNextLine(ctx, x, y, x1, y1) {
        co_Coordinates = [];
        var close_it = false;

        ctx.lineWidth = 3;  // thick lines
        ctx.beginPath();
        ctx.lineJoin = "miter";  // default
        ctx.strokeStyle = "blue";
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        if (close_it) ctx.closePath();
        ctx.stroke();
        


    }


})
