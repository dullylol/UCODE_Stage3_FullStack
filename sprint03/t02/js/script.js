class Timer {

    constructor(title, delay, stopCount) {
        this.title = title
        this.delay = delay
        this.stopCount = stopCount
    }

    start() {
        console.log("Timer " + this.title + " started (delay=" + this.delay +",  stopCount=" + this.stopCount +")")
        
        this.cyclesLeft = this.stopCount - 1

        this.timer = setInterval(()=>this.tick(), this.delay)
    }

    tick() {
        if (this.cyclesLeft < 0) {
            this.stop()
        } 
        else {
            console.log("Timer "+ this.title + " Tick! | cycles left " + this.cyclesLeft)
            this.cyclesLeft--
        }
    }

    stop() {
        clearInterval(this.timer)
        console.log("Timer Bleep stopped")
    }

}

function runTimer(id, delay, counter) {
    let timer = new Timer(id, delay, counter)
    timer.start()
}

//runTimer("Bleep", 1000, 5)