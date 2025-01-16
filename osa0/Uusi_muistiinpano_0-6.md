```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The code creates a note, adds it to the list of notes, redraws the list, and sends the note to the server.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note left of server: The server creates a new note object and adds it to the notes array.
    activate server
    server-->>browser: HTTP 201 Created
    deactivate server
