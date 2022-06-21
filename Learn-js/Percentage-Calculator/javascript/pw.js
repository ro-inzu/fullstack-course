var pw_field = document.getElementById('pw_field')
var form = document.getElementById('password_form')

console.log("generating pw")
var my_pw = function(event){
    var lower = "abcdefghijklmnopqrstuvqxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
    var nums = "0123456789";
    var symbols = "!@#$%^&*";

    var all_tokens = lower + upper + nums + symbols;
    var pw_block= "";
    var pw_chain = "";

    for (let i = 0; i < 12; i++) {
        pw_block += all_tokens.charAt(Math.floor(Math.random() * all_tokens.length));
    }
    console.log(pw_block)
    pw_field.innerText = `${pw_block}`;
    event.preventDefault();
        
    }

form.addEventListener('submit',my_pw);