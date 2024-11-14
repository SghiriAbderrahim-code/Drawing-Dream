// getting drawings
 const drawings=[
  {
      "title":"Snowman",
      "svg":"<svg height='64.001px' id='Layer_1' style='enable-background:new 0 0 56.017 64.001;' version='1.1' viewBox='0 0 56.017 64.001' width='56.017px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Snowballs'><g><path d='M37.808,30.913c1.382-1.956,2.202-4.336,2.202-6.913    c0-6.627-5.373-11.999-12-11.999c-6.628,0-12,5.372-12,11.999c0,2.577,0.819,4.958,2.201,6.913    c-4.933,3.21-8.201,8.763-8.201,15.087c0,9.941,8.059,18.001,18,18.001c9.94,0,18-8.06,18-18.001    C46.009,39.676,42.741,34.123,37.808,30.913z' /></g></g><g id='Butons'><g><path d='M28.009,48c-1.105,0-2,0.896-2,2s0.895,2,2,2    c1.104,0,2-0.896,2-2S29.114,48,28.009,48z M28.009,44c1.104,0,2-0.896,2-2s-0.896-1.999-2-1.999c-1.105,0-2,0.895-2,1.999    S26.904,44,28.009,44z' /></g></g><g id='Eyes_2_'><g><path d='M24.009,20.001c-1.105,0-2,0.895-2,2    c0,1.104,0.895,1.999,2,1.999c1.104,0,2-0.896,2-1.999C26.009,20.896,25.114,20.001,24.009,20.001z M32.009,20.001    c-1.105,0-2,0.895-2,2c0,1.104,0.895,1.999,2,1.999c1.104,0,2-0.896,2-1.999C34.009,20.896,33.114,20.001,32.009,20.001z' /></g></g><g id='Nose_1_'><g><path d='M27.991,25.979c-1.094-0.006-1.976,0.929-1.971,2.087c0.006,1.158,0.915,5.935,2.009,5.941    c1.094,0.005,1.957-4.763,1.952-5.92C29.975,26.929,29.084,25.985,27.991,25.979z' /></g></g><g id='Hat'><g><path d='M38.009,12.001h-4V2c0-1.104-0.896-2-2-2h-8    c-1.105,0-2,0.896-2,2v10.001h-4c-1.105,0-2,0.895-2,1.999s0.895,2,2,2h20c1.104,0,2-0.896,2-2S39.114,12.001,38.009,12.001z'/></g></g><g id='Hands'><g><path d='M55.436,24.573c-0.776-0.775-2.034-0.775-2.81,0l-2.617,2.617    V26c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v5.19l-5.428,5.428c-0.775,0.775-0.775,2.033,0,2.81c0.776,0.775,2.034,0.775,2.81,0    l5.922-5.922c0.072-0.063,0.139-0.13,0.202-0.203l5.921-5.921C56.211,26.606,56.211,25.35,55.436,24.573z M10.009,31.192V26    c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v1.191l-2.618-2.618c-0.776-0.775-2.033-0.775-2.81,0c-0.775,0.776-0.775,2.033,0,2.809    l5.924,5.925c0.061,0.07,0.126,0.135,0.196,0.196l5.924,5.925c0.775,0.775,2.033,0.775,2.809,0c0.776-0.776,0.776-2.034,0-2.81    L10.009,31.192z' /></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>"

  },
  {
      "title":"Owl",
      "svg":"<svg height='64px' id='Layer_1' style='enable-background:new 0 0 64 64;' version='1.1' viewBox='0 0 64 64' width='64px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Body'><g><path d='M52,34c0-10.81-5.997-15.997-6-16H18c-0.004,0.003-6,5.19-6,16c0,14.251,12,15.563,12,20.001    C24,59,18,59.188,18,64c0,0,5-2,8-2c1.938,0,2.125,2,6,2s4.063-2,6-2c3,0,8,2,8,2c0-4.813-6-5-6-9.999C40,49.563,52,48.251,52,34z    ' /></g></g><g id='Brench'><g><path d='M60,46.001H4c-2.209,0-4,1.79-4,3.999c0,2.21,1.791,4.001,4,4.001h56c2.209,0,4-1.791,4-4.001    C64,47.791,62.209,46.001,60,46.001z' /></g></g><g id='Claws'><g><path d='M28,44c-1.104,0-2,0.896-2,2.001C26,44.896,25.104,44,24,44    s-2,0.896-2,2.001V50c0,1.104,0.896,2,2,2s2-0.896,2-2c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.999C30,44.896,29.104,44,28,44z M40,44    c-1.104,0-2,0.896-2,2.001C38,44.896,37.104,44,36,44s-2,0.896-2,2.001V50c0,1.104,0.896,2,2,2s2-0.896,2-2c0,1.104,0.896,2,2,2    s2-0.896,2-2v-3.999C42,44.896,41.104,44,40,44z' /></g></g><g id='Head'><g><path d='M47.138,8.37C47.588,5.736,48,2.617,48,0    c-2.253,0-5.139,3.697-6.756,6.064C40.835,6.022,40.42,6,40,6c-3.078,0-5.876,1.169-8,3.073C29.876,7.169,27.078,6,24,6    c-0.42,0-0.835,0.022-1.244,0.064C21.139,3.697,18.253,0,16,0c0,2.617,0.412,5.736,0.862,8.369C13.917,10.556,12,14.05,12,18    c0,6.628,5.372,12,12,12c3.078,0,5.876-1.169,8-3.073C34.124,28.831,36.922,30,40,30c6.627,0,12-5.372,12-12    C52,14.05,50.083,10.557,47.138,8.37z' /></g></g><g id='Face'><g><path d='M40,10c-4.418,0-8,3.582-8,8c0-4.418-3.582-8-8-8    s-8,3.582-8,8c0,4.419,3.582,8.001,8,8.001c1.933,0,3.705-0.686,5.088-1.826L32,30l2.912-5.825    c1.383,1.141,3.155,1.826,5.088,1.826c4.418,0,8-3.582,8-8.001C48,13.582,44.418,10,40,10z' /></g></g><g id='Eyes'><g><path d='M24,14c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4    S26.209,14,24,14z M40,14c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S42.209,14,40,14z' /></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>"

  },
  {
      "title":"Traffic light",
      "svg":"<svg height='64px' id='Layer_1' style='enable-background:new 0 0 44 64;' version='1.1' viewBox='0 0 44 64' width='44px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Body_7_'><g><path d='M32,0H12C9.791,0,8,1.791,8,4v56c0,2.209,1.791,4,4,4h20c2.209,0,4-1.791,4-4V4    C36,1.791,34.209,0,32,0z' /></g></g><g id='Tunnel_Visor'><g><path d='M0,8c2.938,0,6,10,6,10h2V6H0V8z M0,26c2.938,0,6,10,6,10h2    V24H0V26z M0,44c2.938,0,6,9.999,6,9.999h2v-12H0V44z M36,6v12h2c0,0,3.063-10,6-10V6H36z M36,36h2c0,0,3.063-10,6-10v-2h-8V36z     M36,53.999h2c0,0,3.063-9.999,6-9.999v-2.001h-8V53.999z' /></g></g><g id='Green'><g><ellipse cx='22' cy='49.982' rx='6' ry='6.006' /></g></g><g id='Yellow_2_'><g><ellipse cx='22' cy='31.982' rx='6' ry='6.006' /></g></g><g id='Red_2_'><g><ellipse cx='22' cy='13.982' rx='6' ry='6.006' /></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>"

  }
];
//////////

function getText() {
 
dropping();
var start=document.querySelector("#start");
start.innerHTML= "Start";
start.addEventListener("click", function(){
  document.querySelector("#home").remove();
  document.querySelector("#drawings").style.display="block";
})

}
// dropping drawings in screen
function dropping() {
  document.querySelector("section").innerHTML="";
  drawings.forEach((element,i) => {
    document.querySelector("section").innerHTML+=`<div class="card" onclick="show(${i})">
    <div class="picture">${element.svg}</div>
   
</div> `;
  });
}

// showing the selected drawing
var savedIndex = 1;
function show(index) {
  savedIndex=index;
 document.querySelector("#container").innerHTML+=`
 <div id="show">
 <div id="board">
     <input type="color" onchange="change()" value="#ffffff" id="colorInput" style="display: none;">
     <div id="back" onclick="removeShow()">↩</div>
     <div id="uncoloring" onclick="uncoloring()">↺</div>
  <div id="svgCard"  onclick="coloringDiv()">${drawings[index].svg}</div>
 </div>
 <div id="palette">
     
 <div id="colors">
    
    
 </div>
 <div id="buttons">
     <div id="download" onclick="download()">تحميل</div>
     
 </div>
 </div>
         </div>
 `;
 dropColor();
 selectedColor=document.querySelector("#svgCard svg").style.backgroundColor;
 document.querySelector("#svgCard").click();
}
// remove the showing
function removeShow(){
drawings[savedIndex].svg=document.querySelector("#svgCard").innerHTML;
 dropping();
document.querySelector("#show").remove();
}
// dropping colors in the palette
var colors = ["white","black","red","orange","yellow","green","blue","purple"];
function dropColor() {
  let palette = document.querySelector("#colors");
  palette.innerHTML= "";
  palette.innerHTML+=`<div class="color plus" onclick="plus()">+</div>`;
  colors.forEach((color,i) => {
    
    palette.innerHTML+=` <div class="color ${(i===0)?"select":""}" style="background:${color}" onclick="selectColor(this)"></div>`;

  })
 
}

// plus color in the palette

function plus() {
  var input = document.querySelector("#colorInput");
  input.click();
 
}
function change(){
  var input = document.querySelector("#colorInput");
  colors.unshift(input.value);
  selectedColor= input.value;
  dropColor();
  }
// select color in the palette
var selectedColor = "white";
function selectColor(selected) {
var cardColor = document.querySelectorAll(".color");
cardColor.forEach((color) =>{color.classList.remove("select")});
selected.classList.add("select");
selectedColor = selected.style.backgroundColor;
}
// coloring the svg
var vf= true;
var  svgChild = "";
function coloring(){
  
 svgChild = document.querySelector("#svgCard svg").childNodes;

  svgChild.forEach((child) =>{
    child.addEventListener("click", function(e){
      vf= false;
      this.style=`fill: ${selectedColor}`;
    })
  });
}

// coloring div

function coloringDiv(){
  coloring();
if (vf) {
 document.querySelector("#svgCard svg").style.backgroundColor= selectedColor;
}
vf= true;
}
// download the svg
function download() {
  html2canvas(document.querySelector("#svgCard")).then(canvas =>{
     const a=document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = "drawing.jpg";
      a.click();
      
    })


}
// uncoloring the svg
function uncoloring(){
  svgChild.forEach((child) =>{
    child.style=`fill:white`;
  });
  document.querySelector("#svgCard").style.backgroundColor= "white";

}


// on loading
window.onload=function(){
  var drawings=[];
  getText("/drawings.json");
}