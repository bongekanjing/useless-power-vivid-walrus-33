[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/bongekanjing/useless-power-vivid-walrus-33/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/bongekanjing/useless-power-vivid-walrus-33/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)

# Zero Use: Elevator Door

> I can hold any elevator door open forever, but whoever it's for is already four floors up the stairs.

The power is a courtesy reflex granted absolutely — the door never closes — and the
turn is that the only person it was ever for has given up on you and taken the stairs.
Nothing in the line says "useless"; the four-floor climb does the arithmetic for you.

## Run it

```
node main.ts
cat out/entry.txt
```

`main.ts` writes the line as UTF-8 to `entry.txt` under `MAKEFUN_OUTPUT_DIR`
(default `/output`), refuses to write anything outside 1–200 characters, and prints
the character count. Standard library only, no network, no build step.

## Files

- `main.ts` — the entrypoint: one constant, one validated write.
- `drafts.md` — the fifteen candidates and why this one won.
- `out/entry.txt` — the judged artifact, generated at run time (ignored by git).
