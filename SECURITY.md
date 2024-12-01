# Security Policy

## Reporting a Vulnerability

We take security seriously at Okto. If you discover a security vulnerability within this repository, please follow the instructions below to report it.

### How to Report
- **Email**: Please send an email to [security@okto.com](mailto:security@okto.com) with a detailed description of the vulnerability.
- **Information to Include**:
  - Steps to reproduce the issue.
  - A description of the issue and its potential impact.
  - Any additional relevant details, such as affected versions or components.

### Response Time
- We will acknowledge your report within **2 business days**.
- Our team will work with you to resolve the issue and provide feedback within **7 business days**. We will provide a timeline for a fix.

### Disclosure
- We follow a **responsible disclosure** process. Please do not publicly disclose the vulnerability until we have resolved the issue.
- If you'd like, we will publicly credit you for discovering and reporting the vulnerability after the fix has been implemented.

## Supported Versions

We prioritize security for the following versions of our SDK:

| Version | Supported        |
|---------|------------------|
| 1.x     | ✅ Supported     |
| 0.x     | ❌ No longer supported |

### End of Life (EOL) Policy
- Versions that are no longer supported will not receive security patches. Please ensure that you are using a supported version to benefit from security updates.

## Security Best Practices

We recommend following these best practices when contributing or using Okto SDK:
- **Use Secure Coding Practices**: Ensure that you validate all user inputs and sanitize data to prevent injection attacks.
- **Regularly Update Dependencies**: Regularly check and update dependencies to avoid known vulnerabilities in third-party libraries.
- **Limit Exposure**: Avoid exposing sensitive data in your codebase. Use environment variables for credentials and secrets.

## Additional Information 

For more information on securing your projects using the Okto SDK, you can visit our [Security Guidelines](https://www.okto.com/security-guidelines) page.

If you have any other questions or concerns, don't hesitate to reach out.
