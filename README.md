# Palette

> 🎨 A visual theme editing tool for Mand Mobile

[Start Making Theme](https://mand-mobile.github.io/palette)

Using `Palette`, you can modify the style of [Mand Mobile](https://didi.github.io/mand-mobile) components and eventually generate `.styl` and `.css` files and then import the custom theme style file to your project.

### Mand Mobile Style

#### Stylus

##### config .babelrc

```javascript
{
    // ...
    "plugins": [
        ["import", { "libraryName": "mand-mobile", "libraryDirectory": "src" }]
    ]
}
```

##### Import

```javascript
import { button, dialog } from 'mand-mobile'
```

Refer to [Mand Mobile - Custom Theme]: https://didi.github.io/mand-mobile/#/en-US/docs/theme

#### Css

```javascript
import Vue from 'vue'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)
```


### How Palette works 

<img src="http://manhattan.didistatic.com/static/manhattan/mand/palette-structure.jpg" width="800"/>