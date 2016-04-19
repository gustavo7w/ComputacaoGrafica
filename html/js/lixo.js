/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

             /*   function tranformacaoGeometrica(matrizBase, imageData, Largura, Altura){
                var arrPixels = imageData.data;
                Largura = 512; 
                Altura = 512;
                l=100;
                a=100;
                posx = 0;
                posy = 0;
                for(var y = 0; y < a; y++) {
                    posy = (x * matrizBase[1][0]) + (y * matrizBase[1][1]) + matrizBase[1][2];
                    for(var x = 0; x < l; x++) {
                        posx = (x * matrizBase[0][0]) + (x * matrizBase[0][1]) + matrizBase[0][2];
                        var red = arrPixels[((Largura * y) + x) * 4];
                        var green = arrPixels[((Largura * y) + x) * 4 + 1];
                        var blue = arrPixels[((Largura * y) + x) * 4 + 2];
                        var alpha = arrPixels[((Largura * y) + x) * 4 + 3];
                        
                        arrPixels[((Largura * posy) + posx) * 4 + 0] = red;
                        arrPixels[((Largura * posy) + posx) * 4 + 1] = green;
                        arrPixels[((Largura * posy) + posx) * 4 + 2] = blue;
                        arrPixels[((Largura * posy) + posx) * 4 + 3] = alpha;
                    }
                }
                
                return imageData;
            }*/
            /*
            function xy(x,y,valor, canvas, imageData){
                var arrPixels = imageData.data;
                Largura = canvas.width;
                Altura = canvas.height;
                arrPixels[((Largura * y) + x) * 4] = valor; //Red
                arrPixels[((Largura * y) + x) * 4 + 1] = valor; //Green
                arrPixels[((Largura * y) + x) * 4 + 2] = valor; //Blue
                //arrPixels[((Largura * y) + x) * 4 + 3]; //Alpha
                
                return imageData;
            }*/
             /* 
              function Testes(){
                var canvas = document.getElementById('myCanvas');
                var context = canvas.getContext('2d');
                
                var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);
                
                imgCinza = tranformacaoGeometrica([[2,0,0],[0,2,0]],imagedata);

                context.putImageData(imgCinza, 0, 0);
        
                
            } */

               /*//a) Valores maiores ou iguais a média de toda a imagem recebem branco.
                media = mediaTonalidadeImg(imagedata);
                for (var pos = 0; pos < arrPixels.length; pos+=4){
                        if (arrPixels[pos] >= media){
                                arrPixels[pos] = 255;
                                arrPixels[pos+1] = 255;
                                arrPixels[pos+2] = 255;
                                arrPixels[pos+3] = 255; //Alfa
                        }
                }
                context.putImageData(imgCinza, 0, 0);
                */

                //b) Valores maiores ou iguais a moda de toda a imagem recebem preto.
                /*moda = modaImg(histogramaImg(imagedata));
                for (var pos = 0; pos < arrPixels.length; pos+=4){
                        if (arrPixels[pos] >= moda){
                                arrPixels[pos] = 0;
                                arrPixels[pos+1] = 0;
                                arrPixels[pos+2] = 0;
                                arrPixels[pos+3] = 255; //Alfa
                        }
                }
                context.putImageData(imgCinza, 0, 0);
                */

                //c) Valores maiores ou iguais a mediana de toda a imagem recebem 140.
                /*mediana = medianaImg(imagedata);
                for (var pos = 0; pos < arrPixels.length; pos+=4){
                        if (arrPixels[pos] >= mediana){
                                arrPixels[pos] = 140;
                                arrPixels[pos+1] = 140;
                                arrPixels[pos+2] = 140;
                                arrPixels[pos+3] = 255; //Alfa
                        }
                }
                context.putImageData(imgCinza, 0, 0);
                */

                //d) Valores menores que a média de toda a imagem recebem 255.
                /*media = mediaTonalidadeImg(imagedata);
                for (var pos = 0; pos < arrPixels.length; pos+=4){
                        if (arrPixels[pos] < media){
                                arrPixels[pos] = 255;
                                arrPixels[pos+1] = 255;
                                arrPixels[pos+2] = 255;
                                arrPixels[pos+3] = 255; //Alfa
                        }
                }
                context.putImageData(imgCinza, 0, 0);
                */
                /*
                //e) Valores maiores que a mediana de toda a imagem recebem 0 e menores que a média recebem 255. 
                mediana = medianaImg(imagedata);
                media = mediaTonalidadeImg(imagedata);
                for (var pos = 0; pos < arrPixels.length; pos+=4){
                        if (arrPixels[pos] > mediana){
                                arrPixels[pos] = 0;
                                arrPixels[pos+1] = 0;
                                arrPixels[pos+2] = 0;
                                arrPixels[pos+3] = 255; //Alfa
                        }
                        else if (arrPixels[pos] < media){
                                arrPixels[pos] = 255;
                                arrPixels[pos+1] = 255;
                                arrPixels[pos+2] = 255;
                                arrPixels[pos+3] = 255; //Alfa
                        }
                }
                //context.putImageData(imgCinza, 0, 0);
                

                arrHistograma = histogramaImg(imagedata);
                var histograma='';
                for (var i=0;i<=255;i++){
                        histograma = histograma +' - ' + i + ': ' + arrHistograma[i];
                }
                //window.alert('Histograma: ' + histograma);
                //window.alert('Media: ' + mediaTonalidadeImg(imagedata));
                /*window.alert('Variancia: ' + varianciaImg(imagedata,mediaTonalidadeImg(imagedata)));
                window.alert('Mediana: ' + medianaImg(imagedata));
                window.alert('Moda: ' + modaImg(arrHistograma));*/



