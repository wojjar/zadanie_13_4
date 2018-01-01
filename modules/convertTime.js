//==Converting time in seconds to hours, minutes and seconds ==


function convertTime(seconds) {
     var i = seconds;
            if (i>=3600) {
                var x = Math.floor(i / 3600);
                var y = Math.floor((i % 3600) / 60);
                var z = Math.floor(i % 60);
                return (' '+i+' seconds '+'are '+x+' hours ' +y+' minutes'+' and '+z+' seconds.'+'\n');
            }
            else if (i<3600 && i>=0) {
                var y = Math.floor((i % 3600) / 60);
                var z = Math.floor(i % 60);
                return (' '+i+' seconds '+'are '+y+' minutes'+' and '+z+' seconds.'+'\n');
            }           
}   





module.exports = {
    convertTime:convertTime
 
};

