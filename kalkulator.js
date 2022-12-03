const input = document.getElementById('input');
const button = document.getElementById('button');
function tekan(e){
    if(e=='action'){
        try{
            input.value = eval(input.value);
        }catch(error){
alert("ini eror")
        }
        }
    else if(e=='clear'){
        input.value="";
        }
    else if(e=="del"){
        input.value = input.value.slice(0,-1);
    }
    else{
         input.value+=e;
    }
    }
