# jest-tauri-ipcmock-bug
Minimal sample to demonstrate race condition in testing with mockIPC and Jest

At least one of the tests usually passes due to the wrong IPC handler being called relates to [Tauri bug #4972](https://github.com/tauri-apps/tauri/issues/4972)
