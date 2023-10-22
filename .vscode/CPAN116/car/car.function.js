function main() {
    const myCar = new Car();
    myCar.make = 'Ford';
    myCar.model = 'Edge';
    myCar.year = '2020';
    myCar.color = 'blue';

    console.log('Make:', myCar.make);
    console.log('Model:', myCar.model);
    console.log('Year:', myCar.year);
    console.log('Color:', myCar.color);

    console.log('Status:', myCar.status);
    console.log('Speed:', myCar.speed);

    myCar.start();
    console.log('Status:', myCar.status);
    console.log('Speed:', myCar.speed);

    myCar.accelerate();
    console.log('Accelerated. Current speed:', myCar.speed);

    myCar.brake();
    myCar.brake();
    console.log('Braked twice. Current speed:', myCar.speed);

    myCar.stop();
    console.log('Status:', myCar.status);
    console.log('Speed:', myCar.speed);

    myCar.honk();
}

// Run the main function
main();