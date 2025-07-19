
# Copy-SoundCloud

soundcloud/
│
├── index.html
├── package.json
├── package-lock.json
├── bun.lock
├── README.md
├── README.md~
├── QUICK_START.md
├── eslint.config.js
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .prettierignore
├── .prettierrc
├── /public/
│   ├── IMG_20250613_114149.png
│   └── soundcloud-svgrepo-com.svg
├── /src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── App.css
│   ├── /assets/
│   │   ├── like.svg
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── /context/
│   │   └── PlayContext.jsx
│   ├── /data/
│   │   ├── music.data.js
│   │   └── user.data.js
│   ├── /components/
│   │   ├── /Buttons/
│   │   │   ├── /HeaderProfileMenuButton/
│   │   │   │   ├── HeaderProfileMenuButton.jsx
│   │   │   │   └── HeaderProfileMenuButton.module.scss
│   │   │   ├── /LikeButton/
│   │   │   │   ├── LikeButton.jsx
│   │   │   │   └── LikeButton.module.scss
│   │   │   ├── /MessagesButton/
│   │   │   │   ├── MessagesButton.jsx
│   │   │   │   └── MessagesButton.module.scss
│   │   │   ├── /PlayButton/
│   │   │   │   ├── PlayButton.jsx
│   │   │   │   └── PlayButton.module.scss
│   │   │   ├── /PlayButtonActionMenu/
│   │   │   │   ├── PlayButtonActionMenu.jsx
│   │   │   │   └── PlayButtonActionMenu.module.scss
│   │   │   └── /SearchIcon/
│   │   │       ├── SearchIcon.jsx
│   │   │       └── SearchIcon.module.scss
│   │   ├── /Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.module.scss
│   │   ├── /DropDown/
│   │   │   ├── DropDown.jsx
│   │   │   ├── DropDown.module.scss
│   │   │   ├── /DropDownMenu/
│   │   │   │   ├── DropDownMenu.jsx
│   │   │   │   └── DropDownMenu.module.scss
│   │   │   └── /DropDownMenuOpener/
│   │   │       ├── DropDownMenuOpener.jsx
│   │   │       └── DropDownMenuOpener.module.scss
│   │   ├── /Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.scss
│   │   │   ├── /HeaderNavBar/
│   │   │   │   ├── HeaderNavBar.jsx
│   │   │   │   └── HeaderNavBar.module.scss
│   │   │   ├── /HeaderRight/
│   │   │   │   ├── HeaderRight.jsx
│   │   │   │   ├── HeaderRight.module.scss
│   │   │   │   ├── /UserActions/
│   │   │   │   │   ├── UserActions.jsx
│   │   │   │   │   └── UserActions.module.scss
│   │   │   │   └── /UserNav/
│   │   │   │       ├── UserNav.jsx
│   │   │   │       └── UserNav.module.scss
│   │   │   └── /HeaderSearchBar/
│   │   │       ├── HeaderSearchBar.jsx
│   │   │       └── HeaderSearchBar.module.scss
│   │   └── /Menu/
│   │       └── /HeaderNavMenu/
│   │           ├── HeaderNavMenu.jsx
│   │           └── HeaderNavMenu.module.scss
│   └── /pages/
│       ├── MainPage.jsx
│       └── main.module.scss

---

graph TD
  A[index.html] --> B(main.jsx)
  B --> C(App.jsx)
  C --> D(Header)
  C --> E(MainPage)
  D --> F(HeaderNavBar)
  D --> G(HeaderRight)
  D --> H(HeaderSearchBar)
  G --> I(UserActions)
  G --> J(UserNav)
  E --> K(Card)
  E --> L(PlayButton)
  E --> M(LikeButton)
  C --> N(DropDown)
  N --> O(DropDownMenu)
  N --> P(DropDownMenuOpener)
  C --> Q(PlayContext)
  Q --> L
  Q --> K
  