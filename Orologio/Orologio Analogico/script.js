const deg = 6 // Questa costante definisce il grado di rotazione corrispondente a un secondo dell'orologio. Cerchio = 360 gradi,60 secondi in un minuto, 360 / 60 = 6 gradi per secondo
    const hr = document.querySelector('#hr')
    const min = document.querySelector('#min')
    const sec = document.querySelector('#sec')
    
    setInterval(() => {
        const day = new Date()
        let hh = day.getHours() * 30
        let mm = day.getMinutes() * deg
        let ss = day.getSeconds() * deg

        hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
        min.style.transform = `rotateZ(${mm}deg)`
        sec.style.transform = `rotateZ(${ss}deg)`
    })