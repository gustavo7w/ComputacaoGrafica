/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function tranformacaoGeometrica(matrizBase, imageData, TamMarcadoX,TamMarcadoY, operacao){

    var arrPixelsOriginal = imageData.data;
    var arrPixelsModificar = imageData.data.slice();
    var Largura = 512; 
    var Altura = 512;
    TamMarcadoX=512;
    TamMarcadoY=512;
    var posx = 0;
    var posy = 0;
    var x=0;
    var red;
    var green;
    var blue;
    var alpha;
    var xTorto = 0;
    var yTorto = 0;
    
    //Zera a Imagem(deixa toda branca)
    var numpixels = arrPixelsModificar.length / 4;
    for (var pos = 0; pos < numpixels; pos++) {
        arrPixelsModificar[pos * 4 + 0] = 255;
        arrPixelsModificar[pos * 4 + 1] = 255;
        arrPixelsModificar[pos * 4 + 2] = 255;
        arrPixelsModificar[pos * 4 + 3] = 255;
    }
    
    //Se for rotação ou ampliacao, primeiro preciso calcular o centro da imagem girada e colocar no centro do canvas usando a translação
    if ((operacao == 'Rotacao')||(operacao == 'AmpliacaoReducao')){
        xTorto = Math.floor((((Largura/2) * matrizBase[1][0]) + ((Altura/2) * matrizBase[1][1]) + (matrizBase[1][2])));
        yTorto = Math.floor((((Largura/2) * matrizBase[0][0]) + ((Altura/2) * matrizBase[0][1]) + matrizBase[0][2]));
        matrizBase[1][2] = (Largura/2) - xTorto;
        matrizBase[0][2] = (Altura/2) - yTorto;
    }
    
    for(var x = 0; x < TamMarcadoX; x++) {
        for(var y = 0; y < TamMarcadoY; y++) {
            posy = Math.floor(((x * matrizBase[1][0]) + (y * matrizBase[1][1]) + matrizBase[1][2]));
            posx = Math.floor(((x * matrizBase[0][0]) + (y * matrizBase[0][1]) + matrizBase[0][2]));

            //Trata os pixels fora do Canvas
            //Se for Translação, Matriz Livre ou Rotação remove os pixels, senão calcula a nova posição
            if ((operacao == 'Translacao')||(operacao == 'MatrizLivre')||(operacao == 'Rotacao')||(operacao == 'AmpliacaoReducao')){
                if (posy < 0){
                  posy = 0;
                }
                if (posx < 0){
                        posx = 0;
                }
                if (posx >= TamMarcadoX -1){
                    posx = 0;
                }
                if (posy >= TamMarcadoY -1){
                    posy = 0;
                }
            }
            else{
                if (posy < 0){
                posy = posy+(TamMarcadoY-1);
                }
                if (posx < 0){
                        posx = posx+(TamMarcadoX-1);
                }
                if (posx > TamMarcadoX){
                    posx = x;
                }
                if (posy > TamMarcadoY){
                    posy = y;
                }      
            }

            //Pega o valor de cada camada de cor do pixel atual
            red   = arrPixelsOriginal[((Largura * y) + x) * 4 + 0];
            green = arrPixelsOriginal[((Largura * y) + x) * 4 + 1];
            blue  = arrPixelsOriginal[((Largura * y) + x) * 4 + 2];
            alpha = arrPixelsOriginal[((Largura * y) + x) * 4 + 3];
            
            //Escreve as cores acima na nova posição do pixel atual
            arrPixelsModificar[((Largura * posy) + posx) * 4 + 0] = red;
            arrPixelsModificar[((Largura * posy) + posx) * 4 + 1] = green;
            arrPixelsModificar[((Largura * posy) + posx) * 4 + 2] = blue;
            arrPixelsModificar[((Largura * posy) + posx) * 4 + 3] = alpha;
        }
    }
    
    //Reescreve o imagedata com os pixels modificados
    var numpixels = arrPixelsOriginal.length;
    for (var pos = 0; pos < numpixels; pos++) {
        arrPixelsOriginal[pos] = arrPixelsModificar[pos];
    }

    return imageData;
}

function Cinza(){
     var canvas = document.getElementById('myCanvas');
     var context = canvas.getContext('2d');

     var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);
     imgCinza = escalaCinza(imagedata);
     context.putImageData(imgCinza, 0, 0);
 } 

 function escalaCinza(imageData){
         var arrPixels = imageData.data;
         var numpixels = arrPixels.length / 4;

         for (var pos = 0; pos < numpixels; pos++) {
         /*var gray = (arrPixels[pos * 4 + 0] * 0.3 + 
                    arrPixels[pos * 4 + 1] * 0.59 +
                    arrPixels[pos * 4 + 2] * 0.11)/3;*/
        var gray = (arrPixels[pos * 4 + 0]+ 
                    arrPixels[pos * 4 + 1] +
                    arrPixels[pos * 4 + 2])/3;

         arrPixels[pos * 4] = gray;
         arrPixels[pos * 4 + 1] = gray;
         arrPixels[pos * 4 + 2] = gray;
         }

         return imageData;
 }

function imagem(){
    var canvas = document.getElementById('myCanvas'); //document.getElementById('myCanvas').getContext('2d');
    var context = canvas.getContext('2d');
    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);
    return imagedata;
}

 //Histograma
 function histogramaImg(imageData){
         var arrPixels = imageData.data;
         arrValores = new Array;
         for (var i=0;i<=255;i++){
                 arrValores[i] = 0;
         }

         for (var pos = 0; pos < arrPixels.length; pos+=4){
                 valorPixel = arrPixels[pos];
                 arrValores[valorPixel] += 1;
         }

         return arrValores;
 }
 
  //Media
 function mediaImg(imageData){
         var arrPixels = imageData.data;
         var numpixels = arrPixels.length / 4;
         var somaPixels = 0;
         for (var pos = 0; pos < arrPixels.length; pos+=4){
                 valorPixel = arrPixels[pos];
                 somaPixels += valorPixel;
         }
         var media = somaPixels/numpixels;
         return media;
 }
 
  //Mediana
 function medianaImg(imageData){
         var arrPixels = imageData.data;

         var arrPixelsSimples = new Array;
         var i = 0;
         for (var pos = 0; pos < arrPixels.length; pos+=4){
                 valorPixel = arrPixels[pos];
                 arrPixelsSimples[i] = valorPixel;
                 i++;
         }

         arrPixelsSimples.sort();
         return arrPixelsSimples[Math.floor(arrPixelsSimples.length / 2)];
 }
 
 //Moda
 function modaImg(arrHistograma){
         var max = Math.max.apply( Math, arrHistograma);
         return arrValores.indexOf(max);
 }

 //Variancia
 function varianciaImg(imageData, mediaImg){

         var arrPixels = imageData.data;
         var numpixels = arrPixels.length / 4;
         var somaVariancia=0;
         for (var pos = 0; pos < arrPixels.length; pos+=4){
                 somaVariancia += Math.pow((arrPixels[pos] - mediaImg), 2);
         }
         return somaVariancia / numpixels;
 }