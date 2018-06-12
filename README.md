<p align="center">
  <a href="#">
    <img width="80" src="https://manhattan.didistatic.com/static/manhattan/do1_KC5q8Qqsz8BnUPAsJY5i" alt="LOGO">
  </a>
</p>
<br>
<p align="center">
	<a href="http://forthebadge.com">
	   <img src="http://forthebadge.com/images/badges/made-with-vue.svg">
	</a>
	<a href="http://forthebadge.com">
	   <img src="http://forthebadge.com/images/badges/built-with-love.svg">
	</a>
	<a href="http://forthebadge.com">
	   <img src="http://forthebadge.com/images/badges/makes-people-smile.svg">
	</a>
</p>

<h2 align="center">Paletee</h2>

> 🎨 A visual theme editing tool for Mand Mobile

Using `Palette`, you can modify the style of [Mand Mobile](https://didi.github.io/mand-mobile) components and eventually generate `.styl` and `.css` files and then import the custom theme style file to your project.

- [Start Making Theme](https://mand-mobile.github.io/palette)

Note: `Palette` is based on [Css Variable](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables), so please use it in the following [browsers](https://caniuse.com/#search=css%20variable).


### Mand Mobile Style

#### Stylus

* Configure `.babelrc`

```javascript
{
    // ...
    "plugins": [
        ["import", { "libraryName": "mand-mobile", "libraryDirectory": "src" }]
    ]
}
```

* Import

```javascript
import { button, dialog } from 'mand-mobile'
```

Find more details in [Mand Mobile - Custom Theme](https://didi.github.io/mand-mobile/#/en-US/docs/theme).

#### Css

```javascript
import Vue from 'vue'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)
```


### How Palette works 

<img src="http://manhattan.didistatic.com/static/manhattan/mand/palette-structure.jpg" width="800"/>


### Development

```
git clone git@github.com:mand-mobile/palette.git
cd palette
npm install
npm run dev
```

