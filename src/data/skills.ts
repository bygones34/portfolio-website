export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Development',
    items: [
      'C#',
      '.NET 8',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'ADO.NET',
      'Clean Architecture',
      'JWT Authentication',
      'FluentValidation',
      'Serilog',
    ],
  },
  {
    title: 'Frontend Development',
    items: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Angular',
      'WPF',
      'WinUI 3',
      'MVVM',
      'DevExpress',
      'Razor Pages',
    ],
  },
  {
    title: 'Database & SQL',
    items: [
      'Microsoft SQL Server',
      'T-SQL',
      'Stored Procedures',
      'Query Optimization',
      'MongoDB',
    ],
  },
  {
    title: 'Messaging & Infrastructure',
    items: [
      'RabbitMQ',
      'Docker',
      'Kubernetes',
      'Microservices',
    ],
  },
  {
    title: 'Enterprise Integrations',
    items: [
      'VSTO (Excel Add-Ins)',
      'Office / Excel Interop',
      '.NET Framework',
    ],
  },
  {
    title: 'Testing & API Tools',
    items: [
      'xUnit',
      'Postman',
      'Swagger / OpenAPI',
    ],
  },
  {
    title: 'CI/CD & Version Control',
    items: [
      'Git',
      'GitHub',
      'GitHub Actions',
    ],
  },
  {
    title: 'AI Tools',
    items: [
      'Claude',
      'OpenAI Codex',
      'GitHub Copilot',
      'Antigravity',
    ],
  },
]