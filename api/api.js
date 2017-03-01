/**
 * Created by stephenvandelinder on 3/1/17.
 */
var api = {

    intensity : [0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6],

    createDay: function(currentMax, i){
        this.day = i+1;
        this.reps = Math.round(api.intensity[i] * currentMax);
        this.intreval = i<7 ? 'Every Hour' : 'Every Half Hour';
    },

    Schedule: function(currentMax){
    var day = [];
    for(i=0;i<14;i++){
        day.push(new api.createDay(currentMax, i));
    }
    return day;
    },

    CreateNewUser: function(name, age, currentMax){
        this.name = name;
        this.age = age;
        this.currentMax = currentMax;
        this.schedule = api.Schedule(currentMax);
        this.log = {};
    }
};

module.exports = api;