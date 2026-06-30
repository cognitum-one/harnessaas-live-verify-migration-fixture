# harnessaas-live-verify-migration-fixture

Synthetic, zero-PII fixture for HarnessaaS dependency-migration (ADR-0012) live-verify
against the deployed Cloud Run service. Pins `lodash` to an old `^3.10.1`; the directive
asks for an upgrade to `^4.17.21`. The one usage (`_.isFunction`) is unchanged across
lodash 3->4, so the existing test suite stays green; the honesty seam is the version
assertion on `package.json`'s declared `lodash` range. No real customer code or data.
See `cognitum-one/harnessaas`.
