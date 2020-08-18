const LIVE = false;
if(LIVE) {
    module.exports = require('./dev')
} else{
    module.exports = require('./prod')   
}

    
