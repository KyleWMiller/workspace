// data packet format
var dpf = {
  data: {
    tailNum: String,
    serialNum: String,
    simIccid: String,
    timestamp: String,
    // Double check buffers can hold any format of binary data
    data: Buffer
  },
  filetype: {
    name: String
  }
}
