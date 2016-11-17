 'use strict';
var iothub = require('azure-iothub');
var connectionString = 'HostName=iothubdemo1.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=HNFkcarKRIWMIIkT0JDo1VgLcqL0FjZiarAmrdf19ZI=';
var registry = iothub.Registry.fromConnectionString(connectionString);

var device = { deviceId: "thisisanewdevice3" }
 
registry.create(device, function(err, deviceInfo, res) {
  if (err)
    registry.get(device.deviceId, printDeviceInfo); 
 
  if (deviceInfo)
    printDeviceInfo(err, deviceInfo, res) 
});
 
function printDeviceInfo(err, deviceInfo, res) {
    if (deviceInfo){
        console.log('Generated device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
        //console.log(err);
    }
}