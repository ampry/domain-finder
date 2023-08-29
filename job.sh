#!/bin/bash

# Run Node.js script
node index.js

# Check if Node.js script succeeded
if [ $? -eq 0 ]; then
  # Run Python script
  python3 data_clean.py
else
  echo "Node.js script failed."
  exit 1
fi

# Check if Python script succeeded
if [ $? -eq 0 ]; then
  # Run MySQL script
  mysql -u root -p your_password your_database < automate.sql
else
  echo "Python script failed."
  exit 1
fi

# Check if MySQL script succeeded
if [ $? -eq 0 ]; then
  echo "All scripts ran successfully."
else
  echo "MySQL script failed."
  exit 1
fi
