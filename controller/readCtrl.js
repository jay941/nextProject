
angular.module('MyApp').controller('readCtrl', function ($scope) {


    // Obtain a reference to the canvas element
    // using its id.
    var canvas = document.getElementById('c'),

        // Obtain a graphics context on the
        // canvas element for drawing.
        ctx = canvas.getContext('2d');

    // Start listening to resize events and
    // draw canvas.
    initialize();

    function initialize() {
        // Register an event listener to
        // call the resizeCanvas() function each time 
        // the window is resized.
        window.addEventListener('resize', resizeCanvas, false);

        // Draw canvas border for the first time.
        resizeCanvas();
    }

    // Display custom canvas.
    // In this case it's a blue, 5 pixel border that 
    // resizes along with the browser window.	
     var jarra=[];
        var jarra1=[];				
    function mobileView() {
        ctx.strokeStyle = 'green';
        ctx.lineWidth = '3';
        // ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);

        var a = 20, a1 = 140;
        var b = 15, b1 = 60;
        var xx = 200, xx1 = 180;
        var xy = 15, xy1 = 60;
       
        $.getJSON('data.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj1 = new Image();

                    imageObj1.onload = function () {
                        ctx.drawImage(imageObj1, a, b, canvas.width - 200, canvas.height - 350);
                      
                        b = b + 100;
                        ctx.beginPath();
                        ctx.arc(a1, b1, 5, 0, 2 * Math.PI);
                        ctx.stroke();
                         jarra.push({x:a1,y:b1,id:element.id})
                        b1 = b1 + 100;
                       

                    };
                    imageObj1.id = element.id;
                    imageObj1.src = element.Image;




                })
            })
        })


        $.getJSON('data1.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj12 = new Image();
                    imageObj12.onload = function () {
                        ctx.drawImage(imageObj12, xx, xy, canvas.width - 200, canvas.height - 350);
                        xy = xy + 100;
                        ctx.beginPath();
                        ctx.arc(xx1, xy1, 5, 0, 2 * Math.PI);
                        ctx.stroke();
                      jarra1.push({x:xx1,y:xy1,id:element.id})
                        xy1 = xy1 + 100
                          
                    };
                    imageObj12.id = element.id;
                    imageObj12.src = element.Image;




                })
            })
        })
    }


    //canvas for tabView
    function tabView() {



        ctx.strokeStyle = 'green';
        ctx.lineWidth = '3';
        // ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);

        var a = 50, a1 = 230;
        var b = 40, b1 = 70;
        var xx = 800, xx1 = 700;
        var xy = 40, xy1 = 70;
        $.getJSON('data.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj1 = new Image();
                    imageObj1.onload = function () {


                        ctx.drawImage(imageObj1, a, b, canvas.width - 900, canvas.height - 500);
                      
                        b = b + 100;
                        ctx.beginPath();
                        ctx.arc(a1, b1, 10, 0, 2 * Math.PI, canvas.width - 900, canvas.height - 500);
                        ctx.stroke();
                       jarra.push({x:a1,y:b1,id:element.id})
                        b1 = b1 + 100;


                    };
                    imageObj1.id = element.id;
                    imageObj1.src = element.Image;


                })
            })
        })


        $.getJSON('data1.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj12 = new Image();
                    imageObj12.onload = function () {
                        ctx.drawImage(imageObj12, xx, xy, canvas.width - 900, canvas.height - 500);
                        xy = xy + 100;
                        ctx.beginPath();
                        ctx.arc(xx1, xy1, 10, 0, 2 * Math.PI, canvas.width - 900, canvas.height - 500);
                        ctx.stroke();
                        jarra1.push({x:xx1,y:xy1,id:element.id})
                        xy1 = xy1 + 100
                    };
                    imageObj12.id = element.id;
                    imageObj12.src = element.Image;




                })
            })
        })


    }
    //canvas for deskView
    function deskView() {


        ctx.strokeStyle = 'green';
        ctx.lineWidth = '3';
        // ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);

        var a = 90, a1 = 320;
        var b = 40, b1 = 125;
        var xx = 1000, xx1 = 900;
        var xy = 40, xy1 = 125;
        $.getJSON('data.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj1 = new Image();

                    imageObj1.onload = function () {


                        ctx.drawImage(imageObj1, a, b);
                       
                        b = b + 150;
                        ctx.beginPath();
                        ctx.arc(a1, b1, 10, 0, 2 * Math.PI);
                        ctx.stroke();
                        jarra.push({x:a1,y:b1,id:element.id})
                        b1 = b1 + 150;


                    };
                    imageObj1.id = element.id;
                    imageObj1.src = element.Image


                })
            })
        })

        $.getJSON('data1.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj12 = new Image();
                    imageObj12.onload = function () {
                        ctx.drawImage(imageObj12, xx, xy);
                        xy = xy + 150;
                        ctx.beginPath();
                        ctx.arc(xx1, xy1, 10, 0, 2 * Math.PI);
                        ctx.stroke();
                        jarra1.push({x:xx1,y:xy1,id:element.id})
                        xy1 = xy1 + 150
                    };
                    imageObj12.id = element.id;
                    imageObj12.src = element.Image;




                })
            })
        })




    }



    function otherView() {
        ctx.strokeStyle = 'green';
        ctx.lineWidth = '3';
        // ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);

        var a = 10, a1 = 120;
        var b = 20, b1 = 60;
        var xx = 250, xx1 = 200;
        var xy = 20, xy1 = 60;
        $.getJSON('data.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj1 = new Image();

                    imageObj1.onload = function () {
                        ctx.drawImage(imageObj1, a, b, 60, 60);
                      
                        b = b + 100;
                        ctx.beginPath();
                        ctx.arc(a1, b1, 5, 0, 2 * Math.PI);
                        ctx.stroke();
                        jarra.push({x:a1,y:b1,id:element.id})
                        b1 = b1 + 100;
                         

                    };
                    imageObj1.id = element.id;
                    imageObj1.src = element.Image
                    console.log(imageObj1.id)


                })
            })
        })

        $.getJSON('data1.json', function (data11) {

            $.each(data11, function (index, element) {
                $.each(element, function (index, element) {
                    var imageObj12 = new Image();
                    imageObj12.onload = function () {
                        ctx.drawImage(imageObj12, xx, xy, 60, 60);
                        xy = xy + 100;
                        ctx.beginPath();
                        ctx.arc(xx1, xy1, 5, 0, 2 * Math.PI);
                        ctx.stroke();
                        jarra1.push({x:xx1,y:xy1,id:element.id})
                         xy1 = xy1 + 100
                         
                    };
                    imageObj12.id = element.id;
                    imageObj12.src = element.Image;




                })
            })
        })


    }

    var x, y;
    var co_Coordinates = [];
    canvas.addEventListener('click', function (evt) {
   
        x = evt.layerX-canvas.offsetLeft;
        y = evt.layerY-canvas.offsetTop;
        // var hashkey = y.toString();
        // var po = hashkey.substr(0, 2)
        console.log(x,y,jarra,jarra1)


        for(var i=0;i<jarra.length;i++){
            if((x >= (jarra[i].x -10) && x <= (jarra[i].x + 10))&& (y >= (jarra[i].y - 10) && y <= (jarra[i].y + 10)))
            {
                co_Coordinates.push({ x: x, y: y,id:jarra[i].id })
                console.log(co_Coordinates)
            }
        }
        for(var i=0;i<jarra1.length;i++){
            if((x >= (jarra1[i].x -10) && x <= (jarra1[i].x + 10))&& (y >= (jarra1[i].y - 10) && y <= (jarra1[i].y + 10)))
            {
                co_Coordinates.push({ x: x, y: y,id:jarra[i].id })
                console.log(co_Coordinates)
            }
        }
         if (co_Coordinates.length == 2) {
            if (co_Coordinates[0].id==co_Coordinates[1].id) 
            {
                drawLine(co_Coordinates);
            }
            else {
                drawLine1(co_Coordinates);
                co_Coordinates = [];
            }


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
        ctx.strokeStyle = "green";
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        if (close_it) ctx.closePath();
        ctx.stroke();
    }


    function drawLine1(co_Coordinates) {
        drawNextLine1(ctx, co_Coordinates[0].x, co_Coordinates[0].y, co_Coordinates[1].x, co_Coordinates[1].y);
    }
    function drawNextLine1(ctx, x, y, x1, y1) {
        co_Coordinates = [];
        var close_it = false;

        ctx.lineWidth = 3;  // thick lines
        ctx.beginPath();
        ctx.lineJoin = "miter";  // default
        ctx.strokeStyle = "red";
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        if (close_it) ctx.closePath();
        ctx.stroke();
         co_Coordinates = [];



    }


    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log(canvas.width, canvas.height)
        if (canvas.width <= 310 && canvas.height <= 444) {
            console.log('mobile')
            mobileView();

        }
        else if (canvas.width <= 980 && canvas.height <= 570) {
            console.log('tab')
            tabView();

        }

        else if (canvas.width >= 980 && canvas.height >= 570) {
            console.log('other')
            deskView();
        }
        else {

            otherView();
        }

    }





})











