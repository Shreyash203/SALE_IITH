AWS.config.update({
        accessKeyId: 'AKIA4MTWL5DLCUM4SFMU',
        secretAccessKey: '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',
        region: 'ap-south-1'
    });
    const s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: 'shreyash205' }
    });

    // Upload function
    function uploadImage() {
        const fileInput = document.getElementById('file-input');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please choose a file first!');
            return;
        }

        const params = {
            Bucket: 'shreyash205/',
            Key: file.name, // The name of the file in S3
            Body: file,
            ContentType: file.type,
            ACL: 'public-read' // or private depending on your use case
        };

        // Upload to S3
        s3.upload(params, function(err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                console.log('Upload Success', data.Location);
                alert('Upload Success! File available at: ' + data.Location);
            }
            loadImages();
        });
    }

// Load images from S3 and display in gallery
