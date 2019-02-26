window.onload = function () {
    var sentencje = ["Nie każdej niedzieli Wielkanoc.",
        "W Wielki Piątek dobry zasiewu początek.",
        "Wdzięczy się jak prosię na Wielkanoc.",
        "Deszcz w Wielki Piątek napycha każdy kątek.",
        "Suchy post - dobry rok.",
        "W Wielki Piątek gdy deszcz hojnie doliny zleje, że dużo mleka będzie, są pewne nadzieje.",
        "Polak woli rękę złamać niż złamać post.",
        "W Wielki Piątek zrób początek, a w sobotę kończ robotę.",
        "Pogoda na Kwietną Niedzielę, wróży urodzaju wiele.",
        "Kiedy w Wielki Post rosa, to nasiej gospodarzu dużo prosa,"];
    setInterval(function () {
        var losowa = Math.floor(Math.random() * sentencje.length);
        var elem = document.getElementById("sentencje");
        elem.innerHTML = sentencje[losowa];       
    }, 3000);
    GetDays('2018-04-01');
    function GetDays(date) {
        var d = new Date();
        var swieta = new Date(date);
        var diff = swieta - d;
        var days = Math.ceil(diff / (1000 * 3600 * 24));
        var tekst = days == 1 ? " dzień" : " dni";
        document.getElementById("prawy").innerHTML = "Do swiąt pozostało: "
                + days + tekst;
    }
    document.getElementById("sentencje").onclick = function (){
       // console.log(this.classList);
        console.log(this.className);
        this.className = this.className === "show"? "hide" : "show";
        console.log(this.className);
        //this.classList.toggle("toggle");
    };
};
