Name=(input("Your Name:"))

def calculate_tax(income):
    if income <= 46605:
        tax = income * 0.15

    elif income <= 93208:
        tax = 46605 * 0.15 + (income - 46605) * 0.205

    elif income <= 144489:
        tax = 46605 * 0.15 + (93208 - 46605) * 0.205 + (income - 93208) * 0.26

    elif income <= 205842:
        tax = 46605 * 0.15 + (93208 - 46605) * 0.205 + (144489 - 93208) * 0.26 + (income - 144489) * 0.29
        
    else:
        tax = 46605 * 0.15 + (93208 - 46605) * 0.205 + (144489 - 93208) * 0.26 + (205842 - 144489) * 0.29 + (income - 205842) * 0.33
    return tax

# Test the function with an example income
income = float(input("Enter your income: "))
tax = calculate_tax(income)
print(f"The calculated tax on an income of ${income} is ${tax}")
