class Mobile {
    constructor(
        name,
        color,
        size,
        weight,
        battery,
        camera,
    )
    {
        this.name = name;
        this.color = color;
        this.size = size;
        this.weight = weight;
        this.battery = battery;
        this.camera = camera;
    }
    toggleBattery(batteryStatus) {
        this.battery = batteryStatus;
    }
    toggleCamera(cameraStatus) {
        this.camera = cameraStatus;
    }
}

export default Mobile;