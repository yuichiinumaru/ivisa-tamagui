#!/bin/bash

# Define source directory (Chrome default download location for the extension)
SOURCE_DIR="$HOME/Downloads/logs"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' does not exist."
    echo "Make sure the extension has saved some logs."
    exit 1
fi

# Check if there are files to move
if [ -z "$(ls -A "$SOURCE_DIR")" ]; then
    echo "No log files found in '$SOURCE_DIR'."
    exit 0
fi

# Move files to current directory
echo "Moving logs from '$SOURCE_DIR' to current directory..."
mv "$SOURCE_DIR"/* .

if [ $? -eq 0 ]; then
    echo "Success! Logs imported."
else
    echo "Error moving files."
    exit 1
fi
