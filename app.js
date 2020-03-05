let Battery = function (energy) {
    this.energy = energy;

    this.setEnergy = function (new_energy) {
        this.energy = new_energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy -= 1;
        }
    };
};

let FlashLamp = function (status, battery) {
    this.status = status;
    this.battery = battery;

    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
    this.light = function () {
        if(this.status){
            alert('Lighting');
        }else {
            alert('Not Lighting');
        }
    };
};

let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info :" + flashLamp.getBatteryInfo() + "</br>");
flashLamp.light();

document.write('Turn On</br>');
flashLamp.turnOn();
flashLamp.light();

document.write('Turn Off</br>');
flashLamp.turnOff();
flashLamp.light();