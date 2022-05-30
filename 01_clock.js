function time(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let d = date.getDay()
    
    if (h < 10){
        h = "0"+h
    }
    if (m < 10){
        m = "0"+m
    }
    if (s < 10){
        s = "0"+s
    }
    if (d = 1){
        d = "MON" 
    }
    else if(d = 2){
        d = "TUE"
    }
    else if(d = 3){
        d = "WED"
    }
    else if(d = 4){
        d = "THU"
    }
    else if(d = 5){
        d = "FRI"
    }
    else if(d = 6){
        d = "SAT"
    }
    else if(d = 7){
        d = "SUN"
    }
    day.innerHTML = d
    hour.innerHTML = h
    minute.innerHTML = m
    sec.innerHTML = s
}
setInterval(time , 1000) 