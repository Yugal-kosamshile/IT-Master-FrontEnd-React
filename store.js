const courses = [
  {
    id: 1,
    image: 'https://i.pinimg.com/736x/b2/99/54/b2995453cc037390c92e3cafd718459f.jpg',
    title: "Core Java Specialization",
    subtitle: "Core Java - from basics to advance",
    shortDescription:
      'Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.',
    rating: 4.3,
    students: 18241,
    createdBy: "Vinayak Nayak",
    startDate: "20/02/2025",
    endDate: "20/06/2025",
    language: "English",
    learnings: [
      "Introduction to Core Java, History of Java, Origin of Java, JVM, Features of Java",
      "Control Structures, Loops, Array, Multidimensional Array",
      "Class, Method, Object, Constructor, OOPS Concepts, super, Method Parameters, return",
      "Encapsulation, Inheritance, Method Overloading & Overriding, use of final",
      "Exception Handling",
      "Interface, Abstract class, Inner class, Anonymous class",
      "String, StringBuilder, Scanner, BufferedReader",
      "Collection Framework",
    ],
    description: [
      "Course is regularly updated and notes provided for all the sections ",
      "This course is an introduction to Core Java. It starts with steps to install required software and editor. It covers OOPS concepts with detailed examples and explanations. You'll learn the history and features of Java, arrays, control structures, classes, methods, constructors, strings, exception handling, and the Collection Framework.",
      "Each topic is thoroughly explained and supported with examples. By the end of this course, you’ll be able to confidently write Java programs and be industry-ready for software development roles involving Java."
    ],
    targetAudience: [
      "Beginners in Java",
      "IT Professionals",
      "Students who want to kickstart their career in IT"
    ]
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/e5/6f/1c/e56f1c0f774db0827d619e5e6376a73d.jpg',
    title: 'Python for beginners - Learn all the basics of python',
    subtitle: 'Learn Python from scratch for programming and data science',
    shortDescription:
      'Learn Python - the most popular programming language and for Data Science and Software Development.',
    rating: 4.5,
    students: 347491,
    createdBy: "Michel Jade",
    startDate: "01/01/2024",
    endDate: "01/06/2024",
    language: "English",
    learnings: [
      "Learn how to use Python 3 the right way",
      "Understand complex functions in Python",
      "Be able to use Python on a daily basis",
      "Create your own basic programs with Python",
      "Learn different tips and tricks to improve your programming skills",
      "Learn at your own rhythm with practical exercises"
    ],
    description: [
      "Programming can sometimes be very hard to learn especially if you have no experience in this field. But, this course has everything that you need to be able to start your programming career or improve your skills by learning all the basics of Python.",
      "If you are in school, need Python for work, want to start a personal project, or just want to learn a new skill — this course is perfect for you.",
      "By the end of this course, you'll have a solid base in Python and will be able to create simple applications right away."
    ],
    targetAudience: [
      "People interested in learning how to program in Python",
      "People curious about programming"
    ]
  },
  {
  id: 3,
  image: 'https://i.pinimg.com/736x/e9/df/78/e9df789803e8b82ab475c41eb0137a2c.jpg',
  title: 'C# for .NET Developers',
  subtitle: 'Complete C# Masterclass',
  shortDescription:
    'Master ASP.NET fundamentals and .NET framework components, using C# syntax for robust web application development. Learn to build web applications.',
  rating: 4.7,
  students: 132000,
  createdBy: 'John Doe',
  startDate: '2025-06-01',
  endDate: '2025-12-01',
  language: 'English',
  learnings: [
    'Learn the fundamentals of programming using C#',
    'Learn how to use variables, methods, loops, conditions',
    'Fully understand how OOP (object oriented programming) works and how to use it',
    'Build beautiful GUIs (Graphical User Interfaces) with WPF (Windows Presentation Foundation)',
    'Create video games using C# and Unity 3D',
    'Learn how to handle errors and avoid them',
    'Work with files, folders, text and paths in .NET framework',
    'Learn how to use LINQ and Lambda Expressions',
  ],
  description: [
    'Learn C# from A to Z with this Masterclass and become a C# Software Developer.',
    'In this course, you are going to discover how to become a C# developer by learning all the real-world software development skills that you\'ll need.',
    'The C# Masterclass is full of amazing exercises and best practices that\'ll help you get into professional C# development in a fast and fun way.',
    'In addition to the C# development topics you\'ll also dive into some of the most popular Frameworks that C# developers use around the world! Such as WPF for building Desktop applications and Unity for building Games.',
    'Are you ready to dive deep into the world of C# and .NET framework development?',
    'I have created a course that makes the path to becoming a skilled C# developer as easy as possible, all with this C# Masterclass!',
  ],
  targetAudience: [
    'Everyone who wants to learn C#',
    'Every developer that needs to learn C# for their job',
    'Everyone who wants become a software developer',
    'Everyone who wants to build PC programs with a beautiful UI using WPF',
  ],
},
{
  id: 4,
  image: 'https://i.pinimg.com/1200x/cc/a8/33/cca833fb9917bfc9e88d9de2b0b6c8f2.jpg',
  title: 'Complete Oracle SQL',
  subtitle: 'The Complete Oracle SQL Certification Course',
  shortDescription:
    'Master SQL and PL/SQL with Oracle Database. Learn to write complex queries, create tables, and manage data effectively.',
  rating: 4.8,
  students: 89000,
  createdBy: 'Jane Smith',
  startDate: '2025-06-01',
  endDate: '2025-12-01',
  language: 'English',
  learnings: [
    'Become Job Ready to Start Contributing as a Database Developer Day 1',
    'Be Equipped to confidently tackle SQL Interview Questions',
    'MASTER the Content Required to Pass the Oracle 1Z0-071 Database SQL Exam',
    'Program in the SQL Language to Solve a Variety of Database Problems',
    'Code along with me to PRACTICE and IMPLEMENT everything you learn',
    'Become a SQL Ninja and Understand How the Oracle Database Works',
    'Obtain the Skills that are Necessary to Land a Job as a SQL Developer',
    'Have the Ability to Solve any SQL Problem',
  ],
  description: [
    'Welcome to the Complete Oracle SQL Certification Course!',
    'Are you new to SQL and eager to start your journey in database management?',
    'Do you want to land a better job or level up in your tech career?',
    'Have you tried learning SQL before but struggled to apply it in real-world scenarios?',
    'Are you seeking a structured, professional course designed to deliver practical skills, not just theory?',
    'If you answered yes to any of these questions, you’ve come to the right place.',
    'This course is tailored to provide a step-by-step approach, demystifying SQL concepts and preparing you for real-world challenges in database management and data analysis.',
  ],
  targetAudience: [
    'Anyone willing to get into the software development career',
    'Anyone willing to Master SQL and get a job as a well paid Oracle SQL Developer',
    'Anyone willing to work hard in mastering the SQL language',
    'Anyone who is interested in passing the Oracle 1Z0-071 exam!',
  ],
}
];

export default courses;
