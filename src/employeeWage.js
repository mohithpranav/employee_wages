// UC1: Check if Employee is Present or Absent using Random

const IS_PRESENT = 1;

function checkAttendance() {
  // Generate random number (0 or 1)
  const attendance = Math.floor(Math.random() * 2);

  if (attendance === IS_PRESENT) {
    console.log("Employee is PRESENT");
  } else {
    console.log("Employee is ABSENT");
  }
}

// Execute the function
checkAttendance();
