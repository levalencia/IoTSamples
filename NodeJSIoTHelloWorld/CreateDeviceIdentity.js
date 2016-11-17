 'use strict';
var iothub = require('azure-iothub');
var connectionString = 'HostName=iothubdemo1.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=HNFkcarKRIWMIIkT0JDo1VgLcqL0FjZiarAmrdf19ZI=';
var registry = iothub.Registry.fromConnectionString(connectionString);
var deviceId = "helloworlddevice";

var device = new iothub.Device(null);
device.deviceId = deviceId;
 
registry.create(device, function(err, deviceInfo, res) {
  if (err)
    registry.get(device.deviceId, printDeviceInfo); 
 
  if (deviceInfo)
    printDeviceInfo(err, deviceInfo, res) 
});
 
function printDeviceInfo(err, deviceInfo, res) {
  if (deviceInfo)
    console.log('Generated device key: ' + deviceInfo.authentication.SymmetricKey.primaryKey);
}