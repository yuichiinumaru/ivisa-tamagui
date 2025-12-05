#!/bin/bash

FONT_DIR="$HOME/.local/share/fonts"
SOURCE_DIR="$PWD/packages/ui/src/assets/fonts"

echo "Checking font directory: $FONT_DIR"
mkdir -p "$FONT_DIR"

echo "Installing fonts from: $SOURCE_DIR"
if [ -d "$SOURCE_DIR" ]; then
    cp "$SOURCE_DIR"/*.otf "$FONT_DIR/"
    echo "Fonts copied successfully."
    
    echo "Updating font cache..."
    fc-cache -f "$FONT_DIR"
    echo "Font cache updated."
    
    echo "Verifying installation..."
    fc-list | grep "Cera Pro"
else
    echo "Error: Source font directory not found at $SOURCE_DIR"
    exit 1
fi

echo "Done! Cera Pro fonts are installed."
