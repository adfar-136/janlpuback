const EventEmitter = require('events');
const event = new EventEmitter();

const listener1 = ()=>console.log("Listener 1 executed");
const listener2 = ()=>console.log("Listener 2 executed");

event.on("login",listener1);
event.on("login",listener2);
event.on("login",listener2);

event.emit("login");
// event.removeListener("login",listener2);
event.removeAllListeners("login");
// event.emit("login");
console.log(event.listeners("login"));
// var count = event.listenerCount("login");
// console.log(count)