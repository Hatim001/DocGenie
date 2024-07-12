# DocGenie

Welcome to **DocGenie** - a powerful and intuitive application designed to bring the best features of Google Docs to your fingertips, with an added twist of AI-powered content generation. Whether you're drafting a document, brainstorming ideas, or crafting a resume, DocGenie is here to assist you with a seamless, user-friendly interface and cutting-edge technology.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Google Docs-like Layout**: Familiar and intuitive interface similar to Google Docs.
- **AI-Powered Content Generation**: Leverage AI to suggest storylines, plot twists, and resume ideas.
- **CRUD Operations**: Create, Read, Update, and Delete documents with ease.
- **Authentication**: Secure user authentication with Clerk and Google Sign-In.
- **Responsive Design**: Fully responsive layout built with TailwindCSS.

## Technologies Used


![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) &nbsp;
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) &nbsp;
![Neon](https://img.shields.io/badge/Neon-0099FF?style=for-the-badge&logo=postgresql&logoColor=white) &nbsp;
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) &nbsp;
![Clerk](https://img.shields.io/badge/Clerk-3A3A3A?style=for-the-badge&logo=clerk&logoColor=white) &nbsp;
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)



## Getting Started

To get started with DocGenie, follow these simple steps:

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.22.x)
- PostgreSQL (for Neon integration)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/docgenie.git
    cd docgenie
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root of your project and add the necessary environment variables:

    ```plaintext
    DATABASE_URL=your_neon_database_url
    NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
    CLERK_API_KEY=your_clerk_api_key
    OPENAI_API_KEY=your_openai_api_key
    ```

4. **Run database migrations**:

    ```bash
    npx prisma migrate dev
    ```

### Usage

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Production

For production builds, use:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Contributing

We welcome contributions from the community! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using DocGenie! If you have any questions, feel free to open an issue or reach out to the maintainers.

Happy writing!