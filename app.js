'use strict';

let table1=document.getElementById('table');
let form1=document.getElementById('form');
let total=0;
let total2=document.getElementById('total');
//helper function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Donor(name,ammount){
  this.name=name;
  this.ammount=ammount;
  this.age=0;
  Donor.allData.push(this);
  
}

Donor.allData=[];

Donor.prototype.render=function(){
  let tr=document.createElement('tr');
  table1.appendChild(tr);
  let td=document.createElement('td');
  tr.appendChild(td);
  td.textContent=this.name;
  this.age=getRandomIntInclusive(18,30);
  let td1=document.createElement('td');
  tr.appendChild(td1);
  td1.textContent=this.age;

  let td2=document.createElement('td');
  tr.appendChild(td2);
  td2.textContent=this.ammount;
  


};

form1.addEventListener('submit',handlesubmit);

function handlesubmit(event){
  event.preventDefault();
  let name=event.target.name.value;
  let ammount=event.target.ammount.value;
  total+=parseInt(ammount);
  console.log(total);
  total2.innerHTML=`Total = ${total}`;


  let newDonor= new Donor(name,ammount);
  newDonor.render();
  savetols();


}




function savetols(){
  let data= JSON.stringify(Donor.allData);
  localStorage.setItem('Donor',data);
}

function getFromLs(){
  let data=localStorage.getItem('Donor');
  let order=JSON.parse(data);
  console.log(order);
  if(order){
    for(let i=0;i<order.length;i++){
      let reInst= new Donor(order[i].name,order[i].ammount);
      reInst.render();
      savetols();

      total+=parseInt(order[i].ammount);



    }
    total2.innerHTML=`Total = ${total}`;


  }
}

getFromLs();


