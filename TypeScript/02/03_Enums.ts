const enum SeatChoice { // using `const` changes the js file created at run-time compared to simply using enum.
    WINDOW,
    AISLE,
    MIDDLE,
    INTERNATIONAL
}

const hcSeat = SeatChoice.INTERNATIONAL;
console.log(hcSeat);