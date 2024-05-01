import ballerina/io;

type Student record {|
    string firstName;
    string lastName;
    int age;
    string year;
|};

type Person record {
    string firstName;
    string lastName;
    int age;
};

public function main() {

    Student student = {firstName: "John", lastName: "Doe", age: 30, year: "2nd year"};

    // person1["city"] = "Hollywood"; // Compile error
    
    Person person1 = {firstName: "John", lastName: "Doe", age: 30};
    person1["city"] = "Hollywood"; // No compile error

    if student == person1 {
        io:println("Deeply equal");
    } else {
        io:println("They are not deeply equal");
    }

    // Sub-typing
    Person person2 = student;
    person2.age = 40;
    person2["city"] = "Hollywood"; // No compile-time error, But runtime error.
}
