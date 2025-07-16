// نظام إدارة موظفين بسيط باستخدام الدوال والكائنات و call/apply/bind

// 1) إنشاء كائنين موظفين emp1 و emp2
const emp1 = {
    fullName: "Ali Saber",
    monthlySalary: 8800,
    department: {
        main: "IT",
        sub: "Developer"
    },
    // دالة لحساب الراتب السنوي
    getAnnualSalary: function () {
        return this.monthlySalary * 12;
    }
};

const emp2 = {
    fullName: "Sara Ahmed",
    monthlySalary: 10000,
    department: {
        main: "HR",
        sub: "Recruitment"
    },
    getAnnualSalary: function () {
        return this.monthlySalary * 12;
    }
};

// 2) دالة addBonus تستخدم .call()
function addBonus(bonusPercentage) {
    const annual = this.getAnnualSalary();
    const bonus = annual * bonusPercentage;
    const total = annual + bonus;

    console.log(`Employee: ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
    console.log(`Have salary of: ${this.monthlySalary}`);
    console.log(`and Annual Salary of: ${total}`);
    return total;
}

// استخدام .call لتطبيق الدالة على emp1
const totalWithBonus1 = addBonus.call(emp1, 0.1); // 10% bonus

console.log("--------------------------------------------------");

// 3) دالة addBonusAndTip تستخدم .apply()
function addBonusAndTip(bonusPercentage, tip) {
    const annual = this.getAnnualSalary();
    const bonus = annual * bonusPercentage;
    const total = annual + bonus + tip;

    console.log(`Employee: ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
    console.log(`Have salary of: ${this.monthlySalary}`);
    console.log(`and Annual Salary and Tip of: ${total}`);
    return total;
}

// استخدام .apply لتطبيق الدالة على emp2
const totalWithBonusAndTip = addBonusAndTip.apply(emp2, [0.2, 8000]); // 20% bonus + 8000 tip

console.log("--------------------------------------------------");

// 4) طباعة معلومات emp1 باستخدام this و bind
function printEmployeeInfo() {
    console.log(`Employee: ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
    console.log(`Have salary of: ${this.monthlySalary}`);
    console.log(`and Annual Salary of: ${this.getAnnualSalary()}`);
}

// ربط الدالة بـ emp1 ثم استدعاؤها
const printInfo = printEmployeeInfo.bind(emp1);
printInfo();

console.log("--------------------------------------------------");

// 5) استخدام nested destructuring مع emp2
const {
    fullName,
    department: { main, sub },
    monthlySalary: baseSalary
} = emp2;

console.log(`Destructured Info:`);
console.log(`Full Name: ${fullName}`);
console.log(`Main Department: ${main}`);
console.log(`Sub Department: ${sub}`);
console.log(`Base Salary: ${baseSalary}`);
console.log(`Total Salary (Annual + Bonus + Tip): ${totalWithBonusAndTip}`);
