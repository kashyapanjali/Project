const Base_URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_1AJQvcQehq9fCFwZCNuXhWwuk72Ta2PGDjVwptQRyo";

const dropdown=document.querySelectorAll(".dropdown select");




for(let select of dropdown){

    for(currCode in countryList){

        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from"&&currCode==="USD"){
            newOption.selected="selected";

        }
        else if(select.name==="from"&&currCode==="USD"){
            newOption.selected="selected";    
        }
        select.append(newOption)
    }
      select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
};

