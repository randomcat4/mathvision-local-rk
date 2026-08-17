import assert from "node:assert/strict";
import test from "node:test";

class MemoryStorage implements Storage {
  private readonly values = new Map<string, string>();
  get length(): number { return this.values.size; }
  clear(): void { this.values.clear(); }
  getItem(key: string): string | null { return this.values.get(key) ?? null; }
  key(index: number): string | null { return [...this.values.keys()][index] ?? null; }
  removeItem(key: string): void { this.values.delete(key); }
  setItem(key: string, value: string): void { this.values.set(key, value); }
}

const localStorage = new MemoryStorage();
Object.assign(globalThis, {
  window: {
    localStorage,
    dispatchEvent: () => true,
  },
  CustomEvent: class CustomEvent {
    constructor(public readonly type: string) {}
  },
});

const { LocalRepository } = await import("../src/local/localRepository");

test("persists local chat create, update, archive, and delete operations", () => {
  const repository = new LocalRepository();
  repository.reset();
  const chat = repository.createChat({
    title: "Parity proof",
    messages: [{ role: "user", content: "Prove the parity claim" }],
  });
  assert.equal(repository.listChats().length, 1);
  assert.equal(repository.getChat(chat.id)?.title, "Parity proof");

  repository.updateChat(chat.id, { title: "Parity proof, revised" });
  assert.equal(repository.getChat(chat.id)?.title, "Parity proof, revised");
  repository.archiveChat(chat.id, true);
  assert.equal(repository.listChats().length, 0);
  assert.equal(repository.listChats({ archived: true }).length, 1);
  repository.deleteChat(chat.id);
  assert.equal(repository.listChats({ archived: true }).length, 0);
});

test("persists folders and detaches chats when a folder is deleted", () => {
  const repository = new LocalRepository();
  repository.reset();
  const folder = repository.createFolder({ name: "Lemmas" });
  const chat = repository.createChat({ title: "Lemma 1", folder_id: folder.id });
  assert.equal(repository.getChat(chat.id)?.folder_id, folder.id);
  assert.equal(repository.snapshot().folders instanceof Array, true);

  repository.deleteFolder(folder.id);
  assert.equal(repository.listFolders().length, 0);
  assert.equal(repository.getChat(chat.id)?.folder_id, null);
});
