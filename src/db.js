// Import Dexie.js library
import Dexie from 'dexie';

// Create a Dexie Database
const db = new Dexie('StudentDatabase');
db.version(1).stores({
  students: '++id,first_name,last_name,gender,age',
  exam_grades: '++id,student_id,type,date,incorrect,score',
  exam_types: 'student_id,v,kd,ca,ar,i,e,l,tf,go,mi',
  exam_grades_spellings: '++id,student_id,date,phonetic_short_vowels,phonetic_consonant_blends,phonetic_consonant_digraphs,transitional_long_vowels,transitional_complex_vowels,fluent_inflectional_endings,fluent_multisyllabic_words_2_syllabes,advanced_multisyllabic_words_3_syllabes,score',
  exam_grades_reading_levels: '++id,student_id,date,reading_level'
});

async function addStudent(studentData) {
    try {
      const id = await db.students.add(studentData);
      console.log(`Student added with ID: ${id}`);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  }

  async function deleteStudent(studentId) {
    try {
      await db.students.where('id').equals(studentId).delete();
      console.log(`Student with ID ${studentId} deleted`);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }

  async function updateStudent(studentId, updatedData) {
    try {
      await db.students.where('id').equals(studentId).modify(updatedData);
      console.log(`Student with ID ${studentId} updated`);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  }

  async function addExamType(examTypeData) {
    try {
      const id = await db.exam_types.add(examTypeData);
      console.log(`Exam type added with ID: ${id}`);
    } catch (error) {
      console.error('Error adding exam type:', error);
    }
  }

  async function deleteExamType(studentId) {
    try {
      await db.exam_types.where('student_id').equals(studentId).delete();
      console.log(`Exam type for student with ID ${studentId} deleted`);
    } catch (error) {
      console.error('Error deleting exam type:', error);
    }
  }

  async function updateExamType(studentId, updatedData) {
    try {
      await db.exam_types.where('student_id').equals(studentId).modify(updatedData);
      console.log(`Exam type for student with ID ${studentId} updated`);
    } catch (error) {
      console.error('Error updating exam type:', error);
    }
  }

  async function addExamGradeSpellings(examGradeData) {
  try {
    const id = await db.exam_grades_spellings.add(examGradeData);
    console.log(`Spellings exam grade added with ID: ${id}`);
  } catch (error) {
    console.error('Error adding spellings exam grade:', error);
  }
}

async function deleteExamGradeSpellings(examGradeId) {
    try {
      await db.exam_grades_spellings.where('id').equals(examGradeId).delete();
      console.log(`Spellings exam grade with ID ${examGradeId} deleted`);
    } catch (error) {
      console.error('Error deleting spellings exam grade:', error);
    }
  }

  async function updateExamGradeSpellings(examGradeId, updatedData) {
    try {
      await db.exam_grades_spellings.where('id').equals(examGradeId).modify(updatedData);
      console.log(`Spellings exam grade with ID ${examGradeId} updated`);
    } catch (error) {
      console.error('Error updating spellings exam grade:', error);
    }
  }

  async function addExamGradeReadingLevel(examGradeData) {
    try {
      const id = await db.exam_grades_reading_levels.add(examGradeData);
      console.log(`Reading level exam grade added with ID: ${id}`);
    } catch (error) {
      console.error('Error adding reading level exam grade:', error);
    }
  }

  async function deleteExamGradeReadingLevel(examGradeId) {
    try {
      await db.exam_grades_reading_levels.where('id').equals(examGradeId).delete();
      console.log(`Reading level exam grade with ID ${examGradeId} deleted`);
    } catch (error) {
      console.error('Error deleting reading level exam grade:', error);
    }
  }

  async function updateExamGradeReadingLevel(examGradeId, updatedData) {
    try {
      await db.exam_grades_reading_levels.where('id').equals(examGradeId).modify(updatedData);
      console.log(`Reading level exam grade with ID ${examGradeId} updated`);
    } catch (error) {
      console.error('Error updating reading level exam grade:', error);
    }
  }
  
  
