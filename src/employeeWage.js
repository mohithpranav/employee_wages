// UC6: Calculate Wages till a condition of total working hours or days is reached

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_DAY_HOURS = 8;
const MAX_WORKING_DAYS_PER_MONTH = 20;
const MAX_WORKING_HOURS_PER_MONTH = 100;

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

  return { dailyWage, workingHours };
}

function calculateMonthlyWage() {
  console.log("=== Monthly Wage Calculation ===");
  console.log(`Max Working Days: ${MAX_WORKING_DAYS_PER_MONTH}`);
  console.log(`Max Working Hours: ${MAX_WORKING_HOURS_PER_MONTH}\n`);

  let totalMonthlyWage = 0;
  let totalWorkingHours = 0;
  let totalWorkingDays = 0;

  while (
    totalWorkingDays < MAX_WORKING_DAYS_PER_MONTH &&
    totalWorkingHours < MAX_WORKING_HOURS_PER_MONTH
  ) {
    totalWorkingDays++;
    console.log(`--- Day ${totalWorkingDays} ---`);
    
    const { dailyWage, workingHours } = calculateDailyWage();
    
    // Check if adding these hours would exceed the limit
    if (totalWorkingHours + workingHours > MAX_WORKING_HOURS_PER_MONTH) {
      console.log(
        `\nReached maximum working hours limit! Cannot add ${workingHours} more hours.`
      );
      break;
    }
    
    totalMonthlyWage += dailyWage;
    totalWorkingHours += workingHours;
    
    console.log(`Total Hours so far: ${totalWorkingHours}`);
    console.log();
  }

  console.log("=================================");
  console.log(`Total Working Days: ${totalWorkingDays}`);
  console.log(`Total Working Hours: ${totalWorkingHours}`);
  console.log(`Total Monthly Wage: ${totalMonthlyWage}`);
  console.log("=================================");
}

// Execute the function
calculateMonthlyWage();
