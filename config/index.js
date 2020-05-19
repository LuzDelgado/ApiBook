const config = {
    port: 80,    
    files: {
        dirname: "files",
        filename: {
            file_aud : "audits.log",
            file_log : "access.log"
        }
    }
};

module.exports = config;