namespace com.hr;

using { cuid, managed, Currency, Country } from '@sap/cds/common';

// ═══════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════

type ProjectStatus : String(20) enum {
  Planning   = 'Planning';
  Active     = 'Active';
  OnHold     = 'On Hold';
  Completed  = 'Completed';
  Cancelled  = 'Cancelled';
}

type Proficiency : String(20) enum {
  Beginner     = 'Beginner';
  Intermediate = 'Intermediate';
  Advanced     = 'Advanced';
  Expert       = 'Expert';
}

type SkillCategory : String(30) enum {
  Technical    = 'Technical';
  Soft         = 'Soft';
  Management   = 'Management';
  Domain       = 'Domain';
}

// ═══════════════════════════════════════════════════
// CORE ENTITIES
// ═══════════════════════════════════════════════════

// ── DEPARTMENTS ──
entity Departments : cuid, managed {
  deptName    : String(100);
  description : String(500);
  budget      : Decimal(12,2);
  currency    : Currency;
  location    : String(100);
  head        : Association to Employees;
}

// ── EMPLOYEES ──
entity Employees : cuid, managed {
  firstName   : String(50);
  lastName    : String(50);
  email       : String(255);
  phone       : String(20);
  hireDate    : Date;
  salary      : Decimal(10,2);
  currency    : Currency;
  jobTitle    : String(100);
  isActive    : Boolean default true;
  country     : Country;
  department  : Association to Departments;
  skills      : Composition of many Skills on skills.employee = $self;
  assignments : Composition of many Assignments on assignments.employee = $self;
}

// ── PROJECTS ──
entity Projects : cuid, managed {
  projectName : String(150);
  description : String(1000);
  startDate   : Date;
  endDate     : Date;
  budget      : Decimal(12,2);
  currency    : Currency;
  status      : ProjectStatus default 'Planning';
  manager     : Association to Employees;
  
}

// ── SKILLS ──
entity Skills : cuid, managed {
  skillName   : String(100);
  category    : SkillCategory;
  description : String(500);
  employee   : Association to Employees;
}

// ── ASSIGNMENTS ──
entity Assignments : cuid, managed {
  employee   : Association to Employees;
  project    : Association to Projects;
  role       : String(100);
  allocation : Integer;
  startDate  : Date;
  endDate    : Date;
  
}

// ── EMPLOYEE SKILLS ──
entity EmployeeSkills : cuid, managed {
  employee          : Association to Employees;
  skill             : Association to Skills;
  proficiency       : Proficiency default 'Beginner';
  yearsOfExperience : Decimal(3,1);
  certifiedDate     : Date;
}



