var dummy = "";

var numbers = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 8, 10, 11],
  [12, 13, 14, 15],
  [16, 17, 18, 19],
  [20, 21, 22, 23],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [32, 33, 34, 35]
];

for (var i = 0; i < numbers.length; i++) {
  dummy += numbers[i] + ",";
  console.log(numbers[i]);
}
var msg = "<h3>" + dummy + "</h3>";
document.write(msg);

var temp = 0,
  temp1 = 0;
var robert = " ",
  bruce = " ";
var marvel = "1-10000,2-10000,3-10000";
var cap = marvel.split(",");
for (var i = 0; i < cap.length; i++) {
  var dummy = cap[i];
  var sup = dummy.split("-");
  //[1, 10000r]
  var flash = parseInt(sup[1]);
  if (sup[0] == 1) {
    temp = temp + flash;
    robert = "Tony Stark " + temp;
  } else if (sup[0] == 2) {
    //[2, 10000]
    temp1 = temp1 + flash;
    bruce = "Bruce Wayne " + temp1;
  }
}
var msg = "<br>" + robert + "  " + bruce + "<br>";
document.write(msg);

//  var marvel=[
//    "1-10000","2-10000","3-10000"
//  ];
//      var x=marvel.pop();
//  //console.log(marvel);
//
//  for(var i=0;i<marvel.length;i++)
//  {
//    if(i<1)
//  marvel[i]="Tony stark-10000";
//    else
//      marvel[i]="Bruce wayne-10000"
//
//  }
//  marvel+="<br>";
//
//  console.log(marvel);
//  document.write(marvel)

//  /////
//  var dc=[
//     "1-10000","1-10000","2-10000","3-10000"
//  ];
//  var count=0;
//  for(var i=0;i<dc.length;i++)
//
//  {
//    extra=dc[i];
//  //  console.log(dc[i]);
//    if(extra.indexOf("1")==0)
//    {
//      count+=10000;
//       dc[i]="Tony stark-"+count;
//
//    }
//
//    else if(extra.indexOf("2")==0){
//      dc[i]="Bruce wayne-10000";
//    }
//  }
//  var dummy1=dc.shift();
//  dummy1 = dc.pop();
//
//  dc+=",";
//  console.log(dc);
//  console.log(dummy1);
//  document.write(dc);
//

function getTony() {
  temp += romanoff;
  console.log(temp);
  robert = "Tony Stark " + temp;
}
function getBruce() {
  temp1 += romanoff;
  bruce = "Bruce wayne " + temp1;
}

var marvel_universe = "1-10000,1-10000,2-10000,3-10000";
var rdj = marvel_universe.split(",");
var cap;
var robert = " ",
  bruce = " ";
var temp = 0,
  temp1 = 0;
for (var i = 0; i < rdj.length; i++) {
  cap = rdj[i];
  var pick = cap.split("-");
  var hawck = parseInt(pick[0]);
  var romanoff = parseInt(pick[1]);
  if (hawck == 1) {
    getTony();
  } else if (hawck == 2) {
    getBruce();
  }
}
var msg = robert + " " + bruce;
marvel_universe = msg;
document.write(marvel_universe);
