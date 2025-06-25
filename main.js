let nameInput = document.querySelector(`#nameInput`);
let numberInput = document.querySelector(`#numberInput`);

btnShow = document.querySelector(`#btnShow`);
btnAdd = document.querySelector(`#btnAdd`);
btnRemove = document.querySelector(`#btnRemove`);
btnEdit = document.querySelector(`#btnEdit`);

let check = false

let containerContacts = document.querySelector(`.containerContacts`);

let rubrica = {
    listaContatti: [
        {name: `Riccardo`, number:3547398265},
        {name: `Arianna`, number:3456474383},
        {name: `Gabriele`, number:3638494234},
    ],
    showContacts: function(){
        this.listaContatti.forEach(contatto =>{
            let p = document.createElement(`p`)
            p.innerHTML = `${contatto.name}: ${contatto.number}`
            containerContacts.appendChild(p)
        })
    },

     addContacts: function(newName, newNumber){
         this.listaContatti.push({name: newName, number: newNumber})
     },

     removeContacts: function(removeName){
        let filtered = this.listaContatti.filter(contatto => contatto.name != removeName)
        this.listaContatti = filtered
     },

     editContacts: function(nome, numero){
        this.listaContatti.forEach(contatto =>{
            if(contatto.name == nome){
                contatto.number = numero
            }
        })
     }

};

btnShow.addEventListener(`click`, ()=>{
    if( check == false ) {
        rubrica.showContacts();
        btnShow.innerHTML = `Nascondi Contatti`
        check = true
    }else{
        check = false
        containerContacts.innerHTML = ``
        btnShow.innerHTML = `Mostra Contatti`
    }
})


btnAdd.addEventListener(`click`, ()=>{
    if(nameInput.value != ``){
        rubrica.addContacts(nameInput.value, numberInput.value)
        nameInput.value = ``
        numberInput.value = ``
    }
})

btnRemove.addEventListener(`click`, ()=>{
    if(nameInput !=``){
        rubrica.removeContacts(nameInput.value)
        nameInput.value = ``
    }
})


btnEdit.addEventListener(`click`, ()=>{
    if(nameInput != ``){
        rubrica.editContacts(nameInput.value, numberInput.value)
        nameInput.value = ``
        numberInput.value = ``
    }
})
