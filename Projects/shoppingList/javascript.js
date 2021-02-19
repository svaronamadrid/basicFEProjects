const listaCompra=[];

window.onload=()=>{
    const form= document.getElementById('todo-form');
    form.onsubmit=(e)=>{
        e.preventDefault();
        const todo=document.getElementById('todo');
        const todoText=todo.value;
        todo.value='';
        listaCompra.push(todoText);
        const lista=document.getElementById('list');
        const listaCompraTemplate=listaCompra.map(t => '<li>' +t +'</li>');
        lista.innerHTML=listaCompraTemplate.join('');

    }
}