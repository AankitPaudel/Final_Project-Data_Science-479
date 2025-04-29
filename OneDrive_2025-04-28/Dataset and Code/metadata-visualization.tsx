import React from 'react';
import { ChevronDown, ChevronRight, Database, FileText, Info, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function MetadataVisualization() {
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    fields: true,
    distribution: false,
    keywords: false
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const fieldTypes = {
    "LoanID": "Text",
    "Age": "Integer",
    "Income": "Integer",
    "LoanAmount": "Integer",
    "CreditScore": "Integer",
    "MonthsEmployed": "Integer",
    "NumCreditLines": "Integer",
    "InterestRate": "Float",
    "LoanTerm": "Integer",
    "DTIRatio": "Float",
    "Education": "Text",
    "EmploymentType": "Text",
    "MaritalStatus": "Text",
    "HasMortgage": "Boolean",
    "HasDependents": "Boolean",
    "LoanPurpose": "Text",
    "HasCoSigner": "Boolean",
    "Default": "Integer"
  };

  return (
    <div className="font-sans max-w-full bg-gray-50 p-6 rounded-lg shadow">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-blue-800">Loan Default Prediction Dataset Metadata</h1>
        <p className="text-gray-600 mt-2">Dataset to predict which individuals will default on their loan payments</p>
      </div>

      {/* Dataset Overview */}
      <div className="mb-4 bg-white p-4 rounded-md shadow">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => toggleSection('overview')}
        >
          {expandedSections.overview ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <h2 className="text-xl font-semibold text-blue-700 ml-1">Dataset Overview</h2>
        </div>
        
        {expandedSections.overview && (
          <div className="mt-3 ml-6 space-y-2 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-semibold">Creator:</span> NIKHIL</p>
                <p><span className="font-semibold">Publisher:</span> Kaggle</p>
                <p><span className="font-semibold">License:</span> CC0: Public Domain</p>
                <p><span className="font-semibold">Date Modified:</span> 2023-09-11</p>
              </div>
              <div>
                <p><span className="font-semibold">File:</span> Loan_default.csv</p>
                <p><span className="font-semibold">Format:</span> CSV</p>
                <p><span className="font-semibold">Size:</span> ~7.858 MB</p>
                <p><span className="font-semibold">Records:</span> 255,347</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
              <div className="flex">
                <Info size={20} className="text-blue-500 mr-2 flex-shrink-0 mt-1" />
                <p>This dataset is from Coursera's Loan Default Prediction Challenge and contains information about borrowers to predict loan defaults.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Data Fields */}
      <div className="mb-4 bg-white p-4 rounded-md shadow">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => toggleSection('fields')}
        >
          {expandedSections.fields ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <h2 className="text-xl font-semibold text-blue-700 ml-1">Data Fields (18)</h2>
        </div>
        
        {expandedSections.fields && (
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-blue-100">
                  <th className="py-2 px-4 text-left text-blue-800">Field Name</th>
                  <th className="py-2 px-4 text-left text-blue-800">Data Type</th>
                  <th className="py-2 px-4 text-left text-blue-800">Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries({
                  "LoanID": "A unique identifier for each loan",
                  "Age": "The age of the borrower",
                  "Income": "The annual income of the borrower",
                  "LoanAmount": "The amount of money being borrowed",
                  "CreditScore": "The credit score of the borrower",
                  "MonthsEmployed": "The number of months the borrower has been employed",
                  "NumCreditLines": "The number of credit lines the borrower has open",
                  "InterestRate": "The interest rate for the loan",
                  "LoanTerm": "The term length of the loan in months",
                  "DTIRatio": "The Debt-to-Income ratio",
                  "Education": "The highest level of education attained by the borrower",
                  "EmploymentType": "The type of employment status of the borrower",
                  "MaritalStatus": "The marital status of the borrower",
                  "HasMortgage": "Whether the borrower has a mortgage",
                  "HasDependents": "Whether the borrower has dependents",
                  "LoanPurpose": "The purpose of the loan",
                  "HasCoSigner": "Whether the loan has a co-signer",
                  "Default": "Indicate whether the loan defaulted or not"
                }).map(([field, description], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-2 px-4 border-t">{field}</td>
                    <td className="py-2 px-4 border-t">{fieldTypes[field]}</td>
                    <td className="py-2 px-4 border-t">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Distribution */}
      <div className="mb-4 bg-white p-4 rounded-md shadow">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => toggleSection('distribution')}
        >
          {expandedSections.distribution ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <h2 className="text-xl font-semibold text-blue-700 ml-1">File Distribution</h2>
        </div>
        
        {expandedSections.distribution && (
          <div className="mt-3 ml-6 space-y-2">
            <div className="flex items-start">
              <FileText size={18} className="text-blue-600 mr-2 mt-1" />
              <div>
                <p className="font-semibold">archive.zip (7.858 MB)</p>
                <p className="text-gray-600 text-sm ml-5">Archive containing all dataset contents</p>
              </div>
            </div>
            <div className="flex items-start ml-6">
              <FileText size={18} className="text-green-600 mr-2 mt-1" />
              <div>
                <p className="font-semibold">Loan_default.csv</p>
                <p className="text-gray-600 text-sm">Contains features for borrowers and loan default status</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Keywords */}
      <div className="mb-4 bg-white p-4 rounded-md shadow">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => toggleSection('keywords')}
        >
          {expandedSections.keywords ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <h2 className="text-xl font-semibold text-blue-700 ml-1">Keywords & Categories</h2>
        </div>
        
        {expandedSections.keywords && (
          <div className="mt-3 ml-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Banking</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Finance</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Income</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Binary Classification</span>
            </div>
          </div>
        )}
      </div>

      {/* Note */}
      <div className="mt-6 p-3 bg-yellow-50 rounded-md border border-yellow-100">
        <div className="flex">
          <AlertCircle size={20} className="text-yellow-600 mr-2 flex-shrink-0 mt-1" />
          <p className="text-gray-700">
            This visualization represents the metadata structure for the Loan Default Prediction Dataset. 
            To work with the actual data, you'll need to access the CSV file containing the 255,347 records.
          </p>
        </div>
      </div>
    </div>
  );
}
