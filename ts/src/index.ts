import { appendClasspath, importClass } from 'java-bridge';
import path from 'path';

// Add the Java library JAR to the classpath
const jarPath = path.resolve(__dirname, '../../java-lib/target/java-lib-1.0-SNAPSHOT.jar');
appendClasspath(jarPath);

// Import the MathLib class
const MathLib = importClass('ua.dmytrolutsiuk.MathLib');

// 1. int: addInts
const intResult = MathLib.addIntsSync(5, 3);
console.log(`addInts(5, 3) = ${intResult}`);

// 2. float: multiplyFloats
const floatResult = MathLib.multiplyFloatsSync(2.5, 4.0);
console.log(`multiplyFloats(2.5, 4.0) = ${floatResult}`);

// 3. double: divideDoubles
const doubleResult = MathLib.divideDoublesSync(10.0, 3.0);
console.log(`divideDoubles(10.0, 3.0) = ${doubleResult}`);

// 4. double: calculateCircleArea
const areaResult = MathLib.calculateCircleAreaSync(5.0);
console.log(`calculateCircleArea(5.0) = ${areaResult}`);

// 5. String + int: formatGreeting
const greeting = MathLib.formatGreetingSync('Dmytro', 21);
console.log(`formatGreeting("Dmytro", 21) = ${greeting}`);
