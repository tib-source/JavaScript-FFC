// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value){
  var record = records[id];
  switch(prop){
    case "tracks":
      if (record.hasOwnProperty("tracks")){
        if (value !== "" ){
          record.tracks.push(value);
        }else if (value == ""){
          delete record.tracks;
        };
      } else{
        record.tracks = [value]
      };
      break;
    default:
      if (value != ""){
        record[prop] = value;
      }else{
        delete record[prop];
      };
      break;
  };
  return records;
};

updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")