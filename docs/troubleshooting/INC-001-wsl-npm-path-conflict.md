
# INC-001: WSL npm Path Conflict

## 1. Incident Information

- Incident ID: INC-001
- Environment: Ubuntu on WSL
- Application: React / Vite
- Severity: Development blocker
- Status: Resolved
- Date: 20 November 2026

## 2. Problem Description

During React application initialization using Vite,
the project creation process failed with an EPERM error.

The application attempted to create the frontend
directory under:

C:\Windows\frontend

Instead of the intended Ubuntu project directory.

## 3. Investigation

The following commands were used:

```bash
which node
which npm
type -a node
type -a npm
node -p "process.platform"
node -p "process.execPath"
```

Investigation revealed that:

- Linux Node.js was installed.
- Windows Node.js was also available through WSL PATH.
- Bash had cached the Windows npm executable.

Important finding:

```text
npm is hashed (/mnt/c/Program Files/nodejs/npm)
```

## 4. Root Cause

Bash was using a previously cached Windows npm executable
instead of the Linux npm executable.

## 5. Resolution

Executed:

```bash
hash -r
```

This cleared Bash's cached command locations.

## 6. Verification

Executed:

```bash
type npm
npm -v
npm config get userconfig
npm config get prefix
```

Verified results:

```text
npm is /usr/bin/npm
npm version: 11.20.0
npm user config: /home/ell/.npmrc
npm prefix: /usr
```

## 7. Final Result

Vite successfully initialized the React application.

The development server started successfully at:

http://localhost:5173/

The portfolio homepage was subsequently developed
and tested on desktop and mobile.

## 8. Lessons Learned

- Understand Bash command hashing.
- Verify executable resolution using type.
- Understand Windows/Linux PATH integration in WSL.
- Check the active Node.js and npm environment.
- Investigate before changing system configuration.

## 9. Prevention

When commands behave unexpectedly in WSL:

1. Check command resolution.
2. Inspect cached executable paths.
3. Verify runtime platform.
4. Check npm configuration.
5. Apply the smallest safe correction.
