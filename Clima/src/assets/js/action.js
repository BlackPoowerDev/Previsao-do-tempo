let button = document.querySelector('#buscar')
button.addEventListener('click', buscar)

async function buscar(){
    let APIKey = '78e44f02cb733a0aa1f0721030bcdee1'
    
    let input = document.querySelector('#search').value
    
    if(input == ''){
        return false
    }
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${APIKey}`)
    let json = await response.json()
    
    let img = document.querySelector('.info picture img')
    let temperatura = document.querySelector('.temperatura')
    let humidity = document.querySelector('.humidity')
    let speed = document.querySelector('.speed')
    let description = document.querySelector('.description')

    if(json.cod == 404){
        img.src = './src/assets/img/clear.png'
        return false
    }

    if(json.cod == 200){


    switch (json.weather[0].main) {
        case 'Clear':
            img.src = './src/assets/img/clear.png'
            break;

        case 'Clouds':
            img.src = './src/assets/img/cloud.png'
            break;

        case 'Mist':
            img.src = './src/assets/img/mist.png'
            break;    

        case 'Rain':
            img.src = './src/assets/img/rain.png'
            break;

        case 'Snow':
            img.src = './src/assets/img/snow.png'
            break;

        default:
            break;
    }
    let temp = `${parseInt(json.main.temp)}`
    humidity.innerHTML = `${json.main.humidity}%`
    speed.innerHTML = `${parseInt(json.wind.speed)}%`
    
    
    switch (json.weather[0].description) {
        case 'scattered clouds':
            description.innerHTML = `Nuvens dispersas`
            break;
        case 'clear sky':
            description.innerHTML = `Céu limpo`
            break;
        case 'broken clouds':
            description.innerHTML = `Nuvens quebradas`
            break;
        case 'few clouds':
            description.innerHTML = `Poucas nuvens`
            break;
        case 'moderate rain':
            description.innerHTML = `chuva moderada`
            break;
        default: 
            break
            
    }

    if(temp.length > 2){
        temperatura.innerHTML = temp.substr(0,2)
    }else{
        temperatura.innerHTML = temp
    }

    // console.log(temperatura)
    console.log(json.weather[0].description)

    animate()
}
}

function animate(){
    const info = document.querySelector('.group-info')
    const img = document.querySelector('.info picture img')
    const p = document.querySelector('.info-clima p')
    const span = document.querySelector('.info-clima span')
    const infoText = document.querySelector('.info-icon')
    const infospan = document.querySelector('.info > span')
    info.classList.add('active')

    img.classList.add('show')
    p.classList.add('show')
    span.classList.add('show')
    infoText.classList.add('show')
    infospan.classList.add('show')
}