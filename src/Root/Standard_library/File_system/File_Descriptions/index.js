// -----------------------------------------------------------------------------
// File Descriptions : mô tả file ( data file , read , write , request information )
// -----------------------------------------------------------------------------

fs.open('/open/some/file.txt', 'r', (err, fd) => {
    if (err) throw err;
    fs.fstat(fd, (err, stat) => {
        if (err) throw err;
        // use stat

        // always close the file descriptor!
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
});

/**
    Hầu hết , các Operating System đều limit những con sô mở file trong mỗi lần mở . 
    Nếu vượt qua số limit - sẽ dẫn đến việc bị rò rỉ bộ nhớ ( memory leak ) => application crash 
 */