# Specification: Java Library with TypeScript Invocation

## 1. Purpose

The system provides a reusable Java library that performs mathematical and string operations, exposed to a TypeScript client via cross-language interoperability. The goal is to demonstrate passing and returning values of four distinct data types between Java and TypeScript.

## 2. Required Data Types

The library API must demonstrate all of the following Java primitive/reference types:

| # | Type     | Category         |
|---|----------|------------------|
| 1 | `int`    | Integer primitive |
| 2 | `float`  | Floating-point primitive (single precision) |
| 3 | `double` | Floating-point primitive (double precision) |
| 4 | `String` | Reference type    |

Each type must appear as at least one method parameter **and** at least one method return type across the API.

## 3. API Contract

The library must expose a public class with the following static methods:

### 3.1 `addInts(int a, int b) -> int`

- **Description:** Returns the sum of two integers.
- **Preconditions:** None.
- **Postcondition:** Result equals `a + b`.

### 3.2 `multiplyFloats(float a, float b) -> float`

- **Description:** Returns the product of two single-precision floating-point numbers.
- **Preconditions:** None.
- **Postcondition:** Result equals `a * b`.

### 3.3 `divideDoubles(double a, double b) -> double`

- **Description:** Returns the quotient of two double-precision floating-point numbers.
- **Preconditions:** `b` must not be zero.
- **Postcondition:** Result equals `a / b`.
- **Error behavior:** If `b == 0`, the method must throw an `ArithmeticException` with a descriptive message.

### 3.4 `formatGreeting(String name, int age) -> String`

- **Description:** Returns a formatted greeting string containing the given name and age.
- **Preconditions:** `name` must not be `null`.
- **Postcondition:** Result is a non-empty string that contains both `name` and the string representation of `age`.

### 3.5 `calculateCircleArea(double radius) -> double`

- **Description:** Returns the area of a circle with the given radius.
- **Preconditions:** `radius >= 0`.
- **Postcondition:** Result equals `PI * radius * radius` (using `Math.PI`).

## 4. Module Structure

The system consists of two modules:

- **Module A (Java Library):** Contains the library class, packaged as a JAR artifact.
- **Module B (TypeScript Client):** A TypeScript application that loads the Java library and invokes each method from Section 3.

## 5. Integration Requirements

- Module B must be able to load and call Module A at runtime.
- All method calls must cross the Java-TypeScript language boundary.
- Numeric type fidelity must be preserved (i.e., `float` must not be silently promoted to `double` in the Java layer).

## 6. Acceptance Criteria

1. Module A compiles and packages into a JAR without errors.
2. Module B executes successfully and calls every method defined in Section 3.
3. Module B prints the return value of each method call to standard output.
4. Output demonstrates all four required data types (`int`, `float`, `double`, `String`).
5. The `divideDoubles` method correctly rejects division by zero.
6. The `calculateCircleArea` method returns a value consistent with `PI * r^2`.