function HouseBlueprint(address, description, owner, size, date) {
    this.address = address
    this.date = date
    this.description = description
    this.owner = owner
    this.size = size

    this._averageBuildSpeed = 0.5

    this.getDaysToBuild = function () {
        return this.size / this._averageBuildSpeed
    }
}

function HouseBuilder(address, description, owner, size, rooms) {
    this.roomCount = rooms

    HouseBlueprint.call(this, address, description, 
                        owner, size, new Date(Date.now))
}