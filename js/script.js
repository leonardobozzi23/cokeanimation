const checkbox = document.getElementById('check');


function mudando(){
        setInterval(() => {checkbox.checked = false}, 15000);
    
}

function voltando(){
    setInterval(() => {checkbox.checked = true}, 30000);
}

mudando();
voltando();

