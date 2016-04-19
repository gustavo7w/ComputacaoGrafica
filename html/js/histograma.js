/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var area, ctx;
function histograma() {
        $(".modal").modal({
           show:true 
        });
        $('#wrapper').removeClass('show-nav');
        
        $("#media").empty().append(mediaImg(imagem())+" média");
        $("#mediana").empty().append(medianaImg(imagem())+" mediana");
        $("#moda").empty().append(modaImg(histogramaImg(imagem()))+" moda");
        $("#variancia").empty().append(varianciaImg(imagem(),mediaImg(imagem()))+" variancia");
        
        
        area = document.getElementById("histograma");
        ctx = area.getContext('2d');
        ctx.clearRect(0, 0, area.width, area.height);
        
        
	var data =  histogramaImg(imagem()); //[1, 12, 20, 14, 13, 9, 5, 25]
	var barcolor='blue';
	drawHistogram(data, barcolor);
}

function drawHistogram(data, barcolor){
	ctx.save();

	ctx.font = '05pt Calibri';
	ctx.fillStyle=barcolor;
	barwidth=4;
	barspace=1;
	barunit=0.1;
        console.log(data.length);
	var posX = 0;
	var posY = 0;
	for (var i=0; i<data.length; i++){
		barheight=data[i] * barunit;
		posX = i*barspace + i*barwidth;
		posY = 400 - barheight;
		ctx.fillRect(posX, posY + 10, barwidth, barheight);
		ctx.save(); 
		ctx.fillStyle='black';
                ctx.fillText(i, posX, posY - 20);
		//ctx.fillText(data[i], posX, posY);

		ctx.restore();
	}

	ctx.restore();
}

