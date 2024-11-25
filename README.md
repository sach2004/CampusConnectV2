# Campus Link

![Campus Link Logo](https://i.imgur.com/0ZiHZke.png)


## Team Details
- **Team Number:** 24AACR17  
- **Senior Mentor:** Abhinav Jayanth  
- **Junior Mentor:** Ishan Joshi  
- **Team Members:**
  1. Sachin  
  2. Niharika  
  3. Srujith  
  4. Nandini  
  5. Vinay  

---

## Abstract
Campus Link is a website where students can log in using their college ID or email. Alumni can log in using their email to post internships and projects. Students can browse and apply for these opportunities, fostering collaboration between alumni and current students.

---

## Table of Contents
- [Introduction](#introduction)  
- [Requirements](#requirements)  
- [How to Use](#how-to-use)  
- [Preview](#preview)  
- [Contribution](#contribution)  

---

## Introduction
Campus Link aims to bridge the gap between students and alumni by creating a platform where students can apply for internships and projects. Alumni can post these opportunities, helping current students build practical skills and connections in their respective fields.

---

## Requirements

| Name                         | Details                                      |
|------------------------------|----------------------------------------------|
| [Node.js (LTS Version)](https://nodejs.org) | <img src="https://i.imgur.com/AuXMSC7.png" width="100px" height="20px"> |
| [Next.js](https://nextjs.org) | <img src="https://i.imgur.com/z3WVd1J.png" width="100px" height="20px"> |
| [React.js](https://reactjs.org) | <img src="https://i.imgur.com/yGlB4bI.png" width="100px" height="20px"> |
| [Prisma](https://www.prisma.io) | <img src="https://i.imgur.com/L88UN73.png" width="100px" height="20px"> |
| [TailwindCSS](https://tailwindcss.com) | <img src="url_here" width="100px" height="20px"> |
| [TypeScript](https://www.typescriptlang.org) | <img src="https://i.imgur.com/sv86bbI.png" width="100px" height="20px"> |
| [NextAuth](https://next-auth.js.org) | <img src="https://i.imgur.com/ZQ0h5Fx.png" width="100px" height="20px"> |


---

## How to Use
To use this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd campus-link

2. **Install the dependencies**:
   ```bash
   npm install

3. **Set up environment variables**:
   - Create a `.env` file in the root of the project.
   - Add the following details to the `.env` file:

     ```env
     GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
     GOOGLE_CLIENT_SECRET="your-google-client-secret"
     DATABASE_URL="postgresql://username:password@your-database-url/your-database?sslmode=require"
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET="your-nextauth-secret"
     ```

4. **Start the development server**:
   ```bash
   npm run dev
 
5. **Open your browser and navigate to**:
   ```bash
   http://localhost:3000

6. **For production builds**:
   ```bash
   npm run build
   npm run start
## Preview
Screenshots of the project:  
![Image 1](https://i.imgur.com/B1WJfWT.png)  
![Image 2](https://i.imgur.com/IkNjM7e.png)

---

## Contribution
We welcome contributions to Campus Link! To contribute, follow these steps:

1. **Understand the Project Philosophy:**  
   Read through the README.md file to familiarize yourself with the project's goals and structure.

2. **Maintain Code Consistency:**  
   Use the same programming language and library versions as the original code.

3. **Write Documentation:**  
   Explain the changes you're proposing, including identified problems, proposed solutions, and test cases.

4. **Submit a Pull Request:**  
   Follow standard [Git etiquette](https://gist.github.com/mikepea/863f63d6e37281e329f8) for submitting your contributions.
