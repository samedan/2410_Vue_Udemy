# 2410_vue_first_cli_project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 94. Props & Events, Provide+Inject

> 94-Provide_inject folder

# Local component

> Subcomponent: export default \{ components: \{\}}

# Scoped style -individual style on component

> <style scope></style>

## Slots

> BaseCard.vue -> <template><slot></slot></template>
> ComponentUsingSlot -> <template v-slot:default>

# Named slots

> BaseCard.vue -> <slot name="header"></slot>
> ComponentUsingSlot -> <template v-slot:header>
