# Snowflake Key Setup Guide

## Current Situation

The private key in use does **not match** the public key registered in Snowflake for user `TECHOPS_ADHOC_SSH_USER`.

## Public Key from Current Private Key

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArW8eVXl9TWBXjTcrA4jD
a8cIEUaJwLty2wjRGdlyeYatvWwp6qVGscz5WzXQcKFSDOeYKEqgriyJQUWS1pqb
Uy5e/LfQFk6CuygYCYKrkceLyNhNn9A9W8DS/1AoYkFbipa3Qw7kMxHmN/6i/vQG
FUEMCcgpeElEnKVTaN+OUnt6ajIYKxCeYHAFmegwjbIDxUxQeHi/H+aArnIYAvlE
mNxSnTvzqcDBsxcCcjLy1Bep6zur33n5lJVDYB0Jn44uLfZee8uVptnAeiMAetaA
UXrlH7zipzKAKG0pfFDxyi9ojstd0h1YptLR46xQWxRuinRpFArtChiCvQnA9hCj
YwIDAQAB
-----END PUBLIC KEY-----
```

## Resolution Options

### Option 1: Update Snowflake with Current Public Key (Recommended if you have admin access)

1. Connect to Snowflake with admin privileges
2. Run:
   ```sql
   ALTER USER TECHOPS_ADHOC_SSH_USER SET RSA_PUBLIC_KEY='MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArW8eVXl9TWBXjTcrA4jD
a8cIEUaJwLty2wjRGdlyeYatvWwp6qVGscz5WzXQcKFSDOeYKEqgriyJQUWS1pqb
Uy5e/LfQFk6CuygYCYKrkceLyNhNn9A9W8DS/1AoYkFbipa3Qw7kMxHmN/6i/vQG
FUEMCcgpeElEnKVTaN+OUnt6ajIYKxCeYHAFmegwjbIDxUxQeHi/H+aArnIYAvlE
mNxSnTvzqcDBsxcCcjLy1Bep6zur33n5lJVDYB0Jn44uLfZee8uVptnAeiMAetaA
UXrlH7zipzKAKG0pfFDxyi9ojstd0h1YptLR46xQWxRuinRpFArtChiCvQnA9hCj
YwIDAQAB';
   ```
   (Remove the BEGIN/END markers and newlines - just the base64 content)

3. Restart the Python server

### Option 2: Use the Correct Private Key (If you have it)

1. Get the private key that matches the registered public key in Snowflake
2. Update the configuration:
   ```bash
   cd python_dashboard
   ./update_private_key.sh '-----BEGIN PRIVATE KEY-----
   ...your correct private key...
   -----END PRIVATE KEY-----'
   ```
   Or if you have it in a file:
   ```bash
   ./update_private_key.sh /path/to/private_key.pem
   ```

3. Restart the server:
   ```bash
   pkill -f "python app.py"
   ./start_with_creds.sh
   ```

## Verify Current Key in Snowflake

To check what public key is currently registered:

```sql
DESCRIBE USER TECHOPS_ADHOC_SSH_USER;
```

Look for the `RSA_PUBLIC_KEY` field and compare it with the public key above.

## Extract Public Key from Any Private Key

To extract the public key from a private key file:

```bash
cd python_dashboard
source venv/bin/activate
export SNOWFLAKE_SSH_KEY="$(cat /path/to/private_key.pem)"
python3 extract_public_key.py
```

Or directly:
```bash
python3 extract_public_key.py "$(cat /path/to/private_key.pem)"
```

## After Updating

1. Restart the Python server
2. Test the connection:
   ```bash
   curl http://localhost:5001/health/snowflake
   ```
3. Refresh the dashboard at http://localhost:3000/techopsdashboard

