moment.updateLocale('is', {
    months: [
        "Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí",
        "Ágúst", "Setpember", "Október", "Nóvember", "Desember"
    ]
});

let local_gogn = {
    "results": [
        {
            "eventDateName": "Vínartónleikar 2020",
            "name": "Græn - tónleikaröð",
            "dateOfShow": "2020-01-09T19:30:00",
            "userGroupName": "Harpa",
            "eventHallName": "Eldborg",
            "imageSource": "https://www.sinfonia.is/media/myndir-201617/c1680x860/t7uebrqg.jpg"
        },
        {
            "eventDateName": "Föstudagsfreistingar",
            "name": "",
            "dateOfShow": "2020-06-09T12:00:00",
            "userGroupName": "Miðasala MAk",
            "eventHallName": "Hamrar",
            "imageSource": "https://media.gettyimages.com/photos/smiling-parents-with-two-children-picture-id1082467846?s=612x612"
        },
        {
            "eventDateName": "How to become Icelandic in 60 minutes",
            "name": "",
            "dateOfShow": "2020-07-01T19:00:00",
            "userGroupName": "Harpa",
            "eventHallName": "Kaldalón",
            "imageSource": "https://www.h2become.com/icelandic/img/h2bice-logo.png"
        },
        {
            "eventDateName": "How to become Icelandic in 60 minutes",
            "name": "",
            "dateOfShow": "2020-07-04T19:00:00",
            "userGroupName": "Harpa",
            "eventHallName": "Kaldalón",
            "imageSource": "https://www.h2become.com/icelandic/img/h2bice-logo.png"
        },
        {
            "eventDateName": "How to become Icelandic in 60 minutes",
            "name": "",
            "dateOfShow": "2020-07-09T19:00:00",
            "userGroupName": "Harpa",
            "eventHallName": "Kaldalón",
            "imageSource": "https://www.h2become.com/icelandic/img/h2bice-logo.png"
        },
        {
            "eventDateName": "How to become Icelandic in 60 minutes",
            "name": "",
            "dateOfShow": "2020-07-11T19:00:00",
            "userGroupName": "Harpa",
            "eventHallName": "Kaldalón",
            "imageSource": "https://www.h2become.com/icelandic/img/h2bice-logo.png"
        },
        {
            "eventDateName": "How to become Icelandic in 60 minutes",
            "name": "",
            "dateOfShow": "2020-08-01T19:00:00",
            "userGroupName": "Harpa",
            "eventHallName": "Kaldalón",
            "imageSource": "https://www.h2become.com/icelandic/img/h2bice-logo.png"
        },
        {
            "eventDateName": "Smokie",
            "name": "",
            "dateOfShow": "2020-08-06T20:30:00",
            "userGroupName": "Harpa",
            "eventHallName": "Eldborg",
            "imageSource": "https://e.snmc.io/i/600/w/196e22387c1b690a323a46c479d90ff6/3607293"
        },
        {
            "eventDateName": "Breathing in the shadow self",
            "name": "",
            "dateOfShow": "2020-05-23T09:00:00",
            "userGroupName": "Skrauthólar",
            "eventHallName": "Sólsetrið",
            "imageSource": "https://previews.123rf.com/images/wellofmike/wellofmike1811/wellofmike181100070/114221398-realistic-skull-and-crossbones.jpg"
        },
        {
            "eventDateName": "Hugleiðing",
            "name": "",
            "dateOfShow": "2020-05-21T12:00:00",
            "userGroupName": "Hallgrímstorg 101, 101 Reykjavík",
            "eventHallName": "Hallgrímskirkja",
            "imageSource": "https://cdn.mindful.org/focus3.png?q=80&fm=jpg&fit=crop&w=1920&h=1080"
        },
        {
            "eventDateName": "Battle Cancer Reykjavík",
            "name": "",
            "dateOfShow": "2020-08-29T08:30:00",
            "userGroupName": "CrossFit",
            "eventHallName": "CrossFit Reykjavíkur",
            "imageSource": "https://i.shgcdn.com/19e92833-2984-4665-bc0d-65b639ee3990/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            "eventDateName": "Maggi Eiríks 75 ára",
            "name": "",
            "dateOfShow": "2020-09-05T08:30:00",
            "userGroupName": "Harpan",
            "eventHallName": "Eldborg",
            "imageSource": "https://www.harpa.is/wp-content/uploads/2020/04/postersmall-300x424.png?v=1588267020"
        },
        {
            "eventDateName": "Magic Ice Reykjavík",
            "name": "",
            "dateOfShow": "2020-05-17T12:00:00",
            "userGroupName": "Magic Ice Reykjavík",
            "eventHallName": "Magic Ice Reykjavík, Reykjavík, Iceland",
            "imageSource": "https://www.whatson.is/wp-content/uploads/2020/01/magic-ice-copy.jpg"
        },
        ]
}
/*
náði að prenta gognin inni í fetchinu en náði ekki að skila þeim þannig ég gæti unnið úr þeim

const events_link = 'https://raw.githubusercontent.com/Kristberg/JavaScript/master/events.json?token=AGBF5YDKKNDN4UJ4JYHU6FS6ZLZ24';
//const gogn = []
let gogn;
fetch(events_link).then(res => res.json()).then(data => {
    //gogn.push(data.results)
    gogn = data.results
})
console.log(gogn);
*/

let main_body = document.getElementById("main_body")
//let row;

let gogn = local_gogn.results
let row = document.createElement("div")
row.className = "row"

for (let i=0; i < gogn.length; i++){
    row.appendChild(create_event(gogn[i]))
}
main_body.appendChild(row)

function create_event(event){
    let event_panel = document.createElement("div")
    event_panel.className = "column col-4 event-panel"

    event_panel.setAttribute("datetime", event.dateOfShow)
    let event_row = document.createElement("div")
    event_row.className = "row"

    let info_column = document.createElement("div")
    info_column.className = "col-6 text"

    //INFO
    let event_header = document.createElement("h3")
    event_header.className = "event-header"
    event_header.textContent = event.eventDateName

    let event_name = document.createElement("p")
    event_name.textContent = event.name

    let place1 = document.createElement("p")
    place1.textContent = event.userGroupName

    let place2 = document.createElement("p")
    place2.textContent = event.eventHallName

    let date = document.createElement("p")
    date.textContent = formatDate(event.dateOfShow)

    info_column.appendChild(event_header)
    info_column.appendChild(event_name)
    info_column.appendChild(place1)
    info_column.appendChild(place2)
    info_column.appendChild(date)
    //IMAGE
    let image_div = document.createElement("div")
    image_div.className = "col-6"

    let image = document.createElement("img")
    image.className = "event-image"
    image.src = event.imageSource

    image_div.appendChild(image)

    event_row.appendChild(info_column)
    event_row.appendChild(image_div)
    event_panel.appendChild(event_row)
    return event_panel
}

// Create a new date from a string, return as a timestamp.
function timestamp(str) {
    return new Date(str).getTime();
}

// Append a suffix to dates.
// Example: 23 => 23rd, 1 => 1st.


// formatta dagsetninguna þannig það sé ekki 0 fyrir framan daginn ef hann er < 10,
// fullt nafn mánaðar og allir fjórir stafir ársins
function formatDate(date) {
    return moment(date).format("D. MMMM YYYY");
}



let dateSlider = document.getElementById('slider-date');

noUiSlider.create(dateSlider, {
    // min: mest einn mánuð aftur í tímann
    // max: 1 og hálft ár frá núna
    range: {
        min: timestamp(moment().subtract(1, "month")),
        max: timestamp(moment().add(1, "year").add(6, "month"))
    },
    orientation: "horizontal", //segir sig sjálft

    // fara upp um einn dag per step á slidernum
    // (60 sek í 60 mín 24 tíma á dag, 1000 er til að breyta í millisek)
    step: 60*60*24*1000,

    // minnsta bilið sem notandi getur skoðað eru 4 vikur
    margin: 4*7*60*60*24*1000,



    //set byrjunarstig sem núna til einu ári frá núna
    start: [moment(), moment().add(1, "y")],

});

var dateValues = [
    // ákvað að hafa "var dateValues" í stað þess að sækja þau í hvert einasta skipti sem
    // sliderinn tickar, því fallið slider_change er kallað á í hvert skipti sem EITTHVAÐ
    // breytist í slidernum vegna dateSlider.noUiSlider.on('update', slider_change);
    document.getElementById('event-start'),
    document.getElementById('event-end')
];

function slider_change(values, handle, events){
    let event_list = document.getElementsByClassName("event-panel")
    for (let i=0; i < event_list.length; i++){
        let time = new Date(event_list[i].attributes["datetime"].value)

        let new_val_1 = parseInt(values[0].substring(0, values[0].length - 3)) //sekundu strengirnir á unix timestamp formatti
        let new_val_2 = parseInt(values[1].substring(0, values[1].length - 3))
        if (!((time < new Date(new_val_2)) && (time > new Date(new_val_1)))) {
            event_list[i].classList.add("d-none") //d-none er bara css class sem gerir display:none
        }
        else{
            event_list[i].classList.remove("d-none");
        }
    }
    dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
}

dateSlider.noUiSlider.on('update', slider_change);