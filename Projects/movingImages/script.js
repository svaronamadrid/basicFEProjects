const panels=document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        
        if(panel.className == 'panel active'){
            panel.classList.remove('active')
        }else{
            removeActiveClasses()
            panel.classList.add('active')
        }
        console.log(panel.className)
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}