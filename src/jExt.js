(function ($) {
	/**
	 * Returns all attributes of Node
	 * @returns {{}}
	 */
	$.fn.getAttributes = function () {
		var attributes = {};

		if (this.length) {
			$.each(this[0].attributes, function (index, attr) {
				attributes[attr.name] = attr.value;
			});
		}

		return attributes;
	};

	/**
	 * Clear all attributes
	 * @returns {jQuery}
	 */
	$.fn.clearAttributes = function () {

		if (this.length) {
			var attributes = Object.keys(this.getAttributes());

			for (var i = 0; i < attributes.length; i++) {
				this.removeAttr(attributes[i]);
			}
		}
		return this;
	};

	/**
	 * Set new attributes to Node
	 * @param attributes
	 * @returns {jQuery}
	 */
	$.fn.setAttributes = function (attributes) {

		var arrayAttributes = Object.keys(attributes);

		if (arrayAttributes.length) {
			for (var i = 0; i < arrayAttributes.length; i++) {
				this.attr(arrayAttributes[i], attributes[arrayAttributes[i]]);
			}
		}
		return this;
	};
})(jQuery);