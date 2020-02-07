#!/usr/bin/env bash

# Load configuration file into express's root
cp config.json api/control.json
cp authentication.json api/credentials.json
cd api
npm install
cd ../view
npm install 


