/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var WeekDay;
(function (WeekDay) {
    WeekDay["Mon"] = "Monday";
    WeekDay["Tue"] = "Tuesday";
    WeekDay["Wed"] = "Wednesday";
    WeekDay["Thu"] = "Thursday";
    WeekDay["Fri"] = "Friday";
    WeekDay["Sat"] = "Saturday";
    WeekDay["Sun"] = "Sunday";
})(WeekDay || (WeekDay = {}));
function isWeekend(day) {
    return day === WeekDay.Sat || day === WeekDay.Sun;
}
//# sourceMappingURL=7.js.map