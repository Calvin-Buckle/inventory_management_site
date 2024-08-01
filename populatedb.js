#! /usr/bin/env node
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Device = require("./models/device");
  const Part = require("./models/part");
  const Store = require("./models/store");
 
  

  const parts = [];
  const devices = [];
  const stores = [];

  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createDevices();
    await createParts();
    await createStores();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  
  async function deviceCreate(index, oem, model_name, quantity) {
    const devicedetail = { 
        oem: oem,
        model_name: model_name,
        quantity: quantity,
        id: _id };
    
  
    const device = new Device(devicedetail);
  
    await device.save();
    devices[index] = device;
    console.log(`Added device: ${oem} ${model_name} ${quantity}`);
  }
  

  async function partCreate(index, oem, partNumber, quantity) {
    const partdetail = {
        oem: oem,
        partNumber: partNumber,
        quantity: quantity,
    
    };
  
    const part = new Part(partdetail);
    await part.save();
    parts[index] = part;
    console.log(`Added part: ${oem} ${partNumber} ${quantity}`);
  }
  
  async function storeCreate(index, location) {
    const locationdetail = {
    location: location
    };
   
  
    const storelocation = new Store(locationdetail);
    await storelocation.save();
    stores[index] = storelocation;
    console.log(`Added location: ${location}`);
  }


  async function createDevices() {
    console.log("Adding Devices");
    await Promise.all([
     deviceCreate(0, "Huawei", "P20 lite", 1),
   
    ]);
  }
  
  
  async function createParts() {
    console.log("Adding parts");
    await Promise.all([
      partCreate(0, "Huawei", "1206205554", 20),
    
    ]);
  }
  
  async function createStores() {
    console.log("Adding stores");
    await Promise.all([
      storeCreate(0, "Midrand"),
    ]);
  }
  
 