function run(){
    document.getElementById("main_box").style.display='none';
    document.getElementById("output_box").style.display='block';

    var code = document.getElementById("inputTextToSave").value
    document.getElementById("output").srcdoc = code
}

function backout(){
    document.getElementById("main_box").style.display='block';
    document.getElementById("output_box").style.display='none';
}

// copy button
function myFunction() {
    var copyText = document.getElementById("inputTextToSave");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value); 
  }

function darkmod(){
    var mode = document.body;
    mode.classList.toggle("darkmode");
}