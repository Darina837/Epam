function Student(nameProps, emailProps) {
    const name = nameProps;
    const email = emailProps;
    let results = [];

    const getName = () => {
        return name;
    }
    const getEmail = () => {
        return email;
    }
    const addHomeworkResult = (topicProps, successProps) => {
        let topic = topicProps; 
        let success = successProps; 
        results.push({topic: topic, success: success});
    }
    const getHomeworkResults = () => {
        console.log(results)
    }
    return {
        getName: getName,
        getEmail: getEmail,
        addHomeworkResult: addHomeworkResult,
        getHomeworkResults: getHomeworkResults
    }
}

function FrontendLab(students, failedLimit) {
    const failedHomeworksLimit = failedLimit;
    const studentsList = students;
    let mailStudent;
    let success;

    studentsList.forEach(item => {
        item.name = new Student(item.name, item.email);
    })    

    const addHomeworkResults = obj => {
        let topic = obj.topic;
        studentsList.forEach(item => {
            mailStudent = item.name.getEmail();
            success = obj.results.find(e => e.email === mailStudent).success;
            item.name.addHomeworkResult(topic, success);
        })
    }

    const printStudentsList = () => {
        studentsList.forEach(item => {
            console.log(`name: ${item.name.getName()}, email: ${item.name.getEmail()}`)
        console.log(item.name.getHomeworkResults())
        })
    }
    
    const printStudentsEligibleForTest = () => {
        studentsList.forEach(item => {
            let counter = 0;
            let arr = item.name.getHomeworkResults();
            arr.forEach(el => {
                if(el.success === false) {
                    counter = counter + 1;
                }
            })
            if(counter < failedHomeworksLimit || counter === failedHomeworksLimit) {
                console.log(`name: ${item.name.getName()}, email: ${item.name.getEmail()}`)
            } else {
                return null;
            }
        })
    }

    return {
        addHomeworkResults: addHomeworkResults,
        printStudentsList: printStudentsList,
        printStudentsEligibleForTest: printStudentsEligibleForTest
        
    }
}