maxDaysInMonth = (month) => {
    let days = 0
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        days = 31;
        return days
    }
    else if (month == 2) {
        days = 29;
        return days
    }
    else {
        days = 30;
        return days
    }
}






{
    while (nombredepalindromes < numberx) {
        if (isPalindrome(date) == true) {
            nombredepalindromes++;
            console.log(date)
        }
        else if (Datesplit[1] !== 2) {
            let resplit0 = (parseFloat(parseInt(split0))).toString();
            let resplit1 = (parseFloat(parseInt(split1 = (2)))).toString();
            let resplit2 = (parseFloat(parseInt(split2))).toString();
            date = (resplit0 + '/' + resplit1 + '/' + resplit2);

        }
        else if (Datesplit[0] < 29) {
            resplit0 = (parseFloat(parseInt(split0 + 1))).toString();
            resplit1 = (parseFloat(parseInt(split1))).toString();
            resplit2 = (parseFloat(parseInt(split2))).toString();
            date = (resplit0 + '/' + resplit1 + '/' + resplit2);

        }
        resplit0 = (parseFloat(parseInt(split0))).toString();
        resplit1 = (parseFloat(parseInt(split1))).toString();
        resplit2 = ((parseInt(split2 + 1))).toString();
        date = (resplit0 + '/' + resplit1 + '/' + resplit2);


    }



}