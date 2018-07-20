export default {
  'basic': {
    'color': {
      'color-primary': '#fc9153',
      'color-primary-tap': '#3ca0e6',
      'color-primary-background': '#f3f4f5',
      'color-text-base': '#333',
      'color-text-base-inverse': '#fff',
      'color-text-minor': '#666',
      'color-text-caption': '#999',
      'color-text-disabled': '#ccc',
      'color-text-placeholder': '#ccc',
      'color-text-highlight': '#fc9153',
      'color-text-link': '#3ca0e6',
      'color-border-base': '#d9d9d9',
      'color-border-minor': '#ebebeb',
      'color-border-element': '#999',
      'color-bg-base': '#fff',
      'color-bg-disabled': '#ccc',
      'color-bg-mask': 'rgba(0, 0, 0, .4)',
      'color-bg-tap': 'rgba(0, 0, 0, .08)',
      'color-bg-tap-highlight': 'rgba(252, 145, 83, .08)'
    },
    'font': {
      'font-heading-large': '42px',
      'font-heading-medium': '36px',
      'font-heading-normal': '32px',
      'font-body-large': '30px',
      'font-body-normal': '28px',
      'font-minor-large': '24px',
      'font-minor-normal': '20px',
      'font-weight-normal': 400,
      'font-weight-medium': 500,
      'font-weight-bold': 600
    },
    'other': {
      'radius-normal': '4px',
      'radius-circle': '50%',
      'border-width-base': '2px',
      'h-gap-sm': '12px',
      'h-gap-md': '20px',
      'h-gap-lg': '32px',
      'v-gap-sm': '12px',
      'v-gap-md': '20px',
      'v-gap-lg': '32px',
      'shadow-bottom': '0 2px 4px rgba(0, 0, 0, .12)',
      'shadow-top': '0 -2px 4px rgba(0, 0, 0, .12)',
      'opacity-disabled': 0.4
    }
  },
  'components': {
    'action-bar': {
      'action-bar-width': '100%',
      'action-bar-height': '100px',
      'action-bar-button-font-size': '32px',
      'action-bar-button-font-weight': 'font-weight-medium',
      'action-bar-button-color': 'color-text-base',
      'action-bar-button-color-highlight': 'color-text-base-inverse',
      'action-bar-button-fill': 'color-bg-base',
      'action-bar-button-fill-highlight': 'color-primary',
      'action-bar-button-disabled-opacity': 'opacity-disabled',
      'action-bar-button-disabled-bg': 'color-bg-disabled',
      'action-bar-button-disabled-color': 'color-text-base-inverse',
      'action-bar-button-tap-bg': 'color-bg-tap',
      'action-bar-text-color': 'color-primary',
      'action-bar-text-font-size': '36px',
      'action-bar-text-left': 'h-gap-lg',
      'action-bar-zindex': 100
    },
    'action-sheet': {
      'action-sheet-height': '120px',
      'action-sheet-color': 'color-text-base',
      'action-sheet-color-highlight': 'color-primary',
      'action-sheet-color-cancel': 'color-text-base',
      'action-sheet-font-size': '30px',
      'action-sheet-bg': 'color-bg-base',
      'action-sheet-disabled-opacity': 'opacity-disabled',
      'action-sheet-cancel-gap-bg': 'color-primary-background',
      'action-sheet-zindex': 1101
    },
    'agree': {
      'agree-fill': 'color-primary',
      'agree-fill-inverse': 'color-bg-disabled',
      'agree-disabled-opacity': 'opacity-disabled'
    },
    'button': {
      'button-primary-fill': 'color-primary',
      'button-primary-fill-disabled': 'color-bg-disabled',
      'button-primary-fill-tap': 'color-bg-tap',
      'button-primary-width': '100%',
      'button-primary-height': '100px',
      'button-primary-font-size': '32px',
      'button-primary-font-weight': 'font-weight-medium',
      'button-primary-radius': 'radius-normal',
      // 'button-ghost-fill': '#fff',
      'button-ghost-fill-tap': 'color-bg-tap',
      'button-ghost-primary-fill-tap': 'color-bg-tap-highlight',
      'button-ghost-width': '160px',
      'button-ghost-height': '60px',
      'button-ghost-width-sm': '130px',
      'button-ghost-height-sm': '50px',
      'button-ghost-font-size': '24px',
      'button-ghost-color': 'color-border-element',
      'button-ghost-primary-color': 'color-primary',
      'button-ghost-radius': '8px',
      'button-link-fill': 'color-bg-base',
      'button-link-fill-tap': 'color-bg-tap',
      'button-link-width': '100%',
      'button-link-height': '100px',
      'button-link-color': 'color-primary-tap',
      'button-link-border': 'color-border-base',
      'button-icon-gap': 'h-gap-sm',
      'button-disabled-opacity': 'opacity-disabled'
    },
    'captcha': {
      'captcha-title-color': 'color-text-base',
      'captcha-title-font-size': 'font-heading-normal',
      'captcha-error-color': '#FF525D',
      'captcha-countbtn-gap': 'h-gap-lg',
      'captcha-zindex': 1400
    },
    'cashier': {
      'cashier-bg': 'color-bg-base',
      'cashier-choose-title-font-size': 'font-body-normal',
      'cashier-choose-title-color': 'color-text-minor',
      'cashier-choose-amount-font-size': '72px',
      'cashier-choose-amount-color': 'color-text-base',
      'cashier-choose-describe-font-size': 'font-minor-normal',
      'cashier-choose-describe-color': 'color-text-minor',
      'cashier-choose-channel-font-size': 'font-minor-large',
      'cashier-choose-channel-color': 'color-text-minor',
      'cashier-choose-channel-icon-color': 'color-primary',
      'cashier-choose-more-font-size': 'font-minor-large',
      'cashier-choose-more-color': 'color-text-minor'
    },
    'chart': {
      'chart-line-color': '#ccc',
      'chart-path-color': 'color-primary',
      'chart-text-color': 'color-text-minor',
      'chart-label-size': '22px',
      'chart-value-size': '20px'
    },
    'check-box': {
      'checkbox-color': 'color-text-base',
      'checkbox-font-size': '32px',
      'checkbox-space': '8px',
      'checkbox-container-space': '-8px',
      'checkbox-disabled-opacity': 'opacity-disabled',
      'checkbox-tap-color': '#3ca0e6',
      'checkbox-bg-tap-color': 'rgba(#3ca0e6, 0.05)',
      'checkbox-border-color': 'color-border-minor',
      'checkbox-border-radius': '3px'
    },
    'check-list': {
      'checklist-tap-color': 'color-primary-tap'
    },
    'codebox': {
      'codebox-font-size': 'font-body-normal',
      'codebox-width': '80px',
      'codebox-gutter': '8px',
      'codebox-border-color': 'color-border-base',
      'codebox-border-active-color': 'color-primary',
      'codebox-blink-color': 'color-primary',
      'codebox-input-radius': 'radius-normal',
      'codebox-dot-color': '#000',
      'codebox-input-height': '68px',
      'codebox-input-padding': '16px 32px',
      'codebox-input-font-size': '28px',
      'codebox-input-border-color': 'color-border-base'
    },
    'date-picker': {
      'date-picker-font-size': 'font-body-normal',
      'date-time-picker-font-size': 'font-minor-large'
    },
    'dialog': {
      'dialog-width': '534px',
      'dialog-radius': '0',
      'dialog-title-font-size': 'font-heading-normal',
      'dialog-title-color': 'color-text-base',
      'dialog-text-font-size': 'font-body-normal',
      'dialog-text-color': 'color-text-minor',
      'dialog-action-height': '100px',
      'dialog-action-font-size': 'font-heading-normal',
      'dialog-action-border-color': 'color-border-base',
      'dialog-close-color': 'color-text-caption',
      'dialog-action-highlight-color': 'color-primary',
      'dialog-icon-size': '100px',
      'dialog-icon-fill': 'color-text-caption',
      'dialog-zindex': 1402
    },
    'drop-menu': {
      'drop-menu-height': '82px',
      'drop-menu-bar-bg': 'color-bg-base',
      'drop-menu-bar-border-color': 'color-border-base',
      'drop-menu-disabled-opacity': 'opacity-disabled',
      'drop-menu-color': 'color-text-link',
      'drop-menu-font-size': 'font-body-normal',
      'drop-menu-list-bg': 'color-bg-base',
      'drop-menu-zindex': '1200'
    },
    'field': {
      'field-padding-h': '32px',
      'field-padding-v': '29px',
      'field-title-font-size': 'font-body-normal',
      'field-title-font-weight': 'font-weight-medium',
      'field-title-color': 'color-text-base',
      'field-title-margin': '26px',
      'field-item-padding-v': '22px',
      'field-item-bg-color': 'color-bg-base',
      'field-item-bg-tap-color': 'color-bg-tap',
      'field-item-color': 'color-text-base',
      'field-item-font-size': 'font-body-normal',
      'field-item-icon-color': '#ccc',
      'field-item-border-color': 'color-border-minor',
      'field-item-color-disabled': 'opacity-disabled',
      'field-item-brief-font-size': 'font-minor-large',
      'field-item-brief-color': 'color-text-caption'
    },
    'icon': {
      'icon-size-xs': '20px',
      'icon-size-sm': '24px',
      'icon-size-md': '32px',
      'icon-size-lg': '42px'
    },
    'image-viewer': {
      'image-viewer-index-font-size': '32px',
      'image-viewer-index-bottom': '100px',
      'image-viewer-zindex': 1001
    },
    'input-item': {
      'input-item-height': '100px',
      'input-item-title-width': '170px',
      'input-item-title-gap': '22px',
      'input-item-font-size': '28px',
      'input-item-title-latent-font-size': '26px',
      'input-item-font-size-large': '42px',
      'input-item-font-size-error': '22px',
      'input-item-font-weight': 'font-weight-normal',
      'input-item-color': 'color-text-base',
      'input-item-title-latent-color': 'color-text-minor',
      'input-item-color-disabled': 'opacity-disabled',
      'input-item-color-error': '#ff525d',
      'input-item-placeholder': 'color-text-placeholder',
      'input-item-placeholder-highlight': 'color-primary',
      'input-item-icon': 'color-text-placeholder'
    },
    'notice-bar': {
      'notice-bar-fill': '#4A4C5B',
      'notice-bar-color': 'color-text-base-inverse',
      'notice-bar-font-size': 'font-minor-large',
      'notice-bar-zindex': 1300
    },
    'number-keyboard': {
      'number-keyboard-width': '100%',
      'number-keyboard-height': '428px',
      'number-keyboard-bg': '#ebebeb',
      'number-keyboard-key-height': '107px',
      'number-keyboard-key-bg': 'color-bg-base',
      'number-keyboard-key-bg-tap': '#f0f0f0',
      'number-keyboard-key-confirm-bg': 'color-primary',
      'number-keyboard-key-confirm-bg-tap': '#dd7f49',
      'number-keyboard-key-font-size': '48px',
      'number-keyboard-key-color': 'color-text-minor',
      'number-keyboard-key-color-simple': '#000',
      'number-keyboard-key-confirm-color': 'color-text-base-inverse',
      'number-keyboard-key-bordr-color': 'color-border-base',
      'number-keyboard-zindex': 1403
    },
    'picker': {
      'picker-font-size': '30px',
      'picker-disabled-opacity': 0.2,
      'picker-color': 'color-text-base',
      'picker-border-color': 'color-border-base',
      'picker-zindex': 1100
    },
    'popup': {
      'popup-title-bar-bg': 'color-bg-base',
      'popup-title-bar-border-color': 'color-border-base',
      'popup-title-bar-height': '110px',
      'popup-title-bar-font-size-button': '28px',
      'popup-title-bar-font-size-title': '36px',
      'popup-title-bar-color-title': 'color-text-base',
      'popup-title-bar-color-button-left': 'color-text-minor',
      'popup-title-bar-color-button-right': 'color-text-highlight',
      'popup-mask-bg': 'rgba(0, 0, 0, .4)',
      'popup-zindex': '1000'
    },
    'radio': {
      'radio-color': 'color-primary-tap'
    },
    'selector': {
      'selector-disabled-opacity': 0.2,
      'selector-active-color': 'color-primary',
      'selector-zindex': '1102'
    },
    'stepper': {
      'stepper-fill': 'color-primary-background',
      'stepper-disabled-opacity': 'opacity-disabled',
      'stepper-color': 'color-text-base',
      'stepper-height': '50px',
      'stepper-font-size': 'font-body-large',
      'stepper-input-font-size': 'font-body-normal',
      'stepper-width-button': '50px',
      'stepper-width-input': '60px',
      'stepper-radius-button': '0',
      'stepper-radius-input': '0'
    },
    'steps': {
      'steps-color': 'color-text-disabled',
      'steps-color-active': 'color-primary',
      'steps-border': 'dotted 2px #ccc',
      'steps-border-active': 'solid 2px #ccc',
      'steps-size': '12px',
      'steps-size-active': '32px',
      'steps-text-color': 'color-text-base',
      'steps-text-font-size': 'font-minor-large'
    },
    'switch': {
      'switch-fill': 'color-primary',
      'switch-fill-inverse': 'color-bg-disabled',
      'switch-handle-color': '#fff',
      'switch-item-color-disabled': 'opacity-disabled'
    },
    'tab-bar': {
      'tab-height': '80px',
      'tab-font-size': '28px',
      'tab-text-color': 'color-text-base',
      'tab-bg': 'color-bg-base',
      'tab-border-color': 'color-border-minor',
      'tab-color': 'color-primary-tap',
      'tab-ink-bar-height': '3px',
      'tab-zindex': 101
    },
    'tag': {
      'tag-color': 'color-primary',
      'tag-fillet-radius': 'radius-normal',
      'tag-large-font-size': 'font-body-normal',
      'tag-small-font-size': 'font-minor-normal',
      'tag-tiny-font-size': '12px'
    },
    'tip': {
      'tip-fill': 'rgba(74, 76, 91, 0.8)',
      'tip-font-size': '24px',
      'tip-color': '#fff',
      'tip-radius': 'radius-normal',
      'tip-padding': '20px 50px 20px 30px',
      'tip-close-size': '16px',
      'tip-zindex': 1300
    },
    'toast': {
      'toast-fill': 'rgba(0, 0, 0, .8)',
      'toast-font-size': '28px',
      'toast-color': '#ccc',
      'toast-radius': 'radius-normal',
      'toast-text-left': '88px',
      'toast-padding': '26px',
      'toast-zindex': 1501
    }
  }
}
