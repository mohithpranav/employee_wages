// UC5: Calculating Wages for a Month

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_DAY_HOURS = 8;
const WORKING_DAYS_PER_MONTH = 20;

function getWorkingHours(empType) {
  switch (empType) {
    case IS_ABSENT:
      return 0;
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_DAY_HOURS;
    default:
      return 0;
  }
}

function calculateDailyWage() {
  const empType = Math.floor(Math.random() * 3);
  let workingHours = getWorkingHours(empType);
  let dailyWage = WAGE_PER_HOUR * workingHours;

  const empStatus =
    empType === IS_ABSENT
      ? "ABSENT"
      : empType === IS_PART_TIME
      ? "PART TIME"
      : "FULL TIME";

  console.log(`Employee is ${empStatus}`);
  console.log(`Working Hours: ${workingHours}`);
  console.log(`Daily Employee Wage: ${dailyWage}`);

  return dailyWage;
}

function calculateMonthlyWage() {
  console.log("=== Monthly Wage Calculation ===");
  console.log(`Working Days per Month: ${WORKING_DAYS_PER_MONTH}\n`);

  let totalMonthlyWage = 0;

  for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
    console.log(`--- Day ${day} ---`);
    const dailyWage = calculateDailyWage();
    totalMonthlyWage += dailyWage;
    console.log();
  }

  console.log("=================================");
  console.log(`Total Monthly Wage: ${totalMonthlyWage}`);
  console.log("=================================");
}

// Execute the function
calculateMonthlyWage();
