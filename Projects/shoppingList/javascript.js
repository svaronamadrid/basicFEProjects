const listaCompra=[];

window.onload=()=>{
    const form= document.getElementById('todo-form');
    form.onsubmit=(e)=>{
        e.preventDefault();
        const todo=document.getElementById('todo');
        const todoText=todo.value;
        todo.value='';
        listaCompra.push(todoText);
        const shoppingList= document.getElementById('list');
        shoppingList.innerHTML='';

        for(let i=0;i<listaCompra.length;i++){
            shoppingList.innerHTML+='<li>' +listaCompra[i] +'</li>'
        }
    }
}