var time = 0.0;
var i = 0;

document.querySelector("#button").addEventListener("click", function () {
  while ((i = 2)) {
    setTimeout(function () {
      time = time + 1;
      console.warn(time);
      document.querySelector("#h5").value = time;
    }, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  i = 2;
});

function fail()
{
  var ts = false;
  var time = 0;


  document.getElementById('button').addEventListener('click',function()
  {
      while(ts == true)
      {
          setTimeout(function(){
              console.log(`test.time.${time}.012`);

              document.querySelector('#output').innerText =
                  time;
              time++;
          },1000)
      }
  })

  document.querySelector('#stop').addEventListener('click',function()
  {
      ts = false;
      document.querySelector('#output').innerText = "";
      time = 0;
  })
}