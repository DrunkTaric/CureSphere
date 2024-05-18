// Only characters from the alphabets
export const alphabet = /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/

// First, Middle and Last name check
export const fullname = /^[a-zA-Z]+\s+[a-zA-Z]+\s+[a-zA-Z]+$/

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
export const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

// Email
export const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


/*
    (123) 456 7899
    (123).456.7899
    (123)-456-7899
    123-456-7899
    123 456 7899
    1234567899
*/
export const phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/

