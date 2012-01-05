    
var arrayOfSensors = [new SensorA(), new SensorB()];

//Motor de procesamiento
var arrayOfParameters = new Array();

arrayOfSensors.forEach(
    function(sensor){
        var parameter = sensor.getParameter(); 
        var processor = parameter.type;
        processor.process(parameter.object);
    }
);