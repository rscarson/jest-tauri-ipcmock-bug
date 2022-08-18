import React from "react";
import { mockIPC, clearMocks } from "@tauri-apps/api/mocks"
import { createRoot } from 'react-dom/client';
import { render, act, fireEvent, waitFor } from '@testing-library/react';


import TestComponent from './test.js';

const crypto = require('crypto');
Object.defineProperty(global.self, 'crypto', {
	value: {
		getRandomValues: (arr) => crypto.randomBytes(arr.length)
	}
});

let container = null;
let root = null;
beforeEach(async () => {
    container = document.createElement("div");
    root = createRoot(container);

    mockIPC((cmd, args) => {
        switch(cmd) {
            case "functionName": 
                return "FUNCTION CALL";
          //  case 'tauri':
          //      return "EVENT LISTENER";
        }
    });
    
    await act(async () => {
        root.render(<TestComponent />);
    });
});

afterEach(() => {
    clearMocks();
    act(() => {
        root.unmount();
    });
    container.remove();
    container = null;
});

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})

describe("Handles IPC events correctly", () => {
    it("renders the form correctly", () => {
        expect(container.firstChild.innerHTML).toMatch(/E: F: FUNCTION CALL/);
    });
})