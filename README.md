# Final Project - Data Science 479

## Project Overview
This project aims to predict loan defaults using a dataset sourced from Kaggle. By analyzing data on over 255,000 borrowers, including age, income, credit scores, and loan details, we aim to identify customers likely to default on loan repayments. This insight will enable banks to mitigate risks and offer proactive assistance to customers during the loan approval process.

## Dataset Description
The dataset, sourced from Coursera's Loan Default Prediction Challenge, contains comprehensive information about borrowers with 255,347 records and includes several key variables that can predict potential loan defaults:

### Features
- **LoanID**: A unique identifier for each loan
- **Age**: Age of the borrower
- **Income**: Annual income of the borrower
- **LoanAmount**: The amount of money being borrowed
- **CreditScore**: Credit scores assigned by financial institutions
- **MonthsEmployed**: The number of months the borrower has been employed
- **NumCreditLines**: The number of credit lines the borrower has open
- **InterestRate**: The interest rate for the loan
- **LoanTerm**: The term length of the loan in months
- **DTIRatio**: The Debt-to-Income ratio
- **Education**: The highest level of education attained by the borrower
- **EmploymentType**: The type of employment status of the borrower
- **MaritalStatus**: The marital status of the borrower
- **HasMortgage**: Whether the borrower has a mortgage (Boolean)
- **HasDependents**: Whether the borrower has dependents (Boolean)
- **LoanPurpose**: The purpose of the loan
- **HasCoSigner**: Whether the loan has a co-signer (Boolean)
- **Default**: Indicates whether the loan defaulted or not (Target variable)

## Project Structure
- `Data/`: Directory containing the raw Loan_default.csv dataset (24MB)
- `OneDrive_2025-04-28/`: Contains additional files including:
  - `Dataset and Code/`: Contains Jupyter notebooks for data analysis and modeling
  - `DS_Assignment4.ipynb` and `DS_Assignment4_withCM.ipynb`: Main analysis notebooks
  - `metadata-visualization.tsx`: React component for dataset metadata visualization
  - `loan-default-metadata.json`: JSON file containing dataset metadata

## Methods & Analysis
The project uses machine learning to predict loan defaults with the following approach:
1. **Data Cleaning**: Addressing missing values and outliers
2. **Exploratory Data Analysis**: Understanding feature distributions and relationships
3. **Feature Engineering**: Creating new features to improve model performance
4. **Model Development**: Building classification models to predict loan defaults
5. **Model Evaluation**: Assessing model performance using metrics like accuracy, precision, recall, and F1-score
6. **Insights & Recommendations**: Providing actionable insights based on model findings

## Data Management
Detailed below are the strategies employed for managing the dataset throughout this project:

### Data Collection Need
The data is utilized to identify customers who might be at risk of not fulfilling loan repayment terms.

### Data Sourcing
Data is sourced from Kaggle's Loan Default Prediction Challenge, originally from Coursera.

### Data Preparation and Quality Control
Data cleaning involves addressing missing values and removing outliers. Validations are performed to ensure the reliability of debt ratios and credit scores.

### Data Storage Solution
Data is stored in CSV format for analysis. The original dataset is 24MB in size and contains 255,347 records.

### Data Backup
Data is backed up in OneDrive and the local repository, with version control managed through GitHub.

### Data Security and Privacy
The dataset is publicly available under a CC0: Public Domain license, but access to project files is restricted to authorized team members.

### Data Retention and Maintenance
The dataset is maintained for long-term analysis, with regular updates and reviews to ensure its relevance and accuracy.

### Data Documentation
Comprehensive documentation details each dataset column and data relationships, serving as a resource for understanding and analyzing the data.

## How to Use This Repository
1. Clone the repository using:
```
git clone https://github.com/AankitPaudel/Final_Project-Data_Science-479.git
```
2. Navigate to the project directory:
```
cd Final_Project-Data_Science-479
```
3. The main dataset can be found in the `Data/` directory
4. Jupyter notebooks for analysis are in the `OneDrive_2025-04-28/Dataset and Code/` directory

## Dependencies
This project uses the following Python libraries:
- pandas
- numpy
- scikit-learn
- matplotlib
- seaborn
- jupyter

## Contributing
This project is closed for external contributions. Only specific team members, who are collaborators in this repository, have the permission to make changes.

## License
This project is licensed under the MIT License. The dataset is available under CC0: Public Domain license.

## Additional Resources and Presentations
For access to additional project resources, presentations, and shared files, please visit our OneDrive folder:

[Access Project Files on OneDrive](https://vandalsuidaho-my.sharepoint.com/:f:/g/personal/sshahi_uidaho_edu/EoZqekJVIzlPg8fURb86ekQBn1kmEFsn7B4GPgBhdjh3-A?e=tPr83K)

This link is intended for use by project team members and other authorized collaborators. Please ensure you have the necessary permissions to access these files.
