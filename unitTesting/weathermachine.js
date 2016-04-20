/**
 * Created by gjr8050 on 4/20/2016.
 */
"use strict";

module.location = null;

module.exports = {
    status: "OFF",
    get location(){return location},

    activate(){
        this.status = "READY";
    },

    setLocation(location){
        if(location == "Rochester"){
            module.location = location;
            return;
        }

        throw new Error("This weather machine only works in Rochester");
    },

    setTemperature(targetTemp){
        if(typeof targetTemp != "number"){
            throw new TypeError("Temperature must be a number!");
        }


    },

    setCondition(condition){
        switch(condition){

        }
    },

    adjustWeather(){

    }
};