import { MealDataProps, Student } from "./typeProps";

export const homeListStudent = [
  {
    name: "Phạm Quang Liên",
    class: "11a1",
    id: "HOPE00200",
    fee: "đ 3.000.000",
  },
  {
    name: "Nguyễn Văn A",
    class: "11a2",
    id: "HOPE00201",
    fee: "đ 2.500.000",
  },
  {
    name: "Trần Thị B",
    class: "11a3",
    id: "HOPE00202",
    fee: "đ 3.200.000",
  },
  {
    name: "Lê Văn C",
    class: "11a4",
    id: "HOPE00203",
    fee: "đ 2.800.000",
  },
  {
    name: "Hoàng Thị D",
    class: "11a5",
    id: "HOPE00204",
    fee: "đ 3.100.000",
  },
  {
    name: "Phạm Văn E",
    class: "11a6",
    id: "HOPE00205",
    fee: "đ 2.900.000",
  },
  {
    name: "Nguyễn Thị F",
    class: "11a7",
    id: "HOPE00206",
    fee: "đ 3.300.000",
  },
  {
    name: "Trần Văn G",
    class: "11a8",
    id: "HOPE00207",
    fee: "đ 2.700.000",
  },
  {
    name: "Lê Thị H",
    class: "11a9",
    id: "HOPE00208",
    fee: "đ 3.400.000",
  },
  {
    name: "Hoàng Văn I",
    class: "11a10",
    id: "HOPE00209",
    fee: "đ 2.600.000",
  },
];


const additionalNames = [
  "Nguyễn Văn B",
  "Trần Thị C",
  "Lý Thanh Hương",
  "Trần Kim Oanh",
  "Nguyễn Hồng Hạnh",
  "Trịnh Khánh Linh",
  "Phạm Ngọc Anh",
  "Vũ Lan Anh",
  "Phạm Thu Hà",
  "Võ Hồng Nhung",
  "Phan Mai Lan",
  "Bùi Minh Phúc",
  "Trần Bảo Châu",
  "Cao Minh Trí",
  "Đặng Hoàng Nam",
  "Lê Thanh Tùng",
  "Nguyễn Minh Quân",
  "Nguyễn Văn Sơn",
  "Trương Đình Khoa",
  "Đinh Tuấn Kiệt",
  "Đỗ Quốc Anh",
  "Dương Gia Huy",
  "Hồ Anh Tuấn",
  "Lâm Hoàng Duy",
  "Hồ Bảo Ngọc",
  "Lê Mai Anh",
];

// Function to generate more students
const generateMoreStudents = (baseList: any[], count: number) => {
  const newList = [...baseList];
  let nameIndex = 0;

  baseList.forEach((student, index) => {
    for (let i = 1; i <= count; i++) {
      if (nameIndex >= additionalNames.length) {
        nameIndex = 0; // Reset index if we run out of names
      }
      newList.push({
        name: additionalNames[nameIndex],
        class: student.class,
        id: `${student.id}${i}`,
        fee: student.fee,
      });
      nameIndex++;
    }
  });

  return newList;
};

// Generate 5 more students for each class
export const extendedHomeListStudent = generateMoreStudents(homeListStudent, 5);

export const StudentAvatar = [
  require("../assets/home/1.png"),
  require("../assets/home/1.png"),
  require("../assets/home/3.png"),
  require("../assets/home/4.png"),
  require("../assets/home/5.png"),
  require("../assets/home/6.png"),
  require("../assets/home/7.png"),
];

export const OnlineStudent = [
  {
    name: "Nguyễn Thị Huyền",
    class: "11a1",
  },
  {
    name: "Trần Văn Minh",
    class: "11a2",
  },
  {
    name: "Lê Thị Lan",
    class: "11a3",
  },
  {
    name: "Phạm Văn Tuấn",
    class: "11a4",
  },
  {
    name: "Nguyễn Thị Mai",
    class: "11a5",
  },
  {
    name: "Hoàng Văn Bình",
    class: "11a6",
  },
];

export const mealHomeList = [
  {
    name: "Cá hồi phi lê",
    img: require("../assets/home/meal1.png"),
  },
  {
    name: "Canh bò hầm nấm kim chi",
    img: require("../assets/home/meal2.png"),
  },
  {
    name: "Bò lúc lắc xào ớt chuông",
    img: require("../assets/home/meal2.png"),
  },
];

const parentNames = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Văn C",
  "Hoàng Thị D",
  "Phạm Văn E",
  "Nguyễn Thị F",
  "Trần Văn G",
  "Lê Thị H",
  "Hoàng Văn I",
  "Phạm Thị J",
];

const generateStudents = (
  numClasses: number,
  studentsPerClass: number
): Student[] => {
  const students: Student[] = [];
  let nameIndex = 0;
  let parentIndex = 0;
  let studentIdCounter = 1;

  for (let classIndex = 1; classIndex <= numClasses; classIndex++) {
    const className = `11a${classIndex}`;

    for (
      let studentIndex = 1;
      studentIndex <= studentsPerClass;
      studentIndex++
    ) {
      if (nameIndex >= additionalNames.length) nameIndex = 0;
      if (parentIndex >= parentNames.length) parentIndex = 0;
      const studentId = `HOPE${String(studentIdCounter).padStart(5, "0")}`;

      students.push({
        name: additionalNames[nameIndex],
        id: studentId,
        dob: `2008-${Math.floor(Math.random() * 12) + 1}-${
          Math.floor(Math.random() * 28) + 1
        }`,
        parentName: parentNames[parentIndex],
        hometown: "Đà Nẵng",
        class: className,
      });

      nameIndex++;
      parentIndex++;
      studentIdCounter++;
    }
  }

  return students;
};

// Generate 20 students for each of the 10 classes
export const StudentList = generateStudents(10, 20);

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const subjects = [
  "Math",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "Literature",
  "English",
  "Physical Education",
  "Music",
];

const generateTeachers = (numTeachers: number) => {
  const teachers = [];
  let nameIndex = 0;
  let subjectIndex = 0;

  for (let i = 0; i < numTeachers; i++) {
    if (nameIndex >= additionalNames.length) nameIndex = 0;
    if (subjectIndex >= subjects.length) subjectIndex = 0;

    teachers.push({
      name: additionalNames[nameIndex],
      subject: subjects[subjectIndex],
      img: StudentAvatar[i % StudentAvatar.length],
    });

    nameIndex++;
    subjectIndex++;
  }

  return teachers;
};

// Generate 20 teachers
export const TeacherList = generateTeachers(20);

const generateTradeData = (numEntries: number) => {
  const tradeData = [];
  for (let i = 0; i < numEntries; i++) {
    tradeData.push({
      isUp: Math.random() > 0.5,
      studentID: `${uuidv4().slice(0, 8)}`,
      date: `10/${String(i + 1).padStart(2, "0")}/2024`,
      amount: `đ ${Math.floor(Math.random() * 5000000) + 1000000}`,
      left: `đ ${Math.floor(Math.random() * 1000000000) + 100000000}`,
    });
  }
  return tradeData;
};

// Generate 20 more trade data entries
export const TradeData = generateTradeData(20);

const mealNames = [
  "Phở",
  "Bún chả",
  "Bánh mì",
  "Cơm tấm",
  "Gỏi cuốn",
  "Bánh xèo",
  "Chả giò",
  "Bánh cuốn",
  "Bún bò Huế",
  "Cao lầu",
  "Mì Quảng",
  "Nem rán",
  "Bánh khọt",
  "Bánh bèo",
  "Bánh đúc",
  "Bánh ít",
  "Bánh tét",
  "Bánh chưng",
  "Bánh gai",
  "Bánh giò",
  "Bánh nậm",
  "Bánh phu thê",
  "Bánh tằm",
  "Bánh tráng",
  "Bánh trôi",
];

const categories = ["Bữa sáng", "Bữa trưa", "Bữa tối", "Vặt"];

const generateMeals = (numMealsPerCategory: number): MealDataProps[] => {
  const meals: MealDataProps[] = [];
  let nameIndex = 0;

  for (const category of categories) {
    for (let i = 0; i < numMealsPerCategory; i++) {
      if (nameIndex >= mealNames.length) nameIndex = 0;

      meals.push({
        name: mealNames[nameIndex],
        catergory: category,
        star: Math.floor(Math.random() * 5) + 1,
        order: Math.floor(Math.random() * 2000) + 1,
        like: Math.floor(Math.random() * 100) + 1,
      });

      nameIndex++;
    }
  }

  return meals;
};

// Generate 15 meals for each category
export const MealData = generateMeals(15);

export const UserRightData = [
  {
    label: 'Karen Hope moved task "User Research" from On Progress to Done',
    date: "2 March 2021, 13:45 PM",
  },
  {
    label: 'Samantha William add new 4 attached files on task "Photo’s Assets"',
    date: "3 March 2021, 13:45 PM",
  },
  {
    label: 'Tony Soap invite you in task "Wireframing" and "Hi-fidelity"',
    date: "4 March 2021, 13:45 PM",
  },
  {
    label: 'Samantha William created new "Task"',
    date: "5 March 2021, 13:45 PM",
  },
];

export const UserContactData = [
  {
    name: "Nguyễn Thị Huyền",
    class: "11a1",
  },
  {
    name: "Nguyễn Văn An",
    class: "11a1",
  },
  {
    name: "Phan Thị Uyên",
    class: "11a1",
  },
  {
    name: "Vũ Ngọc Hạnh",
    class: "11a1",
  },
  {
    name: "Nguyễn Minh Châu",
    class: "11a1",
  },
  {
    name: "Lê Thị Giang",
    class: "11a1",
  },
];

export const UserMessageData = [
  {
    name: "Nguyễn Thị Huyền",
    message: "Chào cô!",
  },
  {
    name: "Nguyễn Thị Huyền",
    message: "Em muốn hỏi về bài tập toán hôm qua.",
  },
  {
    name: "Nguyễn Thị Huyền",
    message: "Cô có thể giải thích lại phần lý thuyết không ạ?",
  },
  {
    name: "Nguyễn Thị Huyền",
    message: "Em cảm ơn cô đã giúp đỡ em trong bài kiểm tra vừa rồi.",
  },
];

export const weeklySchedule = {
  monday: {
    wakeUp: "6h30",
    schoolEnd: "16h30",
    extracurricular: "16h30 - 18h",
    personalCareAndDinner: "18h15 - 19h15",
    studyOrCounseling: "19h15 - 21h",
    teamActivityAndSleep: "21h - 21h30",
  },
  tuesday: {
    wakeUp: "6h30",
    schoolEnd: "16h30",
    extracurricular: "16h30 - 18h",
    personalCareAndDinner: "18h15 - 19h15",
    studyOrCounseling: "19h15 - 21h",
    teamActivityAndSleep: "21h - 21h30",
  },
  wednesday: {
    wakeUp: "6h30",
    schoolEnd: "16h30",
    extracurricular: "16h30 - 18h",
    personalCareAndDinner: "18h15 - 19h15",
    studyOrCounseling: "19h15 - 21h",
    teamActivityAndSleep: "21h - 21h30",
  },
  thursday: {
    wakeUp: "6h30",
    schoolEnd: "16h30",
    extracurricular: "16h30 - 18h",
    personalCareAndDinner: "18h15 - 19h15",
    studyOrCounseling: "19h15 - 21h",
    teamActivityAndSleep: "21h - 21h30",
  },
  friday: {
    wakeUp: "6h30",
    schoolEnd: "16h30",
    extracurricular: "16h30 - 18h",
    personalCareAndDinner: "18h15 - 19h15",
    studyOrCounseling: "19h15 - 21h",
    teamActivityAndSleep: "21h - 21h30",
  },
  saturday: {
    wakeUp: "8h",
    schoolEnd: null,
    extracurricular: "16h30 - 18h",
    personalCareAndDinner: "18h15 - 19h15",
    studyOrCounseling: "19h15 - 21h",
    teamActivityAndSleep: "21h - 21h30",
  },
  sunday: {
    wakeUp: "8h",
    schoolEnd: null,
    extracurricular: "16h30 - 18h",
    personalCareAndDinner: "18h15 - 19h15",
    studyOrCounseling: "19h15 - 21h",
    teamActivityAndSleep: "21h - 21h30",
  },
};

export const clubs = {
  artClub: {
    name: "CLB Mĩ Thuật",
    schedule: "16h30-18h các thứ 2/6",
    students: [
      { id: "HOPE00003", name: "Lý Thanh Hương", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00004", name: "Nguyễn Hồng Hạnh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00005", name: "Phạm Ngọc Anh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00006", name: "Phạm Thu Hà", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00007", name: "Phan Mai Lan", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00008", name: "Trần Bảo Châu", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00021", name: "Lê Thanh Tùng", status: "VẮNG" },
      { id: "HOPE00022", name: "Nguyễn Minh Quân", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00023", name: "Nguyễn Văn Sơn", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00024", name: "Trương Đình Khoa", status: "ĐÃ ĐẾN LỚP" },
    ],
  },
  musicClub: {
    name: "CLB Âm Nhạc",
    schedule: "16h30-18h các thứ 3/7",
    students: [
      { id: "HOPE00009", name: "Trần Kim Oanh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00010", name: "Trịnh Khánh Linh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00011", name: "Vũ Lan Anh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00012", name: "Võ Hồng Nhung", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00013", name: "Bùi Minh Phúc", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00014", name: "Cao Minh Trí", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00015", name: "Đặng Hoàng Nam", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00016", name: "Đinh Tuấn Kiệt", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00017", name: "Đỗ Quốc Anh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00018", name: "Dương Gia Huy", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00019", name: "Hồ Anh Tuấn", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00020", name: "Lâm Hoàng Duy", status: "ĐÃ ĐẾN LỚP" },
    ],
  },
  footballClub: {
    name: "CLB Bóng Đá",
    schedule: "16h30-18h các thứ 2/6",
    students: [
      { id: "HOPE00007", name: "Phan Mai Lan", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00008", name: "Trần Bảo Châu", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00009", name: "Trần Kim Oanh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00010", name: "Trịnh Khánh Linh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00011", name: "Vũ Lan Anh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00012", name: "Võ Hồng Nhung", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00013", name: "Bùi Minh Phúc", status: "VẮNG" },
      { id: "HOPE00014", name: "Cao Minh Trí", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00015", name: "Đặng Hoàng Nam", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00016", name: "Đinh Tuấn Kiệt", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00017", name: "Đỗ Quốc Anh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00018", name: "Dương Gia Huy", status: "ĐÃ ĐẾN LỚP" },
    ],
  },
  basketballClub: {
    name: "CLB Bóng Rổ",
    schedule: "16h30-18h các thứ 3/7",
    students: [
      { id: "HOPE00001", name: "Hồ Bảo Ngọc", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00002", name: "Lê Mai Anh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00003", name: "Lý Thanh Hương", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00004", name: "Nguyễn Hồng Hạnh", status: "VẮNG" },
      { id: "HOPE00005", name: "Phạm Ngọc Anh", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00006", name: "Phạm Thu Hà", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00019", name: "Hồ Anh Tuấn", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00020", name: "Lâm Hoàng Duy", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00021", name: "Lê Thanh Tùng", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00022", name: "Nguyễn Minh Quân", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00023", name: "Nguyễn Văn Sơn", status: "ĐÃ ĐẾN LỚP" },
      { id: "HOPE00024", name: "Trương Đình Khoa", status: "ĐÃ ĐẾN LỚP" },
    ],
  },
};
