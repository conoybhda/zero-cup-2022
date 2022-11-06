
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var point_data_now = [];
var point_data_new = [];
var point_data = [];
var temp, a, b;
function put_img(img_src) {
  /** @type {HTMLCanvasElement} */

  var img = new Image();
  img.src = img_src;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    caculate(imgData, img.width, img.height, point_data_now);
    point_data = point_data_now;
  };

  
}


class point {
  constructor(w, h) {
    this.orw = w;
    this.orh = h;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.w = w;
    this.h = h;
    this.spx = (w - this.x) / 2 / 10;
    this.spy = (h - this.y) / 2 / 10;
  }
  start() {
    this.orh = this.h;
    this.orw = this.w;
  }
  update() {
    this.spx = (this.w - this.x) / 2 / 15  + (Math.random() - 0.5)*2;
    this.spy = (this.h - this.y) / 2 / 15  + (Math.random() - 0.5)*2;
    if (Math.abs(this.w - this.x) <= Math.abs(this.spx)) {
      this.x = this.w;
    } else {
      this.x += this.spx;
    }
    if (Math.abs(this.h - this.y) <= Math.abs(this.spy)) {
      this.y = this.h;
    } else {
      this.y += this.spy;
    }
  }
  rander() {
    ctx.fillRect(this.x, this.y, 2, 2);
  }

  display() {

    temp = (this.orw - a) * (this.orw - a) + (this.orh - b) * (this.orh - b);

    var m = Math.sqrt(temp);
    var f = 60/m;
    var n = Math.atan2((this.orh - b),(this.orw - a));
    f = f > 2 ? 1 : f/2;
      if (f > 0.5 && f <= 1.5) f = 0.5;
    this.w = this.orw - m*f*Math.cos(n)
    this.h = this.orh - m*f*Math.sin(n)
  
  }
}

function caculate(imgData, px_x, px_y, points) {
  var pos = 0;
  var data = imgData.data;
  for (var y = 0; y <= px_y; y += 5) {
    for (var x = 0; x <= px_x; x += 5) {
      pos = [y * px_x + x] * 4;
      if (data[pos + 3] >= 128) {
        points.push(new point(x, y));
      }
    }
  }
}

function change_img(img_src) {
  var img = new Image();
  img.src = img_src;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    caculate(imgData, img.width, img.height, point_data_new);
    dochange();
    point_data.forEach((point)=>{
      point.start()
    })
  };


  function dochange() {
    var ran = makerand(point_data_new.length);
    if (point_data_now.length <= point_data_new.length) {
      var i = 0;
      for (i = 0; i < point_data_now.length; i++) {
        point_data[i].w = point_data_new[ran[i]].w;
        point_data[i].h = point_data_new[ran[i]].h;
      }
      for (i = point_data_now.length; i < point_data_new.length; i++) {
        point_data.push(
          new point(point_data_new[ran[i]].w, point_data_new[ran[i]].h)
        );
      }
    } else {
      var i = 0;
      for (i = 0; i < point_data_new.length; i++) {
        point_data[ran[i]].w = point_data_new[i].w;
        point_data[ran[i]].h = point_data_new[i].h;
      }
      point_data.splice(
        point_data_new.length - 1,
        point_data_now.length - point_data_new.length
      );
    }
    point_data_now = point_data_new;
    point_data_new = [];
  }
}

//生成不重复随机数
function makerand(len) {
  var t = 0;
  var arr = [];
  for (t = 0; t < len; t++) {
    arr.push(t);
  }
  var result = _.shuffle(arr);
  return result;
}


canvas.onmousemove = function (e) {
  var t;
  a = e.offsetX;
  b = e.offsetY;
  point_data.forEach((point) => {
    point.display();
  });
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  point_data.forEach((point) => {
    point.update();
    point.rander();
  });
  requestAnimationFrame(draw);
}

draw()