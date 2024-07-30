import { countryList } from './code.js';

const Base_URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_1AJQvcQehq9fCFwZCNuXhWwuk72Ta2PGDjVwptQRyo";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(" form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdown){
   for(let currCode in countryList){
       let newOption = document.createElement("option");
       newOption.innerText = currCode;
       newOption.value = currCode;
       if(select.name === "from" && currCode==="USD"){
         newOption.selected = "selected";
       }else if(select.name === "to" && currCode === "INR"){
         newOption.selected = "selected";
       }
       select.append(newOption);
    }

        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
       });
    }
    const updateExchangeRate = async() =>{
        console.log("Updating exchange rate...");
        let amount = document.querySelector(".amount input");
        let amtValue = amount.value;
        if(amtValue === "" || amtValue < 1){
            amtValue = 1;
            amount.value = "1";
        }

        const URL = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()];
        console.log(rate);
        let finalAmount = amtValue * rate;
        msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
       }

        const updateFlag = (element)=>{
        console.log("Updating flag...");
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentELement.querySelector("img");
        img.src = newSrc;
      };


      btn.addEventListener("click", (evt) =>{
        evt.preventDefault();
        updateExchangeRate();
        console.log("Button clicked...");
        // console.log(amtValue);
      });


      window.addEventListener("load", () =>{
        console.log("Window loaded...");
        updateExchangeRate();
    })
