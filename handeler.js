document.getElementById('btn-updated')
.addEventListener('click', function(){
    const headName = document.getElementById('heading')
    headName.innerText = 'Updated handeler Events'
})


//input information

document.getElementById('input-btn').addEventListener('click', function(){
    const inputName = document.getElementById('input')
    // console.log(inputName);
    
    const name = inputName.value;
    // console.log('name', name);

    const namep = document.getElementById('loggin-info');
    namep.innerText = name

    })
    
    
    






