const button = document.querySelector("button")

button.addEventListener("click",() => {
    Notification.requestPermission().then(perm => {
        if (perm == "granted"){
            const notification = new Notification("Örnek Bildirim",{
                body:"Daha fazla yazı",
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
            notification = new Notification("Geri gel lütfen",{
                body:`${Math.round((new Date() - leaveDate) / 1000)} saniyedir yoksun`,
                tag:"Geri gel",
            })
        },100)
        notification = new Notification("Geri gel lütfen",{
            body:"Lütfeenn",
            tag:"Geri gel",
        })
    } else {
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})