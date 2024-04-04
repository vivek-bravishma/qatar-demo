# Configuration

The AvMessagingSdk library is composed of multiple assets fetched at runtime for better performance.
For that reason, the public path (the URL where files are hosted) is hardcoded in multiple places.

To configure the library for your environment, run:

```
./configure <new-public-path>
```

The script will generate a folder with the configured project in it.

## Examples

### Local testing setup

The static files are hosted at http://localhost:8000/static/ and the script is run in the `/home/your-name/` folder.

```
./configure http://localhost:8000/static/
```

Files will be available at `/home/your-name/http:__localhost:8000_static_/`.

### Production setup

The static files are hosted at https://cdn.acme.org/.

```
./configure https://cdn.acme.org/
```

Files will be available at `/home/your-name/https:__cdn.acme.org_/`.

## Installation instructions for the end user

Instructions on how to integrate the library on a website will be available in the `README.md` file inside the generated folder.

## Content Security Policy

In case your customer's deployment requires [CSP compatibility](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), the following meta tag needs to be included on their site. However, keep in mind that for `connect-src` Smooch domain will appear and cannot be replaced by yours. Other domains (here acme.org) should be replaced by the domain where files are hosted.

```html
<meta
    http-equiv="Content-Security-Policy"
    content="
    connect-src
        wss://*.smooch.io
        https://*.smooch.io;
    font-src
        https://*.acme.org;
    script-src
        https://*.acme.org;
    style-src
        https://*.acme.org;
    img-src
        blob:
        https://*.acme.org;"
/>
```

Note that an equivalent configuration can be done [server side](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

According to the channels enabled by your customer, other domains may need to be added (these are used to display QR codes to link the Web Messenger conversation):

-   LINE: https://qr-official.line.me
-   WeChat: https://mp.weixin.qq.com

Note that the CSP configuration should also include any domains used to host images or files sent in messages.
If a specific deployment requires `blob:` to be excluded for `img-src`, image upload must also be disabled via init settings.
