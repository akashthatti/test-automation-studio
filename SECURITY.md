# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability, please email security@testautomationstudio.com instead of using the issue tracker.

## Supported Versions

Only the latest version receives security updates.

| Version | Supported |
|---------|----------|
| 1.0.x   | ✅ Yes   |
| < 1.0   | ❌ No    |

## Security Best Practices

When using Test Automation Studio:

1. **Never store sensitive credentials** in test cases
   - Use environment variables instead
   - Use credential managers

2. **Keep test data separate** from test code
   - Use external data files
   - Use parameterization

3. **Secure your projects**
   - Use strong passwords for accounts
   - Don't share test projects publicly
   - Use VPN for sensitive testing

4. **Update regularly**
   - Check for security patches
   - Update dependencies
   - Keep your OS updated

## Known Security Considerations

- Test execution runs on local machine only (v1.0)
- LocalStorage is not encrypted (use secure storage for production)
- Test data is visible in generated code (sanitize before sharing)

## Response Timeline

- Vulnerability confirmed: Acknowledged within 48 hours
- Fix development: 7-14 days for critical issues
- Release: Patch released within 30 days

Thank you for helping us keep Test Automation Studio secure!
