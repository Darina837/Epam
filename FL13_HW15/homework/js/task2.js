function Vehicle(color, engine) {
    const timeDrive = 2000;
    const timeStop = 1500;
    const step = 20;
    const difference = 30;
    if(this.__proto__.constructor.name === 'Car') {
        this._maxSpeed = 80;
    } else if(this.__proto__.constructor.name === 'Motorcycle') {
        this._maxSpeed = 90;
    } else {
        this._maxSpeed = 70;
    }

    this._color = color;
    this._engine = engine;

    let isDrive = false;
    let isSlow = false;
    let currentSpeed = 0;    
    let timerDrive, maxCurrentSpeed;

    this.upgradeEngine = (newEngine, maxSpeed) => {
        if(!isDrive && !isSlow) {
            this._maxSpeed = maxSpeed;
            this._engine = newEngine;    
        } else {
            return
        }
    }

    this.getInfo = () => {
        console.log(`
        engine: ${this._engine},
        color: ${this._color},
        maxSpeed: ${this._maxSpeed},
        model: ${this._model}
        `);
    }

    this.drive = () => {
        if(isDrive) {
            return;
        } else {
            isDrive = true;
            console.log(currentSpeed);
            if(this.__proto__.constructor.name === 'Motorcycle') {
                console.log("Let's drive!");
                timerDrive = setInterval( () => {
                    currentSpeed += step;
                    console.log(currentSpeed);
                    if(currentSpeed - this._maxSpeed >= difference) {
                        console.log('Engine overheating');
                        this.stop();
                    }
                }, timeDrive )
            } else {
                timerDrive = setInterval( () => {
                    currentSpeed += step;
                    console.log(currentSpeed);
                    if(currentSpeed > this._maxSpeed) {
                        console.log('speed is too high, SLOW DOWN!');
                    }
                }, timeDrive )
            }
            
        }
    }

    this.stop = () => {
        if(isSlow) {
            console.log('Already slows down');
        } else {
            clearInterval(timerDrive);
            maxCurrentSpeed = currentSpeed;
            isSlow = true;
            timerDrive = setInterval( () => {
                currentSpeed -= step;
                console.log(currentSpeed);
                if(currentSpeed <= 0) {
                    clearInterval(timerDrive);
                    isDrive = false;
                    isSlow = false;
                    currentSpeed = 0; 
                    if(this.__proto__.constructor.name === 'Car') {
                        console.log(`Car ${this._model} is stopped. Maximum speed during the drive ${maxCurrentSpeed}`);
                    } else if(this.__proto__.constructor.name === 'Motorcycle') {
                        console.log(`Motorcycle ${this._model} is stopped. Good drive`)
                    } else {
                        console.log(`Vehicle is stopped. Maximum speed during the drive was ${maxCurrentSpeed}`);
                    }   
                }
            }, timeStop )
        }
        
    }
}

function Car(model, color, engine) {
    Vehicle.apply(this);
    this._model = model;
    this._color = color;
    this._engine = engine;

    this.changeColor = newColor => {
        if(newColor === this._color) {
            console.log('The selected color is the same as the previous, please choose another one');
        } else {
           this._color = newColor; 
        }
    }
}

function Motorcycle(model, color, engine) {
    Vehicle.apply(this);
    this._model = model;
    this._color = color;
    this._engine = engine;
}