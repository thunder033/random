/**
 * Created by gjr8050 on 4/20/2016.
 */
"use strict";

var temp = 50;
var conditions = [];

module.exports = {

    get currentWether(){
        var conditionsStr = conditions.length > 0 ? conditions.join(", ") : "Fair";
        return `${temp} degree and ${conditionsStr}`; 
    }
    
    get conditions(){
        return conditions;
    }
    
    get temperature(){
        return temp;
    }

    set temperature(targetTemp){
        if(typeof targetTemp != "number"){
            throw new TypeError("Temperature must be a number!");
        }

        temp = targetTemp - 50;
    },
    
    get isPleasant(){
        return temp > -50 || conditons.indexOf("Snowy") > -1;
    }
    
    clearConditions(){
        conditions.length = 0;
    }

    addCondition(condition){
        conditions.add(condition);
    },

    improveWeather(){
        temp -= 10;
        conditions.push("Windy");
    }
};
