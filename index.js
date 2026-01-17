import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js"
const firebaseConfig = {

    databaseUrl: "https://tab-tracker-app-a3c14-default-rtdb.europe-west1.firebasedatabase.app/"

}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

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
        
                <a href='${leads[i]}' target= "_blank" >
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


tabBtn.addEventListener('click', function(){
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
});
})
