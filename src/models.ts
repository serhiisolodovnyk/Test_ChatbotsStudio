interface Teacher {
    id: number;
    name: string;           // ім'я
    surname: string;        // прізвище
    middle_name: string;    // по-батькові
    sex: Sex;               // стать
    experience: string;     // досвід
    year_of_birth: number;  // рік народження
    subject: Subject;       // предмет, що викладає вчитель
}
interface Classroom{
    audience: number;       // ID чату на Google Meet    
    year: number;           // рік навчання
    name: string;           // літера назви классу ("А", "Б" ...)
    size: number;           // кількість учнів
    url: string;            // URL на заняття на Google Meet    
}
interface Lesson{
    id: number;    
    classroom: Classroom;   // классна кімната
    theacher: Teacher;      // вчитель
    subject: Subject;       // предмет
    day: Days;              // день
    hour_start: number;     // година початку
    minute_start: number;   // хвилина початку
    hour_end: number;       // година закінчення
    minute_end: number;     // хвилина закінчення
}
//перелік предметів
enum Subject{
    Biology,
    Math,
    History,
    Physics    
}
//стать
enum Sex{
    Male,
    Female
}
//дні неділі
enum Days{
    Monday = 1,
    Tuesdays,
    Wednessday,
    Thursday,
    Friday,
    Saturnsday,
    Sunday
}
/*для зберігання часу та номеру уроку було б доцільніше створити окремий інтерфейс
але щоб не порушувати вимоги завдання про кількість інтерфесів, я створив декілька enums*/
//номер уроку
enum NumberLessonInDay{
    First = 1,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eighth
}
