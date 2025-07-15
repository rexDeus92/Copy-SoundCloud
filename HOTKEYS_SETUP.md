# Настройка горячих клавиш для форматирования документов

## Доступные команды

В вашем проекте уже настроены следующие команды для форматирования:

### 1. Форматирование с Prettier

```bash
# Форматировать все файлы
npm run format

# Проверить форматирование без изменений
npm run format:check
```

### 2. Исправление ошибок ESLint

```bash
# Исправить автоматически исправимые ошибки
npm run lint:fix

# Проверить код на ошибки
npm run lint
```

## Настройка горячих клавиш в VS Code

### 1. Откройте настройки горячих клавиш

- `Ctrl+Shift+P` → "Preferences: Open Keyboard Shortcuts"
- Или `Ctrl+K Ctrl+S`

### 2. Добавьте следующие горячие клавиши

Добавьте в файл `keybindings.json` (File → Preferences → Keyboard Shortcuts → Open Keyboard Shortcuts (JSON)):

```json
[
  {
    "key": "ctrl+shift+f",
    "command": "workbench.action.terminal.sendSequence",
    "args": {
      "text": "npm run format\n"
    },
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+shift+l",
    "command": "workbench.action.terminal.sendSequence",
    "args": {
      "text": "npm run lint:fix\n"
    },
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+shift+alt+f",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    "key": "ctrl+shift+alt+l",
    "command": "editor.action.fixAll",
    "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
  }
]
```

### 3. Альтернативный способ через settings.json

Добавьте в `settings.json` (File → Preferences → Settings → Open Settings (JSON)):

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Рекомендуемые расширения VS Code

Установите следующие расширения для лучшего опыта:

1. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
2. **ESLint** (`dbaeumer.vscode-eslint`)
3. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
4. **Bracket Pair Colorizer** (`CoenraadS.bracket-pair-colorizer-2`)

## Использование горячих клавиш

### Автоматическое форматирование

- **При сохранении**: Включите `editor.formatOnSave: true`
- **При вставке**: Включите `editor.formatOnPaste: true`

### Ручное форматирование

- **Ctrl+Shift+Alt+F**: Форматировать текущий документ
- **Ctrl+Shift+Alt+L**: Исправить все ошибки ESLint в текущем документе
- **Ctrl+Shift+F** (в терминале): Запустить `npm run format`
- **Ctrl+Shift+L** (в терминале): Запустить `npm run lint:fix`

## Настройка для других редакторов

### WebStorm/IntelliJ IDEA

1. File → Settings → Keymap
2. Найдите "Reformat Code" и назначьте `Ctrl+Alt+L`
3. Найдите "Fix ESLint Problems" и назначьте `Ctrl+Alt+Shift+L`

### Sublime Text

1. Preferences → Key Bindings
2. Добавьте:

```json
[
  {
    "keys": ["ctrl+shift+f"],
    "command": "reindent"
  }
]
```

### Vim/Neovim

Добавьте в `.vimrc` или `init.vim`:

```vim
" Форматирование при сохранении
autocmd BufWritePre *.js,*.jsx,*.ts,*.tsx :Prettier
autocmd BufWritePre *.css,*.scss :Prettier

" Горячие клавиши
nnoremap <leader>f :Prettier<CR>
nnoremap <leader>l :EslintFixAll<CR>
```

## Проверка настроек

После настройки проверьте, что все работает:

1. Откройте любой JS/JSX файл
2. Нажмите `Ctrl+Shift+Alt+F` - код должен отформатироваться
3. Сохраните файл - он должен автоматически отформатироваться
4. Запустите `npm run format` в терминале для форматирования всех файлов

## Дополнительные советы

1. **Pre-commit hooks**: Настройте Git hooks для автоматического форматирования перед коммитом
2. **CI/CD**: Добавьте проверку форматирования в ваш CI/CD pipeline
3. **Team settings**: Создайте `.vscode/settings.json` в проекте для единообразных настроек команды
