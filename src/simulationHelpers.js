function willPlantThrive(array) {
    if (array[0] <= 12 && array[0] >= 4) {
        if (array[1] <= 5 && array[1] >= 2) {
            if (array[2] <= 2 && array[2] >= 0.5) {
                return true
            }
        }
    }
    return false
}

export default willPlantThrive