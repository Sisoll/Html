function doFirst() {

    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

}

function drawGrid() {

    // 格線
    if (canvas.width > canvas.height) {
        range = canvas.width / 50
    } else {
        range = canvas.height / 50
    }
    context.beginPath();
    for (let i = 0; i < range; i++) {
        let interval = i * 50
        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';
    context.stroke();
    // =========

    // 四分之一線
    context.strokeStyle = 'rgba(0,0,0,0.6)';

    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();

    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
    // =========
}

//針對不同位置需要改offset
function usePen(e) {
    console.log(e.offsetX - 500 + ',' + (e.offsetY - 500));
}

function loadImage() {
    context.globalAlpha = 0.2;
    context.drawImage(pic1, -795, -800, 540, 530);
    context.drawImage(pic2, -250, -760, 470, 470);
    context.drawImage(pic3, -450, 50, 410, 430);
    context.drawImage(pic4, 0, 15, 500, 470);

}

// 左上角開心
function drawface1() {

    pic1 = new Image()  //建立物件
    //pic1.src = './happy.png'
    //  pic1.addEventListener('load', loadImage)
    context.lineCap = 'round';
    context.lineJoin = 'round';


    //=== 製作色階 ===
    let gradient = context.createRadialGradient(30, 30, 200, 0, 0, 570);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.2, 'orange');
    gradient.addColorStop(0.4, 'yellow');
    gradient.addColorStop(0.6, 'green');
    gradient.addColorStop(0.8, 'blue');
    gradient.addColorStop(1, 'purple');

    // === 描邊上色 ===
    context.fillStyle = gradient;
    context.beginPath();
    context.moveTo(286, 133);

    context.quadraticCurveTo(262, 118, 223, 116);
    context.quadraticCurveTo(240, 20, 123, 141);
    context.quadraticCurveTo(26, 215, 80, 332);
    context.quadraticCurveTo(55, 367, 75, 400);
    context.arc(83, 395, 10, 0.6 * Math.PI, 0.3 * Math.PI, true);
    context.quadraticCurveTo(93, 367, 123, 370);
    context.quadraticCurveTo(123, 368, 170, 387);
    context.quadraticCurveTo(182, 432, 208, 400);
    context.quadraticCurveTo(208, 400, 218, 402);
    context.quadraticCurveTo(230, 490, 265, 407);
    context.quadraticCurveTo(282, 440, 308, 410);

    context.arcTo(330, 465, 340, 422, 10); //前2腳左側
    context.lineTo(344, 401); //前2腳右側
    context.quadraticCurveTo(360, 410, 377, 405); //前2腳到前3腳的肚子
    context.quadraticCurveTo(400, 460, 405, 390); //前3腳
    context.quadraticCurveTo(445, 314, 443, 230); //屁股
    context.bezierCurveTo(456, 189, 415, 234, 385, 195); //尾巴
    context.quadraticCurveTo(400, 60, 286, 133);
    context.fill();
    context.closePath();

    // ===  肚白

    context.beginPath();
    context.fillStyle = '#FFF';
    context.strokeStyle = '#FFF';
    context.lineWidth = 15;

    context.moveTo(134, 368);  //起點
    context.quadraticCurveTo(173, 370, 200, 394);
    context.fill();
    context.stroke();

    // === 畫線
    context.strokeStyle = '#333';
    context.lineWidth = 8;

    context.beginPath();
    context.moveTo(354, 172);  //起點
    context.quadraticCurveTo(175, 50, 76, 192); //耳朵弧到眼睛
    context.quadraticCurveTo(12, 360, 220, 400); //到前1腳
    context.quadraticCurveTo(230, 490, 265, 407); //前1腳
    context.quadraticCurveTo(288, 410, 306, 407); //前1腳到前2腳的肚子
    context.arcTo(330, 465, 340, 422, 10); //前2腳左側
    context.lineTo(344, 401); //前2腳右側
    context.quadraticCurveTo(360, 410, 377, 405); //前2腳到前3腳的肚子
    context.quadraticCurveTo(400, 460, 405, 390); //前3腳
    context.quadraticCurveTo(445, 314, 443, 230); //屁股
    context.bezierCurveTo(456, 189, 415, 234, 385, 195); //尾巴

    // === 右邊耳朵
    context.moveTo(286, 134);
    context.quadraticCurveTo(410, 50, 380, 223);

    // === 左邊耳朵
    context.moveTo(223, 116);
    context.quadraticCurveTo(240, 20, 123, 141);

    // === 左邊眼睛
    context.moveTo(102, 181);
    context.lineTo(118, 202);
    context.lineTo(96, 213);

    // === 右邊眼睛
    context.moveTo(305, 216);
    context.lineTo(270, 235);
    context.lineTo(310, 260);
    context.stroke();


    // === 後腳1
    context.moveTo(80, 333);
    context.quadraticCurveTo(55, 367, 75, 400);
    context.arc(83, 395, 10, 0.6 * Math.PI, 0.3 * Math.PI, true);
    context.quadraticCurveTo(93, 367, 123, 370);
    context.stroke();

    // === 後腳2
    context.moveTo(170, 387);
    context.quadraticCurveTo(182, 432, 208, 400);
    context.stroke();

    // === 後腳3
    context.moveTo(272, 407);
    context.quadraticCurveTo(282, 440, 300, 410);
    context.stroke();

    // === 嘴巴下緣
    context.beginPath();
    context.moveTo(152, 218);
    context.quadraticCurveTo(143, 336, 190, 322);
    context.quadraticCurveTo(215, 298, 219, 243);
    context.fillStyle = '#FF5151';
    context.fill();

    //嘴巴上緣
    context.moveTo(143, 203);
    context.quadraticCurveTo(152, 233, 177, 219);
    context.quadraticCurveTo(204, 260, 238, 227);
    context.stroke();


    // === 條紋的花色
    context.strokeStyle = 'rgba(140,140,140,0.4)';
    context.lineWidth = 13;
    context.beginPath();
    context.moveTo(398, 218);
    context.quadraticCurveTo(397, 235, 394, 250);
    context.stroke();
    context.moveTo(410, 222);
    context.quadraticCurveTo(413, 235, 414, 248);
    context.stroke();
    context.moveTo(425, 222);
    context.quadraticCurveTo(428, 235, 428, 239);
    context.stroke();
    context.closePath();
}
// 右上角生氣
function drawface2() {
    pic2 = new Image()  //建立物件
    // pic2.src = './angry.png'
    // pic2.addEventListener('load', loadImage)

    context.translate(500, 0);
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 8;
    context.strokeStyle = '#333';

    // === 描邊&上色
    context.fillStyle = '#00CACA';
    context.beginPath();
    context.moveTo(221, 117);  //起點在左耳的右側
    context.quadraticCurveTo(190, 55, 140, 154);
    context.quadraticCurveTo(-23, 330, 147, 425);
    context.quadraticCurveTo(161, 460, 177, 435); //左1腳
    context.quadraticCurveTo(180, 455, 186, 427); //左2腳
    context.quadraticCurveTo(250, 432, 317, 428);
    context.quadraticCurveTo(320, 441, 328, 430); //右2腳
    context.quadraticCurveTo(342, 460, 355, 426); //右1腳
    context.quadraticCurveTo(525, 350, 386, 152);
    context.quadraticCurveTo(385, 55, 308, 119); //右耳
    context.quadraticCurveTo(261, 102, 221, 117);
    context.fill();
    context.stroke();
    context.closePath();

    // === 補耳朵邊線條
    context.beginPath();
    context.moveTo(140, 154);
    context.quadraticCurveTo(261, 75, 386, 152);

    context.moveTo(148, 182);
    context.quadraticCurveTo(155, 185, 162, 191);

    context.moveTo(340, 189);
    context.quadraticCurveTo(350, 182, 353, 178);
    context.stroke();

    // === 嘴巴
    context.moveTo(221, 184);
    context.quadraticCurveTo(235, 205, 222, 220);

    context.moveTo(290, 220);
    context.quadraticCurveTo(273, 195, 294, 179);

    context.moveTo(227, 204);
    context.lineTo(254, 184);
    context.lineTo(283, 203);
    context.stroke();

    // === 周圍線條
    context.moveTo(52, 245);
    context.quadraticCurveTo(40, 260, 42, 305);

    context.moveTo(455, 210);
    context.quadraticCurveTo(470, 240, 466, 260);
    context.stroke();

    // === 377
    context.moveTo(55, 183);
    context.quadraticCurveTo(90, 200, 66, 172);
    context.quadraticCurveTo(90, 150, 73, 139);
    context.quadraticCurveTo(58, 113, 43, 140);
    context.quadraticCurveTo(10, 150, 32, 170);
    context.quadraticCurveTo(20, 195, 55, 183);

    context.moveTo(435, 143);
    context.quadraticCurveTo(440, 160, 456, 132);
    context.quadraticCurveTo(440, 110, 463, 99);
    context.quadraticCurveTo(408, 73, 425, 111);
    context.quadraticCurveTo(385, 90, 422, 130);
    context.quadraticCurveTo(370, 145, 435, 143);
    context.stroke();


    // 怒
    context.strokeStyle = '#BB0000';
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(375, 275);
    context.quadraticCurveTo(385, 288, 353, 300);
    context.moveTo(393, 277);
    context.quadraticCurveTo(385, 288, 406, 300);
    context.moveTo(359, 323);
    context.quadraticCurveTo(383, 292, 392, 322);
    context.stroke();

    //肚白
    context.fillStyle = '#eee';
    context.beginPath();
    context.moveTo(200, 424);
    context.quadraticCurveTo(260, 370, 300, 425);
    context.quadraticCurveTo(260, 430, 200, 424);
    context.fill();


    context.translate(-500, 0);
}
// 左下角哭哭
function drawface3() {
    pic3 = new Image()  //建立物件
    //  pic3.src = './cry.png'
    //pic3.addEventListener('load', loadImage)
    context.translate(0, 500);

    // === 描邊& 上色
    context.lineWidth = 12;
    // ???為什麼這邊12看起來才跟其他的8一樣
    context.beginPath();
    context.fillStyle = '#00CACA';
    context.strokeStyle = '#333';

    context.moveTo(131, 143);
    context.quadraticCurveTo(40, 172, 69, 234);
    context.quadraticCurveTo(60, 300, 108, 355);
    context.quadraticCurveTo(110, 400, 146, 372); //左腳
    context.quadraticCurveTo(200, 385, 253, 385); //肚子
    context.quadraticCurveTo(250, 425, 300, 385); //右前腳
    context.quadraticCurveTo(320, 386, 328, 380);
    context.quadraticCurveTo(338, 410, 370, 360); //右前腳2
    context.quadraticCurveTo(372, 380, 395, 340);
    context.quadraticCurveTo(405, 380, 425, 310); //右後腳3
    context.quadraticCurveTo(460, 250, 453, 170);
    context.quadraticCurveTo(270, 80, 131, 143);
    context.stroke();
    context.fill();
    context.closePath();

    // === 補線

    //??????為什麼這邊的寬度是其他的一半才一樣
    context.lineWidth = 6;

    context.beginPath();
    context.moveTo(131, 143); //耳朵
    context.quadraticCurveTo(67, 185, 69, 234);

    context.moveTo(108, 357); //左前腳
    context.quadraticCurveTo(113, 365, 146, 374);

    context.moveTo(328, 380);
    context.lineTo(334, 376);

    context.moveTo(395, 340);
    context.lineTo(399, 334);

    context.stroke();

    // === 耳朵
    context.beginPath();

    context.moveTo(329, 153);
    context.quadraticCurveTo(450, 215, 358, 260);
    context.stroke();

    // === 嘴巴
    context.beginPath();
    context.fillStyle = '#FF5151';
    context.lineWidth = 6;

    context.moveTo(188, 205);
    context.quadraticCurveTo(175, 215, 160, 225);
    context.quadraticCurveTo(180, 220, 208, 225);
    context.lineTo(188, 205);

    context.fill();
    context.stroke();
    context.closePath();

    // === 毛色
    context.beginPath();
    context.strokeStyle = 'rgba(0,148,148,0.6)';

    context.lineWidth = 13;

    context.moveTo(407, 155);
    context.quadraticCurveTo(425, 170, 423, 179);
    context.moveTo(373, 143);
    context.quadraticCurveTo(400, 170, 399, 181);
    context.moveTo(336, 131);
    context.quadraticCurveTo(372, 160, 370, 168);
    context.stroke();

    // === 肚白
    context.beginPath();
    context.fillStyle = '#EEE';
    context.lineWidth = 1;

    context.moveTo(124, 365);
    context.quadraticCurveTo(185, 290, 252, 385);
    context.quadraticCurveTo(198, 388, 124, 365);

    context.closePath();
    context.fill();

    // === 黑色眼珠

    context.fillStyle = '#222';

    context.beginPath();
    context.arc(104, 205, 28, 0, 2 * Math.PI);
    context.arc(107, 205, 28, 0, 2 * Math.PI);
    context.arc(107, 200, 30, 0, 2 * Math.PI);
    context.arc(111, 207, 30, 0, 2 * Math.PI);
    context.arc(107, 207, 28, 0, 2 * Math.PI);
    context.arc(107, 210, 29, 0, 2 * Math.PI);
    context.arc(109, 201, 31, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(284, 205, 38, 0, 2 * Math.PI);
    context.arc(284, 210, 37, 0, 2 * Math.PI);
    context.arc(288, 205, 38, 0, 2 * Math.PI);
    context.arc(289, 210, 39, 0, 2 * Math.PI);
    context.arc(289, 207, 38, 0, 2 * Math.PI);
    context.arc(291, 210, 38, 0, 2 * Math.PI);

    context.fill();

    // === 眼睛裡的淚珠
    context.fillStyle = '#ddd';
    context.beginPath(); //左
    context.arc(111, 187, 10, 0, 2 * Math.PI);
    context.arc(110, 194, 7, 0, 2 * Math.PI);
    context.arc(105, 193, 6, 0, 2 * Math.PI);
    context.arc(114, 191, 6, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(89, 213, 8, 0, 2 * Math.PI);
    context.arc(88, 216, 6, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(117, 213, 8, 0, 2 * Math.PI);
    context.arc(118, 222, 9, 0, 2 * Math.PI);
    context.arc(114, 222, 10, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();  //右
    context.arc(292, 194, 15, 0, 2 * Math.PI);
    context.arc(292, 194, 15, 0, 2 * Math.PI);
    context.arc(284, 192, 15, 0, 2 * Math.PI);
    context.arc(281, 196, 13, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(265, 222, 8, 0, 2 * Math.PI);
    context.arc(266, 223, 9, 0, 2 * Math.PI);
    context.arc(271, 226, 10, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(302, 228, 8, 0, 2 * Math.PI);
    context.arc(300, 229, 9, 0, 2 * Math.PI);
    context.arc(297, 226, 10, 0, 2 * Math.PI);
    context.fill();


    // === 眼睛旁的淚珠
    context.fillStyle = 'rgba(220,220,220,0.9)';
    context.beginPath();
    context.arc(322, 249, 13, 0, 2 * Math.PI);
    context.arc(316, 246, 10, 0, 2 * Math.PI);
    context.arc(324, 246, 8, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(77, 228, 7, 0, 2 * Math.PI);
    context.arc(74, 233, 9, 0, 2 * Math.PI);
    context.fill();

    context.translate(-250, -750);
}

// 右下角開心
function drawface4() {
    pic4 = new Image()  //建立物件
    pic4.src = './happy2.png'
    //pic4.addEventListener('load', loadImage)

    context.translate(750, 750);
    context.lineJoin = 'round';

    // 畫外框
    context.lineWidth = 8;
    context.strokeStyle = '#333';
    context.fillStyle = '#00CACA';
    context.beginPath();
    context.moveTo(307, 100);
    context.quadraticCurveTo(290, 32, 244, 84); //右耳
    context.quadraticCurveTo(200, 85, 176, 110);
    context.quadraticCurveTo(110, 85, 134, 160);//左耳
    context.quadraticCurveTo(80, 280, 151, 395);
    context.quadraticCurveTo(250, 500, 354, 399);
    context.quadraticCurveTo(397, 340, 393, 256);
    context.quadraticCurveTo(380, 150, 307, 100);
    context.fill();

    //補線
    context.moveTo(307, 100);
    context.quadraticCurveTo(287, 85, 244, 84); //右耳

    context.moveTo(176, 110);
    context.quadraticCurveTo(150, 130, 134, 160);//左耳
    context.stroke();

    // 手腳眼睛 (左開始逆時針)
    context.moveTo(152, 169);
    context.lineTo(176, 176);
    context.lineTo(153, 193);

    context.moveTo(160, 241);
    context.quadraticCurveTo(190, 173, 186, 246);

    context.moveTo(181, 274);
    context.quadraticCurveTo(235, 232, 206, 282);

    context.moveTo(212, 296);
    context.quadraticCurveTo(270, 255, 234, 311);

    context.moveTo(233, 350);
    context.quadraticCurveTo(280, 292, 286, 270);
    context.quadraticCurveTo(300, 292, 343, 310);

    context.moveTo(335, 295);
    context.quadraticCurveTo(300, 268, 348, 280);

    context.moveTo(322, 258);
    context.quadraticCurveTo(285, 220, 336, 235);

    context.moveTo(317, 205);
    context.quadraticCurveTo(298, 140, 341, 191);

    context.moveTo(312, 121);
    context.lineTo(289, 137);
    context.lineTo(321, 143);

    context.stroke();

    //周圍的線

    context.strokeStyle = '#888';
    context.beginPath();

    context.moveTo(64, 283);
    context.quadraticCurveTo(64, 320, 93, 374);
    context.moveTo(85, 288);
    context.quadraticCurveTo(87, 333, 111, 366);
    context.moveTo(393, 205);
    context.quadraticCurveTo(412, 235, 408, 264);
    context.moveTo(410, 192);
    context.quadraticCurveTo(435, 240, 424, 271);

    context.stroke();

    //嘴巴 愛心
    context.fillStyle = '#FF5151';
    context.strokeStyle = '#333';

    context.beginPath();

    context.moveTo(95, 143);
    context.quadraticCurveTo(60, 120, 55, 99);
    context.quadraticCurveTo(65, 80, 78, 100);
    context.quadraticCurveTo(90, 80, 108, 99);
    context.quadraticCurveTo(110, 125, 95, 143);

    context.moveTo(388, 142);
    context.quadraticCurveTo(370, 120, 382, 90);
    context.quadraticCurveTo(400, 70, 405, 110);
    context.quadraticCurveTo(440, 105, 434, 121);
    context.quadraticCurveTo(410, 140, 388, 142);

    context.moveTo(184, 160);
    context.quadraticCurveTo(190, 170, 208, 169);
    context.quadraticCurveTo(255, 240, 260, 155);
    context.quadraticCurveTo(270, 150, 275, 136);
    context.quadraticCurveTo(270, 150, 260, 155);
    context.quadraticCurveTo(240, 155, 233, 144);
    context.quadraticCurveTo(220, 175, 208, 169);
    context.quadraticCurveTo(190, 170, 184, 160);

    context.fill();
    context.stroke();


    // === 肚白

    context.fillStyle = '#ddd';
    context.beginPath();
    context.moveTo(310, 224);
    context.quadraticCurveTo(245, 176, 220, 250)
    context.quadraticCurveTo(235, 255, 215, 278)
    context.quadraticCurveTo(215, 280, 218, 283)
    context.quadraticCurveTo(230, 275, 250, 272)
    context.quadraticCurveTo(260, 280, 246, 306)
    context.quadraticCurveTo(247, 308, 249, 309)
    context.quadraticCurveTo(265, 285, 284, 256)
    context.quadraticCurveTo(302, 285, 313, 276)
    context.quadraticCurveTo(317, 275, 322, 268)
    context.quadraticCurveTo(280, 230, 310, 224)
    context.fill();

    //條紋
    context.fillStyle = 'rgba(0,148,148,0.6';
    context.beginPath();

    context.moveTo(114, 285);
    context.quadraticCurveTo(105, 260, 135, 230)
    context.bezierCurveTo(180, 250, 113, 280, 120, 325);
    context.quadraticCurveTo(105, 230, 112, 283)


    context.moveTo(131, 346);
    context.quadraticCurveTo(160, 295, 167, 308)
    context.quadraticCurveTo(150, 340, 184, 421)
    context.quadraticCurveTo(148, 390, 129, 348)

    context.moveTo(279, 444);
    context.quadraticCurveTo(230, 455, 218, 403)
    context.quadraticCurveTo(230, 380, 241, 398)
    context.quadraticCurveTo(300, 440, 349, 355)
    context.quadraticCurveTo(365, 340, 374, 357)
    context.quadraticCurveTo(342, 423, 279, 444)

    context.moveTo(355, 154);
    context.quadraticCurveTo(345, 200, 380, 207)
    context.quadraticCurveTo(360, 165, 355, 154)

    context.moveTo(387, 236);
    context.quadraticCurveTo(345, 260, 388, 288)
    context.quadraticCurveTo(392, 250, 387, 236)

    context.fill();
}



window.addEventListener('load', doFirst)

//window.addEventListener('mousedown', usePen)
//window.addEventListener('load', drawGrid)
window.addEventListener('load', drawface1)
window.addEventListener('load', drawface2)
window.addEventListener('load', drawface3)
window.addEventListener('load', drawface4)
