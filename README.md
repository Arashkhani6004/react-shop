# E-Commerce Frontend Project

This is the **frontend** for an e-commerce platform developed using **React** and styled with **Tailwind CSS**. The backend is built with NestJS, but this repository contains only the frontend code.

## Features

### User Panel
- **Shopping Cart**: Add, update, and remove items in the shopping cart.
- **Orders Management**: Place orders, edit existing orders, and track them.
- **Tickets System**: Create and manage support tickets directly from the user panel.
- **Products Filters and Search**: Use various filters and a search bar to find products easily.

### Admin Panel
- **Product Management**: Manage product inventory, prices, and details.
- **Order Management**: View and update order statuses.

### General
- Fully responsive design using **Tailwind CSS**.
- Smooth and dynamic user experience.
- Custom implementation for all features without relying on external libraries.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
.
├── src
│   ├── components      # Reusable UI components
│   ├── pages           # Application pages
│   ├── hooks           # Custom React hooks
│   ├── context         # Global state management (e.g., Context API)
│   ├── utils           # Utility functions
│   └── styles          # Tailwind configuration and custom styles
├── public              # Static assets
├── README.md           # Project documentation
└── package.json        # Project dependencies and scripts
```

## Technologies Used
- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and utility-first styling.
- **Axios**: For API communication with the backend.
- **React Router**: For handling navigation within the app.

## Notes
- This is the frontend only. The backend for this project is built with **NestJS** and hosted separately.
- Ensure that the backend server is running and accessible for the API calls to work correctly.
- All features and functionalities are implemented from scratch without using any external libraries.

## Contributing
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

---
Feel free to reach out if you have any questions or suggestions for improvement!
