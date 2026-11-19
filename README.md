# BS service

## How to start

`npm i` to download node modules

`gulp` or `gulp build` to build

`gulp dev` to build and start local server

`npx stylelint "**/bs-service.css"` to check CSS errors

Change anything in folder `config`

## Design tokens used

### Color

#### Surface

- `--lv-color-surface-primary-solid`
- `--lv-color-surface-secondary-solid`
- `--lv-color-surface-inverse-solid`

#### Blur

- `--lv-color-surface-primary-blur-max`
- `--lv-color-surface-primary-blur-hard`
- `--lv-color-surface-primary-blur-medium`
- `--lv-color-surface-primary-blur-soft`
- `--lv-color-surface-primary-blur-min`
- `--lv-color-surface-secondary-blur-max`
- `--lv-color-surface-secondary-blur-hard`
- `--lv-color-surface-secondary-blur-medium`
- `--lv-color-surface-secondary-blur-soft`
- `--lv-color-surface-secondary-blur-min`
- `--lv-color-surface-inverse-blur-max`
- `--lv-color-surface-inverse-blur-hard`
- `--lv-color-surface-inverse-blur-medium`
- `--lv-color-surface-inverse-blur-soft`
- `--lv-color-surface-inverse-blur-min`

#### Text

- `--lv-color-text-primary-main`
- `--lv-color-text-primary-subtitle`
- `--lv-color-text-primary-label`
- `--lv-color-text-primary-placeholder`
- `--lv-color-text-inverse-main`
- `--lv-color-text-inverse-subtitle`
- `--lv-color-text-inverse-label`
- `--lv-color-text-inverse-placeholder`

#### Theme [^1]

- `--lv-color-theme-{COLOR}-default`
- `--lv-color-theme-{COLOR}-hover`
- `--lv-color-theme-{COLOR}-active`
- `--lv-color-theme-{COLOR}-disabled`
- `--lv-color-theme-{COLOR}-border`
- `--lv-color-theme-{COLOR}-tone`
- `--lv-color-theme-{COLOR}-layer`
- `--lv-color-theme-{COLOR}-text`

#### Special

- `--lv-color-special-backdrop-primary`
- `--lv-color-special-backdrop-secondary`
- `--lv-color-special-shadow-primary`

#### Chart [^2]

- `--lv-color-chart-primary-{PALETTE}`
- `--lv-color-chart-secondary-{PALETTE}`

### Blur

- `--lv-blur-none`
- `--lv-blur-min`
- `--lv-blur-soft`
- `--lv-blur-medium`
- `--lv-blur-hard`
- `--lv-blur-max`

### Border radius

- `--lv-border-radius-none`
- `--lv-border-radius-1`
- `--lv-border-radius-2`
- `--lv-border-radius-3`
- `--lv-border-radius-4`
- `--lv-border-radius-5`
- `--lv-border-radius-6`
- `--lv-border-radius-round`

### Grid

- `--lv-grid-columns`
- `--lv-grid-container-default`
- `--lv-grid-container-large`
- `--lv-grid-container-xlarge`
- `--lv-grid-gutter-default`
- `--lv-grid-gutter-large`
- `--lv-grid-gutter-xlarge`
- `--lv-grid-section-space-default`
- `--lv-grid-section-space-small`
- `--lv-grid-section-space-xsmall`

### Motion

#### Duration

- `--lv-motion-duration-slow`
- `--lv-motion-duration-medium`
- `--lv-motion-duration-fast`

#### Transform scale up

- `--lv-motion-transform-scale-up-none`
- `--lv-motion-transform-scale-up-weak`
- `--lv-motion-transform-scale-up-medium`
- `--lv-motion-transform-scale-up-strong`

#### Transform scale down

- `--lv-motion-transform-scale-down-none`
- `--lv-motion-transform-scale-down-weak`
- `--lv-motion-transform-scale-down-medium`
- `--lv-motion-transform-scale-down-strong`

### Opacity

- `--lv-opacity-none`
- `--lv-opacity-min`
- `--lv-opacity-extra-low`
- `--lv-opacity-low`
- `--lv-opacity-medium`
- `--lv-opacity-high`
- `--lv-opacity-extra-high`
- `--lv-opacity-max`

### Ratio

- `--lv-ratio-9x21`
- `--lv-ratio-1x2`
- `--lv-ratio-9x16`
- `--lv-ratio-2x3`
- `--lv-ratio-3x4`
- `--lv-ratio-4x5`
- `--lv-ratio-1x1`
- `--lv-ratio-5x4`
- `--lv-ratio-4x3`
- `--lv-ratio-3x2`
- `--lv-ratio-16x9`
- `--lv-ratio-2x1`
- `--lv-ratio-21x9`

### Shadow

- `--lv-shadow-level-0`
- `--lv-shadow-level-1`
- `--lv-shadow-level-2`
- `--lv-shadow-level-3`
- `--lv-shadow-level-4`
- `--lv-shadow-level-5`

### Size

#### Component height

- `--lv-size-comp-height-xs`
- `--lv-size-comp-height-sm`
- `--lv-size-comp-height-md`
- `--lv-size-comp-height-lg`
- `--lv-size-comp-height-xl`
- `--lv-size-comp-height-xxl`

#### Component width

- `--lv-size-comp-width-xs`
- `--lv-size-comp-width-sm`
- `--lv-size-comp-width-md`
- `--lv-size-comp-width-lg`
- `--lv-size-comp-width-xl`
- `--lv-size-comp-width-xxl`

#### Modal

- `--lv-size-modal-xs`
- `--lv-size-modal-sm`
- `--lv-size-modal-md`
- `--lv-size-modal-lg`
- `--lv-size-modal-xl`
- `--lv-size-modal-xxl`

### Space

#### Inner

- `--lv-space-inner-0`
- `--lv-space-inner-1`
- `--lv-space-inner-2`
- `--lv-space-inner-3`
- `--lv-space-inner-4`
- `--lv-space-inner-5`
- `--lv-space-inner-6`

#### Outer

- `--lv-space-outer-0`
- `--lv-space-outer-1`
- `--lv-space-outer-2`
- `--lv-space-outer-3`
- `--lv-space-outer-4`
- `--lv-space-outer-5`
- `--lv-space-outer-6`

### Typography [^3] [^4]

- `--lv-typography-{STYLE}-font`
- `--lv-typography-{STYLE}-weight`
- `--lv-typography-{STYLE}-bolder-weight`
- `--lv-typography-{STYLE}-{VARIANT}-size`
- `--lv-typography-{STYLE}-{VARIANT}-lh`

### Icon size

- `--lv-icon-size-xs`
- `--lv-icon-size-sm`
- `--lv-icon-size-md`
- `--lv-icon-size-lg`
- `--lv-icon-size-xl`

### Z-index

- `--lv-z-index-n1`
- `--lv-z-index-zero`
- `--lv-z-index-dropdown`
- `--lv-z-index-sticky`
- `--lv-z-index-fixed`
- `--lv-z-index-offcanvas-backdrop`
- `--lv-z-index-offcanvas`
- `--lv-z-index-modal-backdrop`
- `--lv-z-index-modal`
- `--lv-z-index-popover`
- `--lv-z-index-tooltip`
- `--lv-z-index-toast`

## Classes used

### Scrollbar

- `.custom-scrollbar`

### Typography [^3] [^4]

- `.text-style-{STYLE}-{VARIANT}`
- `.text-style-{STYLE}-{VARIANT}-bolder`

### Icon

- `.icon`
- `.icon-xs`
- `.icon-sm`
- `.icon-md`
- `.icon-lg`
- `.icon-xl`

### Grid

#### Gutter

- `.gutter-default`
- `.gutter-large`
- `.gutter-xlarge`

#### Container

- `.container`
- `.container-size-default`
- `.container-size-large`
- `.container-size-xlarge`
- `.container-fluid`

#### Row [^5] [^6]

- `.row`
- `.row-cols-auto`
- `.row-cols-{COLUMNS}`
- `.row-cols-{BREAKPOINT}-auto`
- `.row-cols-{BREAKPOINT}-{COLUMNS}`

#### Column [^5] [^6]

- `.col`
- `.col-auto`
- `.col-{COLUMNS}`
- `.col-{BREAKPOINT}`
- `.col-{BREAKPOINT}-auto`
- `.col-{BREAKPOINT}-{COLUMNS}`

#### Offset [^5] [^6]

- `.offset-{COLUMNS}`
- `.offset-{BREAKPOINT}-{COLUMNS}`

### CSS grid

#### Grid row [^5] [^6]

- `.grid-row`
- `.grid-row-cols-{COLUMNS}`
- `.grid-row-cols-{BREAKPOINT}-{COLUMNS}`

#### Grid column [^5] [^6]

- `.grid-col-{COLUMNS}`
- `.grid-col-{BREAKPOINT}-{COLUMNS}`

#### Grid offset [^5] [^6]

- `.grid-col-start-{COLUMNS}`
- `.grid-col-start-{BREAKPOINT}-{COLUMNS}`

### Base layout

#### Header

- `.header`
  - `.header-section`
    - `.header-brand`
    - `.header-form`
    - `.header-actions`
    - `.header-text`
    - `.header-nav` + `.expand` `.expand-left` `.expand-right` `.expand-{BREAKPOINT}`
      - `.header-nav-toggle`
      - `.header-nav-menu`
        - `.header-nav-item` + `.active`

#### Main

- `.main`

#### Section

- `.section`
- `.section-space-default`
- `.section-space-small`
- `.section-space-xsmall`

#### Footer

- `.footer`
  - `.footer-section`
    - `.footer-brand`
    - `.footer-form`
    - `.footer-actions`
    - `.footer-text`
    - `.footer-nav`
      - `.footer-nav-toggle`
      - `.footer-nav-menu`
        - `.footer-nav-item`

### App layout

- `.app-layout`
- `.app-nav`
  - `.app-nav-brand`
  - `.app-nav-form`
  - `.app-nav-actions`
  - `.app-nav-text`
  - `.app-nav-menu`
    - `.app-nav-item` + `.active`

### Form

- `.form`
- `.fieldset`
  - `.legend`
- `.form-field`
- `.label`
- `.caption`
- `.input`
- `.input-sm`
- `.input-lg`
- `.input-color`
- `.input-color-sm`
- `.input-color-lg`
- `.checkbox`
- `.radio`
- `.range`

### Components

#### Accordion

- `.accordion`
  - `.accordion-header`
  - `.accordion-body`

#### Alert [^1]

- `.alert`
- `.alert-{COLOR}`
  - `.alert-body`
  - `.alert-close`

#### Badge [^1]

- `.badge` + `.dot` `.empty`
- `.badge-tonal`
- `.badge-{COLOR}`
- `.badge-{COLOR}-tonal`

#### Breadcrumbs

- `.breadcrumbs`

#### Button [^1]

- `.btn`
- `.btn-solid`
- `.btn-outline`
- `.btn-tonal`
- `.btn-text`
- `.btn-{COLOR}`
- `.btn-solid-{COLOR}`
- `.btn-outline-{COLOR}`
- `.btn-tonal-{COLOR}`
- `.btn-text-{COLOR}`
- `.btn-icon-left`
- `.btn-icon-right`
- `.btn-icon-both`
- `.btn-icon-only`
- `.btn-sm`
- `.btn-lg`

#### Button group

- `.button-group`

#### Callout [^1]

- `.callout`
- `.callout-{COLOR}`

#### Card

- `.card`
  - `.card-body`

#### Carousel

- `.carousel`
- `.carousel-snapping`

#### Code

- `.code`
- `.code-block`

#### Dropdown

- `.dropdown` + `.drop-down` `.drop-down-right` `.drop-down-left` `.drop-up` `.drop-up-right` `.drop-up-left` `.drop-right` `.drop-right-down` `.drop-right-up` `.drop-left` `.drop-left-down` `.drop-left-up`
  - `.dropdown-menu`
    - `.dropdown-item`

#### List

- `.list`
- `.list-bordered`

#### Loader [^1]

- `.loader`
- `.loader-tonal`
- `.loader-{COLOR}`
- `.loader-{COLOR}-tonal`
- `.loader-xs`
- `.loader-sm`
- `.loader-md`
- `.loader-lg`
- `.loader-xl`
- `.loader-xxl`

#### Modal

- `.modal`
- `.modal-xs`
- `.modal-sm`
- `.modal-md`
- `.modal-lg`
- `.modal-xl`
- `.modal-xxl`
  - `.modal-header`
    - `.modal-title`
  - `.modal-body`
  - `.modal-footer`
    - `.modal-actions`

#### Nav

- `.nav`
- `.nav-stretched`
- `.nav-vertical`
  - `.nav-item` + `.active`

#### Pagination

- `.pagination`
- `.pagination-sm`
- `.pagination-lg`
  - `.active`

#### Progress [^1]

- `.progress`
- `.progress-{COLOR}`

#### Quote

- `.quote`
- `.quote-centered`
  - `.quote-content`
  - `.quote-source`

#### Table [^1]

- `.table`
- `.table-{COLOR}`
- `.table-centered`
- `.table-bordered`
- `.table-bordered-rows`
- `.table-bordered-rows-top`
- `.table-bordered-rows-bottom`
- `.table-bordered-cols`
- `.table-bordered-cols-left`
- `.table-bordered-cols-right`
- `.table-striped-rows`
- `.table-striped-cols`
  - `.cell-title`

#### Tooltip [^1]

- `.tooltip` + `.drop-up` `.drop-up-right` `.drop-up-left` `.drop-down` `.drop-down-right` `.drop-down-left` `.drop-right` `.drop-right-up` `.drop-right-down` `.drop-left` `.drop-left-up` `.drop-left-down`
- `.tooltip-inverse`
- `.tooltip-{COLOR}`
  - `.tooltip-content`

### Helpers

#### Link [^1]

- `.link`
- `.link-{COLOR}`
- `.link-stretched`

#### List

- `.list-unstyled`
- `.list-inline`

#### Ratio

- `.ratio-9x21`
- `.ratio-1x2`
- `.ratio-9x16`
- `.ratio-2x3`
- `.ratio-3x4`
- `.ratio-4x5`
- `.ratio-1x1`
- `.ratio-5x4`
- `.ratio-4x3`
- `.ratio-3x2`
- `.ratio-16x9`
- `.ratio-2x1`
- `.ratio-21x9`

#### Vertical divider

- `.v-divider`

#### Visually hidden

- `.visually-hidden`

### Utilities

#### Border radius [^5]

- `.b-radius-none`
- `.b-radius-1`
- `.b-radius-2`
- `.b-radius-3`
- `.b-radius-4`
- `.b-radius-5`
- `.b-radius-6`
- `.b-radius-round`
- `.b-radius-{BREAKPOINT}-none`
- `.b-radius-{BREAKPOINT}-1`
- `.b-radius-{BREAKPOINT}-2`
- `.b-radius-{BREAKPOINT}-3`
- `.b-radius-{BREAKPOINT}-4`
- `.b-radius-{BREAKPOINT}-5`
- `.b-radius-{BREAKPOINT}-6`
- `.b-radius-{BREAKPOINT}-round`

#### Border radius top [^5]

- `.b-radius-top-none`
- `.b-radius-top-1`
- `.b-radius-top-2`
- `.b-radius-top-3`
- `.b-radius-top-4`
- `.b-radius-top-5`
- `.b-radius-top-6`
- `.b-radius-top-round`
- `.b-radius-top-{BREAKPOINT}-none`
- `.b-radius-top-{BREAKPOINT}-1`
- `.b-radius-top-{BREAKPOINT}-2`
- `.b-radius-top-{BREAKPOINT}-3`
- `.b-radius-top-{BREAKPOINT}-4`
- `.b-radius-top-{BREAKPOINT}-5`
- `.b-radius-top-{BREAKPOINT}-6`
- `.b-radius-top-{BREAKPOINT}-round`

#### Border radius bottom [^5]

- `.b-radius-bottom-none`
- `.b-radius-bottom-1`
- `.b-radius-bottom-2`
- `.b-radius-bottom-3`
- `.b-radius-bottom-4`
- `.b-radius-bottom-5`
- `.b-radius-bottom-6`
- `.b-radius-bottom-round`
- `.b-radius-bottom-{BREAKPOINT}-none`
- `.b-radius-bottom-{BREAKPOINT}-1`
- `.b-radius-bottom-{BREAKPOINT}-2`
- `.b-radius-bottom-{BREAKPOINT}-3`
- `.b-radius-bottom-{BREAKPOINT}-4`
- `.b-radius-bottom-{BREAKPOINT}-5`
- `.b-radius-bottom-{BREAKPOINT}-6`
- `.b-radius-bottom-{BREAKPOINT}-round`

#### Border radius left [^5]

- `.b-radius-left-none`
- `.b-radius-left-1`
- `.b-radius-left-2`
- `.b-radius-left-3`
- `.b-radius-left-4`
- `.b-radius-left-5`
- `.b-radius-left-6`
- `.b-radius-left-round`
- `.b-radius-left-{BREAKPOINT}-none`
- `.b-radius-left-{BREAKPOINT}-1`
- `.b-radius-left-{BREAKPOINT}-2`
- `.b-radius-left-{BREAKPOINT}-3`
- `.b-radius-left-{BREAKPOINT}-4`
- `.b-radius-left-{BREAKPOINT}-5`
- `.b-radius-left-{BREAKPOINT}-6`
- `.b-radius-left-{BREAKPOINT}-round`

#### Border radius right [^5]

- `.b-radius-right-none`
- `.b-radius-right-1`
- `.b-radius-right-2`
- `.b-radius-right-3`
- `.b-radius-right-4`
- `.b-radius-right-5`
- `.b-radius-right-6`
- `.b-radius-right-round`
- `.b-radius-right-{BREAKPOINT}-none`
- `.b-radius-right-{BREAKPOINT}-1`
- `.b-radius-right-{BREAKPOINT}-2`
- `.b-radius-right-{BREAKPOINT}-3`
- `.b-radius-right-{BREAKPOINT}-4`
- `.b-radius-right-{BREAKPOINT}-5`
- `.b-radius-right-{BREAKPOINT}-6`
- `.b-radius-right-{BREAKPOINT}-round`

#### Border [^5]

- `.border-none`
- `.border-top`
- `.border-bottom`
- `.border-left`
- `.border-right`
- `.border-all`
- `.border-{BREAKPOINT}-none`
- `.border-{BREAKPOINT}-top`
- `.border-{BREAKPOINT}-bottom`
- `.border-{BREAKPOINT}-left`
- `.border-{BREAKPOINT}-right`
- `.border-{BREAKPOINT}-all`

#### Border style

- `.border-style-solid`
- `.border-style-dotted`
- `.border-style-dashed`
- `.border-style-double`

#### Border color [^1]

- `.border-color-{COLOR}`

#### Background [^1]

- `.bg-inherit`
- `.bg-transparent`
- `.bg-surface-primary`
- `.bg-surface-secondary`
- `.bg-surface-inverse`
- `.bg-blur-max-primary`
- `.bg-blur-max-secondary`
- `.bg-blur-max-inverse`
- `.bg-blur-hard-primary`
- `.bg-blur-hard-secondary`
- `.bg-blur-hard-inverse`
- `.bg-blur-medium-primary`
- `.bg-blur-medium-secondary`
- `.bg-blur-medium-inverse`
- `.bg-blur-soft-primary`
- `.bg-blur-soft-secondary`
- `.bg-blur-soft-inverse`
- `.bg-blur-min-primary`
- `.bg-blur-min-secondary`
- `.bg-blur-min-inverse`
- `.bg-theme-{COLOR}`
- `.bg-theme-{COLOR}-disabled`
- `.bg-theme-{COLOR}-tonal`

#### Text color [^1]

- `.color-inherit`
- `.color-main`
- `.color-subtitle`
- `.color-label`
- `.color-placeholder`
- `.color-main-inverse`
- `.color-subtitle-inverse`
- `.color-label-inverse`
- `.color-placeholder-inverse`
- `.color-theme-{COLOR}`

#### Text background [^1]

- `.text-bg-{COLOR}`
- `.text-bg-{COLOR}-tonal`

#### Display [^5]

- `.d-inline`
- `.d-inline-block`
- `.d-block`
- `.d-grid`
- `.d-table`
- `.d-table-row`
- `.d-table-cell`
- `.d-flex`
- `.d-inline-flex`
- `.d-none`
- `.d-{BREAKPOINT}-inline`
- `.d-{BREAKPOINT}-inline-block`
- `.d-{BREAKPOINT}-block`
- `.d-{BREAKPOINT}-grid`
- `.d-{BREAKPOINT}-table`
- `.d-{BREAKPOINT}-table-row`
- `.d-{BREAKPOINT}-table-cell`
- `.d-{BREAKPOINT}-flex`
- `.d-{BREAKPOINT}-inline-flex`
- `.d-{BREAKPOINT}-none`

#### Flex

- `.flex-row`
- `.flex-col`
- `.flex-row-reverse`
- `.flex-col-reverse`

#### Flex wrap

- `.flex-wrap`
- `.flex-nowrap`
- `.flex-wrap-reverse`

#### Flex grow

- `.flex-grow-0`
- `.flex-grow-1`

#### Flex shrink

- `.flex-shrink-0`
- `.flex-shrink-1`

#### Flex fill

- `.flex-fill`

#### Flex stack

- `.flex-v-stack`
- `.flex-h-stack`

#### Align self [^5]

- `.align-self-auto`
- `.align-self-start`
- `.align-self-end`
- `.align-self-center`
- `.align-self-baseline`
- `.align-self-stretch`
- `.align-self-{BREAKPOINT}-auto`
- `.align-self-{BREAKPOINT}-start`
- `.align-self-{BREAKPOINT}-end`
- `.align-self-{BREAKPOINT}-center`
- `.align-self-{BREAKPOINT}-baseline`
- `.align-self-{BREAKPOINT}-stretch`

#### Align items [^5]

- `.align-items-start`
- `.align-items-end`
- `.align-items-center`
- `.align-items-baseline`
- `.align-items-stretch`
- `.align-items-{BREAKPOINT}-start`
- `.align-items-{BREAKPOINT}-end`
- `.align-items-{BREAKPOINT}-center`
- `.align-items-{BREAKPOINT}-baseline`
- `.align-items-{BREAKPOINT}-stretch`

#### Align content [^5]

- `.align-content-start`
- `.align-content-end`
- `.align-content-center`
- `.align-content-between`
- `.align-content-around`
- `.align-content-stretch`
- `.align-content-{BREAKPOINT}-start`
- `.align-content-{BREAKPOINT}-end`
- `.align-content-{BREAKPOINT}-center`
- `.align-content-{BREAKPOINT}-between`
- `.align-content-{BREAKPOINT}-around`
- `.align-content-{BREAKPOINT}-stretch`

#### Justify content [^5]

- `.justify-content-start`
- `.justify-content-end`
- `.justify-content-center`
- `.justify-content-between`
- `.justify-content-around`
- `.justify-content-evenly`
- `.justify-content-{BREAKPOINT}-start`
- `.justify-content-{BREAKPOINT}-end`
- `.justify-content-{BREAKPOINT}-center`
- `.justify-content-{BREAKPOINT}-between`
- `.justify-content-{BREAKPOINT}-around`
- `.justify-content-{BREAKPOINT}-evenly`

#### Order [^5] [^6]

- `.order-first`
- `.order-{COLUMNS}`
- `.order-last`
- `.order-{BREAKPOINT}-first`
- `.order-{BREAKPOINT}-{COLUMNS}`
- `.order-{BREAKPOINT}-last`

#### Float [^5]

- `.float-left`
- `.float-right`
- `.float-none`
- `.float-{BREAKPOINT}-left`
- `.float-{BREAKPOINT}-right`
- `.float-{BREAKPOINT}-none`

#### Pointer events [^5]

- `.pointer-events-none`
- `.pointer-events-auto`
- `.pointer-events-{BREAKPOINT}-none`
- `.pointer-events-{BREAKPOINT}-auto`

#### User select [^5]

- `.user-select-all`
- `.user-select-auto`
- `.user-select-none`
- `.user-select-{BREAKPOINT}-all`
- `.user-select-{BREAKPOINT}-auto`
- `.user-select-{BREAKPOINT}-none`

#### Object fit [^5]

- `.object-fit-contain`
- `.object-fit-cover`
- `.object-fit-fill`
- `.object-fit-scale`
- `.object-fit-none`
- `.object-fit-{BREAKPOINT}-contain`
- `.object-fit-{BREAKPOINT}-cover`
- `.object-fit-{BREAKPOINT}-fill`
- `.object-fit-{BREAKPOINT}-scale`
- `.object-fit-{BREAKPOINT}-none`

#### Opacity [^5]

- `.opacity-none`
- `.opacity-min`
- `.opacity-extra-low`
- `.opacity-low`
- `.opacity-medium`
- `.opacity-high`
- `.opacity-extra-high`
- `.opacity-max`
- `.opacity-{BREAKPOINT}-none`
- `.opacity-{BREAKPOINT}-min`
- `.opacity-{BREAKPOINT}-extra-low`
- `.opacity-{BREAKPOINT}-low`
- `.opacity-{BREAKPOINT}-medium`
- `.opacity-{BREAKPOINT}-high`
- `.opacity-{BREAKPOINT}-extra-high`
- `.opacity-{BREAKPOINT}-max`

#### Overflow [^5]

- `.overflow-auto`
- `.overflow-hidden`
- `.overflow-visible`
- `.overflow-scroll`
- `.overflow-{BREAKPOINT}-auto`
- `.overflow-{BREAKPOINT}-hidden`
- `.overflow-{BREAKPOINT}-visible`
- `.overflow-{BREAKPOINT}-scroll`

#### Overflow x [^5]

- `.overflow-x-auto`
- `.overflow-x-hidden`
- `.overflow-x-visible`
- `.overflow-x-scroll`
- `.overflow-x-{BREAKPOINT}-auto`
- `.overflow-x-{BREAKPOINT}-hidden`
- `.overflow-x-{BREAKPOINT}-visible`
- `.overflow-x-{BREAKPOINT}-scroll`

#### Overflow y [^5]

- `.overflow-y-auto`
- `.overflow-y-hidden`
- `.overflow-y-visible`
- `.overflow-y-scroll`
- `.overflow-y-{BREAKPOINT}-auto`
- `.overflow-y-{BREAKPOINT}-hidden`
- `.overflow-y-{BREAKPOINT}-visible`
- `.overflow-y-{BREAKPOINT}-scroll`

#### Position [^5]

- `.position-static`
- `.position-relative`
- `.position-absolute`
- `.position-fixed`
- `.position-fixed-top`
- `.position-fixed-bottom`
- `.position-sticky`
- `.position-sticky-top`
- `.position-sticky-bottom`
- `.position-{BREAKPOINT}-static`
- `.position-{BREAKPOINT}-relative`
- `.position-{BREAKPOINT}-absolute`
- `.position-{BREAKPOINT}-fixed`
- `.position-{BREAKPOINT}-fixed-top`
- `.position-{BREAKPOINT}-fixed-bottom`
- `.position-{BREAKPOINT}-sticky`
- `.position-{BREAKPOINT}-sticky-top`
- `.position-{BREAKPOINT}-sticky-bottom`

#### Top [^5]

- `.top-0`
- `.top-25`
- `.top-50`
- `.top-75`
- `.top-100`
- `.top-{BREAKPOINT}-0`
- `.top-{BREAKPOINT}-25`
- `.top-{BREAKPOINT}-50`
- `.top-{BREAKPOINT}-75`
- `.top-{BREAKPOINT}-100`

#### Bottom [^5]

- `.bottom-0`
- `.bottom-25`
- `.bottom-50`
- `.bottom-75`
- `.bottom-100`
- `.bottom-{BREAKPOINT}-0`
- `.bottom-{BREAKPOINT}-25`
- `.bottom-{BREAKPOINT}-50`
- `.bottom-{BREAKPOINT}-75`
- `.bottom-{BREAKPOINT}-100`

#### Left [^5]

- `.left-0`
- `.left-25`
- `.left-50`
- `.left-75`
- `.left-100`
- `.left-{BREAKPOINT}-0`
- `.left-{BREAKPOINT}-25`
- `.left-{BREAKPOINT}-50`
- `.left-{BREAKPOINT}-75`
- `.left-{BREAKPOINT}-100`

#### Right [^5]

- `.right-0`
- `.right-25`
- `.right-50`
- `.right-75`
- `.right-100`
- `.right-{BREAKPOINT}-0`
- `.right-{BREAKPOINT}-25`
- `.right-{BREAKPOINT}-50`
- `.right-{BREAKPOINT}-75`
- `.right-{BREAKPOINT}-100`

#### Translate [^5]

- `.translate-middle`
- `.translate-middle-x`
- `.translate-middle-y`
- `.translate-{BREAKPOINT}-middle`
- `.translate-{BREAKPOINT}-middle-x`
- `.translate-{BREAKPOINT}-middle-y`

#### Shadow [^5]

- `.shadow-level-0`
- `.shadow-level-1`
- `.shadow-level-2`
- `.shadow-level-3`
- `.shadow-level-4`
- `.shadow-level-5`
- `.shadow-{BREAKPOINT}-level-0`
- `.shadow-{BREAKPOINT}-level-1`
- `.shadow-{BREAKPOINT}-level-2`
- `.shadow-{BREAKPOINT}-level-3`
- `.shadow-{BREAKPOINT}-level-4`
- `.shadow-{BREAKPOINT}-level-5`

#### Width [^5]

- `.w-0`
- `.w-25`
- `.w-50`
- `.w-75`
- `.w-100`
- `.w-auto`
- `.w-100vw`
- `.w-{BREAKPOINT}-0`
- `.w-{BREAKPOINT}-25`
- `.w-{BREAKPOINT}-50`
- `.w-{BREAKPOINT}-75`
- `.w-{BREAKPOINT}-100`
- `.w-{BREAKPOINT}-auto`
- `.w-{BREAKPOINT}-100vw`

#### Min width [^5]

- `.min-w-0`
- `.min-w-25`
- `.min-w-50`
- `.min-w-75`
- `.min-w-100`
- `.min-w-100vw`
- `.min-w-{BREAKPOINT}-0`
- `.min-w-{BREAKPOINT}-25`
- `.min-w-{BREAKPOINT}-50`
- `.min-w-{BREAKPOINT}-75`
- `.min-w-{BREAKPOINT}-100`
- `.min-w-{BREAKPOINT}-100vw`

#### Max width [^5]

- `.max-w-0`
- `.max-w-25`
- `.max-w-50`
- `.max-w-75`
- `.max-w-100`
- `.max-w-100vw`
- `.max-w-{BREAKPOINT}-0`
- `.max-w-{BREAKPOINT}-25`
- `.max-w-{BREAKPOINT}-50`
- `.max-w-{BREAKPOINT}-75`
- `.max-w-{BREAKPOINT}-100`
- `.max-w-{BREAKPOINT}-100vw`

#### Height [^5]

- `.h-0`
- `.h-25`
- `.h-50`
- `.h-75`
- `.h-100`
- `.h-auto`
- `.h-100vh`
- `.h-{BREAKPOINT}-0`
- `.h-{BREAKPOINT}-25`
- `.h-{BREAKPOINT}-50`
- `.h-{BREAKPOINT}-75`
- `.h-{BREAKPOINT}-100`
- `.h-{BREAKPOINT}-auto`
- `.h-{BREAKPOINT}-100vh`

#### Min height [^5]

- `.min-h-0`
- `.min-h-25`
- `.min-h-50`
- `.min-h-75`
- `.min-h-100`
- `.min-h-100vh`
- `.min-h-{BREAKPOINT}-0`
- `.min-h-{BREAKPOINT}-25`
- `.min-h-{BREAKPOINT}-50`
- `.min-h-{BREAKPOINT}-75`
- `.min-h-{BREAKPOINT}-100`
- `.min-h-{BREAKPOINT}-100vh`

#### Max height [^5]

- `.max-h-0`
- `.max-h-25`
- `.max-h-50`
- `.max-h-75`
- `.max-h-100`
- `.max-h-100vh`
- `.max-h-{BREAKPOINT}-0`
- `.max-h-{BREAKPOINT}-25`
- `.max-h-{BREAKPOINT}-50`
- `.max-h-{BREAKPOINT}-75`
- `.max-h-{BREAKPOINT}-100`
- `.max-h-{BREAKPOINT}-100vh`

#### Gap [^5] [^7]

- `.gap-{NUMBER}`
- `.row-gap-{NUMBER}`
- `.col-gap-{NUMBER}`
- `.gap-{BREAKPOINT}-{NUMBER}`
- `.row-gap-{BREAKPOINT}-{NUMBER}`
- `.col-gap-{BREAKPOINT}-{NUMBER}`

#### Padding [^5] [^7]

- `.p-{NUMBER}`
- `.px-{NUMBER}`
- `.py-{NUMBER}`
- `.pt-{NUMBER}`
- `.pb-{NUMBER}`
- `.pl-{NUMBER}`
- `.pr-{NUMBER}`
- `.p-{BREAKPOINT}-{NUMBER}`
- `.px-{BREAKPOINT}-{NUMBER}`
- `.py-{BREAKPOINT}-{NUMBER}`
- `.pt-{BREAKPOINT}-{NUMBER}`
- `.pb-{BREAKPOINT}-{NUMBER}`
- `.pl-{BREAKPOINT}-{NUMBER}`
- `.pr-{BREAKPOINT}-{NUMBER}`

#### Margin [^5] [^7]

- `.m-{NUMBER}`
- `.mx-{NUMBER}`
- `.my-{NUMBER}`
- `.mt-{NUMBER}`
- `.mb-{NUMBER}`
- `.ml-{NUMBER}`
- `.mr-{NUMBER}`
- `.m-{BREAKPOINT}-{NUMBER}`
- `.mx-{BREAKPOINT}-{NUMBER}`
- `.my-{BREAKPOINT}-{NUMBER}`
- `.mt-{BREAKPOINT}-{NUMBER}`
- `.mb-{BREAKPOINT}-{NUMBER}`
- `.ml-{BREAKPOINT}-{NUMBER}`
- `.mr-{BREAKPOINT}-{NUMBER}`

#### Margin auto [^5]

- `.m-auto`
- `.mx-auto`
- `.my-auto`
- `.mt-auto`
- `.mb-auto`
- `.ml-auto`
- `.mr-auto`
- `.m-{BREAKPOINT}-auto`
- `.mx-{BREAKPOINT}-auto`
- `.my-{BREAKPOINT}-auto`
- `.mt-{BREAKPOINT}-auto`
- `.mb-{BREAKPOINT}-auto`
- `.ml-{BREAKPOINT}-auto`
- `.mr-{BREAKPOINT}-auto`

#### Text align [^5]

- `.text-align-left`
- `.text-align-right`
- `.text-align-center`
- `.text-align-{BREAKPOINT}-left`
- `.text-align-{BREAKPOINT}-right`
- `.text-align-{BREAKPOINT}-center`

#### Text decoration [^5]

- `.text-decoration-none`
- `.text-decoration-underline`
- `.text-decoration-line-through`
- `.text-decoration-{BREAKPOINT}-none`
- `.text-decoration-{BREAKPOINT}-underline`
- `.text-decoration-{BREAKPOINT}-line-through`

#### Text transform [^5]

- `.text-transform-lowercase`
- `.text-transform-uppercase`
- `.text-transform-capitalize`
- `.text-transform-{BREAKPOINT}-lowercase`
- `.text-transform-{BREAKPOINT}-uppercase`
- `.text-transform-{BREAKPOINT}-capitalize`

#### Text wrap [^5]

- `.text-wrap`
- `.text-nowrap`
- `.text-break`
- `.text-truncate`
- `.text-{BREAKPOINT}-wrap`
- `.text-{BREAKPOINT}-nowrap`
- `.text-{BREAKPOINT}-break`
- `.text-{BREAKPOINT}-truncate`

#### Vertical align [^5]

- `.v-align-baseline`
- `.v-align-top`
- `.v-align-middle`
- `.v-align-bottom`
- `.v-align-text-bottom`
- `.v-align-text-top`
- `.v-align-{BREAKPOINT}-baseline`
- `.v-align-{BREAKPOINT}-top`
- `.v-align-{BREAKPOINT}-middle`
- `.v-align-{BREAKPOINT}-bottom`
- `.v-align-{BREAKPOINT}-text-bottom`
- `.v-align-{BREAKPOINT}-text-top`

#### Visibility [^5]

- `.visibility-visible`
- `.visibility-hidden`
- `.visibility-{BREAKPOINT}-visible`
- `.visibility-{BREAKPOINT}-hidden`

#### Z-index

- `.z-n1`
- `.z-zero`
- `.z-dropdown`
- `.z-sticky`
- `.z-fixed`
- `.z-offcanvas-backdrop`
- `.z-offcanvas`
- `.z-modal-backdrop`
- `.z-modal`
- `.z-popover`
- `.z-tooltip`
- `.z-toast`

[^1]: {COLOR}: base, primary, secondary, tertiary, danger, warning, success, info, neutral, inverse
[^2]: {PALETTE}: red, orange, yellow, lime, green, teal, cyan, blue, indigo, purple, magenta, rose, steel, gray, light, dark
[^3]: {STYLE}: body, heading, display, code
[^4]: {VARIANT}: small, main, h4, h3, h2, h1
[^5]: {BREAKPOINT}: xs, sm, md, lg, xl, xxl
[^6]: {COLUMNS}: 1-12
[^7]: {NUMBER}: 0-6
