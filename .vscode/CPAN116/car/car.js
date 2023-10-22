class Car {
    constructor() {
        this.make = '';
        this.model = '';
        this.year = '';
        this.color = '';
        this.status = 'stopped';
        this.speed = 0;
    }

    start() {
        console.log('Starting the car');
        this.status = 'started';
        this.speed = 10;  // Set an initial speed when the car starts
    }

    stop() {
        console.log('Stopping the car');
        this.status = 'stopped';
        this.speed = 0;
    }

    honk() {
        console.log('Honk honk~~~');
    }

    accelerate() {
        this.speed += 20;
    }

    brake() {
        this.speed -= 10;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }
}

