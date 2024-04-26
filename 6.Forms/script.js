const firstname = document.querySelector('#firstname');
const displayFirstname = document.querySelector('#display-firstname');
let arrayFirstName = [];
firstname.addEventListener('keyup', (e) =>{
    console.log(e.code);
    if(e.code === 'Backspace'){
        arrayFirstName.pop()
    }else arrayFirstName.push(e.key);
    console.log(arrayFirstName);
    displayFirstname.innerText = arrayFirstName.join('')
});

/////////////////////////////////////////////////////////////

const age = document.querySelector('#age');
const hardTruth = document.querySelector('#a-hard-truth');
let arrayAge = [];
age.addEventListener('keyup', (e)=> {
    // let regex = /^[0-9]*$/;
    if(e.code === 'Backspace'){
        arrayAge.pop()
    }
    // else if (e.key=='e' || !regex.test(e.key)) {
        // e.target.value = e.target.value.replace(/e/g, '');
    // }
    else {
        arrayAge.push(e.key);
       let ageInt = parseInt(arrayAge.join(''));
      (ageInt >=18)? hardTruth.style.visibility = 'visible' : hardTruth.style.visibility = 'hidden'
    }
    if (arrayAge.length <= 1) {
        hardTruth.style.visibility = 'hidden'
    }
});

/////////////////////////////////////////////////////////////

const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');

pwdConfirm.addEventListener('keyup', (e)=> {
    console.log(pwd.value.length);
    if (e.target.value =="" || pwd.value=="") {
        pwdConfirm.style.border = '2px solid #333';
        pwd.style.border = '2px solid #333';
    }
    else if(e.target.value != pwd.value){
        pwdConfirm.style.border = '2px solid red';
        pwd.style.border = '2px solid red';
    }
})

const validation = document.createElement('p')
pwd.parentNode.appendChild(validation)
validation.style.display='none'

pwd.addEventListener('keyup', (e)=>{
    if (pwd.value.length>=6 || pwd.value.length===0) {
        validation.style.display='none'
        validation.innerText=""
    }       
    
    else if (pwd.value.length <6) {
        validation.style.display='block'
        validation.innerText = "Password too short"
    }
})

/////////////////////////////////////////////////////////////

const toggleDarkMode = document.querySelector('#toggle-darkmode');
const body = document.querySelector('body')
toggleDarkMode.addEventListener("change", (e)=>{
    console.log(e.target.value);
    if(e.target.value=='dark'){
        body.style.backgroundColor = "#000"
        body.style.color="#fff"
        //body.classList.toggle('darkMode')
    }
    else {
        body.style.backgroundColor = "#fff"
        body.style.color="#000"
    }
})

//////////////////////////////////////////////////////////

