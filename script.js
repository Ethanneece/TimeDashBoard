

function changeStats(time) {

    const dataJSON = localStorage.getItem("data");

    const data = JSON.parse(dataJSON);

    for (let i = 0; i < data.length; i++) {
        
        const section = data[i].title
        console.log(data[i].timeframes)
        console.log(time)
        const current = data[i].timeframes[time].current
        const previous = data[i].timeframes[time].previous

        const currentHTML = document.getElementById(section + " Current")
        currentHTML.innerHTML = current + "hrs"
        
        const previousHTML = document.getElementById(section + " Previous")
        previous.innerHTML = "Last Week - " + previous + "hrs"
    }

    switchButton(time);
}

function switchButton(time) {

    const buttons = document.getElementsByClassName("metricChoice");

    buttons[0].classList.remove("metricChoice");

    const newChoice = document.getElementById(time);

    newChoice.classList.add("metricChoice");
}

async function loadJson() {

    const res = await fetch("data.json");
    const data = await res.json();

    localStorage.setItem("data", JSON.stringify(data));
}


const dailyButton = document.getElementById("daily");

dailyButton.addEventListener("click", () => changeStats("daily"));

const weeklyButton = document.getElementById("weekly");

weeklyButton.addEventListener("click", () => changeStats("weekly"));

const monthlyButton = document.getElementById("monthly");

monthlyButton.addEventListener("click", () => changeStats("monthly"));

loadJson();
changeStats("daily");