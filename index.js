let myLeads = []
const saveBtn = document.getElementById('save-btn')
const tabBtn = document.getElementById('tab-btn')
const delBtn = document.getElementById('del-btn')
const inputEl = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
let getLeads = JSON.parse(localStorage.getItem('myLeads'))

if (getLeads){
    myLeads = getLeads
    render(myLeads)
}

function render(leads){
    let data = ''

    for(let i = 0; i < leads.length; i++){
        data += `<li> 
        
                <a href='${leads[i]}' >
                    ${leads[i]}
               </a>     
            </li>`
    }

    ulEl.innerHTML = data
}




saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})


delBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

