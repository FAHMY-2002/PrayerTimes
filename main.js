
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
      <div class=" my-5 flex flex-col items-center">
        <h1 id="date" class="font-bold text-xl my-3 text-white">التاريخ الهجري ${response.data.data.date.hijri.date}</h1>
        <h1 id="date" class="font-bold text-xl my-3 text-white">التاريخ الميلادي ${response.data.data.date.gregorian.date}</h1>
        <h1 id="date" class="font-bold text-2xl my-3  text-white">${city}</h1>
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
