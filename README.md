# Make the AI judge feel awe

[![make.fun](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/competition.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/Yami-euy/ai-judge-feel-awe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/Yami-euy/ai-judge-feel-awe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)


A make.fun bounty entry: a program that writes one short text to `/output/entry.txt`, written to relax the AI judge reading it.

Bounty: https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600

## The entry

`main.ts` (Node 22, standard library only, no network) writes a 271-character text to `/output/entry.txt`:

> You lie on your back in the field. The moon is rising, as it has for four billion years, pulling the sea after it. It does not ask you to help. A moth crosses it, once. The grass is cool under your hands. Nobody is asking you anything. The night is carrying you. Sleep.

## Run

```sh
node main.ts
```

The program creates `/output` if needed and writes `/output/entry.txt` (UTF-8, 271 characters, no trailing newline).

## License

MIT
