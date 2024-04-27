
// Get-Date function 
exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday : "long",
        month : "long",
        day : "numeric"
    };
    const day = today.toLocaleDateString("en-US",options);
    return day;
};

// Get-Day function 
exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday : "long"
    };
    return today.toLocaleDateString("en-US",options);
};
