// UC8: Compute Employee Wage for multiple companies

class EmployeeWage {
  // Class constants
  static IS_ABSENT = 0;
  static IS_PART_TIME = 1;
  static IS_FULL_TIME = 2;

  // Method to get working hours based on employee type
  getWorkingHours(empType, partTimeHours, fullDayHours) {
    switch (empType) {
      case EmployeeWage.IS_ABSENT:
        return 0;
      case EmployeeWage.IS_PART_TIME:
        return partTimeHours;
      case EmployeeWage.IS_FULL_TIME:
        return fullDayHours;
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
  calculateDailyWage(wagePerHour, partTimeHours, fullDayHours) {
    const empType = Math.floor(Math.random() * 3);
    const workingHours = this.getWorkingHours(
      empType,
      partTimeHours,
      fullDayHours
    );
    const dailyWage = wagePerHour * workingHours;
    const empStatus = this.getEmployeeStatus(empType);

    console.log(`Employee is ${empStatus}`);
    console.log(`Working Hours: ${workingHours}`);
    console.log(`Daily Employee Wage: ${dailyWage}`);

    return { dailyWage, workingHours };
  }

  // Method to calculate monthly wage with parameters
  calculateMonthlyWage(
    companyName,
    wagePerHour,
    partTimeHours,
    fullDayHours,
    maxWorkingDays,
    maxWorkingHours
  ) {
    console.log("\n╔════════════════════════════════════════╗");
    console.log(`║  ${companyName.padEnd(38)}║`);
    console.log("╚════════════════════════════════════════╝");
    console.log(`Wage Per Hour: ₹${wagePerHour}`);
    console.log(`Part Time Hours: ${partTimeHours}`);
    console.log(`Full Day Hours: ${fullDayHours}`);
    console.log(`Max Working Days: ${maxWorkingDays}`);
    console.log(`Max Working Hours: ${maxWorkingHours}\n`);

    let totalMonthlyWage = 0;
    let totalWorkingHours = 0;
    let totalWorkingDays = 0;

    while (
      totalWorkingDays < maxWorkingDays &&
      totalWorkingHours < maxWorkingHours
    ) {
      totalWorkingDays++;
      console.log(`--- Day ${totalWorkingDays} ---`);

      const { dailyWage, workingHours } = this.calculateDailyWage(
        wagePerHour,
        partTimeHours,
        fullDayHours
      );

      // Check if adding these hours would exceed the limit
      if (totalWorkingHours + workingHours > maxWorkingHours) {
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

    this.displayResults(
      companyName,
      totalWorkingDays,
      totalWorkingHours,
      totalMonthlyWage
    );

    return {
      companyName,
      totalWorkingDays,
      totalWorkingHours,
      totalMonthlyWage,
    };
  }

  // Method to display final results
  displayResults(
    companyName,
    totalWorkingDays,
    totalWorkingHours,
    totalMonthlyWage
  ) {
    console.log("═════════════════════════════════════════");
    console.log(`Company: ${companyName}`);
    console.log(`Total Working Days: ${totalWorkingDays}`);
    console.log(`Total Working Hours: ${totalWorkingHours}`);
    console.log(`Total Monthly Wage: ₹${totalMonthlyWage}`);
    console.log("═════════════════════════════════════════");
  }
}

// Create an instance of EmployeeWage class
const empWageBuilder = new EmployeeWage();

// Calculate wages for multiple companies
console.log(
  "\n********** EMPLOYEE WAGE COMPUTATION FOR MULTIPLE COMPANIES **********\n"
);

// Company 1: Tech Solutions
empWageBuilder.calculateMonthlyWage("Tech Solutions", 20, 4, 8, 20, 100);

// Company 2: Digital Marketing Inc
empWageBuilder.calculateMonthlyWage(
  "Digital Marketing Inc",
  25,
  5,
  10,
  22,
  120
);

// Company 3: Startup Hub
empWageBuilder.calculateMonthlyWage("Startup Hub", 18, 4, 8, 18, 90);

console.log("\n********** WAGE COMPUTATION COMPLETED **********\n");
