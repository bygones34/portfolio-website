import type { Experience } from '../types/experience'

export const experience: Experience[] = [
  {
    role: 'Junior .NET Developer',
    company: 'Aydınlı Grup',
    dates: 'July 2024 – Present',
    description:
      'Developing and improving enterprise software for the company’s decision-support and internal business systems.',
    responsibilities: [
      'Developed complete business logic and contributed additional features for the company’s decision-support software using .NET Framework.',
      'Migrated a background service from a Windows application to a web application using .NET Core.',
      'Created a RESTful API for retrieving stock information for internal systems.',
      'Currently leading the development of a microservice and its corresponding Razor Pages.',
      'Provide day-to-day user support and implement new features in the company’s Excel Add-In software.',
    ],
    technologies: [
  '.NET 8',
  '.NET Framework',
  'WPF',
  'MVVM',
  'Razor Pages',
  'Web API',
  'MS SQL',
  'MongoDB',
  'Docker',
  'GitHub Actions'
],
  },
  {
    role: 'Freelance Software Developer',
    dates: 'October 2022 – June 2024',
    description:
      'Worked as a freelance software developer, building web applications for local businesses.',
    responsibilities: [
      'Developed multiple web applications for local businesses.',
      'Developed web applications and databases using .NET 6, Angular and MS SQL.',
    ],
    technologies: ['.NET 6', 'Angular', 'MS SQL'],
  },
  {
    role: 'Intern Software Developer',
    company: 'TEB',
    dates: 'July 2022 – October 2022',
    description:
      'Contributed to an infrastructure software project for TEB affiliates using C# and .NET Framework.',
    responsibilities: [
      'Contributed to the development of infrastructure software using C# and .NET Framework.',
      'Gained experience with Agile project management, including daily and weekly meetings, sprint planning and task distribution.',
      'Improved problem-solving skills throughout the software development lifecycle.',
    ],
    technologies: ['C#', '.NET Framework', 'Agile'],
  },
]