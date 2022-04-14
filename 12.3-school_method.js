const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

//    1.
console.log("*******1********");

function findPerson(type, id) {
  if (type !== "student" && type !== "teacher") {
    console.log("type is incorrect");
    return;
  }
  let arrayType = [];
  arrayType = type === "student" ? school.students : school.teachers;
  return arrayType.find((person) => person.id === id);
}

console.log(findPerson("student", 12));
console.log(findPerson("teacher", 2));
console.log(findPerson("alien", 2));

//2.
console.log("*******2********");
function assignStudent(id, subject) {
  let teachersArray = school.teachers;
  let studentById = findPerson("student", id);
  let availableTeacher = teachersArray.find(
    (teacher) => teacher.subjects.includes(subject) && teacher.capacityLeft > 0
  );
  if (availableTeacher === undefined) {
    console.log("Sorry,no available teachers left");
  } else {
    availableTeacher.students.push(studentById);
    availableTeacher.capacityLeft--;
  }
}

assignStudent(10, "ethics");
assignStudent(12, "biology");
console.log(school.teachers[0]);
console.log(school.teachers[1]);
assignStudent(13, "Geography");
console.log(school.teachers[0]);
console.log(school.teachers[1]);

//3
console.log("*******3********");

function assignTeachersSubject(teacherId, newSubject) {
  let teacherById = findPerson("teacher", teacherId);
  let existingSubject = teacherById.subjects.find(
    (subject) => subject === newSubject
  );
  if (existingSubject === undefined) {
    teacherById.subjects.push(newSubject);
  }
}

assignTeachersSubject(2, "geography");
console.log(findPerson("teacher", 2));

assignTeachersSubject(2, "history");
console.log(findPerson("teacher", 2));

//4

function findTeacherCapacity(id) {
  let teacherById = findPerson("teacher", id);
  return teacherById.capacityLeft;
}

console.log("capacity of teacher 1:" + findTeacherCapacity(1));
console.log("capacity of teacher 2:" + findTeacherCapacity(2));
