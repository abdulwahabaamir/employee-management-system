const admin = [
  {
    "admins": [
      {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
    ]
  }
];

const employees = [
  {
    "employees": [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Design Homepage",
            "description": "Create the main landing page layout",
            "date": "2025-08-20",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Fix Navbar Bug",
            "description": "Resolve the mobile dropdown issue",
            "date": "2025-08-22",
            "category": "Bug Fix",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Client Meeting",
            "description": "Discuss project milestones with client",
            "date": "2025-08-25",
            "category": "Meeting",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Database Migration",
            "description": "Migrate old database to new schema",
            "date": "2025-08-21",
            "category": "Database",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Write API Docs",
            "description": "Document all REST API endpoints",
            "date": "2025-08-23",
            "category": "Documentation",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Create Login Page",
            "description": "Implement login form with validation",
            "date": "2025-08-19",
            "category": "Frontend",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Optimize Images",
            "description": "Compress all homepage images",
            "date": "2025-08-20",
            "category": "Performance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Fix Footer Links",
            "description": "Update social links in footer",
            "date": "2025-08-22",
            "category": "Bug Fix",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Set Up CI/CD",
            "description": "Configure GitHub Actions pipeline",
            "date": "2025-08-18",
            "category": "DevOps",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Fix Payment Gateway",
            "description": "Resolve Stripe integration errors",
            "date": "2025-08-21",
            "category": "Backend",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "SEO Audit",
            "description": "Analyze website SEO and fix issues",
            "date": "2025-08-19",
            "category": "SEO",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Blog Writing",
            "description": "Write 3 blog posts for company website",
            "date": "2025-08-23",
            "category": "Content",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Social Media Strategy",
            "description": "Plan next month’s social media content",
            "date": "2025-08-24",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))   
    localStorage.setItem('admin',JSON.stringify(admin))   
}

export const getLocalStorage=()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
    console.log(employees);
    console.log(admin)
    
}