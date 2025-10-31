// UC2: Calculate Daily Employee Wage

const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;

function calculateDailyWage() {
  // Generate random number (0 or 1) for attendance
  const attendance = Math.floor(Math.random() * 2);
  let dailyWage = 0;

  if (attendance === IS_PRESENT) {
    console.log("Employee is PRESENT");
    dailyWage = WAGE_PER_HOUR * FULL_DAY_HOURS;
    console.log(`Daily Employee Wage: ${dailyWage}`);
  } else {
    console.log("Employee is ABSENT");
    console.log(`Daily Employee Wage: ${dailyWage}`);
  }
}

// Execute the function
calculateDailyWage();
