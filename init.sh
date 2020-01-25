#!/usr/bin/env bash

# Load configuration file into express's root
cp config.json api/control.json
cd api
npm install
cd ../view
npm install 


