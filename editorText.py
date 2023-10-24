from abc import ABC, abstractmethod
from observer import Publisher

class Editor(ABC):
    @abstractmethod
    def insertLine(self, lineNumber, text):
        pass

class TextEditor(Editor, Publisher):
    def __init__(self):
        super().__init__()
        self.lines = []

    def insertLine(self, lineNumber, text):
        if lineNumber < 0:
            lineNumber = 0
        elif lineNumber > len(self.lines):
            lineNumber = len(self.lines)
        self.lines.insert(lineNumber, text)

    def start(self):
        while True:
            user_input = input("Digite uma linha (ou 'EOF' para sair): ")
            if user_input == 'EOF':
                break
            self.insertLine(len(self.lines), user_input)

        self.notify("save", "\n".join(self.lines))

if __name__ == '__main__':
    textEditor = TextEditor()

    def on_open():
        print("Editor aberto")

    def on_save(content):
        print("Conteúdo salvo:")
        print(content)

    textEditor.subscribe("open", on_open)
    textEditor.subscribe("save", on_save)

    textEditor.notify("open")
    textEditor.start()
