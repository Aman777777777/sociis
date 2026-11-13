# Three Hundred Replay Studio

The sociisgroup website, published at [the300.sociisgroup.com](https://the300.sociisgroup.com).

The Corinthia gallery rebuild is the homepage. The previous homepage remains available at `/current-site`.

## Development

This project uses Bun. Install dependencies and start the development server with:

```sh
bun install --frozen-lockfile
bun run dev
```

Run the production build and test suite with:

```sh
bun run build
bun test
```

## Club 64 applications

The Club 64 form submits on the server to Brevo contact list `4` (`Club 64 | Applications`).
Configure `BREVO_API_KEY` in the deployed server environment and create the Brevo contact
attributes `CLUB64_NAME`, `CLUB64_WORK`, `CLUB64_REASON`, and `CLUB64_STATUS` before enabling
submissions. The server looks up an existing contact before updating it and preserves its current
Club 64 status. Brevo does not make the lookup and update atomic, so a concurrent status change can
still race with an application update. Applications are not sent an automatic confirmation email.
