const listaCompra=JSON.parse(localStorage.getItem('listaCompra')) || [] ;

const synchronize = () =>{
    const lista=document.getElementById('list');
    const listaCompraTemplate=listaCompra.map(t => '<li>' +t +'</li>');
    lista.innerHTML=listaCompraTemplate.join('');
    const elements=document.querySelectorAll('#list li');
    elements.forEach((element,i) => {
        element.addEventListener('click', () =>{
            element.parentNode.removeChild(element);
            listaCompra.splice(i,1);
            updateList(listaCompra);
            synchronize();
        })
    })
}
const updateList=(listaCompra) =>{
    const listToString= JSON.stringify(listaCompra);
    localStorage.setItem('listaCompra',listToString);
}
window.onload=()=>{
    synchronize();
    const form= document.getElementById('todo-form');
    form.onsubmit=(e)=>{
        e.preventDefault();
        const todo=document.getElementById('todo');
        const todoText=todo.value;
        todo.value='';
        listaCompra.push(todoText);
        updateList(listaCompra);
        synchronize();
    }
}

