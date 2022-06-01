
const initBattery = () => {
    const batteryPercent = document.getElementById('battery-percentage'),
    batteryStatus = document.querySelector('.battery-status'),
    batteryLiquid = document.querySelector('.battery_liquid')
    
    navigator.getBattery().then((battery) => {
        
        updateBattery = () => {
            let level = Math.round(battery.level * 100)
            batteryPercent.innerText = `${level}%`
            batteryLiquid.style.height = `${parseInt(battery.level * 100)}%`

            if (level == 100) {
                batteryStatus.innerHTML = 'Full Battery <i class="ri-battery-2-fill"></i>'
                batteryLiquid.classList.add('gradient-color-green')

            } else if (level > 60 && level < 100) {
                batteryStatus.innerHTML = 'Good Battery <i class="ri-battery-2-fill"></i>'
                batteryLiquid.classList.add('gradient-color-yellow')

            } else if (level > 20 && level <= 60) {
                batteryStatus.innerHTML = 'Mid Battery <i class="ri-battery-low-fill"></i>'
                batteryLiquid.classList.add('gradient-color-orange')

            } else {
                batteryStatus.innerHTML = 'Low Battery <i class="ri-battery-2-fill"></i>'
                batteryLiquid.classList.add('gradient-color-red')
            }

            const batteryPopUp = document.querySelector('.isCharging')

            if (battery.charging === true) {
                batteryStatus.innerHTML = 'Charging.. <i class="ri-flashlight-line animated-green"></i>'
                batteryPopUp.style.transition = '500ms'
                batteryPopUp.style.bottom = '10%'
                setTimeout(()=> {
                    batteryPopUp.style.bottom = '-20%'
                },3000)
                
            }
        }

        updateBattery()
        
    })   
}
setInterval(initBattery, 500)
