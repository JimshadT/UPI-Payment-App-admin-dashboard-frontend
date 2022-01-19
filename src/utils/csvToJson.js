export default (csvData) => {
    const keyArray = csvData[0];
    const valuesArray = csvData.splice(1);
    let jsonData = {};
    let jsonArray = [];
    valuesArray.forEach((valueArr) => {
        valueArr.forEach((value, index) => {
            jsonData[keyArray[index]] = value;
        });
        jsonArray.push(jsonData);
        jsonData = {};
    });
    jsonArray.map((e, i) => {
        e.id = i;
    });
    return jsonArray;
};
