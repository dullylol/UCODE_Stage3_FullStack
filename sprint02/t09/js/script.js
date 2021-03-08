function getFormattedDate(date) {
    if (typeof date != "object") {
        return ""
    }

    return getDateWithZero(date.getDate()) + "." + 
            getDateWithZero(date.getMonth() + 1) + "." + 
            date.getFullYear() + " " +
            getDateWithZero(date.getHours()) + ":" +
            getDateWithZero(date.getMinutes()) + " " +
            getDayOfWeek(date.getDay())

}

function getDateWithZero(date) {
    if (date < 10) {
        return "0" + date
    }
    return date
}

function getDayOfWeek(date) {
    switch (date) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        default:
            return ""
    }
}
