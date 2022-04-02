const express = require('express');

const createApp = require('./app');

async function main() {
    const app = createApp();

    app.start(() => {
        console.log(
            `Server is running on port ${app.port} (http://localhost:${app.port})`
        );
    });
}

main();
