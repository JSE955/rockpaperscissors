function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    if (value === 0) {
        return 'Rock';
    } else if (value === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}