Навигационное меню
===

Необходимо реализовать меню для сайта гоночного такси с пунктами «Главная», «Дрифт-такси», «Time Attack» и «Forza Karting». При переходе на страницу соответствующий пункт меню должен подсветиться:

![Навигационное меню](./assets/menu.jpg)

## Описание компонента

Компонент должен создавать HTML-разметку вида:
```html
<nav class="menu">
  <a class="menu__item" href="/">Главная</a>
  <a class="menu__item" href="/drift">Дрифт-такси</a>
  <a class="menu__item" href="/timeattack">Time Attack</a>
  <a class="menu__item" href="/forza">Forza Karting</a>
</nav>
```
Активный пункт меню помечается классом `menu__item-active`.

## Реализация

Необходимо реализовать компонент `Menu`.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из каталога в качестве отправной точки. Замените ими те, что создаются в create-react-app.

**Обратите внимание**: в файлах `App.js` расположено несколько компонентов не потому, что так нужно делать, а чтобы вам было удобнее копировать. Будет хорошо, если в своём решении вы разнесёте их по разным файлам.


---

[![React-Router-Menu](https://github.com/dim4ik1985/react-router_menu/actions/workflows/deploy.yml/badge.svg)](https://github.com/dim4ik1985/react-router_menu/actions/workflows/deploy.yml)

---

## [Переход на сайт](https://dim4ik1985.github.io/react-router_menu/)
