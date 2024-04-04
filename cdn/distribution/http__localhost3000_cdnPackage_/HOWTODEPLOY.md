# AvMessagingSdk

## Deployment

1. Put all files from the `cdnPackage` folder at the root of the storage behind `http://localhost:3000/cdnPackage/`.
2. If your storage is behind a CDN, make sure to issue a cache invalidation for `http://localhost:3000/cdnPackage/loader.json`.
3. Make sure your [server allows CORS requests](https://enable-cors.org/server.html).
4. Use the instructions in `docs/README.md` to test your deployment.

## Documentation

Distribute `docs/README.md` to your users as this document contains everything needed to explain how to initialize and use the Web Messenger.
