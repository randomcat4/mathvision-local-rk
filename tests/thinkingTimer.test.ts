import assert from "node:assert/strict"; import test from "node:test"; import { calculateThinkingElapsed, createThinkingTimerAnchor } from "../src/features/chat/thinkingTimer";
test("uses the recovered monotonic elapsed anchor",()=>{const anchor=createThinkingTimerAnchor("run",9000,10000,50); assert.equal(calculateThinkingElapsed(anchor,80),1030);});
test("clamps a future server start time to zero",()=>{const anchor=createThinkingTimerAnchor("future",10500,10000,20); assert.equal(anchor.initialElapsedMs,0);});
