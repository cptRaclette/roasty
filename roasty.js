function downloadFile(fileName, fileContentBlob) {
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(fileContentBlob);
    a.click();
}

function generateFileContent(targetSize) {
    const blobOptions = { type: 'text/plain' }
    const pattern = "🍞🔥";
    const patternSize = new Blob([pattern], blobOptions).size;
    const fillUpChar = '\u0000';

    const fileContent = [];

    let patternCount = Math.floor(targetSize / patternSize);
    while (patternCount--) {
        fileContent.push(pattern);
    }

    let fillUpCharCount = targetSize % patternSize;
    while (fillUpCharCount--) {
        fileContent.push(fillUpChar);
    }

    return new Blob(fileContent, blobOptions);
}

function roastFile(e) {
    const fileToRoast = document.getElementById("roast-file").files[0];

    if (!fileToRoast) {
        window.alert('Please select a file first');
        return;
    }

    const fileName = `${fileToRoast.name}.roasted`;
    const fileContentBlob = generateFileContent(fileToRoast.size);

    downloadFile(fileName, fileContentBlob);
}
