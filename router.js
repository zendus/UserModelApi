const action = require('./crudMethods');

function router(method, userDetails) {
    if (method == 'POST') {
        var folderName = 'Stu' + userDetails.regNo;
        action.create(folderName, userDetails)
    }

}

module.exports = router;