//Función contenedora de valor del parámetro y su procesador
function Parameter(object, type) {
    this.object= object;
    
    if(!(type instanceof Processor)){
        throw "Error";        
        return;
    }
    
    this.type= type;
}

//Función genérica de sensor
function Sensor() {
}
Sensor.prototype.getParameter = function() {
    return new Parameter('padre', 'padre');
}

//Función genérica de procesador
function Processor(){        
}

Processor.prototype.process = function(object){
    alert('Go: '+object);
}
    
//Sensor A
function SensorA() {
    Sensor.call(this);
}
SensorA.prototype = new Sensor();
SensorA.prototype.constructor = SensorA;
SensorA.prototype.getParameter = function() {
    return new Parameter(10, new ProcessorA());
}

function ProcessorA(){
    Processor.call(this);
}
ProcessorA.prototype = new Processor();
ProcessorA.prototype.constructor = ProcessorA;
ProcessorA.prototype.process = function(object){
    alert('ProcessorA: '+object+'!!!');
}

//Sensor B
function SensorB() {
    Sensor.call(this);
}
SensorB.prototype = new Sensor();
SensorB.prototype.constructor = SensorB;
SensorB.prototype.getParameter = function() {
    return new Parameter(15, new ProcessorB());
}
    
function ProcessorB(){
    Processor.call(this);
}
ProcessorB.prototype = new Processor();
ProcessorB.prototype.constructor = ProcessorB;
ProcessorB.prototype.process = function(object){
    alert('ProcessorB: '+object+'???');
}

