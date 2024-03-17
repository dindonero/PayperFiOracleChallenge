# Decentralized Oracle Smart Contract System

## Project Overview

This ambitious project aims to redefine how oracles interact with smart contracts on the Aleo platform by leveraging the robustness of the LEO language. Designed to handle an unlimited number of oracles providing real-time price data in a decentralized manner, it is poised to set a new standard for data integrity and system scalability within the blockchain ecosystem.

The system encapsulates a smart contract developed in LEO for Aleo's blockchain, coupled with a sophisticated backend and a user-friendly frontend interface. This trio is engineered to work seamlessly together, providing a secure, scalable, and intuitive experience for users and administrators alike.

### Components

#### Smart Contract (LEO)
- A lean, yet powerful smart contract dedicated to updating and managing price data. Ownership privileges are enforced, allowing for the precise control over who can update oracle access.

#### Backend Service (React)
- A robust backend architecture designed for the dual purposes of validating incoming price data before its blockchain submission and securely managing oracle data interactions.

#### Frontend Interface (React)
- Provides a straightforward user interface for wallet connectivity and price data updates, emphasizing simplicity and efficiency.

## Detailed Setup Guide

### Prerequisites

Ensure your development environment is prepared with the following:

- **Node.js (v14 or later)**: The runtime environment for executing JavaScript code server-side.
- **Yarn**: A fast, reliable, and secure dependency management tool.
- **Rust and Cargo**: Essential tools for compiling LEO and other blockchain-related code.
- **Aleo CLI**: The command-line interface for interacting with the Aleo platform.

### Smart Contract Deployment

#### Installation and Compilation

1. **Aleo CLI Setup**:
   - Follow Aleo's documentation for CLI installation. Ensure it's properly configured to interact with the Aleo network.

2. **Smart Contract Compilation**:
   - Change directory to `leo_contract`.
   - Execute `aleo build` to compile the contract. Verify successful compilation with no errors.

#### Deployment

3. **Deploy Contract**:
   - Deploy with `aleo deploy` and note the contract address. This address will be crucial for backend and frontend configuration.

### Backend Service Configuration

#### Initial Setup

1. **Prepare the Environment**:
   - Navigate to `backend_service`.
   - Run `yarn install` to fetch all necessary dependencies.

2. **Environment Variables**:
   - Based on `.env.example`, create a `.env` file.
   - Set `REACT_APP_CONTRACT_ADDRESS` with your contract's address.

#### Running the Backend

3. **Launch Service**:
   - Execute `yarn start`. The service will be available at `http://localhost:5000`.

### Frontend Interface Initialization

#### Dependencies and Configuration

1. **Setup**:
   - Move to `frontend_interface`.
   - Install dependencies with `yarn install`.

2. **Connect to Backend**:
   - Ensure the backend URL is correctly configured in the environment settings.

#### Launching the Frontend

3. **Start the Application**:
   - Run `yarn start` to open the frontend interface at `http://localhost:3000`.

## Comprehensive Usage Guide

### Price Update Workflow

1. **Wallet Connection**:
   - Navigate through the frontend interface to connect your Aleo wallet securely.
2. **Initiate Price Update**:
   - Click the "Update Price" button. The backend validates and signs the price before updating it on the blockchain.

## Security, Scalability, and Future Directions

This project stands as a testament to scalable security, with mechanisms in place to minimize trust and maximize data integrity. Future directions include more decentralized oracle management, enhanced security protocols, and off-chain data computation to further reduce on-chain transaction costs.

## Contributing

We welcome contributions from developers of all skill levels. Please see our `CONTRIBUTING.md` for guidelines on how to make a difference in this project.

## Testing

- **Unit Tests**: Run `yarn test` in both frontend and backend directories to execute unit tests.
- **Integration Testing**: Detailed instructions for conducting integration tests are available in `TESTING.md`.

## FAQ

- **Q: How can I add a new oracle?**
  - A: New oracles can be added through the smart contract by the owner. Refer to the smart contract documentation for more details.

- **Q: Where can I find more information about Aleo and LEO?**
  - A: Visit [Aleo's official website](https://www.aleo.org) for comprehensive resources on Aleo and the LEO programming language.

## Support and Contact

Should you encounter any issues or have questions not covered by the FAQ, please feel free to do it through the project's Issues section on GitHub.

---

We envision this project as a cornerstone for future developments in decentralized oracles and blockchain technology. Your insights, feedback, and contributions are not only welcomed but essential for our collective success.
