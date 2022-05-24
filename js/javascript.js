const firebaseConfig = {
    apiKey: "AIzaSyC8nOTH5dAhjGDA65pPHhFtGhKWT2O-fJc",
    authDomain: "project-9086f.firebaseapp.com",
    databaseURL: "https://project-9086f-default-rtdb.firebaseio.com",
    projectId: "project-9086f",
    storageBucket: "project-9086f.appspot.com",
    messagingSenderId: "821743531504",
    appId: "1:821743531504:web:bb50d1d68b043bdc519935"
};

firebase.initializeApp(firebaseConfig);

function sendDataToFirebase(){
var db = firebase.database();

db.ref("japan").set({value1:"moriken1", value2:"jyunki2", value3:"makoto3"})
db.ref("america").set({value1:"moriken1", value2:"jyunki2", value3:"makoto3"})
db.ref("chinese").set({value1:"moriken1", value2:"jyunki2", value3:"makoto3"})

}

const btn = document.getElementById("btn");
const check = document.querySelectorAll("input");

btn.addEventListener('click', () => {
    check.forEach(ch => {
        if(ch.checked == true){
            console.log(ch.parentElement.textContent);
            var reference_c = firebase.database().ref(ch.parentElement.textContent);
            reference_c.on('value', (snapshot) => {
                console.log("KeyCに紐づけられた値：" + snapshot.val())
            });
        }
    });
});

// var reference_a = firebase.database().ref("KeyA");
// var reference_b = firebase.database().ref("KeyB");
// var reference_c = firebase.database().ref("KeyC");

// reference_a.on('value', (snapshot) => {
// console.log("KeyAに紐づけられた値：" + snapshot.val())
//     });

// reference_b.on('value', (snapshot) => {
//     console.log("KeyBに紐づけられた値：" + snapshot.val())
//     });

// reference_c.on('value', (snapshot) => {
//     console.log("KeyCに紐づけられた値：" + snapshot.val())
//     });

//     function addText(data){
//     const p = document.createElement("p");
//     p.innerHTML = data
//     const div = document.getElementById("contents")
//     div.appendChild(p)
// }

// reference_a.on('value', (snapshot) => {
//     const data = snapshot.val();
//     addText(data)
// });

// reference_b.on('value', (snapshot) => {
//     const data = snapshot.val();
//     addText(data)
// });

// reference_c.on('value', (snapshot) => {
//     const data1 = snapshot.val().value1;
//     const data2 = snapshmorikenal().name2jyunki connameta3makotosnapshot.val().value3;
//     addText(data1)
//     addText(data2)
//     addText(data3)
// });