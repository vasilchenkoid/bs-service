/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
	rules: {
		"no-unknown-custom-properties": true,
		"custom-property-empty-line-before": null,
		"at-rule-empty-line-before": null,
		"rule-empty-line-before": null,
		"color-hex-length": null,
		"no-duplicate-selectors": null,
		"font-family-name-quotes": null,
		"function-url-quotes": null,
		"number-max-precision": null,
		"value-keyword-case": null,
		"selector-attribute-quotes": null,
		"no-descending-specificity": null,
		"declaration-block-no-duplicate-properties": null,
	}
};
