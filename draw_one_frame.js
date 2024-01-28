const ease = new p5.Ease();

function draw_one_frame(cur_frac) {
  let sun_size = canvasHeight/8;
  angleMode(DEGREES);

  ////background part////
  const bg_color1 = color(32,42,69);
  const bg_color3 = color(64,87,129);
  const bg_color5 = color(120,167,242);

  noStroke();
  fill(bg_color1);
  setGradient(0,0.25*height,bg_color1,bg_color3);
  setGradient(0.25*height,0.25*height,bg_color3,bg_color5);
  setGradient(0.50*height,0.25*height,bg_color5,bg_color3);
  setGradient(0.75*height,0.25*height,bg_color3,bg_color1);
  ////end background part////

  ////points part////
  //points part one
  let num_grid_rows1 = 18;
  let num_grid_cols1 = 32;
  let grid_dis_x1 = width/num_grid_cols1;
  let grid_dis_y1 = height/num_grid_rows1;

  noFill();
  strokeWeight(height/height);
  let brightness1 = 255;
  if (cur_frac<0.7){
    brightness1 = map(cur_frac,0,0.6,255,50);
  } else {
    brightness1 = map(cur_frac,0.6,1,50,255);
  }
  stroke(147,206,219,brightness1);
  let ellipseSize1 = height/150;
  let ellipseSize3 = height/54;
  for(let col=1; col<num_grid_cols1; col++) {
    let point_x_pos = col*grid_dis_x1;
    for(let row=1; row<num_grid_rows1;row++) {
      let point_y_pos = row*grid_dis_y1;
      let pointWeight = getNoiseValue(point_x_pos,point_y_pos,1,"pointWeight",0,100,100);
      //let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize",0,height/70,100);
      if (pointWeight>30 && pointWeight<=35) {
        let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize1",height/190,height/135,100);
        ellipse(point_x_pos,point_y_pos,ellipseSizeOffset);
      } else if (pointWeight>70 && pointWeight<=75) {
        let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize2",height/135,height/36,100);
        ellipse(point_x_pos,point_y_pos,ellipseSizeOffset);
      }
    }
  }

  //points part two
  let num_grid_rows2 = 20;
  let num_grid_cols2 = 40;
  let grid_dis_x2 = width/num_grid_cols2;
  let grid_dis_y2 = height/num_grid_rows2;

  let brightness2 = 255;
  if (cur_frac<0.7){
    brightness2 = map(cur_frac,0,0.6,50,200);
  } else {
    brightness2 = map(cur_frac,0.6,1,200,50);
  }
  noStroke();
  fill(197,247,254,brightness2)
  let ellipseSize2 = height/180;
  let ellipseSize4 = height/108;
  let ellipseSize5 = height/67.5;
  let ellipseSize6 = height/45;

  for(let col=1; col<num_grid_cols2; col++) {
    let point_x_pos = col*grid_dis_x2;
    for(let row=1+2; row<num_grid_rows2-2;row++) {
      let point_y_pos = row*grid_dis_y2;
      let pointWeight = getNoiseValue(point_x_pos,point_y_pos,1,"pointWeight",0,100,100);
      //let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize",0,height/70,100);
      if (pointWeight>0 && pointWeight<=10) {
        let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize2",height/270,height/135,100);
        ellipse(point_x_pos,point_y_pos,ellipseSizeOffset);
      } else if (pointWeight >20 && pointWeight<=22) {
        let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize4",height/135,height/90,100);
        ellipse(point_x_pos,point_y_pos,ellipseSizeOffset);
      } else if (pointWeight >70 && pointWeight<=72) {
        let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize5",height/77,height/60,100);
        ellipse(point_x_pos,point_y_pos,ellipseSizeOffset);
      } else if (pointWeight >82 && pointWeight<=88) {
        let ellipseSizeOffset = getNoiseValue(0,0,1,"ellipseSize6",height/49,height/41,100);
        ellipse(point_x_pos,point_y_pos,ellipseSizeOffset);
      }
    }
  }
  ////end points part////


  ////curves part////
  let assis_y = height/54;
  let assis_x = width/96;

  // assist//
  // strokeWeight(1);
  // stroke(0);
  // for (i=0;i<54;i++) {
  //   for (j=0; j<96;j++) {
  //     line(0,i*assis_x,width,i*assis_x,);
  //     line(j*assis_y,0,j*assis_y,height);
  //   }
  // }
    ////the dark curves part////
  let grid_points3 = [
    [96*assis_x,32*assis_y],//point1
    [84*assis_x,40*assis_y],
    [72*assis_x,18*assis_y],
    [62*assis_x,24*assis_y],//point2
    [52*assis_x,32*assis_y],
    [48*assis_x,35*assis_y],
    [38*assis_x,22*assis_y],//point3
    [31*assis_x,11*assis_y],
    [20*assis_x,41*assis_y],
    [11*assis_x,35*assis_y],//point4
    [6*assis_x,31*assis_y],
    [4*assis_x,30*assis_y],
    [0*assis_x,33*assis_y] //point5
  ];

  // stroke(0);
  // strokeWeight(7);
  // for (i=0; i<grid_points3.length; i++) {
  //   point(grid_points3[i][0],grid_points3[i][1])
  // }

  ////grid1///
  let grid_points1 = [
    [width,15*assis_y],//point1
    [86*assis_x,16*assis_y],
    [91*assis_x,28*assis_y],
    [78*assis_x,34.2*assis_y],//point2
    [44*assis_x,46*assis_y],
    [33*assis_x,28*assis_y],
    [69*assis_x,22*assis_y],//point3
    [84*assis_x,19*assis_y],
    [76*assis_x,11*assis_y],
    [58*assis_x,18*assis_y],//point4
    [45*assis_x,23*assis_y],
    [42*assis_x,20*assis_y],
    [40*assis_x,14*assis_y], //point5
    [36*assis_x,3*assis_y],
    [26*assis_x,6*assis_y],
    [24*assis_x,18*assis_y], //point6
    [22*assis_x,32*assis_y],
    [16*assis_x,34*assis_y],
    [11*assis_x,28*assis_y], //point7
    [9*assis_x,25*assis_y],
    [5*assis_x,24*assis_y],
    [0,29*assis_y] //point8
  ]

  stroke(255);
  strokeWeight(5);
  for (i=0; i<grid_points1.length; i++) {
    point(grid_points1[i][0],grid_points1[i][1])
  }

  ////grid2////
  let grid_points2 = [
    [width,15*assis_y],//point1
    [88*assis_x,15*assis_y],
    [94.2*assis_x,27*assis_y],
    [78*assis_x,36*assis_y],//point2
    [43*assis_x,50*assis_y],
    [32*assis_x,33*assis_y],
    [69*assis_x,25*assis_y],//point3
    [84*assis_x,20.5*assis_y],
    [76*assis_x,12*assis_y],
    [58*assis_x,19*assis_y],//point4
    [45*assis_x,24*assis_y],
    [42*assis_x,21*assis_y],
    [40*assis_x,16*assis_y], //point5
    [36*assis_x,3*assis_y],
    [26*assis_x,6*assis_y],
    [24.5*assis_x,20*assis_y], //point6
    [22*assis_x,36*assis_y],
    [15*assis_x,38*assis_y],
    [11*assis_x,32*assis_y], //point7
    [9*assis_x,28*assis_y],
    [5*assis_x,26*assis_y],
    [0,30*assis_y] //point8
  ]

  strokeWeight(5);
  for (i=0; i<grid_points2.length; i++) {
    point(grid_points2[i][0],grid_points2[i][1])
  }

  ////draws curves////

  let curveOffsetX = getNoiseValue(0,0,cur_frac*0.1,"curveOffsetX",-10,10,100);
  let curveOffsetY = getNoiseValue(0,0,cur_frac*0.2,"curveOffsetY",-5,5,100);

  let curveMove = true;
  let moveX = 0;
  let moveY = 0;

  if (cur_frac<0.5) {
    curveMove = true;
    moveX = cur_frac*2;
    moveY = cur_frac*2;
  } else {
    curveMove = false;
    moveX = (cur_frac-0.5)*2;
    moveY = (cur_frac-0.5)*2;
  }

  if (curveMove) {
    curveMoveX = map(moveX,0,1,0,curveOffsetX);
    curveMoveY = map(moveY,0,1,0,curveOffsetY);
  } else {
    curveMoveX = map(moveX,0,1,curveOffsetX,0);
    curveMoveY = map(moveY,0,1,curveOffsetY,0);
  }

  let curve3size = getNoiseValue(0,0,cur_frac*0.2,"curve3size",height/35,height/27,200);


  push();
    translate(curveMoveX,curveMoveY);
    noFill();

    stroke(49,72,129,150);
    strokeWeight(curve3size);
    beginShape();
    vertex(grid_points3[0][0],grid_points3[0][1]);
    for (i=0; i<int((grid_points3.length-1)/3); i++){
      bezierVertex(grid_points3[(i*3)+1][0],grid_points3[(i*3)+1][1],grid_points3[(i*3)+2][0],grid_points3[(i*3)+2][1],grid_points3[(i*3)+3][0],grid_points3[(i*3)+3][1]);
    }
    endShape();

    strokeWeight(height/200);
    stroke(120,129,247);
    beginShape();
    translate(height/27,height/18);
    vertex(grid_points2[0][0],grid_points2[0][1]);
    for (i=0; i<int((grid_points2.length-1)/3); i++){
      bezierVertex(grid_points2[(i*3)+1][0],grid_points2[(i*3)+1][1],grid_points2[(i*3)+2][0],grid_points2[(i*3)+2][1],grid_points2[(i*3)+3][0],grid_points2[(i*3)+3][1]);
    }
    endShape();
    translate(-height/27,-height/18);

    strokeWeight(height/200);
    stroke(159,206,184);
    beginShape();
    scale(1.05);
    translate(-height/18,-height/12);
    vertex(grid_points1[0][0],grid_points1[0][1]);
    for (i=0; i<int((grid_points1.length-1)/3); i++){
      bezierVertex(grid_points1[(i*3)+1][0],grid_points1[(i*3)+1][1],grid_points1[(i*3)+2][0],grid_points1[(i*3)+2][1],grid_points1[(i*3)+3][0],grid_points1[(i*3)+3][1]);
    }
    endShape();
    translate(height/18,height/12);
    scale(1/1.05);

    stroke(81,128,197);
    strokeWeight(height/13.56);
    beginShape();
    vertex(grid_points1[0][0],grid_points1[0][1]);
    for (i=0; i<int((grid_points1.length-1)/3); i++){
      bezierVertex(grid_points1[(i*3)+1][0],grid_points1[(i*3)+1][1],grid_points1[(i*3)+2][0],grid_points1[(i*3)+2][1],grid_points1[(i*3)+3][0],grid_points1[(i*3)+3][1]);
    }
    endShape();
    beginShape();
    vertex(grid_points2[0][0],grid_points2[0][1]);
    for (i=0; i<int((grid_points2.length-1)/3); i++){
      bezierVertex(grid_points2[(i*3)+1][0],grid_points2[(i*3)+1][1],grid_points2[(i*3)+2][0],grid_points2[(i*3)+2][1],grid_points2[(i*3)+3][0],grid_points2[(i*3)+3][1]);
    }
    endShape();

    strokeWeight(height/150);
    stroke(107,136,247);
    beginShape();
    translate(height/67.5,height/27);
    vertex(grid_points2[0][0],grid_points2[0][1]);
    for (i=0; i<int((grid_points2.length-1)/3); i++){
      bezierVertex(grid_points2[(i*3)+1][0],grid_points2[(i*3)+1][1],grid_points2[(i*3)+2][0],grid_points2[(i*3)+2][1],grid_points2[(i*3)+3][0],grid_points2[(i*3)+3][1]);
    }
    endShape();
    translate(-height/67.5,-height/27);
  
    strokeWeight(height/80);
    stroke(107,191,224);
    beginShape();
    translate(-height/67.5,-height/27);
    vertex(grid_points1[0][0],grid_points1[0][1]);
    for (i=0; i<int((grid_points1.length-1)/3); i++){
      bezierVertex(grid_points1[(i*3)+1][0],grid_points1[(i*3)+1][1],grid_points1[(i*3)+2][0],grid_points1[(i*3)+2][1],grid_points1[(i*3)+3][0],grid_points1[(i*3)+3][1]);
    }
    endShape();
    translate(height/67.5,height/27);

  pop();
  ////end curves part////


  ////lines part////  
  let smoothnessValue = 100;
  //lines grid part1//
  let grid1_points_height = [
    0.00 * height,
    0.20 * height,
    0.50 * height,
    1.00 * height
  ]
  let grid1_points_width = [
    0.10*width, 
    0.30*width,
    0.50*width,
    0.70*width,
    0.90*width
  ]

  //offset of lines part1//
  let offsetRanX1 = [];
  for (let i=0; i<grid1_points_width.length; i++) {
    let x_Offset = getNoiseValue(grid1_points_width[i],0,1,"x_Offset",-0.10*width,0.10*width,smoothnessValue);
    offsetRanX1.push(x_Offset+grid1_points_width[i]);
  }
  let offsetRanY1 = [];
  for (let i=0; i<grid1_points_width.length; i++) {
    let y_Offset = getNoiseValue(grid1_points_width[i],0,1,"y_Offset",-0.2*height,0.35*height,smoothnessValue);
    offsetRanY1.push(y_Offset);
  }

  //draw lines//
  strokeWeight(height/540);
  let color_alpha = 255;
  let line_length1 = height/40;
  let line_length_increase1 = height/60;
  for (let j=0; j<offsetRanX1.length; j++) {
    for (let i=0; i<grid1_points_height.length-1; i++) {
      let line_pos_y = map(cur_frac,0,1,grid1_points_height[i],grid1_points_height[i+1]);
      let line_increase = line_length1+i*line_length_increase1;
      color_alpha = map(line_pos_y,0,255,255-(30*i),255-(30*(i+1)));
      stroke(208,253,254,color_alpha);
      line(offsetRanX1[j],line_pos_y+offsetRanY1[j],offsetRanX1[j],line_pos_y+line_increase+offsetRanY1[j]);
    }
  }

  //lines grid part2//
  let grid2_points_height = [
    0.00 * height,
    0.10 * height,
    0.30 * height,
    0.60 * height,
    1.00 * height
  ]
  let grid2_points_width = [
    0.20*width,
    0.40*width,
    0.60*width,
    0.80*width
  ]

  //offset of lines part2//
  let offsetRanX2 = [];
  for (let i=0; i<grid2_points_width.length; i++) {
    let x_Offset = getNoiseValue(grid2_points_width[i],0,1,"x_Offset",-0.05*width,0.10*width,smoothnessValue);
    offsetRanX2.push(x_Offset+grid2_points_width[i]);
  }

  let offsetRanY2 = [];
  for (let i=0; i<grid2_points_width.length; i++) {
    let y_Offset = getNoiseValue(grid2_points_width[i],0,1,"y_Offset",-0.2*height,0.3*height,smoothnessValue);
    offsetRanY2.push(y_Offset);
  }

  //draw lines//
  strokeWeight(height/270);
  let line_length2 = height/50;
  let line_length_increase2 = height/80;
  //let color_alpha = 255;
  for (let j=0; j<offsetRanX2.length; j++) {
    for (let i=0; i<grid2_points_height.length-1; i++) {
      let line_pos_y = map(cur_frac,0,1,grid2_points_height[i],grid2_points_height[i+1]);
      let line_increase = line_length2+i*line_length_increase2;
      color_alpha = map(line_pos_y,0,255,255-(45*i),255-(45*(i+1)));
      stroke(208,253,254,color_alpha);
      line(offsetRanX2[j],line_pos_y+offsetRanY2[j],offsetRanX2[j],line_pos_y+line_increase+offsetRanY2[j]);
    }
  }
  ////end lines part////  


  ////circle part////
  stroke(245,250,220);
  strokeWeight(height/360);


  let circleList = [
    [6*assis_x,38*assis_y],
    [16*assis_x,22*assis_y],
    [33*assis_x,32*assis_y],
    [46*assis_x,12*assis_y],
    [66*assis_x,32*assis_y],
    [84*assis_x,18*assis_y],
    [91*assis_x,41*assis_y]
  ]

  let circleStartList = [];
  let circleRadiusList = [];
  let circlePosX = [];
  let circlePosY = [];
  let startPoint = 0;
  for (let i=0; i<circleList.length; i++) {
    let ranStart = getNoiseValue(circleList[i][0],circleList[i][1],1,"ranStart",0,360,1);
    let ranRadius = getNoiseValue(circleList[i][0],circleList[i][1],1,"ranRadius",height/54,height/18,1);
    let ranOffsetX = getNoiseValue(circleList[i][0],circleList[i][1],1,"ranOffsetX",-height/18,height/18,1);
    let ranOffsetY = getNoiseValue(circleList[i][0],circleList[i][1],cur_frac,"ranOffsetY",-height/18,height/18,1);
    circleStartList.push(ranStart+startPoint);
    circleRadiusList.push(ranRadius);
    circlePosX.push(ranOffsetX);
    circlePosY.push(ranOffsetX);
  }



  noFill();
  let amount_across = cur_frac;
  const ease_amount_across = ease.quadraticIn(amount_across);

  for (let i=0; i<circleList.length; i++) {
    let arc_rotation = map(ease_amount_across,0,1,0,360);
    arc(circlePosX[i]+circleList[i][0],circlePosY[i]+circleList[i][1],circleRadiusList[i],circleRadiusList[i],circleStartList[i],arc_rotation);
  }
  ////end circle part////






}

////set gradient color function////
////This part learn from https://p5js.org/examples/color-linear-gradient.html////
function setGradient(y,h,c1,c2) {
  noFill();

  for (let i=y; i<=y+h; i++) {
    let inter = map(i,y,y+h,0,1);
    let c = lerpColor(c1,c2,inter);
    stroke(c)
    line(0,i,width,i);
  }
}


