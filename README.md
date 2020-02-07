# Bennington Wellbeing Assessment
This application is for the Student Health Promotion at Bennington College.
The assessment allows you to select a dimension of wellbeing and receive a
response evaluating your wellbeing based off of a few questions.

## Infrastructure
There are two main components of the application:
1. `api` - Express Backend: serves and processes the data. This includes pushing it to SQL Server.
2. `view` - React Frontend: displays a dynamic single page application which queries its content from `api` 


## Usage
- Run `init.sh` to move the configuration JSONs to the right folders
and to install all of the packages for both projects.
- Run `start.sh` to start the application
### Adding Dimensions
- Change `config.json`
- Run `init.sh`

Add a new object to `config.json` with the following properties:
- name: string
- questions: list of strings. Each string is a question
- response: object with integers as keys and responses as values. The responses that is selected is less than or equal to the integer with the exception of 0 which represents the highest response.
```
  { "name": "NAME OF SECTION: Social, Spirtual, etc",
    "questions": ["Some Question?", "Another Question?", "Question?"],
    "response" : {INTEGER: Represents <= to this integer": "Some response", INTEGER: Represents <= to this integer": "Some response"]
  }
```

