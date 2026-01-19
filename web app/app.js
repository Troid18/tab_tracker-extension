import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js"
import { firebaseConfig } from './config.js'
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js"

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "Leads")


const saveBtn = document.getElementById('save-btn')
const delBtn = document.getElementById('del-btn')
const inputEl = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

function render(leads) {
    let data = ''

    for (let i = 0; i < leads.length; i++) {
        data += `<li> 
        
                <a href='${leads[i]}' target= "_blank" >
                    ${leads[i]}
               </a>     
            </li>`
    }

    ulEl.innerHTML = data
}


saveBtn.addEventListener("click", function () {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})

onValue(referenceInDB, function (snapshot) {
    const snapExists = snapshot.exists()

    if (snapExists) {
        const data = snapshot.val()
        const value = Object.values(data)
        render(value)

    }
})


delBtn.addEventListener('dblclick', function () {
    remove(referenceInDB)
    ulEl.innerHTML = ""

})

