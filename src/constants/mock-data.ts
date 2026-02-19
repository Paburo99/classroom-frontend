import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description:
      "Foundational concepts in programming, algorithms, and computational thinking.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description:
      "Matrices, vector spaces, and linear transformations with practical applications.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG110",
    name: "Academic Writing",
    department: "English",
    description:
      "Strategies for clear academic argumentation, structure, and citation.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: "CS230",
    name: "Database Systems",
    department: "CS",
    description:
      "Relational modeling, SQL, normalization, and transaction fundamentals.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    code: "MATH310",
    name: "Probability and Statistics",
    department: "Math",
    description:
      "Probability models, statistical inference, and data analysis techniques.",
    createdAt: new Date().toISOString(),
  },
];
