// let locationObject = {
//     20 : "locatin 1",
//     30 : "locatin 2",
//     10 : "locatin 3",
//     40 : "locatin 4",
// } 

// let mainLocation = 15 ;
// let mylocatinArray = Object.keys(locationObject)

// let mylocatinArrayNumbers = mylocatinArray.map((n) => +n)

// console.log(mylocatinArrayNumbers)

// let check =  mylocatinArrayNumbers.every(function(e){
//     e > this
// },mainLocation)

// console.log(check)

// let email = 'O@@@g...com O2@g.com O@g.net Af@Y.com O-g.com o@s.org 1@1.com';

// let urlRe = /\w+@\w+.(com|net)/ig;
// console.log(email.match(urlRe))

// let kdk = "s100s s2000s s30000s"

// console.log(kdk.match(/s\d+s/ig))
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let nameRe = /os\d*o /ig
// console.log(specialNames.match(nameRe))
// // Output
// // ['Os10O', 'OsO', 'Os100O']
// console.log("#".repeat(30))

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let patternRe = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig
// console.log(ip.match(patternRe))

// console.log("#".repeat(30))

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}(\s|\/)(\d{2}|\-)(\s|\/)\d{2,4}/ig; // Write Pattern Here
// let re2 = /\d{2}\s\-\s\d{2}\s\-\s\d{2,4}/ig; // Write Pattern Here

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re2)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

// console.log("#".repeat(30))

// let phone = "+(995)-123 (4567)";
// let Re =/\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/ig;
// console.log(phone.match(Re))

// let sub = document.querySelector(".submit")
// let form = document.querySelector("form")
// let phone = document.querySelector("#phone")

// form.onsubmit = (e) => {
//     let phoneRe = /(010|012|011|015)\d{8}$/g;
//     e.preventDefault()
//     let phoneva = phone.value
//     console.log(phoneRe.test(phoneva))
//     if(){
//         return true;
//     }
// }




// class User {
//     // Private Property
//     #e;
//     constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//     }
//     getSalary() {
//     return parseInt(this.#e);
//     }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);

// class kansa extends User {
//     // Private Property
//     constructor(id, username, eSalary,hey) {
//     super(id, username, eSalary)
//     this.h = hey;
//     }
// }
// let userTwo = new kansa(110, "Elzeroo", "6000 Gneh","hallo");
// console.log(userTwo.h);
// console.log(userTwo.getSalary() * 0.3);

// let pop = document.querySelectorAll(".popup");
// let form = document.querySelector(".section_form");
// let overlay = document.querySelector(".overlay");
// let closeBtn = document.querySelector(".close-btn");

// pop.forEach((pop) => {
//     pop.onclick = () => {
//         overlay.style.display = "block"; // Show overlay
//         form.style.display = "block"; // Show form
//         form.classList.add("show"); // Add animation class
//     };
// });
// closeBtn.onclick = () => {
//     form.classList.remove("show"); // Remove animation class
//         form.style.display = "none"; // Hide form
//         overlay.style.display = "none"; // Hide overlay
// };




// let arrows = document.querySelectorAll(".arrow");
// let submit = document.querySelector("input.wpcf7-submit");


// arrows.forEach((arrow) => {
//     arrow.onclick = () => {
//         subMenu.forEach((sub) => {
//             sub.classList.toggle("active");
//         })
//         arrow.classList.toggle("active");
//     };
// });

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

 

// const myObjfromServer = '{"Username":"Kansosy","Age":23}';
// const myJsObj = JSON.parse(myObjfromServer)
// console.log(myJsObj)
// const myObjToserver =JSON.stringify(myJsObj)
// console.log(myObjToserver)


/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     console.log(result);
//     let myData = result.json();
//     console.log(myData);
//     return myData;
//   })
//   .then((full) => {
//     full.length = 10;
//     return full;
//   })
//   .then((ten) => {
//     console.log(ten[0].name);
//   });

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));

// function getusers() {
//   let request = new XMLHttpRequest();
//   request.open("GET", "https://jsonplaceholder.typicode.com/users");
//   request.responseType = "json";
//   request.send();
//   request.onload = function () {
//     let user = document.getElementById("users");
//     if (request.status >= 200 && request.status < 300) {
//       let users = request.response;
//       for (let usr of users) {
//         user.innerHTML += `
//           <li class="rounded-lg border-2 border-black border-solid p-3 my-2">
//             <div onclick="onclicked(${usr.id})">
//               <h1 class="font-bold text-xl">${usr.name}</h1>
//               <p>${usr.email}</p>
//             </div>
//           </li>
//         `;
//       }
//     } else {
//       alert("Error In Request");
//     }
//   };
// }

// function onclicked(usrId) {
//   let request = new XMLHttpRequest();
//   request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${usrId}`);
//   request.responseType = "json";
//   request.send();
//   request.onload = function () {
//     let content = document.getElementById("content");
//       let posts = request.response;
//       content.innerHTML = "";
//       for (let post of posts) {
//         content.innerHTML += `
//           <div class="rounded-xl text-white bg-black p-3 m-2 my-2">
//             <h1 class="font-bold text-xl">${post.title}</h1>
//             <p class="">${post.body}</p>
//           </div>
//         `;
//       }
//   };
// }

// Call the function to fetch users on page load
// getusers();



// function getUsers() {
//   return new Promise((resolve,reject ) =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }else{
//           reject()
//         }
//       })
//       .then(json  => {
//         document.getElementById("users").innerHTML = "";
//         json.forEach(el => {
//           let userContent = `
//           <li onclick="onclicked(${el.id})" class="rounded-lg border-2 border-black border-solid p-3 my-2">
//           <h1 class="font-bold text-xl">${el.name}</h1>
//           <p class="font-bold text-xl">${el.email}</p>
//           </li>`;
//           document.getElementById("users").innerHTML += userContent;
//           resolve()
//         });
//       })
//   }) 
// }
// function getPosts(userId){
//   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }else{
//           alert("Error In Request")
//         }
//       })
//       .then(json  => {
//         document.getElementById("posts").innerHTML = "";
//         json.forEach(post => {
//           let content = `
//           <div class="rounded-xl text-white bg-black p-3 m-2 my-2">
//           <h1 class="font-bold text-xl">${post.title}</h1>
//           <p class="">${post.body}</p>
//           </div>
//           `;
//           document.getElementById("posts").innerHTML += content;
//         });
//       })
// }
// getUsers()
// .then(() => {
//   getPosts(1)
// }).catch(() => {
//   alert("Error In Request")
// })
// function onclicked(id) {
//   getPosts(id)
// }

  let Governorates = [
    {
      arabicName: "القاهرة",
      name: "Cairo",
    },
    {
      arabicName: "الإسكندرية",
      name: "Alexandria",
    },
    {
      arabicName: "الجيزة",
      name: "Giza",
    },
    {
      arabicName: "البحيره",
      name: "Beheira",
    },
    {
      arabicName: "الفيوم",
      name: "Faiyum",
    }
  ];

  Governorates.map((city) => {
    let content =
    `
    <option class=" text-lg">
      ${city.arabicName}
    </option>
    `
    document.getElementById("countries").innerHTML += content;
  });
  let cityName= "";
  document.getElementById("countries").addEventListener("change", function() {
    Governorates.map((city) => {
      if (city.arabicName == this.value) {
        cityName = city.name;
      }
    });
    getTime(cityName);
  });
  
  function getTime(city) {
  let params = {
    country: "EG",
    city: city,
  }
  axios.get('https://api.aladhan.com/v1/timingsByCity', {
    params: params
  })
  .then((response) => {
    console.log(response)
    let times = response.data.data.timings;
    document.getElementById("time").innerHTML = "";
      let content = `
      <div class="m-4 mt-12 flex flex-wrap justify-between items-center">
        <h1 id="date" class="font-bold text-xl my-3 text-white">التاريخ الميلادي ${response.data.data.date.gregorian.date}</h1>
        <h1 id="date" class="font-bold text-2xl my-3  text-white">${city}</h1>
        <h1 id="date" class="font-bold text-xl my-3 text-white">التاريخ الهجري ${response.data.data.date.hijri.date}</h1>
      </div>
      <div class="contanier grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5  px-10 ">
      <div class="Fajr times">
      <h1 class="font-bold  text-xl">الفجر</h1>
      <p>${times.Fajr}</p>
      </div>
      <div class="Dohr times">
      <h1 class="font-bold text-xl">الظهر</h1>
      <p>${times.Dhuhr}</p>
      </div>
      <div class="Asr times">
      <h1 class="font-bold text-xl">العصر</h1>
      <p>${times.Asr}</p>
      </div>
      <div class="Maghrib times">
      <h1 class="font-bold text-xl">المغرب</h1>
      <p>${times.Maghrib}</p>
      </div>
      <div class="Isha times">
      <h1 class="font-bold text-xl">العشاء</h1>
      <p>${times.Isha}</p>
      </div>
      </div>
      `;
      document.getElementById("time").innerHTML = content;
  })
  .catch((error) => {
    // التعامل مع الخطأ
    alert("Error In Request: " + error);
  });
}
getTime("Cairo");
// function clicked(Cname,el) {
//   getTime(Cname);
//   let active = document.getElementsByClassName("active");
//   for (element of active) {
//     element.classList.remove("active");
//   }
//   el.classList.add("active");
// }
