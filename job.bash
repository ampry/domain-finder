#!/bin/bash

# Run Node.js script
node /path/to/your/node_script.js

# Check if Node.js script succeeded
if [ $? -eq 0 ]; then
  # Run Python script
  python3 /path/to/your/python_script.py
else
  echo "Node.js script failed."
  exit 1
fi

# Check if Python script succeeded
if [ $? -eq 0 ]; then
  # Run MySQL script
  mysql -u your_username -pyour_password your_database < /path/to/your/sql_script.sql
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
