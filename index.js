/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord (firstname,familyname,title,payrateperhour){
    employee = {};
    employee.firstname = firstname;
    employee.familyname = familyname;
    employee.title = title;
    employee.payrateperhour = payrateperhour;
    employee.timeInEvents = timeInEvents;
    employee.timeOutEvents = timeOutEvents;
    return employee;
    
    }

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

