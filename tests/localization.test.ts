import assert from "node:assert/strict";
import test from "node:test";

import { translateUiText } from "../src/i18n/localization.js";

test("translates exact workspace copy into simplified Chinese", () => {
  assert.equal(translateUiText("Workspace explorer", "zh-CN"), "工作区资源管理器");
  assert.equal(translateUiText("Let's prove something together.", "zh-CN"), "让我们一起证明点什么。");
});

test("translates dynamic theme labels and preserves English", () => {
  assert.equal(translateUiText("Theme: Regular", "zh-CN"), "主题：常规");
  assert.equal(translateUiText("Choose theme. Current theme: Dark", "zh-CN"), "选择主题。当前主题：深色");
  assert.equal(translateUiText("New chat", "en"), "New chat");
});

test("leaves mathematical and unknown copy untouched", () => {
  assert.equal(translateUiText("LaTeX", "zh-CN"), "LaTeX");
  assert.equal(translateUiText("x² + y² = z²", "zh-CN"), "x² + y² = z²");
});
