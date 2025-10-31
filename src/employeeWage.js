// UC7: Refactor the Code to write a Class Method to Compute Employee Wage

class EmployeeWage {
  // Class constants
  static IS_ABSENT = 0;
  static IS_PART_TIME = 1;
  static IS_FULL_TIME = 2;

  // Constructor to initialize class variables
  constructor(
    wagePerHour,
    partTimeHours,
    fullDayHours,
    maxWorkingDays,
    maxWorkingHours
  ) {
    this.wagePerHour = wagePerHour;
    this.partTimeHours = partTimeHours;
    this.fullDayHours = fullDayHours;
    this.maxWorkingDays = maxWorkingDays;
    this.maxWorkingHours = maxWorkingHours;
    this.totalMonthlyWage = 0;
    this.totalWorkingHours = 0;
    this.totalWorkingDays = 0;
  }

  // Method to get working hours based on employee type
  getWorkingHours(empType) {
    switch (empType) {
      case EmployeeWage.IS_ABSENT:
        return 0;
      case EmployeeWage.IS_PART_TIME:
        return this.partTimeHours;
      case EmployeeWage.IS_FULL_TIME:
        return this.fullDayHours;
      default:
        return 0;
    }
  }

  // Method to get employee status string
  getEmployeeStatus(empType) {
    switch (empType) {
      case EmployeeWage.IS_ABSENT:
        return "ABSENT";
      case EmployeeWage.IS_PART_TIME:
        return "PART TIME";
      case EmployeeWage.IS_FULL_TIME:
        return "FULL TIME";
      default:
        return "UNKNOWN";
    }
  }

  // Method to calculate daily wage
  calculateDailyWage() {
    const empType = Math.floor(Math.random() * 3);
    const workingHours = this.getWorkingHours(empType);
    const dailyWage = this.wagePerHour * workingHours;
    const empStatus = this.getEmployeeStatus(empType);

    console.log(`Employee is ${empStatus}`);
    console.log(`Working Hours: ${workingHours}`);
    console.log(`Daily Employee Wage: ${dailyWage}`);

    return { dailyWage, workingHours };
  }

  // Method to calculate monthly wage
  calculateMonthlyWage() {
    console.log("=== Monthly Wage Calculation ===");
    console.log(`Max Working Days: ${this.maxWorkingDays}`);
    console.log(`Max Working Hours: ${this.maxWorkingHours}\n`);

    while (
      this.totalWorkingDays < this.maxWorkingDays &&
      this.totalWorkingHours < this.maxWorkingHours
    ) {
      this.totalWorkingDays++;
      console.log(`--- Day ${this.totalWorkingDays} ---`);

      const { dailyWage, workingHours } = this.calculateDailyWage();

      // Check if adding these hours would exceed the limit
      if (this.totalWorkingHours + workingHours > this.maxWorkingHours) {
        console.log(
          `\nReached maximum working hours limit! Cannot add ${workingHours} more hours.`
        );
        break;
      }

      this.totalMonthlyWage += dailyWage;
      this.totalWorkingHours += workingHours;

      console.log(`Total Hours so far: ${this.totalWorkingHours}`);
      console.log();
    }

    this.displayResults();
  }

  // Method to display final results
  displayResults() {
    console.log("=================================");
    console.log(`Total Working Days: ${this.totalWorkingDays}`);
    console.log(`Total Working Hours: ${this.totalWorkingHours}`);
    console.log(`Total Monthly Wage: ${this.totalMonthlyWage}`);
    console.log("=================================");
  }
}

// Create an instance of EmployeeWage class and calculate wages
const employeeWage = new EmployeeWage(20, 4, 8, 20, 100);
employeeWage.calculateMonthlyWage();
