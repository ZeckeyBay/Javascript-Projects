const button = document.querySelector("button")

button.addEventListener("click",() => {
    Notification.requestPermission().then(perm => {
        if (perm == "granted"){
            const notification = new Notification("Ders Çalış",{
                body:"Erdem dersini çalış, oyunu bırak",
                data: {hello: "world"},
                tag : "Welcome message",
            })
            notification.addEventListener("click",e =>{
                console.log(e)
            })
        }
    })
})
let notification
let interval
document.addEventListener("visibilitychange",() =>{
    if (document.visibilityState==="hidden"){
        const leaveDate = new Date()
        interval = setInterval(() => {
            notification = new Notification("Dersini çalışmadan gelme lütfen",{
                body:`${Math.round((new Date() - leaveDate) / 1000)} saniyedir çalışıyosun`,
                tag:"Dersini çalış",
            })
        },100)
        notification = new Notification("Dersini çalışmadan gelme lütfen",{
            body:"Lütfeenn",
            tag:"Dersini çalış",
        })
    } else {
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})