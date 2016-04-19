/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var image, media, mediana, moda, variancia, arrPixels, can,con;

function alterar(param){
    
    can = document.getElementById('myCanvas'); //document.getElementById('myCanvas').getContext('2d');
    con = can.getContext('2d');
    image = con.getImageData(0, 0, can.width, can.height);
    arrPixels = image.data;

    media = mediaImg(image);
    mediana = medianaImg(image);
    moda = modaImg(histogramaImg(image));
    variancia = varianciaImg(image,media);

    arrPixels = image.data;
    
    console.log(media);
    console.log(mediana);
    console.log(moda);
    console.log(variancia);
    
    switch (param){
        case 'A':
            alterarA();
            break;
        case 'B':
            alterarB();
            break;
        case 'C':
            alterarC();
            break;
        case 'D':
            alterarD();
            break;
        case 'E':
            alterarE();
            break;
    }
}

function alterarA(){
    for (var pos = 0; pos < arrPixels.length; pos+=4){
        if (arrPixels[pos] >= media){
                arrPixels[pos] = 255;
                arrPixels[pos+1] = 255;
                arrPixels[pos+2] = 255;
                arrPixels[pos+3] = 255; //Alfa
        }

    }
    
    con.putImageData(image, 0, 0);
    
}

function alterarB(){
    for (var pos = 0; pos < arrPixels.length; pos+=4){
        if (arrPixels[pos] >= moda){
                arrPixels[pos] = 0;
                arrPixels[pos+1] = 0;
                arrPixels[pos+2] = 0;
                arrPixels[pos+3] = 255; //Alfa
        }

    }
    
    con.putImageData(image, 0, 0);
    
}

function alterarC(){
    for (var pos = 0; pos < arrPixels.length; pos+=4){
        if (arrPixels[pos] >= mediana){
                arrPixels[pos] = 140;
                arrPixels[pos+1] = 140;
                arrPixels[pos+2] = 140;
                arrPixels[pos+3] = 255; //Alfa
        }

    }
    
    con.putImageData(image, 0, 0);
    
}

function alterarD(){
    for (var pos = 0; pos < arrPixels.length; pos+=4){
        if (arrPixels[pos] < media){
                arrPixels[pos] = 255;
                arrPixels[pos+1] = 255;
                arrPixels[pos+2] = 255;
                arrPixels[pos+3] = 255; //Alfa
        }

    }
    
    con.putImageData(image, 0, 0);
    
}

function alterarE(){
    for (var pos = 0; pos < arrPixels.length; pos+=4){
        if (arrPixels[pos] > mediana){
                arrPixels[pos] = 0;
                arrPixels[pos+1] = 0;
                arrPixels[pos+2] = 0;
                arrPixels[pos+3] = 255; //Alfa
        }
         
        if (arrPixels[pos] < media){
                arrPixels[pos] = 255;
                arrPixels[pos+1] = 255;
                arrPixels[pos+2] = 255;
                arrPixels[pos+3] = 255; //Alfa
        }
    }
    
    con.putImageData(image, 0, 0);
    
}
function rad(num){
    return num*(Math.PI / 180);
}

function MatrizLivre(form){
    var x1 = parseFloat(form.x1.value);
    var x2 = parseFloat(form.x2.value);
    var x3 = parseFloat(form.x3.value);
    var y1 = parseFloat(form.y1.value);
    var y2 = parseFloat(form.y2.value);
    var y3 = parseFloat(form.y3.value);

    console.log('X1: ' + x1 + 'X2: ' + x2 + 'X3: ' + x3 + 'Y1: ' + y1 + 'Y2: ' + y2 + 'Y2: ' + y3);
	
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

    imgCinza = tranformacaoGeometrica([[x1,x2,x3],[y1,y2,y3]],imagedata,512,512,'MatrizLivre');
	//imgCinza = tranformacaoGeometrica([[1,0,0],[0,1,0]],imagedata);
    console.log('4');
    context.putImageData(imgCinza, 0, 0);
}

function Translacao(form){
    var esquerda = parseFloat(form.esquerda.value);
    var direita = parseFloat(form.direita.value);
    var cima = parseFloat(form.cima.value);
    var baixo = parseFloat(form.baixo.value);
	
    var coordX = direita - esquerda;
    var coordY = baixo - cima;
	
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

    imgCinza = tranformacaoGeometrica([[1,0,coordX],[0,1,coordY]],imagedata,512,512,'Translacao');
	//imgCinza = tranformacaoGeometrica([[1,0,0],[0,1,0]],imagedata);
    console.log('4');
    context.putImageData(imgCinza, 0, 0);
}

function EspelharVert(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

    imgCinza = tranformacaoGeometrica([[1,0,0],[0,-1,0]],imagedata);
	//imgCinza = tranformacaoGeometrica([[1,0,0],[0,1,0]],imagedata);
    console.log('4');
    context.putImageData(imgCinza, 0, 0);
}

function EspelharHoriz(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

    imgCinza = tranformacaoGeometrica([[-1,0,0],[0,1,0]],imagedata);
	//imgCinza = tranformacaoGeometrica([[1,0,0],[0,1,0]],imagedata);
    console.log('4');
    context.putImageData(imgCinza, 0, 0);
}

function Rotacao(form){   
    var angulo = parseFloat(form.angulo.value);
    
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

    imgCinza = tranformacaoGeometrica([[Math.cos(rad(angulo)),-Math.sin(rad(angulo)),0],[Math.sin(rad(angulo)),Math.cos(rad(angulo)),0]],imagedata,512,512,'Rotacao');

    context.putImageData(imgCinza, 0, 0);
}

function AmpliacaoReducao(form){
    var multiplicadorX = parseFloat(form.multiplicadorX.value);
    var multiplicadorY = parseFloat(form.multiplicadorY.value);
    
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

    imgCinza = tranformacaoGeometrica([[multiplicadorX,0,0],[0,multiplicadorY,0]],imagedata,512,512,'AmpliacaoReducao');

    context.putImageData(imgCinza, 0, 0);
}