package ua.dmytrolutsiuk;

public class MathLib {

    public static int addInts(int a, int b) {
        return a + b;
    }

    public static float multiplyFloats(float a, float b) {
        return a * b;
    }

    public static double divideDoubles(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero");
        }
        return a / b;
    }

    public static String formatGreeting(String name, int age) {
        return "Hello, " + name + "! You are " + age + " years old.";
    }

    public static double calculateCircleArea(double radius) {
        return Math.PI * radius * radius;
    }
}
