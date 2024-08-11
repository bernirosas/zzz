#!/bin/bash

# Run the server
if [ $WIN32 -eq 1 ]
then
  npm run dev:win32
else
  npm run dev
fi
