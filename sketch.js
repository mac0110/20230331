
let points =[[1,3],[3,4], [8,5],[9,7],[9,15],[10,19],[11,22],[13,23],[15,24],[13,22],[13,19],[15,15],[16,12],[17,7],[18,5],[22,4],[25,3],[22,2],[17,1],[9,1],[3,2],[1,3],[8,5],[11,4],[15,4],[18,5],[17,7],[15,6],[11,6],[9,7],[8,5]];   //list資料，

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  // scale(50)
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}
