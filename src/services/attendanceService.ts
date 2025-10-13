// services/attendanceService.ts
export class AttendanceService {
    // Integration with biometric/RFID system
    static async syncWithBiometric(employeeId: string, date: Date) {
        // API call to biometric system
    }

    // Auto-sync with payroll
    static async syncWithPayroll(month: string, employeeId: string) {
        // API call to payroll system
    }

    // Calculate carry forward rules
    static calculateCarryForward(currentBalance: number, maxCarryForward: number) {
        return Math.min(currentBalance, maxCarryForward);
    }
}