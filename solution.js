// This is a RunTracker class that keeps track of person's running

class RunTracker {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.distance = 0;
        this.date = "1970-01-01";
        this.time = 0;
        this.duration = 0;
        this.log = [];
    }
    addRun(date, distance, duration){
        this.date = date;
        this.distance = distance;
        this.duration = duration;
        let record = {this.date, this.distance, this.duration};
        this.log.push(record);
    }
}

const runner = new RunTracker("runner_1","runner_1@run.com");

runner.addRun("2019-12-30",10,20)
runner.log