const tab=[
    // name => category, subtitles
    ['Czyste szczęście','happy','łaaaaaaaaa'],
    ['Ty stara pizdo','angry','Ty stara pizdo. Ja pierdole, kurwa. Ile jeszcze? Ile jeszcze tego gnoju trzeba przepychać? Hydraulika! Hydraulika... ze spręzyną zeby w to gówno wbił i kurwa kręcił! Wy kurwy inteligenckie! Kurwa, zginiemy przez was i marna to dla mnie pociecha ze was tez szlag trafi. Mnie moze szlag trafić, ja juz kurwa nie zyje. Ja zyje w suplemencie, ale przed wami jebane całe wasze zycie ma być. Macie się kurwa cieszyć, macie na Malediwy jechać, do Melazji się pierdolić, po Ibizach srać, elektryki se macie kupować, macie życ'],
    ['A to żydzisko jest','offend','A to żydzisko jest. O żesz kurwa mać, nigdy nie widziałem jak on wygląda'],
    ['Czy byłeś w wojsku','offend angry','Byłeś w wojsku kurwo? Pytam się ciebie czy byłeś w wojsku, kurwa jak do ciebie mówię to odpowiadaj jasno na pytania skurwysynu. W ogóle cię to nie dotyczy że jesteś daleko ode mnie. Pytam się ciebie czy byłeś w wojsku, Polaku.'],
    ['Ide się wyrzygać','sad','Idę się wyrzygać'],
    ['Biesiada','happy',''],
    ['Jak on pięknie pierdoli','offend','Ach Boże, mój Boże, jak on pięknie pierdoli. To kurwa gnój, zasraniec jeden. Jak to łatwo mu z pyska spadło słuchaj. Że się jeszcze nie udławił własnymi słowami'],
    ['Dostaliśmy wpierdol','happy','Kamratki i Kamraci, no cóż, dostaliśmy wpierdol, ale nie do końca'],
    ['Kraśko','happy offend','Uważaj! Teraz powiem tak jak Kraśko. Zbliżenie na mnie, zbliżenie, duże zbliżenie na mnie. Zostańcie państwo z nami'],
    ['Lat mi ubywa','angry','Ja pierdole! To jest po prostu... Lat mi ubywa, lat mi ubywa, wściekłość mnie cofa do tyłu'],
    ['Obudźcie się','angry','Obudźcie się kurwa ludzie, obudźcie się kurwa'],
    ['W czym masz problem','angry offend','Ale w czym masz problem powiedz mi. W czym masz problem pytam się, odpowiadaj mi na pytanie w czym masz problem a nie kurwa. Z czym masz problem skurwysynu? Mów mi tu zaraz w czym masz problem. A nie że mi tu będziesz inysnuował ty kurwo w dupę ruchana. W czym masz problem? Masz mi mówić w czym masz problem gnoju zaparszywiony w czym twój problem tkwi'],
    ['Za łeb kurwa','angry offend','Za łeb kurwa, nad skraj przepaści i jeb w czaszkę'],
    ['Wróg jest słabszy niż myślicie','angry offend','Kamraci, wróg jest słabszy niż myślicie. Przede wszystkim jest kurwą, wróg to kurwa, żadnego do niego szacunku'],
    ['Puk puk puk panie Kowalski','offend','Puk puk puk panie Kowalski, to już nie jest pana mieszkanie, wypierdalaj pan stąd i pan nie masz powrotu, nie masz pan powrotu w to miejsce, zakazujemy panu wrócić'],
    ['Wiesz co ty możesz?','offend','Wiesz co ty możesz, synku? Możesz się własnymi jajami pobawić co najwyżej'],
    ['Kurwo pierdolona','angry offend','Kurwo pierdolona, skurwysynu w dupę jebany, dziwko jebnana kurwa, gdzie masz szmato oczy kurwo, pierdolona suka kurwa, do gnoju ,nie do auta, skurwysyńska pizda, ja pierdole'],
    ['Pies go pierdolił','offend','Pies go pierdolił w samą jego dupę, w sam środek jego dupy. I żeby to był duży pies, bernardyn'],
    ['Ty pierdolony tchórzu','offend','Ty pierdolony tchórzu maczany w sraczce'],
    ['Śmiech przez łzy','happy sad',''],
    ['Nie masz prawa mówić do mnie Kamracie','angry offend','Nie masz prawa mówić do mnie Kamracie ty kurwski pomiocie'],
]

const video_select=document.getElementById("video-select")
for(let i=0;i<tab.length;i++){
    video_select.innerHTML += "<option value='" + i + "'>" + tab[i][0] + "</option>"
}

const p1=document.getElementById("p1")
function videoChoice(){
    const choice=document.getElementById("video-select").value
    p1.innerHTML = ""
    p1.innerHTML += "<ul class='movie-desc'>" + "<li>" + '"' + tab[choice][0] + '"' + "</li>" + "<li>" + tab[choice][1] + "</li>" + "<li>" + tab[choice][2] + "</li>" + "</ul>"
    p1.innerHTML += "<video class='video-player' height='400px' controls><source src='video/" + String(choice) + ".mp4'></video>"
}

function videoDisplay(number){
    p1.innerHTML = ""
    p1.innerHTML += "<ul class='movie-desc'>" + "<li>" + '"' + tab[number][0] + '"' + "</li>" + "<li>" + tab[number][1] + "</li>" + "<li>" + tab[number][2] + "</li>" + "</ul>"
    p1.innerHTML += "<video class='video-player' height='400px' controls><source src='video/" + String(number) + ".mp4'></video>"
}

function searchText(){
    const search=document.getElementById("search-input").value.toLowerCase()
    const option=document.getElementById("search-select").value
    p1.innerHTML = "<h2>Wyniki wyszukiwania:</h2>"
    for(let i=0;i<tab.length;i++){
        if(tab[i][option].toLowerCase().includes(search)){
            p1.innerHTML += "<a onclick='videoDisplay(" + i + ")'>" + tab[i][0] + "</a><br>"
            p1.innerHTML += "<video class='video-player' height='300px' controls><source src='video/" + i + ".mp4'></video><br>"
        }
    }
}

function searchCat(){
    const option=String(document.getElementById("cat-select").value)
    p1.innerHTML = ""
    for(i=0;i<tab.length;i++){
        if(tab[i][1].includes(option)){
            p1.innerHTML += "<a onclick='videoDisplay(" + i + ")'>" + tab[i][0] + "</a><br>"
            p1.innerHTML += "<video class='video-player' height='300px' controls><source src='video/" + i + ".mp4'></video><br>"
        }
    }
}  
