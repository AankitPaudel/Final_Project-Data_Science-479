# Loan Default Prediction Project

## Overview
This project aims to predict the likelihood of loan defaults using data from Coursera's Loan Default Prediction Challenge. By analyzing comprehensive borrower data, we support financial institutions in making informed decisions on loan approvals and risk management.

## Project Goal
To utilize predictive analytics to forecast loan defaults, aiding financial institutions in assessing borrower risks and enhancing the decision-making process for loan approvals.

## Dataset Overview
- **Name**: Loan Default Prediction Dataset
- **Source**: Coursera’s Loan Default Prediction Challenge
- **Size**: 255,347 rows × 18 columns
- **Format**: CSV (`Loan_default.csv`)
- **Data Types**:
  - **Numerical**: Age, Income, CreditScore, etc.
  - **Boolean**: HasMortgage, HasCoSigner, Default
  - **Categorical/Text**: Education, EmploymentType, LoanPurpose

## Data Management Strategies

### 1. Creation of Logical Collections
The dataset is segmented into logical categories such as demographics, financial data, credit history, and loan details to facilitate targeted analysis and effective model training.

### 2. Physical Data Handling
We utilize version control through GitHub and ensure data integrity with regular replication across team environments. The dataset is stored in CSV format, accessible within our secure GitHub repository.

### 3. Interoperability Support
Our analysis integrates the dataset with additional data sources, such as credit bureau data, to enhance predictive accuracy. Compatibility with statistical software like Python (Pandas, Matplotlib) and R is maintained.

### 4. Metadata and Standards
- **Metadata**: The dataset includes structured JSON metadata detailing column types and meanings.
- **Standards**: Adheres to standards from Schema.org and MLCommons Croissant for machine-readable schema integration.

### 5. Security Support
Data access is restricted to authorized team members only. GitHub's privacy settings are used to secure borrower information, ensuring that only pertinent team members have access to sensitive data.

### 6. Data Ownership
The original dataset is owned and maintained by Nikhil Kotra and hosted on Kaggle. Our project ensures rigorous data quality and cleaning under the supervision of the project leader.

### 7. Metadata Collection, Management, and Access
The dataset's metadata includes comprehensive column descriptions, data origins, and a detailed change history. We also plan to implement relational maps to show how different data pieces interconnect.

### 8. Persistence
The dataset will be retained indefinitely for ongoing historical analysis and comparative studies, with plans in place for data migration as technologies evolve.

### 9. Discovery, Dissemination, and Publication
- **Discovery**: We maintain clear GitHub documentation, including transparent README files that facilitate efficient discovery and understanding of specific borrower attributes.
- **Dissemination and Publication**: Updates on changes are regularly communicated through GitHub. We ensure sensitive data is protected while maintaining transparency with data updates to foster collaboration and analysis replication.

## Repository Structure
- `data/`: Directory containing the raw and processed CSV files.
- `scripts/`: Scripts for data cleaning, preprocessing, and modeling.
- `docs/`: Documentation related to data management and findings.
- `backup/`: Backup copies of the dataset.

## Getting Started
To get involved with this project:
1. Clone the repository:
git clone https://github.com/AankitPaudel/Final_Project-Data_Science-479
2. Install necessary dependencies:
3. Navigate to the `data/` and `scripts/` directories to begin exploring and executing the analysis.

## Contributions
This project is currently closed to external contributions and is managed by the listed team members. For access or inquiries, please contact the repository administrators.

## License
This project is licensed under the MIT License - details are available in the LICENSE file.

## Reference
- [Loan Default Prediction Dataset by Nikhil](https://www.kaggle.com/datasets/nikhil1e9/loan-default/data) on Kaggle.

