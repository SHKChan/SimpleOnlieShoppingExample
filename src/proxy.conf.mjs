// proxy multiple entries to the same target, need to configure 'proxyConfig'
export default [
    {
        context: [
            '/my',
            '/many',
            '/endpoints',
            '/i',
            '/need',
            '/to',
            '/proxy'
        ],
        target: 'http://localhost:4200',
        secure: false,
        // optionally bypass the proxy, or dynamically change the request before it's sent
        "bypass": function (req, res, proxyOptions) {
            if (req.headers.accept.includes('html')) {
                console.log('Skipping proxy for browser request.');
                return '/index.html';
            }
            req.headers['X-Custom-Header'] = 'yes';
        }
    }
];