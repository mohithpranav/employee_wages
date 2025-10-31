// UC2: Calculate Daily Employee Wage

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_DAY_HOURS = 8;

function calculateDailyWage() {
  // Generate random number (0 or 1) for attendance
  const attendance = Math.floor(Math.random() * 3);
  let workingHours = 0;
  let dailyWage = 0;

  switch (empType) {
    case IS_ABSENT:
      console.log("Employee is ABSENT");
      workingHours = 0;
      break;
    case IS_PART_TIME:
      console.log("Employee is PART TIME");
      workingHours = PART_TIME_HOURS;
      break;
    case IS_FULL_TIME:
      console.log("Employee is FULL TIME");
      workingHours = FULL_DAY_HOURS;
      break;
  }
  dailyWage = WAGE_PER_HOUR * workingHours;
  console.log(`Working Hours: ${workingHours}`);
  console.log(`Daily Employee Wage: ${dailyWage}`);
}

// Execute the function
calculateDailyWage();
